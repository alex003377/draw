/*! For license information please see wc-gs.1a3c1e8d1ab2249fd374.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5,9],{81:function(e,t,a){"use strict";var n=a(0);Object.create;Object.create;function s(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function r(e,t,a){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,a),a}var o=class{constructor(){this.callbacks=new Map}add(e,t){this.callbacks.set(e,t)}addAndGetId(e){const t=Math.random().toString(36).slice(2);return this.add(t,e),t}resolve(e,t){this.getCallbackAndDelete(e)(null,t)}reject(e,t){this.getCallbackAndDelete(e)(t)}getCallbackAndDelete(e){const t=this.callbacks.get(e);if(!t)throw new Error("no resolver with id = "+e);return this.callbacks.delete(e),t}};const c=(e,t)=>(a,n)=>{a?t(a):e(n)};var l,u,i,m=class{constructor(){this.manager=new o}getPromise(e){return new Promise(async(t,a)=>{const n=c(t,a);this.manager.add(e,n)})}getPromiseWithId(e){return new Promise(async(t,a)=>{const n=c(t,a),s=this.manager.addAndGetId(n);e&&e(s)})}resolve(e,t){this.manager.resolve(e,t)}reject(e,t){this.manager.reject(e,t)}},d=a(87),p=a.n(d);l=new WeakMap,u=new WeakMap,i=new WeakMap;var b=class{constructor(e,t){l.set(this,void 0),u.set(this,new m),i.set(this,void 0),r(this,i,t),r(this,l,e),s(this,l).onmessage=e=>{const{messageId:t,data:a}=e.data;s(this,u).resolve(t,a)}}sendAndReceive(e){const t=s(this,u).getPromiseWithId(t=>{s(this,l).postMessage({messageId:t,data:e})});return void 0===s(this,i)?t:p()(t,s(this,i))}terminate(){s(this,l).terminate()}};t.a=e=>{const t=Object(n.useMemo)(()=>new b(new e,12e4),[]);return Object(n.useEffect)(()=>()=>{t.terminate()},[]),Object(n.useCallback)(t.sendAndReceive.bind(t),[t])}},82:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(1),o=a(68),c=a(61),l=a(66),u=a(92),i=a(63),m=a(60),d=a(74),p=a(67),b=a(75),h=a(83);const f=r.e`
  from {
    background-color: white;
    box-shadow: 0 0 20px #08f;
  }
  to {}
`,g=r.e`
  from {
    background-color: rgba(255, 255, 0, 0.5);
  }
  to {}
`,w=r.c`
  position: relative; /* enables glow */
  animation: ${f} 1s ease;
  box-shadow: 0 0 5px #6af;
`,E=r.c`
  animation: ${g} 5s normal forwards;
`;var j=Object(r.d)(m.a)`
  ${e=>e.possible&&w}
  ${e=>e.hasTeam&&E}
`,v=a(62),k=e=>{var t;return null!==(t=e.country)&&void 0!==t?t:e.name in v?e.name:void 0};var O=Object(n.memo)(({team:e,possible:t})=>{var a;const r=Object(d.a)(e),[o,c]=Object(n.useState)(e),l=Object(n.useRef)(null),u=Object(n.useCallback)(()=>{c(e)},[e]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(j,{hasTeam:!!o,possible:t},o?s.a.createElement(p.a,{country:k(o)},null!==(a=o.shortName)&&void 0!==a?a:o.name):s.a.createElement(b.a,{ref:l})),e&&e!==r&&s.a.createElement(h.a,{from:`[data-cellid='${e.id}']`,to:l,duration:350,data:e,onAnimationEnd:u}))});var y=Object(n.memo)(({maxTeams:e,groupLetter:t,teams:a,potNum:n,possible:r,headerStyles:o})=>s.a.createElement(l.a,null,s.a.createElement("thead",null,s.a.createElement(i.a,null,s.a.createElement(m.a,null,s.a.createElement(u.a,{styles:o},"Group"," ",t)))),s.a.createElement("tbody",null,c(e).map(e=>s.a.createElement(i.a,{key:e},s.a.createElement(O,{team:a[e],possible:e===n&&r}))))));const P=r.d.div`
  display: flex;
  flex-flow: row wrap;

  & > * {
    flex: 1;
    flex-basis: 22%;
  }
`,T=Object(n.forwardRef)(({maxTeams:e,currentPotNum:t,groups:a,possibleGroups:n,getGroupHeaderStyles:r},c)=>s.a.createElement(P,{ref:c},null==a?void 0:a.map((a,c)=>{const l=Object(o.a)(c),u=null==r?void 0:r(c);return s.a.createElement(y,{key:l,maxTeams:e,groupLetter:l,teams:a,potNum:t,possible:!!(null==n?void 0:n.includes(c)),headerStyles:u})})));t.a=Object(n.memo)(T)},98:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(1),o=a(25),c=a(72),l=a(73),u=a(2),i=a(64),m=a(65),d=a(69),p=a(81),b=a(80),h=a(82),f=a(76),g=a(77),w=a(84),E=a(79),j=a(78),v=a(99);const k=o(r.c`
  background-color: #c0e0c0;
`);function O(e){const t=e.map(e=>l(e));return{currentPotNum:0,selectedTeam:null,pickedGroup:null,hungPot:t[0],pots:t,groups:e[0].map(()=>[])}}t.default=Object(n.memo)(({season:e,pots:t})=>{const[a,r]=Object(i.a)(),[o,l]=Object(m.a)(),[{currentPotNum:y,selectedTeam:P,pickedGroup:T,hungPot:G,pots:x,groups:N},A]=Object(n.useState)(()=>O(t));Object(n.useEffect)(()=>{A(O(t))},[t,a]);const[,S]=Object(u.a)(),[C]=Object(d.a)(),I=Object(p.a)(v.default),M=Object(n.useRef)(null),W=Object(n.useCallback)(e=>{if(P)return;const t=x[y][e];if(!t)return;const a=x.slice();a[y]=a[y].filter((t,a)=>a!==e),A({currentPotNum:y,hungPot:G,selectedTeam:t,pickedGroup:null,pots:a,groups:N})},[x,N,y,G,P]);Object(n.useEffect)(()=>{P&&(async()=>{if(!P)throw new Error("no selected team");let t;try{t=(await I({season:e,pots:x,groups:N,selectedTeam:P})).pickedGroup}catch(e){return console.error(e),void S({error:"Could not determine the group"})}const a=N.slice();a[t]=[...a[t],P];const n=x[y].length>0?y:y+1;A({selectedTeam:null,pickedGroup:t,hungPot:x[n],currentPotNum:n,pots:x,groups:a})})()},[P]),Object(n.useEffect)(()=>{const e=x[y].findIndex(e=>e.host);W(e)},[a]);const R=y>=x.length;Object(n.useEffect)(()=>{const e=null==G?void 0:G.length;if(o&&e){const t=c(e-1);W(t)}},[o,G]),Object(n.useEffect)(()=>{R&&o&&l(!1)},[R,o]);const $=N.length;return s.a.createElement(j.a,null,s.a.createElement(f.a,null,s.a.createElement(b.a,{selectedTeams:P&&[P],initialPots:t,pots:x,currentPotNum:y}),s.a.createElement(h.a,{ref:M,maxTeams:x.length,currentPotNum:y,groups:N,possibleGroups:null,getGroupHeaderStyles:k})),s.a.createElement(g.a,null,!o&&s.a.createElement(w.a,{forceNoSelect:!!P,display:!R,displayTeams:C,selectedTeam:P,pot:G,onPick:W}),s.a.createElement(E.a,{long:!0,completed:R,selectedTeam:P,pickedGroup:T,possibleGroups:null,isDisplayPossibleGroupsText:!!P,numGroups:$,groupsElement:M,reset:r})))})},99:function(e,t,a){"use strict";a.r(t),t.default=function(){return new Worker(a.p+"worker.a585cdb0fc6eef68244c.worker.js")}}},0,[80]]);