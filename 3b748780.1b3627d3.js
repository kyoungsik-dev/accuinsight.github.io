(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),c=(n(0),n(218)),o={title:"dataJoin"},i={id:"batchpipeline/workflow/workspace/data-processing-basic/data-join",title:"dataJoin",description:"## dataJoin",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-basic/data-join.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/data-join",sidebar:"batchpipeline",previous:{title:"crosstab",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/crosstab"},next:{title:"distinct",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/distinct"}},b=[{value:"dataJoin",id:"datajoin",children:[]}],l={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"datajoin"},"dataJoin"),Object(c.b)("p",null,"2\uac1c\uc758 \ub178\ub4dc\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c Join\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[dataJoin]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic010_datajoin_workflow.png",alt:"prebasic010"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"col1 : \uccab \ubc88\uc9f8 \ub178\ub4dc \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(c.b)("li",{parentName:"ol"},"col2 : \ub450 \ubc88\uc9f8 \ub178\ub4dc \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4.  "),Object(c.b)("li",{parentName:"ol"},"how : join \uc720\ud615\uc744 \uc120\ud0dd\ud55c\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic011_datajoin_property.png",alt:"prebasic011"}))),Object(c.b)("p",null,"\uc120\ud0dd\ud560 \uc218 \uc788\ub294 join \uc720\ud615\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4. "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"join\uc720\ud615"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"inner"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc870\uc778 \uc870\uac74\uc5d0 \ub9de\ub294 \ud589\ub9cc \uac80\uc0c9")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"outer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left_outer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"col1\uc5d0\uc11c \uc120\ud0dd\ud55c \uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"right_outer"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"col2\uc5d0\uc11c \uc120\ud0dd\ud55c \uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left_semi"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc791\uc131\ud544\uc694")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left_anti"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc791\uc131\ud544\uc694")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cross"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\ub450 \ub178\ub4dc\uc758 \uce74\ud2f0\uc158 \ud504\ub85c\ub355\ud2b8(\uacf1\uc9d1\ud569)\uacb0\uacfc\ub97c \ucd94\ucd9c")))))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,d=u["".concat(o,".").concat(O)]||u[O]||s[O]||c;return n?r.a.createElement(d,i({ref:t},l,{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);