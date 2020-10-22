(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(0),n(157)),c=n(160),i={id:"backup",title:"Database backup exclusion",sidebar_label:"iCloud backup"},p={id:"advanced/backup",title:"Database backup exclusion",description:'import PlatformSupport from "../../src/components/Platform.js"',source:"@site/docs/advanced/Backup.md",permalink:"/async-storage/docs/advanced/backup",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/advanced/Backup.md",sidebar_label:"iCloud backup",sidebar:"docs",previous:{title:"Brownfield integration",permalink:"/async-storage/docs/advanced/brownfield"},next:{title:"Dedicator Thread Executor",permalink:"/async-storage/docs/advanced/executor"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Supported platforms:")),Object(o.b)(c.a,{title:"iOS/MacOS",platformIcon:"icon_ios.svg",mdxType:"PlatformSupport"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Async Storage stores data in ",Object(o.b)("inlineCode",{parentName:"p"},"Application Support")," directory, which is backed up by iCloud by default.",Object(o.b)("br",{parentName:"p"}),"\n","This can lead to unintentional behavior where data is persisted even after an app re-installation."),Object(o.b)("p",null,"Async Storage disables that feature by default. "),Object(o.b)("p",null,"In order to enable iCloud backup, open your app's ",Object(o.b)("inlineCode",{parentName:"p"},"info.plist")," in Xcode and add ",Object(o.b)("strong",{parentName:"p"},"boolean")," entry called ",Object(o.b)("strong",{parentName:"p"},"RCTAsyncStorageExcludeFromBackup")," and set its value to ",Object(o.b)("strong",{parentName:"p"},"NO")," (NO as no for exclusion)."),Object(o.b)("p",null,"Alternatively, you can open ",Object(o.b)("inlineCode",{parentName:"p"},"info.plist")," in editor and add new entry: "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-diff"}),"+   <key>RCTAsyncStorageExcludeFromBackup</key>\n+   <false/>\n")))}s.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||d[b]||o;return n?a.a.createElement(f,i({ref:t},l,{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.platformIcon,n=e.title;return a.a.createElement("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},a.a.createElement("img",{style:{width:34,height:34},src:"/async-storage/img/"+t}),a.a.createElement("p",{style:{margin:"0 0 0 10px",padding:0}},n))}}}]);