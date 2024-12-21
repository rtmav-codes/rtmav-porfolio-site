import { a8 as current_component, Q as push, Y as attr, _ as stringify, Z as bind_props, S as pop, a4 as rest_props, a5 as spread_attributes, a6 as slot, a7 as sanitize_props, a3 as fallback, a9 as store_get, T as escape_html, aa as unsubscribe_stores, ab as sanitize_slots, ac as spread_props } from "./index.js";
import { w as writable } from "./index2.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function Hamburger($$payload, $$props) {
  push();
  let {
    open = false,
    type = "spin",
    title = "Hamburger menu",
    ariaControls,
    ariaLabel = title,
    onclick
  } = $$props;
  $$payload.out += `<button${attr("title", title)}${attr("aria-label", ariaLabel)}${attr("aria-controls", ariaControls)}${attr("aria-expanded", open)}${attr("class", `hamburger hamburger--${stringify(type)} svelte-jas1sv ${stringify([open ? "is-active" : ""].filter(Boolean).join(" "))}`)}><span class="hamburger-box svelte-jas1sv"><span class="hamburger-inner svelte-jas1sv"></span></span></button>`;
  bind_props($$props, { open });
  pop();
}
function LightboxThumbnail($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$payload.out += `<div${spread_attributes({ "aria-label": "thumbnail", ...$$restProps }, {
    "svelte-hpqpx9": true,
    "svelte-lightbox-thumbnail": true
  })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
function BodyChild($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  push();
  let child;
  const removeTarget = () => {
    if (typeof document !== "undefined") {
      document.body.removeChild(child);
    }
  };
  onDestroy(removeTarget);
  $$payload.out += `<div${spread_attributes({ ...$$restProps })}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  pop();
}
function LightboxHeader($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "closeButtonProps",
    "showCloseButton",
    "enableEscapeToClose",
    "imagePreset"
  ]);
  push();
  let closeButtonProps = fallback($$props["closeButtonProps"], () => ({}), true);
  let showCloseButton = $$props["showCloseButton"];
  let enableEscapeToClose = $$props["enableEscapeToClose"];
  let imagePreset = $$props["imagePreset"];
  $$payload.out += `<div${spread_attributes(
    {
      class: "svelte-lightbox-header",
      ...$$restProps
    },
    {
      "svelte-5qj430": true,
      fullscreen: imagePreset === "fullscreen"
    }
  )}>`;
  if (showCloseButton) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button${spread_attributes({ ...closeButtonProps }, {
      "svelte-5qj430": true,
      fullscreen: imagePreset === "fullscreen"
    })}>×</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, {
    closeButtonProps,
    showCloseButton,
    enableEscapeToClose,
    imagePreset
  });
  pop();
}
function LightboxBody($$payload, $$props) {
  let imagePreset = $$props["imagePreset"];
  let enableImageExpand = $$props["enableImageExpand"];
  $$payload.out += `<div${attr("class", `svelte-lightbox-body svelte-fqwdsi ${stringify([
    imagePreset === "fullscreen" ? "fullscreen" : "",
    imagePreset === "scroll" ? "scroll" : "",
    enableImageExpand ? "expand" : ""
  ].filter(Boolean).join(" "))}`)}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { imagePreset, enableImageExpand });
}
const i18n = writable({
  generateLocalizedGalleryCounter: (activeImage, imageCount) => {
    return `Image ${activeImage + 1} of ${imageCount}`;
  }
});
function LightboxFooter($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "imagePreset",
    "title",
    "description",
    "gallery"
  ]);
  var $$store_subs;
  let localizedGalleryCounter;
  let imagePreset = $$props["imagePreset"];
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let gallery = fallback($$props["gallery"], null);
  const generateLocalizedGalleryCounter = (i18n2, gallery2) => {
    if (gallery2 !== null) {
      return i18n2.generateLocalizedGalleryCounter(gallery2.activeImage, gallery2.imageCount);
    }
  };
  localizedGalleryCounter = generateLocalizedGalleryCounter(store_get($$store_subs ??= {}, "$i18n", i18n), gallery);
  $$payload.out += `<div${spread_attributes(
    {
      class: "svelte-lightbox-footer",
      ...$$restProps
    },
    {
      "svelte-6fc1ka": true,
      fullscreen: imagePreset === "fullscreen"
    }
  )}><h2>${escape_html(title)}</h2> <h5>${escape_html(description)}</h5> `;
  if (gallery !== null) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p>${escape_html(localizedGalleryCounter)}</p>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { imagePreset, title, description, gallery });
}
function ModalCover($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["transitionDuration"]);
  let transitionDuration = $$props["transitionDuration"];
  $$payload.out += `<div${spread_attributes(
    {
      class: "svelte-lightbox-overlay",
      "aria-label": "overlay",
      ...$$restProps
    },
    { "svelte-7wg54p": true }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { transitionDuration });
}
function Modal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["transitionDuration", "imagePreset"]);
  let transitionDuration = $$props["transitionDuration"];
  let imagePreset = $$props["imagePreset"];
  $$payload.out += `<div${spread_attributes(
    {
      class: "svelte-lightbox-main",
      "aria-label": "Modal",
      ...$$restProps
    },
    {
      "svelte-891jqp": true,
      fullscreen: imagePreset === "fullscreen",
      scroll: imagePreset === "scroll"
    }
  )}><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  bind_props($$props, { transitionDuration, imagePreset });
}
function Lightbox($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  push();
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let imagePreset = fallback($$props["imagePreset"], "");
  let customization = fallback($$props["customization"], () => ({}), true);
  let transitionDuration = fallback($$props["transitionDuration"], 300);
  let keepBodyScroll = fallback($$props["keepBodyScroll"], false);
  let enableImageExpand = fallback($$props["enableImageExpand"], false);
  let enableFallbackThumbnail = fallback($$props["enableFallbackThumbnail"], true);
  let enableEscapeToClose = fallback($$props["enableEscapeToClose"], true);
  let enableClickToClose = fallback($$props["enableClickToClose"], false);
  let showCloseButton = fallback($$props["showCloseButton"], true);
  let isVisible = fallback($$props["isVisible"], false);
  const toggle = () => {
    isVisible = !isVisible;
  };
  const open = () => {
    isVisible = true;
  };
  const close = () => {
    isVisible = false;
  };
  const programmaticController = { toggle, open, close };
  if ($$slots.thumbnail || enableFallbackThumbnail) {
    $$payload.out += "<!--[-->";
    LightboxThumbnail($$payload, spread_props([
      customization?.thumbnailProps || {},
      {
        children: ($$payload2) => {
          if ($$slots.thumbnail) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `<!---->`;
            slot($$payload2, $$props, "thumbnail", {});
            $$payload2.out += `<!---->`;
          } else {
            $$payload2.out += "<!--[!-->";
            $$payload2.out += `<!---->`;
            slot($$payload2, $$props, "default", {});
            $$payload2.out += `<!---->`;
          }
          $$payload2.out += `<!--]-->`;
        },
        $$slots: { default: true }
      }
    ]));
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (isVisible) {
    $$payload.out += "<!--[-->";
    BodyChild($$payload, {
      children: ($$payload2) => {
        ModalCover($$payload2, spread_props([
          { transitionDuration },
          customization.coverProps || {},
          {
            children: ($$payload3) => {
              Modal($$payload3, spread_props([
                { imagePreset, transitionDuration },
                customization.lightboxProps || {},
                {
                  children: ($$payload4) => {
                    LightboxHeader($$payload4, spread_props([
                      {
                        imagePreset,
                        showCloseButton,
                        enableEscapeToClose,
                        closeButtonProps: customization.closeButtonProps
                      },
                      customization.lightboxHeaderProps || {}
                    ]));
                    $$payload4.out += `<!----> `;
                    LightboxBody($$payload4, {
                      imagePreset,
                      enableImageExpand,
                      children: ($$payload5) => {
                        $$payload5.out += `<!---->`;
                        slot($$payload5, $$props, "default", {});
                        $$payload5.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload4.out += `<!----> `;
                    LightboxFooter($$payload4, spread_props([
                      { imagePreset, title, description },
                      customization.lightboxFooterProps || {}
                    ]));
                    $$payload4.out += `<!---->`;
                  },
                  $$slots: { default: true }
                }
              ]));
            },
            $$slots: { default: true }
          }
        ]));
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    title,
    description,
    imagePreset,
    customization,
    transitionDuration,
    keepBodyScroll,
    enableImageExpand,
    enableFallbackThumbnail,
    enableEscapeToClose,
    enableClickToClose,
    showCloseButton,
    isVisible,
    programmaticController
  });
  pop();
}
export {
  Hamburger as H,
  Lightbox as L
};
