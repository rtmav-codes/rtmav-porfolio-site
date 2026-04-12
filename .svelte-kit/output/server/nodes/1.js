

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.wrec-PId.js","_app/immutable/chunks/BQRd7S7z.js","_app/immutable/chunks/C8iQ9IWt.js","_app/immutable/chunks/WnHI7sWz.js","_app/immutable/chunks/BQwqyRFK.js"];
export const stylesheets = [];
export const fonts = [];
