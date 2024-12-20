export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","code.png","favicon/about.txt","favicon/favicon.png","favicon/site.webmanifest","github-logo.png","recent/s2m.jpg","speak2me/dashboard-1.png","speak2me/dashboard-2.png","speak2me/excercise-1.png","speak2me/excercise-2.png","speak2me/excercise-3.png","speak2me/excercise-4.png","speak2me/excercise-5.png","speak2me/excercise-6.png","speak2me/excercise-7.png","speak2me/heatmap-1.png","speak2me/progress-1.png","st-before/.DS_Store","st-before/st-before-1.png","st-before/st-before-2.png","st-before/st-before-3.png","st-before/st-before-4.png","st-before/st-before-5.png","wallet-guard-after/.DS_Store","wallet-guard-after/wallet-guard-browser-extension-cover.png","wallet-guard-after/wallet-guard-chat-web3.png","wallet-guard-after/wallet-guard-security-dashboard-cover.png","wallet-guard-after/wallet-guard-security-snap-cover.png","wallet-guard-before/wallet-guard-extension.png","wallet-guard-before/wallet-guard-snap.png","work/.DS_Store","work/bts-housing.png","work/keep-calm.png","work/s2m.png","work/speak2me-logo.png","work/st-logo.png","work/wallet-guard.png"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webmanifest":"application/manifest+json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.e2a7d960.js","app":"_app/immutable/entry/app.078e7b31.js","imports":["_app/immutable/entry/start.e2a7d960.js","_app/immutable/chunks/index.7adba16d.js","_app/immutable/chunks/singletons.99b6cc1c.js","_app/immutable/chunks/index.aadf24ca.js","_app/immutable/entry/app.078e7b31.js","_app/immutable/chunks/index.7adba16d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/speak2me",
				pattern: /^\/speak2me\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/surgicaltheater",
				pattern: /^\/surgicaltheater\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/walletguard",
				pattern: /^\/walletguard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
