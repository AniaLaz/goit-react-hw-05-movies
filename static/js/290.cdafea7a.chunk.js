"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[290],{290:function(e,t,n){n.r(t),n.d(t,{BASEURL_TRENDS:function(){return d},Home:function(){return p},KEY:function(){return l}});var r=n(861),c=n(439),i=n(757),a=n.n(i),o=n(791),s=n(87),u=n(689),f="Home_link__2zIq5",h=n(184),l="5b1449ced393d87bc0a1ea0f9fb4bc3e",d="https://api.themoviedb.org/3/trending/movie/day",p=function(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],i=t[1],p=(0,o.useState)(!1),m=(0,c.Z)(p,2),v=m[0],k=m[1],w=(0,u.TH)();return(0,o.useEffect)((function(){function e(){return(e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,fetch("".concat(d,"?api_key=").concat(l)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){i(e.results)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),window.alert("\u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 9:return e.prev=9,k(!1),e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Trending today"}),v&&(0,h.jsx)("div",{children:"Loading..."}),n.length>0&&(0,h.jsx)("ul",{children:n.map((function(e){var t=e.id,n=e.title;return(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"movies/".concat(t),state:{from:w},className:f,children:n})},t)}))})]})}}}]);
//# sourceMappingURL=290.cdafea7a.chunk.js.map