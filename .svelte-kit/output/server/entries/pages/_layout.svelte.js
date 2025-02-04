import { T as escape_html, S as pop, Q as push } from "../../chunks/index.js";
import { g as general } from "../../chunks/general.js";
import "../../chunks/client.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!----> <footer class="flex justify-center py-4 bg-black"><p class="text-xs">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} ${escape_html(general.name)} | Made by <a href="https://port.rtmav.site" class="link" target="_blank" rel="noreferrer">~/rtmav_labs</a></p></footer>`;
  pop();
}
export {
  _layout as default
};
