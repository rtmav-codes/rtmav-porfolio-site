import { c as create_ssr_component, e as escape, b as add_attribute } from "./index2.js";
const video_svelte_svelte_type_style_lang = "";
const css = {
  code: ".player.svelte-10rkdp6.svelte-10rkdp6{position:relative;background-position:center;background-size:cover;cursor:pointer;padding-bottom:50%}.player.svelte-10rkdp6 .video.svelte-10rkdp6{position:absolute;height:100%;width:100%}.player.svelte-10rkdp6 .play.svelte-10rkdp6{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}",
  map: null
};
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showCover;
  let { cover = "" } = $$props;
  let { video = "" } = $$props;
  let { playing = false } = $$props;
  let videoEl;
  if ($$props.cover === void 0 && $$bindings.cover && cover !== void 0)
    $$bindings.cover(cover);
  if ($$props.video === void 0 && $$bindings.video && video !== void 0)
    $$bindings.video(video);
  if ($$props.playing === void 0 && $$bindings.playing && playing !== void 0)
    $$bindings.playing(playing);
  $$result.css.add(css);
  showCover = cover && !playing;
  return `<div class="${"player h-100 border-radius svelte-10rkdp6"}" style="${"background-image: url(" + escape(showCover ? cover : "", true) + ");"}"><video class="${["video border-radius svelte-10rkdp6", showCover ? "opacity-0" : ""].join(" ").trim()}" playsinline controls${add_attribute("this", videoEl, 0)}><track kind="${"captions"}"><source${add_attribute("src", video, 0)} type="${"video/mp4"}"></video>

    ${showCover ? `<div class="${"play background-dark p-1 border-round svelte-10rkdp6"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon"}" viewBox="${"0 0 24 24"}"><path d="${"M3 22v-20l18 10-18 10z"}"></path></svg></div>` : ``}
</div>`;
});
export {
  Video as V
};
