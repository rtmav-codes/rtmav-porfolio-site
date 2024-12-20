

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/walletguard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a8e1e07c.js","_app/immutable/chunks/index.7adba16d.js","_app/immutable/chunks/GalleryThumbnail.svelte_svelte_type_style_lang.f328810a.js","_app/immutable/chunks/index.aadf24ca.js","_app/immutable/chunks/video.5963b537.js"];
export const stylesheets = ["_app/immutable/assets/3.cd7b0085.css","_app/immutable/assets/GalleryThumbnail.388908ea.css","_app/immutable/assets/video.9cac0bd1.css"];
export const fonts = [];
