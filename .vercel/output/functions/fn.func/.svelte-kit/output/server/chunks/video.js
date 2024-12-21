import { a3 as fallback, Y as attr, Z as bind_props, _ as stringify } from "./index.js";
function Video($$payload, $$props) {
  let showCover;
  let cover = fallback($$props["cover"], "");
  let video = fallback($$props["video"], "");
  let playing = fallback($$props["playing"], false);
  showCover = cover && !playing;
  $$payload.out += `<div class="player h-100 border-radius svelte-10rkdp6"${attr("style", `background-image: url(${stringify(showCover ? cover : "")});`)} role="button" tabindex="0"><video${attr("class", `video border-radius svelte-10rkdp6 ${stringify([showCover ? "opacity-0" : ""].filter(Boolean).join(" "))}`)} playsInline controls><track kind="captions"> <source${attr("src", video)} type="video/mp4"></video> `;
  if (showCover) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="play background-dark p-1 border-round svelte-10rkdp6"><svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"></path></svg></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { cover, video, playing });
}
export {
  Video as V
};
