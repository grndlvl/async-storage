(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),l=(n(0),n(157)),o=n(160),c={id:"brownfield",title:"Brownfield integration",sidebar_label:"Brownfield integration"},i={id:"advanced/brownfield",title:"Brownfield integration",description:'import PlatformSupport from "../../src/components/Platform.js"',source:"@site/docs/advanced/BrownfieldIntegration.md",permalink:"/async-storage/docs/advanced/brownfield",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/advanced/BrownfieldIntegration.md",sidebar_label:"Brownfield integration",sidebar:"docs",previous:{title:"Jest integration",permalink:"/async-storage/docs/advanced/jest"},next:{title:"Database backup exclusion",permalink:"/async-storage/docs/advanced/backup"}},s=[{value:"The procotol",id:"the-procotol",children:[{value:"allKeys",id:"allkeys",children:[]},{value:"mergeValues",id:"mergevalues",children:[]},{value:"removeAllValues",id:"removeallvalues",children:[]},{value:"removeValuesForKeys",id:"removevaluesforkeys",children:[]},{value:"setValues",id:"setvalues",children:[]},{value:"valuesForKeys",id:"valuesforkeys",children:[]},{value:"passthrough",id:"passthrough",children:[]}]}],b={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Supported platforms:")),Object(l.b)(o.a,{title:"iOS/MacOS",platformIcon:"icon_ios.svg",mdxType:"PlatformSupport"}),Object(l.b)("hr",null),Object(l.b)("p",null,"If you're embedding React Native into native application, you can also integrate\nAsync Storage module, so that both worlds will use one storage solution."),Object(l.b)("p",null,"AsyncStorage can be controlled by the hosting app via the delegate on\n",Object(l.b)("inlineCode",{parentName:"p"},"RNCAsyncStorage"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"RNCAsyncStorage *asyncStorage = [bridge moduleForClass:[RNCAsyncStorage class]];\nasyncStorage.delegate = self;\n")),Object(l.b)("h2",{id:"the-procotol"},"The procotol"),Object(l.b)("p",null,"The delegate must conform to the ",Object(l.b)("inlineCode",{parentName:"p"},"RNCAsyncStorageDelegate")," protocol:"),Object(l.b)("h3",{id:"allkeys"},"allKeys"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)allKeys:(RNCAsyncStorageResultCallback)block;\n")),Object(l.b)("p",null,"Returns all keys currently stored. If none, an empty array is returned.\nCalled by ",Object(l.b)("inlineCode",{parentName:"p"},"getAllKeys")," in JS."),Object(l.b)("h3",{id:"mergevalues"},"mergeValues"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)mergeValues:(NSArray<NSString *> *)values\n            forKeys:(NSArray<NSString *> *)keys\n         completion:(RNCAsyncStorageResultCallback)block;\n")),Object(l.b)("p",null,"Merges values with the corresponding values stored at specified keys.\nCalled by ",Object(l.b)("inlineCode",{parentName:"p"},"mergeItem")," and ",Object(l.b)("inlineCode",{parentName:"p"},"multiMerge")," in JS."),Object(l.b)("h3",{id:"removeallvalues"},"removeAllValues"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)removeAllValues:(RNCAsyncStorageCompletion)block;\n")),Object(l.b)("p",null,"Removes all values from the store. Called by ",Object(l.b)("inlineCode",{parentName:"p"},"clear")," in JS."),Object(l.b)("h3",{id:"removevaluesforkeys"},"removeValuesForKeys"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)removeValuesForKeys:(NSArray<NSString *> *)keys\n                 completion:(RNCAsyncStorageResultCallback)block;\n")),Object(l.b)("p",null,"Removes all values associated with specified keys.\nCalled by ",Object(l.b)("inlineCode",{parentName:"p"},"removeItem")," and ",Object(l.b)("inlineCode",{parentName:"p"},"multiRemove")," in JS."),Object(l.b)("h3",{id:"setvalues"},"setValues"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)setValues:(NSArray<NSString *> *)values\n          forKeys:(NSArray<NSString *> *)keys\n       completion:(RNCAsyncStorageResultCallback)block;\n")),Object(l.b)("p",null,"Sets specified key-value pairs. Called by ",Object(l.b)("inlineCode",{parentName:"p"},"setItem")," and ",Object(l.b)("inlineCode",{parentName:"p"},"multiSet")," in JS."),Object(l.b)("h3",{id:"valuesforkeys"},"valuesForKeys"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"- (void)valuesForKeys:(NSArray<NSString *> *)keys\n           completion:(RNCAsyncStorageResultCallback)block;\n")),Object(l.b)("p",null,"Returns values associated with specified keys.\nCalled by ",Object(l.b)("inlineCode",{parentName:"p"},"getItem")," and ",Object(l.b)("inlineCode",{parentName:"p"},"multiGet")," in JS."),Object(l.b)("h3",{id:"passthrough"},"passthrough"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-objc"}),"@optional\n@property (nonatomic, readonly, getter=isPassthrough) BOOL passthrough;\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Optional:")," Returns whether the delegate should be treated as a passthrough.\nThis is useful for monitoring storage usage among other things. Returns ",Object(l.b)("inlineCode",{parentName:"p"},"NO")," by\ndefault."))}p.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.platformIcon,n=e.title;return r.a.createElement("div",{style:{display:"flex",margin:"10px 20px",alignItems:"center",flexDirection:"row"}},r.a.createElement("img",{style:{width:34,height:34},src:"/async-storage/img/"+t}),r.a.createElement("p",{style:{margin:"0 0 0 10px",padding:0}},n))}}}]);