export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["code.png","email-white.svg","favicon.ico","github.svg","recent/s2m.jpg","resume.svg","speak2me/dashboard-1.png","speak2me/dashboard-2.png","speak2me/excercise-1.png","speak2me/excercise-2.png","speak2me/excercise-3.png","speak2me/excercise-4.png","speak2me/excercise-5.png","speak2me/excercise-6.png","speak2me/excercise-7.png","speak2me/heatmap-1.png","speak2me/progress-1.png","speak2me-featured.png","st-before/.DS_Store","st-before/st-before-1.png","st-before/st-before-2.png","st-before/st-before-3.png","st-before/st-before-4.png","st-before/st-before-5.png","surgical-featured.png","wallet-guard-after/.DS_Store","wallet-guard-after/wallet-guard-browser-extension-cover.png","wallet-guard-after/wallet-guard-chat-web3.png","wallet-guard-after/wallet-guard-security-dashboard-cover.png","wallet-guard-after/wallet-guard-security-snap-cover.png","wallet-guard-before/wallet-guard-extension.png","wallet-guard-before/wallet-guard-snap.png","work/.DS_Store","work/bts-housing.png","work/keep-calm.png","work/s2m.png","work/speak2me-logo.png","work/st-logo.png","work/wallet-guard.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.BHgBv0Fn.js","app":"_app/immutable/entry/app.BNfiyk-o.js","imports":["_app/immutable/entry/start.BHgBv0Fn.js","_app/immutable/chunks/entry.BtkghaNf.js","_app/immutable/chunks/runtime.CdVCie9p.js","_app/immutable/chunks/index.CwysQ5yn.js","_app/immutable/chunks/index-client.DIxU8nPw.js","_app/immutable/entry/app.BNfiyk-o.js","_app/immutable/chunks/runtime.CdVCie9p.js","_app/immutable/chunks/disclose-version.BbMfgiD7.js","_app/immutable/chunks/props.cJpPwr3d.js","_app/immutable/chunks/index-client.DIxU8nPw.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
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
		},
		server_assets: {}
	}
}
})();
