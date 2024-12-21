import { installPolyfills } from '@sveltejs/kit/node/polyfills';
import { getRequest, setResponse, createReadableStream } from '@sveltejs/kit/node';
import { Server } from '../output/server/index.js';
import { manifest } from './manifest.js';
import process from 'node:process';

// Install polyfills with error handling
try {
	installPolyfills();
} catch (error) {
	console.error('Failed to install polyfills:', error);
	throw error;
}

const server = new Server(manifest);

// Initialize server with error handling
try {
	await server.init({
		env: /** @type {Record<string, string>} */ (process.env),
		read: createReadableStream
	});
} catch (error) {
	console.error('Failed to initialize server:', error);
	throw error;
}

const DATA_SUFFIX = '/__data.json';

/**
 * @param {import('http').IncomingMessage} req
 * @param {import('http').ServerResponse} res
 */
export default async (req, res) => {
	try {
		// URL parsing with error handling
		if (req.url) {
			try {
				const [path, search] = req.url.split('?');
				const params = new URLSearchParams(search);
				let pathname = params.get('__pathname');

				if (pathname) {
					params.delete('__pathname');
					pathname = pathname.replace(/\/+/g, '/');
					req.url = `${pathname}${path.endsWith(DATA_SUFFIX) ? DATA_SUFFIX : ''}?${params}`;
				}
			} catch (error) {
				console.error('URL parsing error:', error, { url: req.url });
				throw error;
			}
		}

		// Request handling with error handling
		try {
			const request = await getRequest({ 
				base: `https://${req.headers.host}`, 
				request: req 
			});

			const response = await server.respond(request, {
				getClientAddress() {
					return /** @type {string} */ (request.headers.get('x-forwarded-for'));
				}
			});

			setResponse(res, response);
		} catch (error) {
			console.error('Request/response handling error:', error);
			throw error;
		}

	} catch (error) {
		// Final error handler
		console.error('Serverless function error:', error);
		
		// Ensure headers haven't been sent before attempting to send error response
		if (!res.headersSent) {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({
				error: 'Internal Server Error',
				message: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred processing your request'
			}));
		}
	}
};
