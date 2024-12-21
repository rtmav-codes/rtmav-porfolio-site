import { _ as bind_props, X as ensure_array_like, Y as attr, T as escape_html, $ as copy_payload, a0 as assign_payload, S as pop, a1 as head, a2 as css_props, Q as push } from "../../../chunks/index.js";
import { L as Lightbox, H as Hamburger } from "../../../chunks/GalleryThumbnail.svelte_svelte_type_style_lang.js";
function Menu($$payload, $$props) {
  let links = [
    "/",
    "surgicaltheater",
    "walletguard",
    "speak2me"
  ];
  let open = $$props["open"];
  if (open) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like([
      "Home",
      "Surgical Theater",
      "Wallet Guard",
      "Speak2Me"
    ]);
    $$payload.out += `<div class="font-mono bg-black svelte-13h5tet"><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let link = each_array[i];
      $$payload.out += `<a${attr("href", links[i])} style="text-decoration:none" class="svelte-13h5tet"><p class="svelte-13h5tet">${escape_html(link)}</p></a>`;
    }
    $$payload.out += `<!--]--></div> <hr>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { open });
}
const media = [
  {
    "order": 1,
    "column": 1,
    "coverImage": {
      "url": "/recent/s2m.jpg"
    }
  },
  {
    "order": 1,
    "column": 2,
    "coverImage": {
      "url": "/speak2me/dashboard-1.png"
    }
  },
  {
    "order": 1,
    "column": 3,
    "coverImage": {
      "url": "/speak2me/excercise-1.png"
    }
  },
  {
    "order": 2,
    "column": 1,
    "coverImage": {
      "url": "/speak2me/excercise-2.png"
    }
  },
  {
    "order": 2,
    "column": 2,
    "coverImage": {
      "url": "/speak2me/excercise-3.png"
    }
  },
  {
    "order": 2,
    "column": 3,
    "coverImage": {
      "url": "/speak2me/excercise-4.png"
    }
  },
  {
    "order": 3,
    "column": 1,
    "coverImage": {
      "url": "/speak2me/heatmap-1.png"
    }
  },
  {
    "order": 3,
    "column": 2,
    "coverImage": {
      "url": "/speak2me/progress-1.png"
    }
  },
  {
    "order": 3,
    "column": 3,
    "coverImage": {
      "url": "/speak2me/excercise-5.png"
    }
  },
  {
    "order": 4,
    "column": 3,
    "coverImage": {
      "url": "/speak2me/excercise-6.png"
    }
  },
  {
    "order": 4,
    "column": 2,
    "coverImage": {
      "url": "/speak2me/excercise-7.png"
    }
  }
];
function _page($$payload, $$props) {
  push();
  let open = false;
  const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(mediaCol1);
    const each_array_1 = ensure_array_like(mediaCol2);
    const each_array_2 = ensure_array_like(mediaCol3);
    head($$payload2, ($$payload3) => {
      $$payload3.out += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css">`;
    });
    $$payload2.out += `<div class="flex justify-center items-center pt-4 bg-black font-mono">`;
    css_props($$payload2, true, { "--color": "white" }, () => {
      Hamburger($$payload2, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        }
      });
    });
    $$payload2.out += `</div> `;
    Menu($$payload2, {
      get open() {
        return open;
      },
      set open($$value) {
        open = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="w-screen h-auto bg-black flex flex-col justify-center items-center font-mono lg:px-0 px-5"><div class="flex flex-col justify-center items-center"><img src="/work/speak2me-logo.png" class="w-36 mt-10" alt="speak2me logo"></div> <div class="flex flex-col justify-center items-center"><h1 class="text-white text-5xl mt-10">Speak2Me</h1> <h2 class="text-white text-2xl mt-2 text-center">iOS App for Facial Movement <br> Tracking in Speech Therapy</h2></div> <div class="flex flex-col lg:w-3/4 w-full mt-10"><div class="flex flex-col lg:justify-start justify-center lg:items-start items-center bg-black border rounded-xl lg:px-10 px-6 lg:py-10 py-10"><div class="flex flex-col justify-start items-start w-5/6"><h1 class="text-white text-xl mt-2 font-semibold">My Role: UX Researcher and UX/UI Designer</h1> <h2 class="text-white text-lg mt-5 font-semibold">Project Overview:</h2> <p class="text-white text-md">Speak2Me is an iOS app designed to help speech therapists track and analyze facial 
                    movements during speech therapy sessions. The app uses facial movement tracking 
                    technology to capture and analyze the movements of the user's face, and provides 
                    feedback on the user's speech.</p> <h2 class="text-white text-lg mt-5 font-semibold">Problem Statement:</h2> <p class="text-white text-md">Speech therapists often struggle to track and analyze facial movements during speech 
                    therapy sessions, and traditional methods of tracking facial movements are often inaccurate 
                    and time-consuming.</p> <h2 class="text-white text-lg mt-5 font-semibold">Solution:</h2> <p class="text-white text-md">The solution focused on the development of an iOS app that uses facial movement tracking 
                    technology to capture and analyze the movements of the user's face, and provides feedback on the 
                    user's speech.</p> <ol class="list-decimal text-white text-md font-semibold lg:pl-10 pl-6 lg:mx-24 mx-1"><li><h3 class="mt-5 text-sm">Facial Movement Tracking with ARKit:</h3> <ul class="font-normal"><li>Utilized ARKit to precisely track facial movements, providing therapists with a detailed 
                                and accurate analysis of patients' facial movements during exercises.</li></ul></li> <li><h3 class="mt-2 text-sm">Real-Time Feedback and Progress Tracking:</h3> <ul class="font-normal"><li>Provided real-time feedback on the user's speech, helping therapists to identify areas for 
                                improvement and track progress over time.</li></ul></li> <li><h3 class="mt-2 text-sm">Personalized Exercise Creation:</h3> <ul class="font-normal"><li>Designed an intuitive interface that allows therapists to create personalized exercise regimine tailored to individual patient needs.</li></ul></li> <li><h3 class="mt-2 text-sm">Objective Facial Asymmetry Tracking:</h3> <ul class="font-normal"><li>Incorporated objective measurements for facial asymmetry tracking, reducing the reliance on subjective assessments.</li> <li>Provided visual analytics and progress reports to therapists, enabling them to make data-driven decisions in the treatment process.</li></ul></li> <li><h3 class="mt-2 text-sm">Paperless Curriculum Management:</h3> <ul class="font-normal"><li>Integrated trust-building elements such as testimonials, case studies, or certifications to instill confidence in the speech therapy company's expertise and reliability.</li> <li>Utilized a clean and professional design aesthetic to convey a sense of security and trustworthiness.</li></ul></li> <li><h3 class="mt-2 text-sm">Billing Integration:</h3> <ul class="font-normal"><li>Streamlined billing processes by integrating a billing module within the app, reducing the likelihood of errors.</li></ul> <ul class="font-normal"><li>Provided a seamless transition from therapy sessions to billing, saving time and improving the overall administrative experience for therapists.</li></ul></li> <li><h3 class="mt-2 text-sm">Gamification:</h3> <ul class="font-normal"><li>To assist in adoption and retention of users we set out to gamify the exercises.</li></ul> <ul class="font-normal"><li>The goal was to make interactive excercises that were challenging but also fun with engaging graphics to make the patients excited to log in and complete their excercises.</li></ul></li></ol> <h3 class="text-white text-xl mt-5 ml-5 font-semibold">Before:</h3> <div class="grid lg:grid-cols-3 grid-cols-1 lg:mx-24 mx-1"><div class="flex flex-col col-12 col-md-4"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { coverImage } = each_array[$$index];
      $$payload2.out += `<div class="p-3">`;
      Lightbox($$payload2, {
        enableClickToClose: true,
        children: ($$payload3) => {
          $$payload3.out += `<img${attr("src", coverImage?.url)} class="w-100 border border-white rounded-xl" alt="">`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]--></div> <div class="flex flex-col col-12 col-md-4"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let { coverImage } = each_array_1[$$index_1];
      $$payload2.out += `<div class="p-3">`;
      Lightbox($$payload2, {
        enableClickToClose: true,
        children: ($$payload3) => {
          $$payload3.out += `<img${attr("src", coverImage?.url)} class="w-100 border border-white rounded-xl" alt="">`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]--></div> <div class="flex flex-col col-12 col-md-4"><!--[-->`;
    for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
      let { coverImage } = each_array_2[$$index_2];
      $$payload2.out += `<div class="p-3">`;
      Lightbox($$payload2, {
        enableClickToClose: true,
        children: ($$payload3) => {
          $$payload3.out += `<img${attr("src", coverImage?.url)} class="w-100 border border-white rounded-xl" alt="">`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]--></div></div></div></div></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
