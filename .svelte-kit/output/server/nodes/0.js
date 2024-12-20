

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.93d202d8.js","_app/immutable/chunks/index.7adba16d.js","_app/immutable/chunks/general.687d04c3.js"];
export const stylesheets = ["_app/immutable/assets/0.0c8ad65a.css"];
export const fonts = [];
