import { X as ensure_array_like, Y as attr, T as escape_html, Z as bind_props, S as pop, _ as stringify, Q as push } from "../../chunks/index.js";
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
      "url": "/surgical-featured.png"
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
      "url": "/speak2me-featured.png"
    }
  }
];
function _page($$payload, $$props) {
  push();
  const prerender = true;
  const each_array_1 = ensure_array_like(featuredProjects);
  $$payload.out += `<div class="bg-black text-white font-mono p-5"><div${attr("class", `bg-[(url('${stringify(general?.headerImage?.url)})'))]`)}></div> <div class="flex flex-col justify-center items-center pb-5"><div class="flex flex-col lg:w-3/4 w-full"><div class="flex flex-col col-12 mb-5"><div class="bg-black border p-5 rounded-xl flex flex-col justify-center items-center"><div class="flex justify-center items-center"><img${attr("src", general?.avatar?.url)} class="border-2 border-white rounded-full w-36 mb-5" alt=""></div> <div class="flex flex-col justify-center lg:items-start items-center lg:px-4 px-0 lg:text-left text-center"><h1 class="text-center lg:text-left text-2xl font-semibold mb-3">${escape_html(general?.name)}</h1> <p class="mb-5 text-sm">${escape_html(general?.introDescription)}</p></div> <div class="flex flex-row lg:justify-start lg:items-start justify-center items-center w-full lg:px-4"><div class="flex lg:flex-row flex-col justify-center items-center py-2 mb-2">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="btn btn-outline hover:bg-gray-700 hover:text-black flex flex-col justify-center rounded-md w-auto h-10 mb-3"><a class="text-white text-xs font-semibold flex flex-row justify-center items-center"${attr("href", general?.gitHub)} target="_blank" rel="noreferrer"><img class="w-5 h-5 mb-1" src="/github.svg" alt="email icon"> <span class="ml-3">GitHub</span></a></button>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="btn btn-outline hover:bg-gray-700 flex flex-row justify-center rounded-md w-auto h-10 ml-2 mb-3"><a class="text-white text-xs font-semibold flex flex-row justify-center items-center"${attr("href", `mailto:${stringify(general?.email)}`)}><img class="w-5" src="/email-white.svg" alt="email icon"> <span class="ml-3 mr-1">${escape_html(general?.email)}</span></a></button>`;
  }
  $$payload.out += `<!--]--> `;
  if (general?.resume) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="btn btn-outline hover:bg-gray-700 flex flex-col justify-center rounded-md w-auto h-10 ml-2 mb-3"><a class="text-white text-xs font-semibold flex flex-row justify-center items-center"${attr("href", general?.resume?.url)} target="_blank" rel="noreferrer"><img class="w-5 mb-1" src="/resume.svg" alt="resume icon"> <span class="ml-2 mr-1">Resume</span></a></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></div></div> <div class="flex flex-col"><h1 class="text-2xl mb-3 font-bold">Services</h1></div> <div class="flex flex-col col-12"><div class="bg-black border rounded-xl px-10 lg:py-10 py-10"><div class="flex flex-col"><div class="flex flex-row justify-start items-center mb-2"><img src="/code.png" class="w-8" alt=""> <h1 class="font-semibold text-lg ml-3">Development</h1></div> <p class="text-sm">Need a website or app? I can do that! I also offer the option to include a Content Management System so that my clients can own their content and make website updates themselves whenever they want.</p></div></div></div> `;
  {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(works);
    $$payload.out += `<div class="flex flex-col col-12 mt-5"><h1 class="text-2xl font-bold mb-3">Work Experience</h1></div> <div class="grid lg:grid-cols-2 grid-cols-1 gap-4"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { title, company, image } = each_array[$$index];
      $$payload.out += `<div class="flex flex-row justify-start items-center border rounded-xl overflow-hidden h-100 w-full py-5 px-10"><div class="flex flex-row flex-center justify-center items-center"><div class="flex flex-col justify-center items-center col-6 col-md-4 p-0"><img${attr("src", image?.url)} class="w-36 border-radius lg:ml-5 ml-1" alt=""></div> <div class="flex flex-col justify-center items-center w-5/6"><div class="px-3 py-12"><strong class="lg:text-lg text-ld">${escape_html(title)}</strong> <p class="text-xs">at <strong>${escape_html(company)}</strong></p></div></div></div></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--> <h2 class="text-2xl font-bold mt-5 mb-3">Recent Projects</h2> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let { title, description, video, image, demoUrl } = each_array_1[$$index_1];
    $$payload.out += `<div class="flex flex-col lg:flex-row justify-start items-center border rounded-xl overflow-hidden h-100 p-10"><div class="flex lg:flex-row flex-col justify-start items-center"><div class="flex flex-col justify-start items-center lg:w-1/4 w-full">`;
    if (video?.url) {
      $$payload.out += "<!--[-->";
      Video($$payload, { cover: image?.url, video: video?.url });
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<div class="flex flex-col justify-start items-start lg:mt-0 mt-5"><img${attr("src", image?.url)} class="w-72 h-auto rounded-lg border border-white" alt=""></div>`;
    }
    $$payload.out += `<!--]--></div> <div class="lg:w-3/4 w-full lg:my-0 my-5 lg:pl-10"><h1 class="lg:text-xl text-lg font-semibold mb-2">${escape_html(title)}</h1> <p class="lg:text-sm text-xs mb-2">${escape_html(description)}</p> `;
    if (demoUrl) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", demoUrl)} class="link" rel="noreferrer">View Project</a>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div></div>`;
  }
  $$payload.out += `<!--]--> <h1 class="text-2xl font-bold mt-5 mb-3">CONTACT</h1> <div class="py-8 mb-5 lg:mb-5 lg:py-16 px-4 lg:mx-auto border rounded-xl border-white"><div class="flex flex-col justify-center items-center p-10"><p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Have a question for our team? Feel free to read out and we will get back to you as soon as possible!</p> <form target="_blank" action="https://formsubmit.co/rotem.avisar@gmail.com" method="POST" class="w-full"><div class="form-group"><div class="form-row"><label for="email" class="block text-sm font-bold">Your email</label> <input type="email" name="email" class="form-control shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required></div> <div class="form-row"><label for="subject" class="block text-sm font-medium pt-2">Subject</label> <input type="text" name="subject" class="form-control block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required></div> <div class="sm:col-span-2 form-row"><label for="message" class="block text-sm font-medium pt-2">Your message</label> <textarea name="message" rows="6" class="form-control block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea></div> <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-white sm:w-fit hover:bg-[#a2cfe2] focus:ring-4 focus:outline-none focus:ring-primary-300 mt-5">Send message</button></div></form></div></div></div></div></div>`;
  bind_props($$props, { prerender });
  pop();
}
export {
  _page as default
};
