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
      "url": "/recent/s2m.jpg"
    },
    "video": null
  },
  {
    "order": 1,
    "column": 2,
    "coverImage": {
      "url": "/speak2me/dashboard-1.png"
    },
    "video": null
  },
  {
    "order": 1,
    "column": 3,
    "coverImage": {
      "url": "/speak2me/excercise-1.png"
    },
    "video": null
  },
  {
    "order": 2,
    "column": 1,
    "coverImage": {
      "url": "/speak2me/excercise-2.png"
    },
    "video": null
  },
  {
    "order": 2,
    "column": 2,
    "coverImage": {
      "url": "/speak2me/excercise-3.png"
    },
    "video": null
  },
  {
    "order": 2,
    "column": 3,
    "coverImage": {
      "url": "/speak2me/excercise-4.png"
    },
    "video": null
  },
  {
    "order": 3,
    "column": 1,
    "coverImage": {
      "url": "/speak2me/heatmap-1.png"
    },
    "video": null
  },
  {
    "order": 3,
    "column": 2,
    "coverImage": {
      "url": "/speak2me/progress-1.png"
    },
    "video": null
  },
  {
    "order": 3,
    "column": 3,
    "coverImage": {
      "url": "/speak2me/excercise-5.png"
    },
    "video": null
  },
  {
    "order": 4,
    "column": 3,
    "coverImage": {
      "url": "/speak2me/excercise-6.png"
    },
    "video": null
  },
  {
    "order": 4,
    "column": 2,
    "coverImage": {
      "url": "/speak2me/excercise-7.png"
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
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"display-flex flex-center align-content-center justify-content-cente mt-4"}"><div style="display: contents; --color:${"white"};">${validate_component(Hamburger, "Hamburger").$$render(
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

<div class="${"header display-flex justify-content-center p-1"}"><div class="${"content pb-5 w-100"}"><div class="${"container"}"><div class="${"row"}"><div class="${"col-12"}"><div class="${"background-black border p-2 border-radius"}"><div class="${"flex-center"}"><img src="${"/work/speak2me-logo.png"}" class="${"avatar svelte-16dwnpp"}" alt="${""}"></div>
                        <div><h2 class="${"m-0 my-2 text-center"}">iOS App for Facial Movement Tracking in Speech Therapy</h2>
                            <h3 class="${"m-0 my-2"}">My Role:</h3>
                            <p class="${"m-0"}">Software Lead, UX Researcher &amp; UX/UI Designer</p>
                            <h3 class="${"m-0 my-2"}">Project Overview:</h3>
                            <p class="${"m-0"}">I spearheaded the development of an iOS app using SvelteNative and NativeScript, harnessing the power of ARKit to track facial movements. This innovative application serves the field of speech therapy, offering therapists an advanced tool to create personalized exercises for patients. The overarching goal is to streamline therapy processes, mitigate the challenges associated with traditional paper-based curriculums, subjective tracking of facial asymmetry in stroke patients, and simplify billing procedures. Along with the speech therapists we discovered what their needs were during user interviews and designed excercises according to their requirements and specifications.</p>
                            <h3 class="${"m-0 my-2"}">Problem Statement:</h3>
                            <p class="${"m-0"}">Speech therapists encounter several pain points in their practice, including cumbersome paper curriculums, subjective tracking of facial asymmetry in stroke patients, and billing inefficiencies. Traditional methods often lack precision and real-time feedback, making it challenging for therapists to tailor exercises and monitor progress effectively. There is a critical need for a solution that not only addresses these pain points but also leverages technology to enhance the overall efficiency of speech therapy sessions.</p>
                            <h3 class="${"m-0 my-2"}">Solution:</h3>
                            <p class="${"m-0"}">The iOS app I developed with my team and our speech therapist key opinion leader offers a comprehensive solution to the identified challenges in speech therapy. Key components of the solution include:</p>
                            <ol><li><h4>Facial Movement Tracking with ARKit:</h4>
                                    <ul><li>Utilized ARKit to precisely track facial movements, providing therapists with a detailed and accurate analysis of patients&#39; facial movements during exercises.</li></ul>
                                    <ul><li>Integrated real-time feedback and post session playback to enhance the interactive nature of therapy sessions, allowing therapists to adjust exercises based on immediate patient responses.</li></ul></li>
                                <li><h4>Personalized Exercise Creation:</h4>
                                    <ul><li>Designed an intuitive interface that allows therapists to create personalized exercise regimine tailored to individual patient needs.</li></ul>
                                    <ul><li>Implemented a library of exercises with adjustable parameters, ensuring flexibility in addressing a wide range of speech therapy goals.</li></ul></li>
                                <li><h4>Objective Facial Asymmetry Tracking:</h4>
                                    <ul><li>Incorporated objective measurements for facial asymmetry tracking, reducing the reliance on subjective assessments.</li>
                                        <li>Provided visual analytics and progress reports to therapists, enabling them to make data-driven decisions in the treatment process.</li></ul></li>
                                <li><h4>Paperless Curriculum Management:</h4>
                                    <ul><li>Integrated trust-building elements such as testimonials, case studies, or certifications to instill confidence in the speech therapy company&#39;s expertise and reliability.</li>
                                        <li>Utilized a clean and professional design aesthetic to convey a sense of security and trustworthiness.</li></ul></li>
                                <li><h4>Billing Integration:</h4>
                                    <ul><li>Streamlined billing processes by integrating a billing module within the app, reducing the likelihood of errors.</li></ul>
                                    <ul><li>Provided a seamless transition from therapy sessions to billing, saving time and improving the overall administrative experience for therapists.</li></ul></li>
                                <li><h4>Gamification:</h4>
                                    <ul><li>To assist in adoption and retention of users we set out to gamify the exercises.</li></ul>
                                    <ul><li>The goal was to make interactive excercises that were challenging but also fun with engaging graphics to make the patients excited to log in and complete their excercises.</li></ul></li></ol>
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
                            <p class="${"m-0"}">The iOS app has successfully addressed the pain points experienced by speech therapists, providing an advanced platform for facial movement tracking and personalized exercise plans. By leveraging ARKit and integrating streamlined features for curriculum management and billing, the app enhances the overall efficiency of speech therapy sessions in and outside of the office. Therapists can now focus more on patient care, armed with accurate data and tools to make informed decisions, ultimately improving the quality of speech therapy services.</p></div></div></div></div></div></div></div>

${$$result.head += `<!-- HEAD_svelte-1n5ioev_START --><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"}"><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"}"><!-- HEAD_svelte-1n5ioev_END -->`, ""}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
