(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{297:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(1),n=r(6),o=(r(0),r(376)),p={title:"removeTa"},c={id:"pipeline/workflow/workspace/data-processing-advanced/remove-ta",isDocsHomePage:!1,title:"removeTa",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-advanced/remove-ta.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/remove-ta",sidebar:"pipeline",previous:{title:"dropSaturateCol",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/drop-saturate-col"},next:{title:"removeTaAuto",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/remove-ta-auto"}},i=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:i};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uc815\ud574\uc9c4 \uae30\uac04\ub9cc\ud07c\uc758 \ub370\uc774\ud130 \ud589\uc744 \uc0ad\uc81c\ud569\ub2c8\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[removeTa]","\ub178\ub4dc\ub97c drag & drop \ud569\ub2c8\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/removeTa_property.png",alt:"removeTa"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"col : \ub0a0\uc9dc \uceec\ub7fc\uc744 \uc120\ud0dd")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"dateFormat : \ub0a0\uc9dc \ud3ec\ub9f7\uc744 \uc9c0\uc815")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"start : \uc2dc\uc791 \ub0a0\uc9dc\ub97c \uc120\ud0dd")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"end : \uc885\ub8cc \ub0a0\uc9dc\ub97c \uc120\ud0dd")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"extraNum : \ub0a0\uc9dc \ubc94\uc704 \uc804\ud6c4\ub85c \ucd94\uac00\ub85c \ud655\uc778\ud560 \uac12")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"extraType : \ub0a0\uc9dc \ubc94\uc704 \uc804\ud6c4\ub85c \ucd94\uac00\ub85c \ud655\uc778\ud560 \uac12\uc758 \ub2e8\uc704. \uc120\ud0dd\ud560 \uc218 \uc788\ub294 extraType\uc740 \uc544\ub798\uc640 \uac19\ub2e4."),Object(o.b)("table",{parentName:"li"},Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"extraType \ucf54\ub4dc"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"second")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"minute")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"hour")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"day")))))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"timestamp \ud0c0\uc785\uc758 \uceec\ub7fc \uc815\ubcf4\uac00 \ud2b9\uc815 \uc2dc\uc791\uc77c\uc790 ~ \uc885\ub8cc\uc77c\uc790\uc5d0 \ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\ub9cc \ub0a8\uae30\uace0 \uc0ad\uc81c\ud558\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4.  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[removeTa]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/removeTa.png",alt:"removeTa"})))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[removeTa]","\ub178\ub4dc\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/removeTa_example.png",alt:"removeTa"}))))))}b.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=b(r),u=a,s=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return r?n.a.createElement(s,c(c({ref:t},l),{},{components:r})):n.a.createElement(s,c({ref:t},l))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);