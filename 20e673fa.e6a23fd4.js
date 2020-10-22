(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(9),o=(r(0),r(157)),i=r(160),c={id:"db_size",title:"Increasing Storage size",sidebar_label:"Storage space increase"},s={id:"advanced/db_size",title:"Increasing Storage size",description:'import PlatformSupport from "../../src/components/Platform.js"',source:"@site/docs/advanced/IncreaseDbSize.md",permalink:"/async-storage/docs/advanced/db_size",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/advanced/IncreaseDbSize.md",sidebar_label:"Storage space increase",sidebar:"docs",previous:{title:"Dedicator Thread Executor",permalink:"/async-storage/docs/advanced/executor"},next:{title:"Troubleshooting",permalink:"/async-storage/docs/help/troubleshooting"}},l=[{value:"Increase limit",id:"increase-limit",children:[]}],p={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Supported platforms:")),Object(o.b)(i.a,{title:"Android",platformIcon:"icon_android.svg",mdxType:"PlatformSupport"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Current Async Storage's size is set to 6MB. Going over this limit causes ",Object(o.b)("inlineCode",{parentName:"p"},"database or disk is full")," error. This 6MB limit is a sane limit to protect the user from the app storing too much data in the database. This also protects the database from filling up the disk cache and becoming malformed (endTransaction() calls will throw an exception, not rollback, and leave the db malformed). You have to be aware of that risk when increasing the database size. We recommend to ensure that your app does not write more data to AsyncStorage than space is left on disk. Since AsyncStorage is based on SQLite on Android you also have to be aware of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sqlite.org/limits.html"}),"SQLite limits"),"."),Object(o.b)("h3",{id:"increase-limit"},"Increase limit"),Object(o.b)("p",null,"Add a ",Object(o.b)("inlineCode",{parentName:"p"},"AsyncStorage_db_size_in_MB")," property to your ",Object(o.b)("inlineCode",{parentName:"p"},"android/gradle.properties"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"AsyncStorage_db_size_in_MB=10\n")),Object(o.b)("p",null,"Now you can define the new size in MB. In this example, the new limit is 10 MB."))}d.isMDXComponent=!0},157:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},160:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.platformIcon,r=e.title;return a.a.createElement("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},a.a.createElement("img",{style:{width:34,height:34},src:"/async-storage/img/"+t}),a.a.createElement("p",{style:{margin:"0 0 0 10px",padding:0}},r))}}}]);