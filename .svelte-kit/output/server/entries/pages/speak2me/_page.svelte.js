import { a5 as bind_props, a3 as ensure_array_like, a2 as attr, e as escape_html, a6 as head, a7 as css_props } from "../../../chunks/renderer.js";
import { L as Lightbox, H as Hamburger } from "../../../chunks/GalleryThumbnail.svelte_svelte_type_style_lang.js";
import { m as media } from "../../../chunks/media-speak2me.js";
function Menu($$renderer, $$props) {
  let links = ["/", "surgicaltheater", "walletguard", "speak2me"];
  let open = $$props["open"];
  if (open) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="font-mono bg-black svelte-1l2y4p6"><!--[-->`);
    const each_array = ensure_array_like(["Home", "Surgical Theater", "Wallet Guard", "Speak2Me"]);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let link = each_array[i];
      $$renderer.push(`<a${attr("href", links[i])} style="text-decoration:none" class="svelte-1l2y4p6"><p class="svelte-1l2y4p6">${escape_html(link)}</p></a>`);
    }
    $$renderer.push(`<!--]--></div> <hr/>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]-->`);
  bind_props($$props, { open });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let open = false;
    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order: a = 0 }, { order: b = 0 }) => a > b ? 1 : -1);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("107z6rj", $$renderer3, ($$renderer4) => {
        $$renderer4.push(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"/> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"/>`);
      });
      $$renderer3.push(`<div class="flex justify-center items-center pt-4 bg-black font-mono">`);
      css_props($$renderer3, true, { "--color": "white" }, () => {
        Hamburger($$renderer3, {
          get open() {
            return open;
          },
          set open($$value) {
            open = $$value;
            $$settled = false;
          }
        });
      });
      $$renderer3.push(`</div> `);
      Menu($$renderer3, {
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <div class="w-screen h-auto bg-black flex flex-col justify-center items-center font-mono lg:px-0 px-5"><div class="flex flex-col justify-center items-center"><img src="/work/speak2me-logo.png" class="w-36 mt-10" alt="speak2me logo"/></div> <div class="flex flex-col justify-center items-center"><h1 class="text-white text-5xl mt-10">Speak2Me</h1> <h2 class="text-white text-2xl mt-2 text-center">iOS App for Facial Movement <br/> Tracking in Speech Therapy</h2></div> <div class="flex flex-col lg:w-3/4 w-full mt-10"><div class="flex flex-col justify-center items-center bg-black border rounded-xl lg:px-10 px-6 lg:py-10 py-10"><div class="flex flex-col justify-start items-start w-5/6"><h1 class="text-white text-xl mt-10 font-semibold">My Role: UX Researcher and UX/UI Designer</h1> <h2 class="text-white text-lg mt-5 font-semibold">Project Overview:</h2> <p class="text-white text-md">Speak2Me is an iOS app designed to help speech therapists track and analyze facial 
                    movements during speech therapy sessions. The app uses facial movement tracking 
                    technology to capture and analyze the movements of the user's face, and provides 
                    feedback on the user's speech.</p> <h2 class="text-white text-lg mt-5 font-semibold">Problem Statement:</h2> <p class="text-white text-md">Speech therapists often struggle to track and analyze facial movements during speech 
                    therapy sessions, and traditional methods of tracking facial movements are often inaccurate 
                    and time-consuming.</p> <h2 class="text-white text-lg mt-5 font-semibold">Solution:</h2> <p class="text-white text-md">The solution focused on the development of an iOS app that uses facial movement tracking 
                    technology to capture and analyze the movements of the user's face, and provides feedback on the 
                    user's speech.</p> <ol class="list-decimal text-white text-md font-semibold lg:pl-10 pl-6 lg:mx-24 mx-1"><li><h3 class="mt-5 text-sm">Facial Movement Tracking with ARKit:</h3> <ul class="font-normal"><li>Utilized ARKit to precisely track facial movements, providing therapists with a detailed 
                                and accurate analysis of patients' facial movements during exercises.</li></ul></li> <li><h3 class="mt-2 text-sm">Real-Time Feedback and Progress Tracking:</h3> <ul class="font-normal"><li>Provided real-time feedback on the user's speech, helping therapists to identify areas for 
                                improvement and track progress over time.</li></ul></li> <li><h3 class="mt-2 text-sm">Personalized Exercise Creation:</h3> <ul class="font-normal"><li>Designed an intuitive interface that allows therapists to create personalized exercise regimine tailored to individual patient needs.</li></ul></li> <li><h3 class="mt-2 text-sm">Objective Facial Asymmetry Tracking:</h3> <ul class="font-normal"><li>Incorporated objective measurements for facial asymmetry tracking, reducing the reliance on subjective assessments.</li> <li>Provided visual analytics and progress reports to therapists, enabling them to make data-driven decisions in the treatment process.</li></ul></li> <li><h3 class="mt-2 text-sm">Paperless Curriculum Management:</h3> <ul class="font-normal"><li>Integrated trust-building elements such as testimonials, case studies, or certifications to instill confidence in the speech therapy company's expertise and reliability.</li> <li>Utilized a clean and professional design aesthetic to convey a sense of security and trustworthiness.</li></ul></li> <li><h3 class="mt-2 text-sm">Billing Integration:</h3> <ul class="font-normal"><li>Streamlined billing processes by integrating a billing module within the app, reducing the 
                                likelihood of errors.</li></ul> <ul class="font-normal"><li>Provided a seamless transition from therapy sessions to billing, saving time and improving 
                                the overall administrative experience for therapists.</li></ul></li> <li><h3 class="mt-2 text-sm">Gamification:</h3> <ul class="font-normal"><li>To assist in adoption and retention of users we set out to gamify the exercises.</li></ul> <ul class="font-normal"><li>The goal was to make interactive excercises that were challenging but also fun with engaging 
                                graphics to make the patients excited to log in and complete their excercises.</li></ul></li></ol> <h3 class="text-white text-xl mt-5 ml-5 font-semibold">Before:</h3> <div class="grid lg:grid-cols-3 grid-cols-1 lg:mx-24 mx-1"><div class="flex flex-col col-12 col-md-4"><!--[-->`);
      const each_array = ensure_array_like(mediaCol1);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let { coverImage } = each_array[$$index];
        $$renderer3.push(`<div class="p-3">`);
        Lightbox($$renderer3, {
          enableClickToClose: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<img${attr("src", coverImage?.url)} class="w-100 border border-white rounded-xl" alt=""/>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="flex flex-col col-12 col-md-4"><!--[-->`);
      const each_array_1 = ensure_array_like(mediaCol2);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let { coverImage } = each_array_1[$$index_1];
        $$renderer3.push(`<div class="p-3">`);
        Lightbox($$renderer3, {
          enableClickToClose: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<img${attr("src", coverImage?.url)} class="w-100 border border-white rounded-xl" alt=""/>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="flex flex-col col-12 col-md-4"><!--[-->`);
      const each_array_2 = ensure_array_like(mediaCol3);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let { coverImage } = each_array_2[$$index_2];
        $$renderer3.push(`<div class="p-3">`);
        Lightbox($$renderer3, {
          enableClickToClose: true,
          children: ($$renderer4) => {
            $$renderer4.push(`<img${attr("src", coverImage?.url)} class="w-100 border border-white rounded-xl" alt=""/>`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----></div>`);
      }
      $$renderer3.push(`<!--]--></div></div></div></div></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
