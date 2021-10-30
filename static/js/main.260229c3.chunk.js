(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(16),a=c.n(s),i=(c(24),c(8)),r=(c(25),c(26),c(3)),j=(c(27),c(0));function l(e){return Object(j.jsxs)("nav",{className:"mainnav",children:[Object(j.jsx)(r.c,{activeClassName:"activeLink",to:"/films",children:"Films"}),Object(j.jsx)(r.c,{activeClassName:"activeLink",to:"/people",children:"People"}),Object(j.jsx)(r.c,{activeClassName:"activeLink",to:"/planets",children:"Planets"})]})}function o(e){return Object(j.jsxs)("header",{className:"masthead",children:[Object(j.jsx)("h1",{children:Object(j.jsx)(r.b,{to:"/",children:e.company})}),Object(j.jsx)(l,{})]})}c(34);var b=Object(n.forwardRef)((function(e,t){e.keyword,e.saveSearch;return Object(j.jsxs)("section",{className:"searchBar",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("submitted")},children:[Object(j.jsx)("input",{type:"text",ref:t,name:"keyword",className:"searchText",placeholder:"keyword"}),Object(j.jsx)("button",{type:"submit",className:"searchBtn",name:"searchBtn",children:"Search"})]}),e.term&&Object(j.jsxs)("p",{children:["You searched for ",e.term]})]})})),d=c(2),h=c(14),O=c.n(h),u=c(19);c(36);function x(e){var t=e.time,c=e.active,n=e.name,s=Array.isArray(n)?n.join(" and "):n;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h1",{children:["Welcome ",s,", to the Home page"]}),Object(j.jsxs)("p",{children:["The time is ",new Date(t).toLocaleTimeString()]}),Object(j.jsxs)("p",{children:["The component is ",c?"active":"NOT active"]}),e.children]})}function p(e){var t=e.findFilm,c=Object(n.useState)(null),s=Object(i.a)(c,2),a=s[0],r=s[1],l=Object(d.h)().id;Object(n.useEffect)((function(){r(t(l))}),[t,l]);var o=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:a&&a.title}),Object(j.jsx)("p",{children:a&&a.release_date})]});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Film Details"}),a&&o]})}x.defaultProps={time:Date.now()};c(37);function m(e){var t=e.list;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"results",children:[Object(j.jsx)("h2",{children:"Film List"}),0===t.length&&Object(j.jsx)("p",{children:"No films..."}),t.map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsx)(r.c,{activeClassName:"activeLink",to:"/films/".concat(t+1),children:e.title})},e.title)}))]}),Object(j.jsx)("div",{className:"details",children:Object(j.jsx)(d.b,{path:"/films/:id",children:Object(j.jsx)(p,{findFilm:function(e){return t.find((function(t,c){return parseInt(e)===c+1}))}})})})]})}c(38);function f(e){var t=e.list;return Object(j.jsxs)("div",{className:"results",children:[Object(j.jsx)("h2",{children:"People List"}),0===(null===t||void 0===t?void 0:t.length)&&Object(j.jsx)("p",{children:"No people..."}),null===t||void 0===t?void 0:t.map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsx)(r.c,{activeClassName:"activeLink",to:"/people/".concat(t+1),children:e.name})},e.name)}))]})}function v(e){var t=e.list,c=Object(d.h)().id,n=t.find((function(e,t){return parseInt(c)===t+1}));return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{children:["Person Details ",c]}),n&&Object(j.jsx)("p",{children:n.name}),n&&Object(j.jsx)("p",{children:n.birth_year})]})}function N(e){var t=e.findPlanet,c=Object(n.useState)(null),s=Object(i.a)(c,2),a=s[0],r=s[1],l=Object(d.h)().id;Object(n.useEffect)((function(){r(t(l))}),[t,l]);var o=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:a&&a.name}),Object(j.jsx)("p",{children:a&&a.terrain})]});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Planet Details"}),a&&"Alderaan"===a.name?"Too soon.":o]})}c(39);function g(e){var t=e.list;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"results",children:[Object(j.jsx)("h2",{children:"Planet List"}),0===t.length&&Object(j.jsx)("p",{children:"No planets..."}),t.map((function(e,t){return Object(j.jsx)("p",{children:Object(j.jsx)(r.c,{activeClassName:"activeLink",to:"/planets/".concat(t+1),children:e.name})},e.name)}))]}),Object(j.jsx)("div",{className:"details",children:Object(j.jsx)(d.b,{path:"/planets/:id",children:Object(j.jsx)(N,{findPlanet:function(e){return t.find((function(t,c){return parseInt(e)===c+1}))}})})})]})}function k(){return Object(j.jsx)("section",{children:Object(j.jsx)("p",{children:"Just a section to insert inside Home."})})}function y(e){var t=Object(d.g)().pathname,c=e.keyword,s=Object(n.useState)([]),a=Object(i.a)(s,2),r=a[0],l=a[1],o=Object(n.useState)([]),b=Object(i.a)(o,2),h=b[0],N=b[1],y=Object(n.useState)([]),w=Object(i.a)(y,2),S=w[0],F=w[1];return Object(n.useEffect)((function(){Object(u.a)(O.a.mark((function e(){var n,s,a,i,r,j,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="https://swapi.dev/api",!(t.indexOf("/people")>-1)){e.next=9;break}return e.next=4,fetch("".concat(n,"/people?search=").concat(c));case 4:return s=e.sent,e.next=7,s.json();case 7:a=e.sent,l(a.results);case 9:if(!(t.indexOf("/films")>-1)){e.next=17;break}return e.next=12,fetch("".concat(n,"/films?search=").concat(c));case 12:return i=e.sent,e.next=15,i.json();case 15:r=e.sent,F(r.results);case 17:if(!(t.indexOf("/planets")>-1)){e.next=25;break}return e.next=20,fetch("".concat(n,"/planets?search=").concat(c));case 20:return j=e.sent,e.next=23,j.json();case 23:o=e.sent,N(o.results);case 25:case"end":return e.stop()}}),e)})))()}),[t,c]),Object(j.jsx)("div",{className:"mainContainer",children:Object(j.jsxs)(d.d,{children:[Object(j.jsxs)(d.b,{path:"/films",children:[Object(j.jsx)(m,{list:S}),Object(j.jsx)(d.b,{path:"/films/:id",children:Object(j.jsx)(p,{list:S})})]}),Object(j.jsxs)(d.b,{path:"/people",children:[Object(j.jsx)(f,{list:r}),Object(j.jsx)(d.b,{path:"/people/:id",children:Object(j.jsx)(v,{list:r})})]}),Object(j.jsx)(d.b,{path:"/planets",children:Object(j.jsx)(g,{list:h})}),Object(j.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(j.jsxs)(x,{name:"aboulmgd",active:!1,time:new Date-5e7,children:[Object(j.jsx)(k,{}),Object(j.jsx)(k,{})]})}}),Object(j.jsx)(d.a,{to:"/"})]})})}var w=function(){var e=Object(d.g)().pathname,t=Object(n.useState)(e),c=Object(i.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),h=l[0],O=l[1];Object(n.useEffect)((function(){var t=e.split("/")[1];console.log(t),t!==s.split("/")[1]?(a(e),console.log("CHANGED the base path"),O("")):console.log("same base path")}),[e,s]);var u=Object(n.createRef)();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{company:"Company Name"}),Object(j.jsx)(b,{ref:u,keyword:h,saveSearch:function(e){O(e)}}),Object(j.jsx)("main",{className:"content",children:Object(j.jsx)(y,{keyword:h})})]})};a.a.render(Object(j.jsx)(r.a,{hashType:"slash",children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.260229c3.chunk.js.map