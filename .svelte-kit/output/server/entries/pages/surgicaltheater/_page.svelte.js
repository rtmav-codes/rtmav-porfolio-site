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
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/aa0092a6ed415ffe/369fd694c69a8c0d/1cf31f6b-f4a4-41d5-8d84-65c32e906ef3.png"
    },
    "video": null
  },
  {
    "order": 1,
    "column": 2,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/e7de87c40dd4e949/eb08f82d8a363773/b065c43a-8091-46f6-a361-171ac630d360.png"
    },
    "video": null
  },
  {
    "order": 1,
    "column": 3,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/09d89b25f428bc8b/8b90772d6a16fae6/19dd0971-5edd-41d3-bc5c-b31188d08aef.png"
    },
    "video": null
  },
  {
    "order": 2,
    "column": 1,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/97726630c7ae4acd/4f5b542fc36502bd/b5895c46-d44e-4e20-839b-c3c86aa6bee0.png"
    },
    "video": null
  },
  {
    "order": 2,
    "column": 2,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/da7f0b163127b2ee/24941380bb0d73d9/7ef2a430-6b7f-480b-be2a-fecccf21ff01.png"
    },
    "video": null
  },
  {
    "order": 2,
    "column": 3,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/74d6894c2c4cd0cc/58de5f826bbd669b/b43987f8-103c-455c-ac56-575c1575fd56.png"
    },
    "video": null
  }
];
const mediaBefore = [
  {
    "order": 1,
    "column": 1,
    "coverImage": {
      "url": "/st-before/st-before-1.png"
    },
    "video": null
  },
  {
    "order": 1,
    "column": 2,
    "coverImage": {
      "url": "/st-before/st-before-2.png"
    },
    "video": null
  },
  {
    "order": 1,
    "column": 3,
    "coverImage": {
      "url": "/st-before/st-before-3.png"
    },
    "video": null
  },
  {
    "order": 2,
    "column": 1,
    "coverImage": {
      "url": "/st-before/st-before-4.png"
    },
    "video": null
  },
  {
    "order": 2,
    "column": 2,
    "coverImage": {
      "url": "/st-before/st-before-5.png"
    },
    "video": null
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

<div class="${"header display-flex justify-content-center p-1"}"><div class="${"content pb-5 w-100"}"><div class="${"container"}"><div class="${"row"}"><div class="${"col-12"}"><div class="${"background-black border p-2 border-radius"}"><div class="${"flex-center"}"><img src="${"/work/st-logo.png"}" class="${"avatar svelte-16dwnpp"}" alt="${""}"></div>
                        <div><h2 class="${"m-0 my-2 text-center"}">Surgical Theater System Redesign</h2>
                            <h3 class="${"m-0 my-2"}">My Role:</h3>
                            <p class="${"m-0"}">UX Researcher and UX/UI Designer</p>
                            <h3 class="${"m-0 my-2"}">Project Overview:</h3>
                            <p class="${"m-0"}">I collaborated with the team to design and develop cutting-edge Med Tech Dashboards and AR/VR Surgery Simulators for HOAG Hospital in Newport Beach, CA. The project aimed to create a seamless user experience for neurosurgeons, incorporating advanced technologies to enhance surgical training and planning.</p>
                            <h3 class="${"m-0 my-2"}">Problem Statement:</h3>
                            <p class="${"m-0"}">Neurosurgeons at HOAG Hospital faced challenges in accessing and interpreting complex medical data, and traditional surgical training methods often fell short in providing immersive and realistic scenarios for skill development. There was a need for a user-friendly interface that could consolidate diverse medical information and deliver an enhanced training environment through AR/VR simulations. The old Ui felt like it was built by engineers for engineers. The redesign was meant to be built by the neurosurgeons for neurosurgeons</p>
                            <h3 class="${"m-0 my-2"}">Solution:</h3>
                            <p class="${"m-0"}">The solution focused on the development of intuitive Med Tech Dashboards and AR/VR Surgery Simulators tailored to the specific needs outlined by neurosurgeons. Key components of the solution include:</p>
                            <ol><li><h4>User-Centric Design:</h4>
                                    <ul><li>Conducted user research and collaborated closely with neurosurgeons to understand their workflow and preferences.</li>
                                        <li>Designed an intuitive and user-friendly interface for the Med Tech Dashboards, ensuring easy navigation, quick access to critical medical and as an intuitive way to plan for surgery in the simulator.</li></ul></li>
                                <li><h4>Med Tech Dashboards:</h4>
                                    <ul><li>Aggregated diverse medical data sources into a unified dashboard, providing neurosurgeons with a comprehensive view of patient information, diagnostics, and surgical plans.</li>
                                        <li>Implemented personalized dashboards to cater to individual surgeon preferences.</li></ul></li>
                                <li><h4>AR/VR Surgery Simulators:</h4>
                                    <ul><li>Developed an interface for an immersive AR/VR simulations that replicate real surgical scenarios, allowing neurosurgeons to practice and refine their skills in a risk-free environment.</li>
                                        <li>Integrated realistic visuals to enhance the simulation experience and bridge the gap between theoretical knowledge and practical application.</li></ul></li></ol>
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
                            <p class="${"m-0"}">The Med Tech Dashboards and AR/VR Surgery Simulators have successfully addressed the challenges faced by neurosurgeons at HOAG Hospital and other Nuerosurgery deparment clients around the world. The solution provides a comprehensive platform that seamlessly integrates medical information and advanced simulations, empowering neurosurgeons to enhance their skills and improve patient outcomes. The user-centric design ensures widespread adoption, making it a valuable asset in the field of neurosurgical training and planning.</p></div></div></div></div></div></div></div>

${$$result.head += `<!-- HEAD_svelte-1n5ioev_START --><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"}"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"}"><!-- HEAD_svelte-1n5ioev_END -->`, ""}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
