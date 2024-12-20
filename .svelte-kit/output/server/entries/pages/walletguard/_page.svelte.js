import { c as create_ssr_component, d as each, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { H as Hamburger, L as Lightbox } from "../../../chunks/GalleryThumbnail.svelte_svelte_type_style_lang.js";
import { V as Video } from "../../../chunks/video.js";
const Menu_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "html{background:#1d1d2f}div.svelte-4mvjkl{text-align:center;letter-spacing:0.15em;padding:1em;padding-top:0;color:#eef}p.svelte-4mvjkl{font-weight:bold;font-size:1.5em;cursor:pointer;width:max-content;margin:1rem auto}p.svelte-4mvjkl:hover{text-decoration:underline}",
  map: null
};
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = ["/", "surgicaltheater", "walletguard", "speak2me"];
  let { open } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css$1);
  return `${open ? `<div class="${"svelte-4mvjkl"}">${each(["Home", "Surgical Theater", "Wallet Guard", "Speak2Me"], (link, i) => {
    return `
            <a${add_attribute("href", links[i], 0)} style="${"text-decoration:none"}" class="${"svelte-4mvjkl"}"><p class="${"svelte-4mvjkl"}">${escape(link)}</p>
            </a>`;
  })}</div>

    <hr>` : ``}`;
});
const media = [
  {
    "order": 1,
    "column": 1,
    "coverImage": {
      "url": "/wallet-guard-after/wallet-guard-browser-extension-cover.png"
    },
    "video": {
      "url": "https://rtmav-portfolio-site.s3.amazonaws.com/wallet-guard-browser-extension.mp4"
    }
  },
  {
    "order": 1,
    "column": 2,
    "coverImage": {
      "url": "/wallet-guard-after/wallet-guard-security-dashboard-cover.png"
    },
    "video": {
      "url": "https://rtmav-portfolio-site.s3.amazonaws.com/wallet-guard-security-dashboard.mp4"
    }
  },
  {
    "order": 1,
    "column": 3,
    "coverImage": {
      "url": "/wallet-guard-after/wallet-guard-security-snap-cover.png"
    },
    "video": {
      "url": "https://rtmav-portfolio-site.s3.amazonaws.com/wallet-guard-security-snap.mp4"
    }
  },
  {
    "order": 2,
    "column": 1,
    "coverImage": {
      "url": "/wallet-guard-after/wallet-guard-chat-web3.png"
    },
    "video": {
      "url": "https://rtmav-portfolio-site.s3.amazonaws.com/wallet-guard-chat-web3.mp4"
    }
  }
];
const mediaBefore = [
  {
    "order": 1,
    "column": 1,
    "coverImage": {
      "url": "/wallet-guard-before/wallet-guard-extension.png"
    },
    "video": {
      url: "https://rtmav-portfolio-site.s3.amazonaws.com/wallet-guard-extension.mp4"
    }
  },
  {
    "order": 1,
    "column": 2,
    "coverImage": {
      "url": "/wallet-guard-before/wallet-guard-snap.png"
    },
    "video": {
      url: "https://rtmav-portfolio-site.s3.amazonaws.com/wallet-guard-snap.mp4"
    }
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".avatar.svelte-16dwnpp{height:10rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  let open;
  const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaBeforeCol1 = mediaBefore.filter(({ column }) => column === 1).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaBeforeCol2 = mediaBefore.filter(({ column }) => column === 2).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaBeforeCol3 = mediaBefore.filter(({ column }) => column === 3).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"display-flex flex-center align-content-center justify-content-center mt-4"}"><div style="display: contents; --color:${"white"};">${validate_component(Hamburger, "Hamburger").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>

${validate_component(Menu, "Menu").$$render(
      $$result,
      { open },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {}
    )}

<div class="${"header display-flex justify-content-center p-1"}"><div class="${"content pb-5 w-100"}"><div class="${"container"}"><div class="${"row"}"><div class="${"col-12"}"><div class="${"background-black border p-2 border-radius"}"><div class="${"flex-center"}"><img src="${"/work/wallet-guard.png"}" class="${"border-round avatar svelte-16dwnpp"}" alt="${""}"></div>
                        <div><h2 class="${"m-0 my-2 text-center"}">Webflow Landing Page for Wallet Guard</h2>
                            <h3 class="${"m-0 my-2"}">My Role:</h3>
                            <p class="${"m-0"}">Frontend Developer</p>
                            <h3 class="${"m-0 my-2"}">Project Overview:</h3>
                            <p class="${"m-0"}">I took on the responsibility of crafting a compelling landing page using Webflow for a Web3 company dedicated to enhancing the safety of the crypto space. The primary objective was to communicate the company&#39;s mission to create a more secure environment by preventing common scams like wallet drainers and honey pots.</p>
                            <h3 class="${"m-0 my-2"}">Problem Statement:</h3>
                            <p class="${"m-0"}">The crypto space is fraught with security challenges, and users often fall victim to scams that exploit vulnerabilities in their wallets. There was a crucial need for a platform to address these concerns and educate users on recognizing and avoiding common scams. The challenge was to effectively convey the severity of the issue and instill trust in the Wallet Guard&#39;s solution.</p>
                            <h3 class="${"m-0 my-2"}">Solution:</h3>
                            <p class="${"m-0"}">My focus was on creating a visually engaging and informative landing page that effectively communicated the mission and solution provided by Wallet Guard&#39;s. Key aspects of the solution include:</p>
                            <ol><li><h4>User-Centric Design:</h4>
                                    <ul><li>Designed the landing page with a user-centric approach, ensuring easy navigation and clarity in conveying the company&#39;s value proposition.</li></ul></li>
                                <li><h4>Clear Messaging:</h4>
                                    <ul><li>Highlighted the specific features and benefits of the solution, emphasizing its effectiveness in preventing wallet drainers and honey pots.</li></ul></li>
                                <li><h4>Educational Content:</h4>
                                    <ul><li>Developed informative content sections that educated users about common crypto scams, providing insights on how to recognize and avoid them.</li>
                                        <li>Incorporated visual elements and interactive components to enhance user engagement and understanding.</li></ul></li>
                                <li><h4>Trust-Building Elements:</h4>
                                    <ul><li>Integrated trust-building elements such as testimonials, case studies, or certifications to instill confidence in the Web3 company&#39;s expertise and reliability.</li>
                                        <li>Utilized a clean and professional design aesthetic to convey a sense of security and trustworthiness.</li></ul></li>
                                <li><h4>Responsive Design:</h4>
                                    <ul><li>The Webflow landing page successfully addresses the security concerns within the crypto space by presenting Wallet Guard&#39;s mission and solution in a clear and compelling manner. Users visiting the page are not only informed about the risks associated with common scams but are also empowered with knowledge on how to protect themselves. The intuitive design and informative content contribute to building trust, encouraging users to explore and engage with the Wallet Guard&#39;s services in making the crypto space a safer environment.</li></ul></li></ol>
                            <h3 class="${"m-0 my-2"}">Before:</h3>
                            
                            <div class="${"row"}"><div class="${"col-12 col-md-4"}">${each(mediaBeforeCol1, ({ video, coverImage }) => {
      return `<div class="${"mb-2"}">${video ? `${validate_component(Video, "Video").$$render(
        $$result,
        {
          cover: coverImage?.url,
          video: video?.url
        },
        {},
        {}
      )}` : `${validate_component(Lightbox, "Lightbox").$$render($$result, { enableClickToClose: true }, {}, {
        default: () => {
          return `<img${add_attribute("src", coverImage?.url, 0)} class="${"w-100 border-radius"}" alt="${""}">
                                                `;
        }
      })}`}
                                        </div>`;
    })}</div>
                                <div class="${"col-12 col-md-4"}">${each(mediaBeforeCol2, ({ video, coverImage }) => {
      return `<div class="${"mb-2"}">${video ? `${validate_component(Video, "Video").$$render(
        $$result,
        {
          cover: coverImage?.url,
          video: video?.url
        },
        {},
        {}
      )}` : `${validate_component(Lightbox, "Lightbox").$$render($$result, { enableClickToClose: true }, {}, {
        default: () => {
          return `<img${add_attribute("src", coverImage?.url, 0)} class="${"w-100 border-radius"}" alt="${""}">
                                                `;
        }
      })}`}
                                        </div>`;
    })}</div>
                                <div class="${"col-12 col-md-4"}">${each(mediaBeforeCol3, ({ video, coverImage }) => {
      return `<div class="${"mb-2"}">${video ? `${validate_component(Video, "Video").$$render(
        $$result,
        {
          cover: coverImage?.url,
          video: video?.url
        },
        {},
        {}
      )}` : `${validate_component(Lightbox, "Lightbox").$$render($$result, { enableClickToClose: true }, {}, {
        default: () => {
          return `<img${add_attribute("src", coverImage?.url, 0)} class="${"w-100 border-radius"}" alt="${""}">
                                                `;
        }
      })}`}
                                        </div>`;
    })}</div></div>


                            <h3 class="${"m-0 my-2"}">After:</h3>
                            <div class="${"row"}"><div class="${"col-12 col-md-4"}">${each(mediaCol1, ({ video, coverImage }) => {
      return `<div class="${"mb-2"}">${video ? `${validate_component(Video, "Video").$$render(
        $$result,
        {
          cover: coverImage?.url,
          video: video?.url
        },
        {},
        {}
      )}` : `${validate_component(Lightbox, "Lightbox").$$render($$result, { enableClickToClose: true }, {}, {
        default: () => {
          return `<img${add_attribute("src", coverImage?.url, 0)} class="${"w-100 border-radius"}" alt="${""}">
                                                `;
        }
      })}`}
                                        </div>`;
    })}</div>
                                <div class="${"col-12 col-md-4"}">${each(mediaCol2, ({ video, coverImage }) => {
      return `<div class="${"mb-2"}">${video ? `${validate_component(Video, "Video").$$render(
        $$result,
        {
          cover: coverImage?.url,
          video: video?.url
        },
        {},
        {}
      )}` : `${validate_component(Lightbox, "Lightbox").$$render($$result, { enableClickToClose: true }, {}, {
        default: () => {
          return `<img${add_attribute("src", coverImage?.url, 0)} class="${"w-100 border-radius"}" alt="${""}">    
                                                `;
        }
      })}`}
                                        </div>`;
    })}</div>
                                <div class="${"col-12 col-md-4"}">${each(mediaCol3, ({ video, coverImage }) => {
      return `<div class="${"mb-2"}">${video ? `${validate_component(Video, "Video").$$render(
        $$result,
        {
          cover: coverImage?.url,
          video: video?.url
        },
        {},
        {}
      )}` : `${validate_component(Lightbox, "Lightbox").$$render($$result, { enableClickToClose: true }, {}, {
        default: () => {
          return `<img${add_attribute("src", coverImage?.url, 0)} class="${"w-100 border-radius"}" alt="${""}">
                                                `;
        }
      })}`}
                                        </div>`;
    })}</div></div>
                            
                            <h3 class="${"m-0 my-2"}">Outcome:</h3>
                            <p class="${"m-0"}">The Webflow landing page successfully addresses the security concerns within the crypto space by presenting Wallet Guard&#39;s mission and solution in a clear and compelling manner. Users visiting the page are not only informed about the risks associated with common scams but are also empowered with knowledge on how to protect themselves. The intuitive design and informative content contribute to building trust, encouraging users to explore and engage with Wallet Guard&#39;s services in making the crypto space a safer environment.</p></div></div></div></div></div></div></div>

${$$result.head += `<!-- HEAD_svelte-1n5ioev_START --><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"}"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"}"><!-- HEAD_svelte-1n5ioev_END -->`, ""}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
