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
    $$payload.out += `<div class="font-mono bg-black svelte-8ry3ol"><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let link = each_array[i];
      $$payload.out += `<a${attr("href", links[i])} style="text-decoration:none" class="svelte-8ry3ol"><p class="svelte-8ry3ol">${escape_html(link)}</p></a>`;
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
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/aa0092a6ed415ffe/369fd694c69a8c0d/1cf31f6b-f4a4-41d5-8d84-65c32e906ef3.png"
    }
  },
  {
    "order": 1,
    "column": 2,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/e7de87c40dd4e949/eb08f82d8a363773/b065c43a-8091-46f6-a361-171ac630d360.png"
    }
  },
  {
    "order": 1,
    "column": 3,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/09d89b25f428bc8b/8b90772d6a16fae6/19dd0971-5edd-41d3-bc5c-b31188d08aef.png"
    }
  },
  {
    "order": 2,
    "column": 1,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/97726630c7ae4acd/4f5b542fc36502bd/b5895c46-d44e-4e20-839b-c3c86aa6bee0.png"
    }
  },
  {
    "order": 2,
    "column": 2,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/da7f0b163127b2ee/24941380bb0d73d9/7ef2a430-6b7f-480b-be2a-fecccf21ff01.png"
    }
  },
  {
    "order": 2,
    "column": 3,
    "coverImage": {
      "url": "https://mediagraph-embeds.s3.amazonaws.com/625/74d6894c2c4cd0cc/58de5f826bbd669b/b43987f8-103c-455c-ac56-575c1575fd56.png"
    }
  }
];
const mediaBefore = [
  {
    "order": 1,
    "column": 1,
    "coverImage": {
      "url": "/st-before/st-before-1.png"
    }
  },
  {
    "order": 1,
    "column": 2,
    "coverImage": {
      "url": "/st-before/st-before-2.png"
    }
  },
  {
    "order": 1,
    "column": 3,
    "coverImage": {
      "url": "/st-before/st-before-3.png"
    }
  },
  {
    "order": 2,
    "column": 1,
    "coverImage": {
      "url": "/st-before/st-before-4.png"
    }
  },
  {
    "order": 2,
    "column": 2,
    "coverImage": {
      "url": "/st-before/st-before-5.png"
    }
  }
];
function _page($$payload, $$props) {
  push();
  let open = false;
  const mediaBeforeCol1 = mediaBefore.filter(({ column }) => column === 1).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaBeforeCol2 = mediaBefore.filter(({ column }) => column === 2).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaBeforeCol3 = mediaBefore.filter(({ column }) => column === 3).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(mediaBeforeCol1);
    const each_array_1 = ensure_array_like(mediaBeforeCol2);
    const each_array_2 = ensure_array_like(mediaBeforeCol3);
    const each_array_3 = ensure_array_like(mediaCol1);
    const each_array_4 = ensure_array_like(mediaCol2);
    const each_array_5 = ensure_array_like(mediaCol3);
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
    $$payload2.out += `<!----> <div class="w-screen h-auto bg-black flex flex-col justify-center items-center font-mono lg:px-0 px-5"><div class="flex flex-col justify-center items-center"><img src="/work/st-logo.png" class="w-36 mt-10" alt="st logo"></div> <div class="flex flex-col justify-center items-center"><h1 class="text-white text-5xl mt-10 text-center">Surgical Theater</h1> <h2 class="text-white text-2xl mt-2 text-center">Legacy System Redesign</h2></div> <div class="flex flex-col lg:w-3/4 w-full mt-10"><div class="flex flex-col justify-center items-center bg-black border rounded-xl lg:px-10 px-6 lg:py-0 py-10"><div class="flex flex-col justify-start items-start w-5/6"><h1 class="text-white lg:text-xl text-md mt-10 font-semibold">My Role: UX Researcher and UX/UI Designer</h1> <h2 class="text-white lg:text-lg text-md mt-5 font-semibold">Project Overview:</h2> <p class="text-white text-md">I collaborated with the team to design and 
                    develop cutting-edge Med Tech Dashboards and AR/VR Surgery Simulators for HOAG Hospital 
                    in Newport Beach, CA. The project aimed to create a seamless user experience for neurosurgeons, 
                    incorporating advanced technologies to enhance surgical training and planning.</p> <h2 class="text-white text-lg mt-5 font-semibold">Problem Statement:</h2> <p class="text-white text-md">Neurosurgeons at HOAG Hospital faced challenges in accessing and interpreting complex medical data, 
                    and traditional surgical training methods often fell short in providing immersive and realistic scenarios 
                    for skill development. There was a need for a user-friendly interface that could consolidate diverse medical 
                    information and deliver an enhanced training environment through AR/VR simulations. The old Ui felt like it was 
                    built by engineers for engineers. The redesign aimed to create a more intuitive and user-friendly interface 
                    that would allow neurosurgeons to access and analyze medical data more effectively, and to provide a more 
                    immersive and realistic surgical training experience through AR/VR simulations.</p> <h2 class="text-white text-lg mt-5 font-semibold">Solution:</h2> <p class="text-white text-md">The solution focused on the development of intuitive Med Tech Dashboards and AR/VR Surgery Simulators 
                    tailored to the specific needs outlined by neurosurgeons. Key components of the solution include:</p> <ol class="list-decimal text-white text-md font-semibold lg:pl-10 pl-6 lg:mx-24 mx-1"><li><h3 class="mt-5 text-sm">User-Centric Design:</h3> <ul class="font-normal text-xs"><li>Conducted user research and collaborated closely with neurosurgeons to understand their workflow and preferences.</li> <li>Designed an intuitive and user-friendly interface for the Med Tech Dashboards, ensuring easy navigation, quick access to critical medical and as an intuitive way to plan for surgery in the simulator.</li></ul></li> <li><h3 class="mt-2 text-sm">Med Tech Dashboards:</h3> <ul class="font-normal text-xs"><li>Aggregated diverse medical data sources into a unified dashboard, providing neurosurgeons with a comprehensive view of patient information, diagnostics, and surgical plans.</li> <li>Implemented personalized dashboards to cater to individual surgeon preferences.</li></ul></li> <li><h3 class="mt-2 text-sm">AR/VR Surgery Simulators:</h3> <ul class="font-normal text-xs"><li>Developed an interface for an immersive AR/VR simulations that replicate real surgical scenarios, allowing neurosurgeons to practice and refine their skills in a risk-free environment.</li> <li>Integrated realistic visuals to enhance the simulation experience and bridge the gap between theoretical knowledge and practical application.</li></ul></li></ol> <h3 class="text-white text-xl mt-5 ml-5 font-semibold">Before:</h3> <div class="grid lg:grid-cols-3 grid-cols-1"><div class="flex flex-col col-12 col-md-4"><!--[-->`;
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
    $$payload2.out += `<!--]--></div></div> <h3 class="text-white text-xl mt-5 ml-5 font-semibold">After:</h3> <div class="grid lg:grid-cols-3 grid-cols-1"><div class="flex flex-col col-12 col-md-4"><!--[-->`;
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let { coverImage } = each_array_3[$$index_3];
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
    for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
      let { coverImage } = each_array_4[$$index_4];
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
    for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
      let { coverImage } = each_array_5[$$index_5];
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
