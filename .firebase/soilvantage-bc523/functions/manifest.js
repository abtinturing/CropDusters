export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["checkpoint.riv","leaf.riv","clay.riv","sandy.riv","silt.riv","loam.riv","tinified.zip","claySoil.jpeg","loamSoil.jpeg","farm.jpg","drip.jpg","furrow.jpg","subsurface.jpg","sprinkler.jpg","siltSoil.jpeg","sandySoil.jpeg","logo.png","favicon.png"]),
	mimeTypes: {".zip":"application/zip",".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CoKaPcme.js","app":"_app/immutable/entry/app.DKxqaUu6.js","imports":["_app/immutable/entry/start.CoKaPcme.js","_app/immutable/chunks/entry.JYK0DMAi.js","_app/immutable/chunks/scheduler.BYYZLNo6.js","_app/immutable/entry/app.DKxqaUu6.js","_app/immutable/chunks/scheduler.BYYZLNo6.js","_app/immutable/chunks/index.BXiGgtQh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
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
				id: "/api/location-by-text",
				pattern: /^\/api\/location-by-text\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/location-by-text/_server.ts.js'))
			},
			{
				id: "/api/place-details",
				pattern: /^\/api\/place-details\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/place-details/_server.ts.js'))
			},
			{
				id: "/api/predict",
				pattern: /^\/api\/predict\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/predict/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
