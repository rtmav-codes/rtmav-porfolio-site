import{H as W,I as re,j as ie,J as Z,o as T,K as H,L as fe,i as te,M as F,N as le,O as X,P as D,p as k,Q as M,R as j,k as m,S as ne,T as q,U as $,V as z,W as x,X as ue,Y as ce,Z as oe,m as ve,_ as _e,$ as de,a0 as he,a1 as pe,a2 as Ae,a3 as G,a4 as ge,a5 as Ee,a6 as Ne,a7 as ye,a8 as Te,a9 as Ie,aa as be}from"./runtime.CdVCie9p.js";import{i as we,b as Le,d as ke,n as Ce,f as Me}from"./disclose-version.BbMfgiD7.js";function Oe(e,a){if(a){const s=document.body;e.autofocus=!0,W(()=>{document.activeElement===s&&e.focus()})}}function Be(e,a){return a}function Re(e,a,s,r){for(var c=[],v=a.length,d=0;d<v;d++)ue(a[d].e,c,!0);var h=v>0&&c.length===0&&s!==null;if(h){var g=s.parentNode;ce(g),g.append(s),r.clear(),w(e,a[0].prev,a[v-1].next)}oe(c,()=>{for(var E=0;E<v;E++){var p=a[E];h||(r.delete(p.k),w(e,p.prev,p.next)),ve(p.e,!h)}})}function Ke(e,a,s,r,c,v=null){var d=e,h={flags:a,items:new Map,first:null},g=(a&Z)!==0;if(g){var E=e;d=T?H(_e(E)):E.appendChild(re())}T&&fe();var p=null,y=!1;ie(()=>{var N=s(),l=te(N)?N:N==null?[]:F(N),u=l.length;if(y&&u===0)return;y=u===0;let f=!1;if(T){var I=d.data===le;I!==(u===0)&&(d=X(),H(d),D(!1),f=!0)}if(T){for(var t=null,n,_=0;_<u;_++){if(k.nodeType===8&&k.data===de){d=k,f=!0,D(!1);break}var A=l[_],i=r(A,_);n=ee(k,h,t,null,A,i,_,c,a),h.items.set(i,n),t=n}u>0&&H(X())}if(!T){var o=he;Se(l,h,d,c,a,(o.f&M)!==0,r)}v!==null&&(u===0?p?j(p):p=m(()=>v(d)):p!==null&&ne(p,()=>{p=null})),f&&D(!0),s()}),T&&(d=k)}function Se(e,a,s,r,c,v,d,h){var Y,B,K,P;var g=(c&pe)!==0,E=(c&($|x))!==0,p=e.length,y=a.items,N=a.first,l=N,u,f=null,I,t=[],n=[],_,A,i,o;if(g)for(o=0;o<p;o+=1)_=e[o],A=d(_,o),i=y.get(A),i!==void 0&&((Y=i.a)==null||Y.measure(),(I??(I=new Set)).add(i));for(o=0;o<p;o+=1){if(_=e[o],A=d(_,o),i=y.get(A),i===void 0){var O=l?l.e.nodes_start:s;f=ee(O,a,f,f===null?a.first:f.next,_,A,o,r,c),y.set(A,f),t=[],n=[],l=f.next;continue}if(E&&He(i,_,o,c),i.e.f&M&&(j(i.e),g&&((B=i.a)==null||B.unfix(),(I??(I=new Set)).delete(i))),i!==l){if(u!==void 0&&u.has(i)){if(t.length<n.length){var C=n[0],b;f=C.prev;var V=t[0],R=t[t.length-1];for(b=0;b<t.length;b+=1)J(t[b],C,s);for(b=0;b<n.length;b+=1)u.delete(n[b]);w(a,V.prev,R.next),w(a,f,V),w(a,R,C),l=C,f=R,o-=1,t=[],n=[]}else u.delete(i),J(i,l,s),w(a,i.prev,i.next),w(a,i,f===null?a.first:f.next),w(a,f,i),f=i;continue}for(t=[],n=[];l!==null&&l.k!==A;)(v||!(l.e.f&M))&&(u??(u=new Set)).add(l),n.push(l),l=l.next;if(l===null)continue;i=l}t.push(i),f=i,l=i.next}if(l!==null||u!==void 0){for(var L=u===void 0?[]:F(u);l!==null;)(v||!(l.e.f&M))&&L.push(l),l=l.next;var S=L.length;if(S>0){var se=c&Z&&p===0?s:null;if(g){for(o=0;o<S;o+=1)(K=L[o].a)==null||K.measure();for(o=0;o<S;o+=1)(P=L[o].a)==null||P.fix()}Re(a,L,se,y)}}g&&W(()=>{var U;if(I!==void 0)for(i of I)(U=i.a)==null||U.apply()}),q.first=a.first&&a.first.e,q.last=f&&f.e}function He(e,a,s,r){r&$&&z(e.v,a),r&x?z(e.i,s):e.i=s}function ee(e,a,s,r,c,v,d,h,g,E){var p=(g&$)!==0,y=(g&ge)===0,N=p?y?Ae(c):G(c):c,l=g&x?G(d):d,u={i:l,v:N,k:v,a:null,e:null,prev:s,next:r};try{return u.e=m(()=>h(e,N,l),T),u.e.prev=s&&s.e,u.e.next=r&&r.e,s===null?a.first=u:(s.next=u,s.e.next=u.e),r!==null&&(r.prev=u,r.e.prev=u.e),u}finally{}}function J(e,a,s){for(var r=e.next?e.next.e.nodes_start:s,c=a?a.e.nodes_start:s,v=e.e.nodes_start;v!==r;){var d=Ee(v);c.before(v),v=d}}function w(e,a,s){a===null?e.first=s:(a.next=s,a.e.next=s&&s.e),s!==null&&(s.prev=a,s.e.prev=a&&a.e)}function De(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function $e(e,a,s,r){var c=e.__attributes??(e.__attributes={});T&&(c[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||c[a]!==(c[a]=s)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Ne]=s),s==null?e.removeAttribute(a):typeof s!="string"&&ae(e).includes(a)?e[a]=s:e.setAttribute(a,s))}function Pe(e,a,s,r,c=!1,v=!1,d=!1){var h=a||{},g=e.tagName==="OPTION";for(var E in a)E in s||(s[E]=null);r!==void 0&&(s.class=s.class?s.class+" "+r:r);var p=ae(e),y=e.__attributes??(e.__attributes={});for(const t in s){let n=s[t];if(g&&t==="value"&&n==null){e.value=e.__value="",h[t]=n;continue}var N=h[t];if(n!==N){h[t]=n;var l=t[0]+t[1];if(l!=="$$"){if(l==="on"){const _={},A="$$"+t;let i=t.slice(2);var u=Me(i);if(we(i)&&(i=i.slice(0,-7),_.capture=!0),!u&&N){if(n!=null)continue;e.removeEventListener(i,h[A],_),h[A]=null}if(n!=null)if(u)e[`__${i}`]=n,ke([i]);else{let o=function(O){h[t].call(this,O)};h[A]=Le(i,e,o,_)}else u&&(e[`__${i}`]=void 0)}else if(t==="style"&&n!=null)e.style.cssText=n+"";else if(t==="autofocus")Oe(e,!!n);else if(t==="__value"||t==="value"&&n!=null)e.value=e[t]=e.__value=n;else if(t==="selected"&&g)De(e,n);else{var f=t;c||(f=Ce(f));var I=f==="defaultValue"||f==="defaultChecked";if(n==null&&!v&&!I)if(y[t]=null,f==="value"||f==="checked"){let _=e;if(f==="value"){let A=_.defaultValue;_.removeAttribute(f),_.defaultValue=A}else{let A=_.defaultChecked;_.removeAttribute(f),_.defaultChecked=A}}else e.removeAttribute(t);else I||p.includes(f)&&(v||typeof n!="string")?e[f]=n:typeof n!="function"&&(T&&(f==="src"||f==="href"||f==="srcset")||$e(e,f,n))}t==="style"&&"__styles"in e&&(e.__styles={})}}}return h}var Q=new Map;function ae(e){var a=Q.get(e.nodeName);if(a)return a;Q.set(e.nodeName,a=[]);for(var s,r=e,c=Element.prototype;c!==r;){s=Te(r);for(var v in s)s[v].set&&a.push(v);r=ye(r)}return a}function Ue(e,a){var s=e.__className,r=xe(a);T&&e.className===r?e.__className=r:(s!==r||T&&e.className!==r)&&(a==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function xe(e){return e??""}function Xe(e,a,s){if(s){if(e.classList.contains(a))return;e.classList.add(a)}else{if(!e.classList.contains(a))return;e.classList.remove(a)}}function qe(e,a,s){var r=be(e,a);r&&r.set&&(e[a]=s,Ie(()=>{e[a]=null}))}export{Ue as a,qe as b,Pe as c,Ke as e,Be as i,$e as s,Xe as t};
