import { c as create_ssr_component, e as escape, b as add_attribute, f as compute_rest_props, h as spread, i as escape_object, o as onDestroy, j as createEventDispatcher, a as subscribe, v as validate_component, k as compute_slots } from "./index2.js";
import { w as writable } from "./index.js";
const Hamburger_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '.hamburger.svelte-jas1sv.svelte-jas1sv{padding:var(--padding, 15px);display:inline-block;cursor:pointer;transition-property:opacity, filter;transition-duration:0.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:transparent;border:0;margin:0;overflow:visible}.hamburger.svelte-jas1sv.svelte-jas1sv:active{background-color:transparent !important}.hamburger.svelte-jas1sv.svelte-jas1sv:hover{opacity:var(--hover-opacity, 0.7)}.hamburger.is-active.svelte-jas1sv.svelte-jas1sv:hover{opacity:var(--hover-opacity-active, var(--hover-opacity, 0.7))}.hamburger.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv,.hamburger.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{background-color:var(--active-color, var(--color, black))}.hamburger-box.svelte-jas1sv.svelte-jas1sv{width:var(--layer-width, 30px);height:calc(var(--layer-height, 4px) * 3 + var(--layer-spacing, 6px) * 2);display:inline-block;position:relative}.hamburger-inner.svelte-jas1sv.svelte-jas1sv{display:block;top:50%;margin-top:var(--layer-height, 4px)/-2}.hamburger-inner.svelte-jas1sv.svelte-jas1sv,.hamburger-inner.svelte-jas1sv.svelte-jas1sv::before,.hamburger-inner.svelte-jas1sv.svelte-jas1sv::after{width:var(--layer-width, 30px);height:var(--layer-height, 4px);background-color:var(--color, black);border-radius:var(--border-radius, 4px);position:absolute;transition-property:transform;transition-duration:0.15s;transition-timing-function:ease}.hamburger-inner.svelte-jas1sv.svelte-jas1sv::before,.hamburger-inner.svelte-jas1sv.svelte-jas1sv::after{content:"";display:block}.hamburger-inner.svelte-jas1sv.svelte-jas1sv::before{top:calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1)}.hamburger-inner.svelte-jas1sv.svelte-jas1sv::after{bottom:calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1)}.hamburger--3dx.svelte-jas1sv .hamburger-box.svelte-jas1sv{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dx.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dx.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--3dx.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dx.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{background-color:transparent !important;transform:rotateY(180deg)}.hamburger--3dx.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dx.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dx-r.svelte-jas1sv .hamburger-box.svelte-jas1sv{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dx-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dx-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--3dx-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dx-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{background-color:transparent !important;transform:rotateY(-180deg)}.hamburger--3dx-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dx-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dy.svelte-jas1sv .hamburger-box.svelte-jas1sv{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dy.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dy.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--3dy.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dy.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{background-color:transparent !important;transform:rotateX(-180deg)}.hamburger--3dy.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dy.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dy-r.svelte-jas1sv .hamburger-box.svelte-jas1sv{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dy-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dy-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--3dy-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dy-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{background-color:transparent !important;transform:rotateX(180deg)}.hamburger--3dy-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dy-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dxy.svelte-jas1sv .hamburger-box.svelte-jas1sv{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dxy.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dxy.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--3dxy.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dxy.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{background-color:transparent !important;transform:rotateX(180deg) rotateY(180deg)}.hamburger--3dxy.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dxy.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--3dxy-r.svelte-jas1sv .hamburger-box.svelte-jas1sv{perspective:calc(var(--layer-width, 30px) * 2)}.hamburger--3dxy-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1), background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dxy-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--3dxy-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)}.hamburger--3dxy-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{background-color:transparent !important;transform:rotateX(180deg) rotateY(180deg) rotateZ(-180deg)}.hamburger--3dxy-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(0, calc(var(--layer-height, 4px) + var(--layer-spacing, 6px)), 0) rotate(45deg)}.hamburger--3dxy-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc((var(--layer-height, 4px) + var(--layer-spacing, 6px)) * -1), 0) rotate(-45deg)}.hamburger--arrow.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(calc(var(--layer-width, 30px) * -0.2), 0, 0) rotate(-45deg) scale(0.7, 1)}.hamburger--arrow.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(calc(var(--layer-width, 30px) * -0.2), 0, 0) rotate(45deg) scale(0.7, 1)}.hamburger--arrow-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(calc(var(--layer-width, 30px) * 0.2), 0, 0) rotate(45deg) scale(0.7, 1)}.hamburger--arrow-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(calc(var(--layer-width, 30px) * 0.2), 0, 0) rotate(-45deg) scale(0.7, 1)}.hamburger--arrowalt.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)}.hamburger--arrowalt.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)}.hamburger--arrowalt.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;transform:translate3d(calc(var(--layer-width, 30px) * -0.2), calc(var(--layer-width, 30px) * -0.25), 0) rotate(-45deg) scale(0.7, 1);transition:top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)}.hamburger--arrowalt.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:translate3d(calc(var(--layer-width, 30px) * -0.2), calc(var(--layer-width, 30px) * 0.25), 0) rotate(45deg) scale(0.7, 1);transition:bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)}.hamburger--arrowalt-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)}.hamburger--arrowalt-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:bottom 0.1s 0.1s ease, transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1)}.hamburger--arrowalt-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;transform:translate3d(calc(var(--layer-width, 30px) * 0.2), calc(var(--layer-width, 30px) * -0.25), 0) rotate(45deg) scale(0.7, 1);transition:top 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)}.hamburger--arrowalt-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:translate3d(calc(var(--layer-width, 30px) * 0.2), calc(var(--layer-width, 30px) * 0.25), 0) rotate(-45deg) scale(0.7, 1);transition:bottom 0.1s ease, transform 0.1s 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22)}.hamburger--arrowturn.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(-180deg)}.hamburger--arrowturn.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(8px, 0, 0) rotate(45deg) scale(0.7, 1)}.hamburger--arrowturn.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(8px, 0, 0) rotate(-45deg) scale(0.7, 1)}.hamburger--arrowturn-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(-180deg)}.hamburger--arrowturn-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:translate3d(-8px, 0, 0) rotate(-45deg) scale(0.7, 1)}.hamburger--arrowturn-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(-8px, 0, 0) rotate(45deg) scale(0.7, 1)}.hamburger--boring.svelte-jas1sv .hamburger-inner.svelte-jas1sv,.hamburger--boring.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--boring.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition-property:none}.hamburger--boring.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(45deg)}.hamburger--boring.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;opacity:0}.hamburger--boring.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:rotate(-90deg)}.hamburger--collapse.svelte-jas1sv .hamburger-inner.svelte-jas1sv{top:auto;bottom:0;transition-duration:0.13s;transition-delay:0.13s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--collapse.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);transition:top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear}.hamburger--collapse.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--collapse.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0) rotate(-45deg);transition-delay:0.22s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--collapse.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:0;opacity:0;transition:top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear}.hamburger--collapse.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;transform:rotate(-90deg);transition:top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--collapse-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{top:auto;bottom:0;transition-duration:0.13s;transition-delay:0.13s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--collapse-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);transition:top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear}.hamburger--collapse-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--collapse-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0) rotate(45deg);transition-delay:0.22s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--collapse-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:0;opacity:0;transition:top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear}.hamburger--collapse-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;transform:rotate(90deg);transition:top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--elastic.svelte-jas1sv .hamburger-inner.svelte-jas1sv{top:var(--layer-height, 4px)/2;transition-duration:0.275s;transition-timing-function:cubic-bezier(0.68, -0.55, 0.265, 1.55)}.hamburger--elastic.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition:opacity 0.125s 0.275s ease}.hamburger--elastic.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2);transition:transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55)}.hamburger--elastic.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{--y-offset:calc(\n      var(--layer-spacing, 6px) + var(--layer-height, 4px)\n  );transform:translate3d(0, var(--y-offset), 0) rotate(135deg);transition-delay:0.075s}.hamburger--elastic.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition-delay:0s;opacity:0}.hamburger--elastic.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc(var(--y-offset) * -2), 0) rotate(-270deg);transition-delay:0.075s}.hamburger--elastic-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{top:var(--layer-height, 4px)/2;transition-duration:0.275s;transition-timing-function:cubic-bezier(0.68, -0.55, 0.265, 1.55)}.hamburger--elastic-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition:opacity 0.125s 0.275s ease}.hamburger--elastic-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2);transition:transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55)}.hamburger--elastic-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{--y-offset:calc(\n      var(--layer-spacing, 6px) + var(--layer-height, 4px)\n  );transform:translate3d(0, var(--y-offset), 0) rotate(-135deg);transition-delay:0.075s}.hamburger--elastic-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition-delay:0s;opacity:0}.hamburger--elastic-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc(var(--y-offset) * -2), 0) rotate(270deg);transition-delay:0.075s}.hamburger--emphatic.svelte-jas1sv.svelte-jas1sv{overflow:hidden}.hamburger--emphatic.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:background-color 0.125s 0.175s ease-in}.hamburger--emphatic.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{left:0;transition:transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in}.hamburger--emphatic.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc((var(--layer-height, 4px)) + (var(--layer-spacing, 6px)));right:0;transition:transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in}.hamburger--emphatic.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition-delay:0s;transition-timing-function:ease-out;background-color:transparent !important}.hamburger--emphatic.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{left:calc(var(--layer-width, 30px) * -2);top:calc(var(--layer-width, 30px) * -2);transform:translate3d(calc(var(--layer-width, 30px) * 2), calc(var(--layer-width, 30px) * 2), 0) rotate(45deg);transition:left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)}.hamburger--emphatic.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{right:calc(var(--layer-width, 30px) * -2);top:calc(var(--layer-width, 30px) * -2);transform:translate3d(calc(var(--layer-width, 30px) * -2), calc(var(--layer-width, 30px) * 2), 0) rotate(-45deg);transition:right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)}.hamburger--emphatic-r.svelte-jas1sv.svelte-jas1sv{overflow:hidden}.hamburger--emphatic-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:background-color 0.125s 0.175s ease-in}.hamburger--emphatic-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{left:0;transition:transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, left 0.125s 0.175s ease-in}.hamburger--emphatic-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc((var(--layer-height, 4px)) + (var(--layer-spacing, 6px)));right:0;transition:transform 0.125s cubic-bezier(0.6, 0.04, 0.98, 0.335), top 0.05s 0.125s linear, right 0.125s 0.175s ease-in}.hamburger--emphatic-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition-delay:0s;transition-timing-function:ease-out;background-color:transparent !important}.hamburger--emphatic-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{left:calc(var(--layer-width, 30px) * -2);top:calc(var(--layer-width, 30px) * 2);transform:translate3d(calc(var(--layer-width, 30px) * 2), calc(var(--layer-width, 30px) * -2), 0) rotate(-45deg);transition:left 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)}.hamburger--emphatic-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{right:calc(var(--layer-width, 30px) * -2);top:calc(var(--layer-width, 30px) * 2);transform:translate3d(calc(var(--layer-width, 30px) * -2), calc(var(--layer-width, 30px) * -2), 0) rotate(45deg);transition:right 0.125s ease-out, top 0.05s 0.125s linear, transform 0.125s 0.175s cubic-bezier(0.075, 0.82, 0.165, 1)}.hamburger--minus.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--minus.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:bottom 0.08s 0s ease-out, top 0.08s 0s ease-out, opacity 0s linear}.hamburger--minus.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--minus.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{opacity:0;transition:bottom 0.08s ease-out, top 0.08s ease-out, opacity 0s 0.08s linear}.hamburger--minus.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0}.hamburger--minus.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0}.hamburger--slider.svelte-jas1sv .hamburger-inner.svelte-jas1sv{top:calc(var(--layer-height, 4px) / 2)}.hamburger--slider.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition-property:transform, opacity;transition-timing-function:ease;transition-duration:0.15s}.hamburger--slider.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2)}.hamburger--slider.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{--y-offset:calc(\n      var(--layer-spacing, 6px) + var(--layer-height, 4px)\n  );transform:translate3d(0, var(--y-offset), 0) rotate(45deg)}.hamburger--slider.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:rotate(-45deg) translate3d(clac(var(--layer-width, 30px)/-7), calc(var(--layer-spacing, 6px) * -1), 0);opacity:0}.hamburger--slider.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc(var(--y-offset) * -2), 0) rotate(-90deg)}.hamburger--slider-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{top:calc(var(--layer-height, 4px) / 2)}.hamburger--slider-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition-property:transform, opacity;transition-timing-function:ease;transition-duration:0.15s}.hamburger--slider-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2)}.hamburger--slider-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{--y-offset:calc(\n      var(--layer-spacing, 6px) + var(--layer-height, 4px)\n  );transform:translate3d(0, var(--y-offset), 0) rotate(-45deg)}.hamburger--slider-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transform:rotate(45deg) translate3d(calc(var(--layer-width, 30px) / 7), calc(var(--layer-spacing, 6px) * -1), 0);opacity:0}.hamburger--slider-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transform:translate3d(0, calc(var(--y-offset) * -2), 0) rotate(90deg)}.hamburger--spin.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition-duration:0.22s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spin.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.1s 0.25s ease-in, opacity 0.1s ease-in}.hamburger--spin.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spin.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(225deg);transition-delay:0.12s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spin.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;opacity:0;transition:top 0.1s ease-out, opacity 0.1s 0.12s ease-out}.hamburger--spin.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:rotate(-90deg);transition:bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spin-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition-duration:0.22s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spin-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.1s 0.25s ease-in, opacity 0.1s ease-in}.hamburger--spin-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spin-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(-225deg);transition-delay:0.12s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spin-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;opacity:0;transition:top 0.1s ease-out, opacity 0.1s 0.12s ease-out}.hamburger--spin-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:rotate(90deg);transition:bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spring.svelte-jas1sv .hamburger-inner.svelte-jas1sv{top:var(--layer-height, 4px)/2;transition:background-color 0s 0.13s linear}.hamburger--spring.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));transition:top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spring.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc(var(--layer-height, 4px) * 2 + var(--layer-spacing, 6px) * 2);transition:top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spring.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition-delay:0.22s;background-color:transparent !important}.hamburger--spring.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;transition:top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);transform:translate3d(0, calc(var(--layer-spacing, 6px) + var(--layer-height, 4px)), 0) rotate(45deg)}.hamburger--spring.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:0;transition:top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);transform:translate3d(0, calc(var(--layer-spacing, 6px) + var(--layer-height, 4px)), 0) rotate(-45deg)}.hamburger--spring-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{top:auto;bottom:0;transition-duration:0.13s;transition-delay:0s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spring-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:calc((var(--layer-spacing, 6px) * 2 + var(--layer-height, 4px) * 2) * -1);transition:top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear}.hamburger--spring-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--spring-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:translate3d(0, calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1), 0) rotate(-45deg);transition-delay:0.22s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--spring-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{top:0;opacity:0;transition:top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear}.hamburger--spring-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;transform:rotate(90deg);transition:top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--stand.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear}.hamburger--stand.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--stand.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--stand.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(90deg);background-color:transparent !important;transition:transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear}.hamburger--stand.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;transform:rotate(-45deg);transition:top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--stand.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:rotate(45deg);transition:bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--stand-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition:transform 0.075s 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19), background-color 0s 0.075s linear}.hamburger--stand-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--stand-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:bottom 0.075s 0.075s ease-in, transform 0.075s 0s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--stand-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(-90deg);background-color:transparent !important;transition:transform 0.075s 0s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0s 0.15s linear}.hamburger--stand-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;transform:rotate(-45deg);transition:top 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--stand-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:rotate(45deg);transition:bottom 0.075s 0.1s ease-out, transform 0.075s 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--squeeze.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition-duration:0.075s;transition-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--squeeze.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition:top 0.075s 0.12s ease, opacity 0.075s ease}.hamburger--squeeze.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition:bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)}.hamburger--squeeze.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(45deg);transition-delay:0.12s;transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--squeeze.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;opacity:0;transition:top 0.075s ease, opacity 0.075s 0.12s ease}.hamburger--squeeze.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:rotate(-90deg);transition:bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)}.hamburger--vortex.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition-duration:0.2s;transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.hamburger--vortex.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--vortex.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition-duration:0s;transition-delay:0.1s;transition-timing-function:linear}.hamburger--vortex.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition-property:top, opacity}.hamburger--vortex.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition-property:bottom, transform}.hamburger--vortex.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(765deg);transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.hamburger--vortex.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--vortex.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition-delay:0s}.hamburger--vortex.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;opacity:0}.hamburger--vortex.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:rotate(90deg)}.hamburger--vortex-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transition-duration:0.2s;transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.hamburger--vortex-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--vortex-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition-duration:0s;transition-delay:0.1s;transition-timing-function:linear}.hamburger--vortex-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{transition-property:top, opacity}.hamburger--vortex-r.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition-property:bottom, transform}.hamburger--vortex-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv{transform:rotate(-765deg);transition-timing-function:cubic-bezier(0.19, 1, 0.22, 1)}.hamburger--vortex-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before,.hamburger--vortex-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{transition-delay:0s}.hamburger--vortex-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::before{top:0;opacity:0}.hamburger--vortex-r.is-active.svelte-jas1sv .hamburger-inner.svelte-jas1sv::after{bottom:0;transform:rotate(-90deg)}',
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { type = "spin" } = $$props;
  let { ariaLabel = "Hamburger menu" } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  $$result.css.add(css$6);
  return `


<button class="${[
    "hamburger hamburger--" + escape(type, true) + " svelte-jas1sv",
    open ? "is-active" : ""
  ].join(" ").trim()}"${add_attribute("aria-label", ariaLabel, 0)}><span class="${"hamburger-box svelte-jas1sv"}"><span class="${"hamburger-inner svelte-jas1sv"}"></span></span>
</button>`;
});
const LightboxThumbnail_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.svelte-hpqpx9{position:static;cursor:zoom-in}.svelte-lightbox-thumbnail > *{max-width:100%;height:auto}",
  map: null
};
const LightboxThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$5);
  return `<div${spread([escape_object($$restProps)], {
    classes: "svelte-lightbox-thumbnail svelte-hpqpx9"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const BodyChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let targetElement;
  let child;
  const removeTarget = () => {
    if (typeof document !== "undefined") {
      document.body.removeChild(child);
    }
  };
  onDestroy(removeTarget);
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", targetElement, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const LightboxHeader_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-lightbox-header.svelte-5qj430{width:auto;height:3rem;display:flex;justify-content:flex-end;align-items:center}div.svelte-lightbox-header.fullscreen.svelte-5qj430{position:fixed;z-index:5;top:0;left:0;right:0}button.svelte-5qj430{background:transparent;font-size:3rem;border:none;color:white}button.svelte-5qj430:hover{color:lightgray;cursor:pointer}button.svelte-5qj430:active{background-color:transparent}button.fullscreen.svelte-5qj430{filter:drop-shadow(0 0 5px black) drop-shadow(0 0 10px black)}",
  map: null
};
const LightboxHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["closeButtonProps", "showCloseButton", "enableEscapeToClose", "imagePreset"]);
  createEventDispatcher();
  let { closeButtonProps = {} } = $$props;
  let { showCloseButton } = $$props;
  let { enableEscapeToClose } = $$props;
  let { imagePreset } = $$props;
  if ($$props.closeButtonProps === void 0 && $$bindings.closeButtonProps && closeButtonProps !== void 0)
    $$bindings.closeButtonProps(closeButtonProps);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css$4);
  return `

<div${spread([{ class: "svelte-lightbox-header" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-5qj430"
  })}>${showCloseButton ? `<button${spread([escape_object(closeButtonProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-5qj430"
  })}>×
        </button>` : ``}
</div>`;
});
const LightboxBody_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-lightbox-body.svelte-1d3ym4l{position:relative;width:auto;height:auto;max-height:80vh}div.svelte-lightbox-body > *{max-width:100%;max-height:inherit;height:auto;width:auto;object-fit:contain}div.svelte-lightbox-body.scroll > *{max-height:100%}div.svelte-lightbox-body.expand > *{flex-grow:1}div.fullscreen.svelte-1d3ym4l{width:inherit;max-width:inherit;height:inherit;max-height:100%;display:flex;align-items:center;justify-content:center}div.scroll.svelte-1d3ym4l{overflow:scroll}",
  map: null
};
const LightboxBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePreset } = $$props;
  let { enableImageExpand } = $$props;
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  $$result.css.add(css$3);
  return `<div class="${[
    "svelte-lightbox-body svelte-1d3ym4l",
    (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " " + (enableImageExpand ? "expand" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
const i18n = writable({
  generateLocalizedGalleryCounter: (activeImage, imageCount) => {
    return `Image ${activeImage + 1} of ${imageCount}`;
  }
});
const LightboxFooter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-lightbox-footer.svelte-6fc1ka{width:100%;height:auto;color:white;text-align:left;position:absolute}div.svelte-lightbox-footer.fullscreen.svelte-6fc1ka{position:fixed;z-index:5;bottom:0;left:0;right:0;padding-left:1rem}",
  map: null
};
const LightboxFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let localizedGalleryCounter;
  let $$restProps = compute_rest_props($$props, ["imagePreset", "title", "description", "gallery"]);
  let $i18n, $$unsubscribe_i18n;
  $$unsubscribe_i18n = subscribe(i18n, (value) => $i18n = value);
  let { imagePreset } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { gallery = null } = $$props;
  const generateLocalizedGalleryCounter = (i18n2, gallery2) => {
    if (gallery2 !== null) {
      return i18n2.generateLocalizedGalleryCounter(gallery2.activeImage, gallery2.imageCount);
    }
  };
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.gallery === void 0 && $$bindings.gallery && gallery !== void 0)
    $$bindings.gallery(gallery);
  $$result.css.add(css$2);
  localizedGalleryCounter = generateLocalizedGalleryCounter($i18n, gallery);
  $$unsubscribe_i18n();
  return `<div${spread([{ class: "svelte-lightbox-footer" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-6fc1ka"
  })}><h2><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h2>
    <h5><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></h5>
    ${gallery !== null ? `<p>${escape(localizedGalleryCounter)}</p>` : ``}
</div>`;
});
const ModalCover_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: `div.svelte-lightbox-overlay.svelte-7wg54p{position:fixed;z-index:1000000!important;background-color:rgba(43, 39, 45, 0.87);top:0;bottom:0;left:0;right:0;overflow:hidden;width:100%;height:100%;display:flex;align-items:center;justify-content:center}div.svelte-lightbox-overlay.svelte-7wg54p::before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;opacity:0;z-index:-1}div.svelte-lightbox-overlay.svelte-7wg54p::after{content:"";clear:both;display:table}`,
  map: null
};
const ModalCover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration"]);
  let { transitionDuration } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  $$result.css.add(css$1);
  return `<div${spread([{ class: "svelte-lightbox-overlay" }, escape_object($$restProps)], { classes: "svelte-7wg54p" })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-lightbox-main.svelte-891jqp{position:relative;max-width:100%;max-height:100%;height:auto;width:auto;background-color:transparent}div.svelte-lightbox-main.fullscreen.svelte-891jqp{height:inherit;width:inherit;max-height:inherit;max-width:inherit}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration", "imagePreset"]);
  let { transitionDuration } = $$props;
  let { imagePreset } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css);
  return `<div${spread([{ class: "svelte-lightbox-main" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " svelte-891jqp"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Lightbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { imagePreset = "" } = $$props;
  let { customization = {} } = $$props;
  let { transitionDuration = 300 } = $$props;
  let { keepBodyScroll = false } = $$props;
  let { enableImageExpand = false } = $$props;
  let { enableFallbackThumbnail = true } = $$props;
  let { enableEscapeToClose = true } = $$props;
  let { enableClickToClose = false } = $$props;
  let { showCloseButton = true } = $$props;
  let { isVisible = false } = $$props;
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
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.customization === void 0 && $$bindings.customization && customization !== void 0)
    $$bindings.customization(customization);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.keepBodyScroll === void 0 && $$bindings.keepBodyScroll && keepBodyScroll !== void 0)
    $$bindings.keepBodyScroll(keepBodyScroll);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  if ($$props.enableFallbackThumbnail === void 0 && $$bindings.enableFallbackThumbnail && enableFallbackThumbnail !== void 0)
    $$bindings.enableFallbackThumbnail(enableFallbackThumbnail);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.enableClickToClose === void 0 && $$bindings.enableClickToClose && enableClickToClose !== void 0)
    $$bindings.enableClickToClose(enableClickToClose);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  if ($$props.programmaticController === void 0 && $$bindings.programmaticController && programmaticController !== void 0)
    $$bindings.programmaticController(programmaticController);
  return `${$$slots.thumbnail || enableFallbackThumbnail ? `${validate_component(LightboxThumbnail, "Thumbnail").$$render($$result, Object.assign(customization?.thumbnailProps || {}), {}, {
    default: () => {
      return `${$$slots.thumbnail ? `${slots.thumbnail ? slots.thumbnail({}) : ``}` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}` : ``}

${isVisible ? `${validate_component(BodyChild, "BodyChild").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalCover, "ModalCover").$$render($$result, Object.assign({ transitionDuration }, customization.coverProps || {}), {}, {
        default: () => {
          return `${validate_component(Modal, "Modal").$$render($$result, Object.assign({ imagePreset }, { transitionDuration }, customization.lightboxProps || {}), {}, {
            default: () => {
              return `${validate_component(LightboxHeader, "Header").$$render(
                $$result,
                Object.assign(
                  { imagePreset },
                  { showCloseButton },
                  { enableEscapeToClose },
                  {
                    closeButtonProps: customization.closeButtonProps
                  },
                  customization.lightboxHeaderProps || {}
                ),
                {},
                {}
              )}

				${validate_component(LightboxBody, "Body").$$render($$result, { imagePreset, enableImageExpand }, {}, {
                default: () => {
                  return `${slots.default ? slots.default({}) : ``}`;
                }
              })}

				${validate_component(LightboxFooter, "Footer").$$render($$result, Object.assign({ imagePreset }, { title }, { description }, customization.lightboxFooterProps || {}), {}, {})}`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``}`;
});
const PreviousImageButton_svelte_svelte_type_style_lang = "";
const NextImageButton_svelte_svelte_type_style_lang = "";
const GalleryThumbnail_svelte_svelte_type_style_lang = "";
export {
  Hamburger as H,
  Lightbox as L
};
