import { c as create_ssr_component, e as escape, b as add_attribute, d as each, v as validate_component } from "../../chunks/index2.js";
import { V as Video } from "../../chunks/video.js";
import { g as general } from "../../chunks/general.js";
const works = [
  {
    "title": "Speech Therapy Application",
    "company": "Speak2Me",
    "image": {
      "url": "/work/speak2me-logo.png"
    }
  },
  {
    "title": "AR/VR Medical Dashboards",
    "company": "Surgical Theater",
    "image": {
      "url": "/work/st-logo.png"
    }
  },
  {
    "title": "Home Healthcare Non Profit Landing Page",
    "company": "BTS Housing Home Healthcare",
    "image": {
      "url": "/work/bts-housing.png"
    }
  },
  {
    "title": "Wallet Guard Landing Page",
    "company": "Wallet Guard",
    "image": {
      "url": "/work/wallet-guard.png"
    }
  }
];
const featuredProjects = [
  {
    "title": "Surgical Theater",
    "description": "Worked as part of a team to design and build med tech dashboards AR/VR surgery simulators according to specifications from neurosurgeons at HOAG hospital in Newport Beach, CA.",
    "demoUrl": "surgicaltheater",
    "video": {
      "url": null
    },
    "image": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/e7de87c40dd4e949/eb08f82d8a363773/b065c43a-8091-46f6-a361-171ac630d360.png"
    }
  },
  {
    "title": "Wallet Guard",
    "description": "Created a landing page in Webflow for a Web3 company that aims to make the cyprto space safer by preventing common scams such as wallet drainers and honey pots.",
    "demoUrl": "walletguard",
    "video": {
      "url": null
    },
    "image": {
      "url": "/wallet-guard-after/wallet-guard-browser-extension-cover.png"
    }
  },
  {
    "title": "Speak2Me",
    "description": "Led a team that developed an iOS app using SvelteNative and NativeScript that utilizes ARKit to track facial movements of patients and created exercises used for speech therapy. The goal of this app is to be used by therapists to reduce certain pain points such as paper curriculums, subjective tracking of facial asymetry for stroke patients and billing.",
    "demoUrl": "speak2me",
    "video": null,
    "image": {
      "url": "https://pbs.twimg.com/media/Fl0kqlkaUAAyDLS?format=png&name=900x900"
    }
  }
];
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1ilrzo9{position:relative;z-index:1;margin-top:25vh}.image.svelte-1ilrzo9{background-position:center;background-size:cover;width:100vw;height:50vh;position:absolute;top:0;left:0;z-index:0}.featured-image.svelte-1ilrzo9{background-size:cover;background-position:center;min-height:10rem}.work-image.svelte-1ilrzo9{height:10rem;object-fit:contain;border-radius:var(--border-radius) 0 0 var(--border-radius);transform:scale(1.075)}@media only screen and (min-width: 768px){.work-image.svelte-1ilrzo9{height:6rem}}.controls .button svg{transform:translateX(-50%)}.avatar.svelte-1ilrzo9{height:10rem}.__grid--masonry{padding:0}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const prerender = true;
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  return `<div class="${"header display-flex justify-content-center p-1"}"><div class="${"image svelte-1ilrzo9"}" style="${"background-image: url(" + escape(general?.headerImage?.url, true) + ");"}"></div>
    <div class="${"content pb-5 svelte-1ilrzo9"}"><div class="${"container"}"><div class="${"row"}"><div class="${"col-12"}"><div class="${"background-black border p-2 border-radius"}"><div class="${"flex-center"}"><img${add_attribute("src", general?.avatar?.url, 0)} class="${"border-round avatar svelte-1ilrzo9"}" alt="${""}"></div>
                        <h2 class="${"m-0"}">${escape(general?.name)}</h2>
                        <p class="${"m-0"}">${escape(general?.introDescription)}</p>
                        <div class="${"mt-2 w-100 display-flex flex-wrap"}">${``}
                            ${``}
                            ${`<a class="${"button mr-1 mb-1 w-100 w-lg-auto"}"${add_attribute("href", general?.gitHub, 0)} target="${"_blank"}" rel="${"noreferrer"}"><img src="${"/github-logo.png"}" class="${"icon"}" alt="${""}">
                                    <span class="${"ml-1"}">GitHub
                                    </span></a>`}
                            ${``}
                            ${`<a class="${"button mr-1 mb-1 w-100 w-lg-auto"}" href="${"mailto:" + escape(general?.email, true)}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon"}" viewBox="${"0 0 24 24"}"><path d="${"M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"}"></path></svg>
                                    <span class="${"ml-1"}">${escape(general?.email)}</span></a>`}
                            ${general?.resume ? `<a class="${"button mr-1 mb-1 w-100 w-lg-auto"}"${add_attribute("href", general?.resume?.url, 0)} target="${"_blank"}" rel="${"noreferrer"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"icon"}" viewBox="${"0 0 24 24"}"><path d="${"M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"}"></path></svg>                                    <span class="${"ml-1"}">Resume
                                    </span></a>` : ``}</div></div></div>
                
                ${`<div class="${"col-12 mt-5"}"><h2 class="${"m-0"}">Work Experience</h2></div>
                    ${each(works, ({ title, company, image }) => {
    return `<div class="${"col-12 col-md-4"}"><div class="${"containter border border-radius overflow-hidden h-100 flex flex-center align-items-center justify-content-center"}"><div class="${"row flex flex-center align-items-center justify-content-center"}"><div class="${"col-6 col-md-4 p-0 flex flex-center align-items-center justify-content-center"}"><img${add_attribute("src", image?.url, 0)} class="${"work-image w-100 h-100 border-radius ml-lg-3 svelte-1ilrzo9"}" alt="${""}"></div>
                                    <div class="${"col-12 col-md-8"}"><div class="${"px-1"}"><strong class="${"m-0"}">${escape(title)}</strong>
                                            <p class="${"m-0 text-micro"}">at <strong>${escape(company)}</strong></p>
                                        </div></div>
                                </div></div>
                        </div>`;
  })}`}</div>
            


            <h2 class="${"mt-5"}">Recent Projects</h2>
            ${each(featuredProjects, ({ title, description, video, image, demoUrl }) => {
    return `<div class="${"container background-black border border-radius mb-2"}"><div class="${"row"}"><div class="${"col-12 col-md-5"}">${video?.url ? `${validate_component(Video, "Video").$$render($$result, { cover: image?.url, video: video?.url }, {}, {})}` : `<div class="${"w-100 h-100 border-radius featured-image svelte-1ilrzo9"}" style="${"background-image: url(" + escape(image?.url, true) + ")"}"></div>`}</div>
                        <div class="${"col-12 col-md-7"}"><h2 class="${"m-0"}">${escape(title)}</h2>
                            <p>${escape(description)}</p>

                            ${demoUrl ? `<a${add_attribute("href", demoUrl, 0)} class="${"link"}" rel="${"noreferrer"}">View Project</a>` : ``}
                        </div></div>
                </div>`;
  })}

            <div class="${"row"}"><div class="${"col-12 col-md-2"}"></div>
                <div class="${"col-12 col-md-8 mt-5"}"><h2>Contact</h2>
                    <form action="${"https://formsubmit.co/rtmav@rtmav.site"}" method="${"POST"}" class="${"w-100"}"><input type="${"text"}" name="${"name"}" required placeholder="${"Name"}" class="${"w-100"}">
                        <input type="${"text"}" name="${"email"}" required placeholder="${"Email"}" class="${"w-100"}">
                        <textarea type="${"text"}" name="${"message"}" rows="${"10"}" required placeholder="${"Message"}"></textarea>
                        <button class="${"button my-2"}" type="${"submit"}">Send</button></form></div></div></div></div>
</div>`;
});
export {
  Page as default
};
