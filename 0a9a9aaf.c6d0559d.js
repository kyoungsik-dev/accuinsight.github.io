(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{334:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},y=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),y=n,b=s["".concat(a,".").concat(y)]||s[y]||f[y]||p;return t?o.a.createElement(b,i(i({ref:r},l),{},{components:t})):o.a.createElement(b,i({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<p;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},65:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(1),o=t(6),p=(t(0),t(334)),a={title:"Property"},i={unversionedId:"pipeline/workflow/workspace/configuration/property",id:"pipeline/workflow/workspace/configuration/property",isDocsHomePage:!1,title:"Property",description:"Property",source:"@site/docs/pipeline/workflow/workspace/configuration/property.md",permalink:"/docs/pipeline/workflow/workspace/configuration/property",sidebar:"pipeline",previous:{title:"Parameter",permalink:"/docs/pipeline/workflow/workspace/configuration/parameter"},next:{title:"ICOS \ubd88\ub7ec\uc624\uae30",permalink:"/docs/pipeline/workflow/workspace/import-data/icos"}},c=[{value:"Property",id:"property",children:[]}],l={rightToc:c};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"property"},"Property"),Object(p.b)("p",null,"\ub178\ub4dc\ubcc4 \uc18d\uc131\uc815\ubcf4\ub97c Property \ud0ed\uc5d0\uc11c \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub178\ub4dc\ubcc4\ub85c \uc124\uc815\ud574\uc57c \ud560 Property \uc815\ubcf4\ub294 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(p.b)("p",null,"ex) pyspark Node"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"mode : spark deploy mode\ub97c \uc758\ubbf8\ud558\uba70 \uc785\ub825\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 cluster mode\ub85c \uc218\ud589"),Object(p.b)("li",{parentName:"ol"},"appName : app name \uc9c0\uc815"),Object(p.b)("li",{parentName:"ol"},"source : \uc791\uc131\ub41c \uc6cc\ud06c\ud50c\ub85c\uc6b0\uc5d0 \ub300\ud55c pyspark \uc18c\uc2a4 \uc870\ud68c"),Object(p.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc9c0\uc815 \uac00\ub2a5 "),Object(p.b)("li",{parentName:"ol"},"sparkOpts : spark \uc2e4\ud589 options \uc9c0\uc815 \uac00\ub2a5(ex: executor \uc218, executor \uba54\ubaa8\ub9ac \ub4f1)"),Object(p.b)("li",{parentName:"ol"},"pysparkPython :pyspark\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 python \uacbd\ub85c\ub97c \uc124\uc815"),Object(p.b)("li",{parentName:"ol"},"pythonPath : pyspark\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 python \uc0ac\uc6a9\uc790 \ud328\ud0a4\uc9c0 \uacbd\ub85c\ub97c \uc124\uc815"),Object(p.b)("li",{parentName:"ol"},"forceOK : \uc624\ub958\uac00 \ubc1c\uc0dd\ud574\ub3c4 \ub2e4\uc74c \ub178\ub4dc\ub85c \uc774\ub3d9 ")))}u.isMDXComponent=!0}}]);