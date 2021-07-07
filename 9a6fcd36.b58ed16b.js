(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{213:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(1),o=t(6),i=(t(0),t(334)),a={title:"correlation"},c={unversionedId:"batchpipeline/workflow/workspace/job-processing/correlation",id:"batchpipeline/workflow/workspace/job-processing/correlation",isDocsHomePage:!1,title:"correlation",description:"Definition",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/correlation.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/correlation",sidebar:"batchpipeline",previous:{title:"S3 \ub0b4\ubcf4\ub0b4\uae30",permalink:"/docs/batchpipeline/workflow/workspace/export-data/s3"},next:{title:"decision",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/decision"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]}],l={rightToc:p};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"\ub370\uc774\ud130\uc758 correlation(\uc0c1\uad00\ubd84\uc11d)\uc744 \uc218\ud589\ud55c\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","]\ub178\ub4dc \uc911 ","[correlation]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow001_correlation_property.png",alt:"flow001"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"method : \uc801\uc6a9\ud560 correlation algorithm \uc120\ud0dd (pearson, spearman) "),Object(i.b)("li",{parentName:"ol"},"datasetPath : correlation \uc744 \uacc4\uc0b0\ud560 csv \ud30c\uc77c \uacbd\ub85c \uc120\ud0dd  "),Object(i.b)("li",{parentName:"ol"},"savePath : \uacb0\uacfc\uac00 \uc800\uc7a5\ub420 \ud3f4\ub354\uacbd\ub85c \uc120\ud0dd "),Object(i.b)("li",{parentName:"ol"},"jupyterIP : jupyterIP \uc785\ub825 "),Object(i.b)("li",{parentName:"ol"},"delimeter : csv \ud30c\uc77c\uc758 \uad6c\ubd84\uc790 \uc785\ub825"),Object(i.b)("li",{parentName:"ol"},"columnHeader : \ub370\uc774\ud130 \uceec\ub7fc \ud5e4\ub354\uc5ec\ubd80 \uc120\ud0dd "),Object(i.b)("li",{parentName:"ol"},"rowHeader : \ub370\uc774\ud130 \ub85c\uc6b0 \ud5e4\ub354\uc5ec\ubd80 \uc120\ud0dd ")))}s.isMDXComponent=!0},334:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},b=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),f=n,d=b["".concat(a,".").concat(f)]||b[f]||u[f]||i;return t?o.a.createElement(d,c(c({ref:r},l),{},{components:t})):o.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);