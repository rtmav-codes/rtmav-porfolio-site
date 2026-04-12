import { e as escape_html } from "../../chunks/renderer.js";
import { g as general } from "../../chunks/general.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    $$renderer2.push(`<div class="min-h-screen bg-black">`);
    children($$renderer2);
    $$renderer2.push(`<!----></div> <footer class="flex justify-center bg-black py-4"><p class="text-xs">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())}
		${escape_html(general.name)} | Made by <a href="https://port.rtmav.xyz" class="link" target="_blank" rel="noreferrer">~/rtmav_labs</a></p></footer>`);
  });
}
export {
  _layout as default
};
