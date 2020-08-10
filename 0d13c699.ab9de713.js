(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{333:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return m}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},s=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=t,m=s["".concat(i,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(m,c(c({ref:r},l),{},{components:n})):a.a.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return c})),n.d(r,"rightToc",(function(){return p})),n.d(r,"default",(function(){return u}));var t=n(1),a=n(6),o=(n(0),n(333)),i={title:"mlPipeline"},c={unversionedId:"batchpipeline/workflow/workspace/data-processing-advanced/ml-pipeline",id:"batchpipeline/workflow/workspace/data-processing-advanced/ml-pipeline",isDocsHomePage:!1,title:"mlPipeline",description:"mlPipeline",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-advanced/ml-pipeline.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-advanced/ml-pipeline",sidebar:"batchpipeline",previous:{title:"dropSaturateCol",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-advanced/drop-saturate-col"},next:{title:"nearZeroVar",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-advanced/near-zero-var"}},p=[{value:"mlPipeline",id:"mlpipeline",children:[]}],l={rightToc:p};function u(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"mlpipeline"},"mlPipeline"),Object(o.b)("p",null,"ML \ubaa8\ub378\uc744 \ubd88\ub7ec\uc640\uc11c \uc608\uce21 \uacb0\uacfc\ub97c \ucd9c\ub825\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[mlPipeline]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"modelPath - ML \ubaa8\ub378 \uacbd\ub85c\ub97c \uc9c0\uc815"),Object(o.b)("li",{parentName:"ol"},"useLatestModel : mlTrain \ub178\ub4dc(\uc2a4\ucf00\uc904)\uc758 \ud559\uc2b5\uacb0\uacfc \ubaa8\ub378 \uc0ac\uc6a9 \uc5ec\ubd80. \uccb4\ud06c\uc2dc mlTrain\ub178\ub4dc\uc758 modelPath\uc640 \ub3d9\uc77c\ud55c \ud3f4\ub354\ub97c \uc120\ud0dd\ud574\uc57c \ud55c\ub2e4. "),Object(o.b)("li",{parentName:"ol"},"overwriteSchema - ML\uacb0\uacfc\ub85c \ub370\uc774\ud130 \uc2a4\ud0a4\ub9c8 \uc800\uc7a5")))}u.isMDXComponent=!0}}]);