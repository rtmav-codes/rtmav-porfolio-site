

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.5dc5cac6.js","_app/immutable/chunks/index.7adba16d.js","_app/immutable/chunks/video.5963b537.js","_app/immutable/chunks/general.687d04c3.js"];
export const stylesheets = ["_app/immutable/assets/2.9f5e2800.css","_app/immutable/assets/video.9cac0bd1.css"];
export const fonts = [];
