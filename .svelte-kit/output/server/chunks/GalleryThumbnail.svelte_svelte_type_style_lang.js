import { ae as ssr_context, a2 as attr, af as attr_class, a5 as bind_props, a4 as stringify, a8 as rest_props, aa as attributes, ac as slot, ad as sanitize_props, a9 as fallback, ag as store_get, e as escape_html, ah as unsubscribe_stores, ai as sanitize_slots, aj as spread_props } from "./renderer.js";
import { w as writable } from "./index.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function Hamburger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      open = false,
      type = "spin",
      title = "Hamburger menu",
      ariaControls,
      ariaLabel = title,
      onclick
    } = $$props;
    $$renderer2.push(`<button${attr("title", title)}${attr("aria-label", ariaLabel)}${attr("aria-controls", ariaControls)}${attr("aria-expanded", open)}${attr_class(`hamburger hamburger--${stringify(type)}`, "svelte-1e48d9h", { "is-active": open })}><span class="hamburger-box svelte-1e48d9h"><span class="hamburger-inner svelte-1e48d9h"></span></span></button>`);
    bind_props($$props, { open });
  });
}
function LightboxThumbnail($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$renderer.push(`<div${attributes({ "aria-label": "thumbnail", ...$$restProps }, "svelte-1p9kpoi", { "svelte-lightbox-thumbnail": true })}><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
}
function BodyChild($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, []);
  $$renderer.component(($$renderer2) => {
    let child;
    const removeTarget = () => {
      if (typeof document !== "undefined") {
        document.body.removeChild(child);
      }
    };
    onDestroy(removeTarget);
    $$renderer2.push(`<div${attributes({ ...$$restProps })}><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div>`);
  });
}
function LightboxHeader($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "closeButtonProps",
    "showCloseButton",
    "enableEscapeToClose",
    "imagePreset"
  ]);
  $$renderer.component(($$renderer2) => {
    let closeButtonProps = fallback($$props["closeButtonProps"], () => ({}), true);
    let showCloseButton = $$props["showCloseButton"];
    let enableEscapeToClose = $$props["enableEscapeToClose"];
    let imagePreset = $$props["imagePreset"];
    $$renderer2.push(`<div${attributes({ class: "svelte-lightbox-header", ...$$restProps }, "svelte-zwutnb", { fullscreen: imagePreset === "fullscreen" })}>`);
    if (showCloseButton) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button${attributes({ ...closeButtonProps }, "svelte-zwutnb", { fullscreen: imagePreset === "fullscreen" })}>×</button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, {
      closeButtonProps,
      showCloseButton,
      enableEscapeToClose,
      imagePreset
    });
  });
}
function LightboxBody($$renderer, $$props) {
  let imagePreset = $$props["imagePreset"];
  let enableImageExpand = $$props["enableImageExpand"];
  $$renderer.push(`<div${attr_class("svelte-lightbox-body svelte-3fqafk", void 0, {
    "fullscreen": imagePreset === "fullscreen",
    "scroll": imagePreset === "scroll",
    "expand": enableImageExpand
  })}><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { imagePreset, enableImageExpand });
}
const i18n = writable({
  generateLocalizedGalleryCounter: (activeImage, imageCount) => {
    return `Image ${activeImage + 1} of ${imageCount}`;
  }
});
function LightboxFooter($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["imagePreset", "title", "description", "gallery"]);
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
  $$renderer.push(`<div${attributes({ class: "svelte-lightbox-footer", ...$$restProps }, "svelte-1ryiemp", { fullscreen: imagePreset === "fullscreen" })}><h2>${escape_html(title)}</h2> <h5>${escape_html(description)}</h5> `);
  if (gallery !== null) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p>${escape_html(localizedGalleryCounter)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { imagePreset, title, description, gallery });
}
function ModalCover($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["transitionDuration"]);
  let transitionDuration = $$props["transitionDuration"];
  $$renderer.push(`<div${attributes(
    {
      class: "svelte-lightbox-overlay",
      "aria-label": "overlay",
      ...$$restProps
    },
    "svelte-obkid3"
  )}><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { transitionDuration });
}
function Modal($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["transitionDuration", "imagePreset"]);
  let transitionDuration = $$props["transitionDuration"];
  let imagePreset = $$props["imagePreset"];
  $$renderer.push(`<div${attributes(
    {
      class: "svelte-lightbox-main",
      "aria-label": "Modal",
      ...$$restProps
    },
    "svelte-p6z8vu",
    {
      fullscreen: imagePreset === "fullscreen",
      scroll: imagePreset === "scroll"
    }
  )}><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { transitionDuration, imagePreset });
}
function Lightbox($$renderer, $$props) {
  const $$slots = sanitize_slots($$props);
  $$renderer.component(($$renderer2) => {
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
      $$renderer2.push("<!--[0-->");
      LightboxThumbnail($$renderer2, spread_props([
        customization?.thumbnailProps || {},
        {
          children: ($$renderer3) => {
            if ($$slots.thumbnail) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<!--[-->`);
              slot($$renderer3, $$props, "thumbnail", {});
              $$renderer3.push(`<!--]-->`);
            } else {
              $$renderer3.push("<!--[-1-->");
              $$renderer3.push(`<!--[-->`);
              slot($$renderer3, $$props, "default", {});
              $$renderer3.push(`<!--]-->`);
            }
            $$renderer3.push(`<!--]-->`);
          },
          $$slots: { default: true }
        }
      ]));
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isVisible) {
      $$renderer2.push("<!--[0-->");
      BodyChild($$renderer2, {
        children: ($$renderer3) => {
          ModalCover($$renderer3, spread_props([
            { transitionDuration },
            customization.coverProps || {},
            {
              children: ($$renderer4) => {
                Modal($$renderer4, spread_props([
                  { imagePreset, transitionDuration },
                  customization.lightboxProps || {},
                  {
                    children: ($$renderer5) => {
                      LightboxHeader($$renderer5, spread_props([
                        {
                          imagePreset,
                          showCloseButton,
                          enableEscapeToClose,
                          closeButtonProps: customization.closeButtonProps
                        },
                        customization.lightboxHeaderProps || {}
                      ]));
                      $$renderer5.push(`<!----> `);
                      LightboxBody($$renderer5, {
                        imagePreset,
                        enableImageExpand,
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!--[-->`);
                          slot($$renderer6, $$props, "default", {});
                          $$renderer6.push(`<!--]-->`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push(`<!----> `);
                      LightboxFooter($$renderer5, spread_props([
                        { imagePreset, title, description },
                        customization.lightboxFooterProps || {}
                      ]));
                      $$renderer5.push(`<!---->`);
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
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
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
  });
}
export {
  Hamburger as H,
  Lightbox as L
};
