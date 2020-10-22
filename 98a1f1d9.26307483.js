(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),o=n(9),r=(n(0),n(157)),i={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},c={id:"help/troubleshooting",title:"Troubleshooting",description:"## [iOS] CocoaPods issues",source:"@site/docs/help/Troubleshooting.md",permalink:"/async-storage/docs/help/troubleshooting",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/help/Troubleshooting.md",sidebar_label:"Troubleshooting",sidebar:"docs",previous:{title:"Increasing Storage size",permalink:"/async-storage/docs/advanced/db_size"}},l=[{value:"iOS CocoaPods issues",id:"ios-cocoapods-issues",children:[]},{value:"iOS fatal error: &#39;React/RCTBridgeModule.h&#39; file not found",id:"ios-fatal-error-reactrctbridgemoduleh-file-not-found",children:[]},{value:"@RNC/AsyncStorage: NativeModule: AsyncStorage is null",id:"rncasyncstorage-nativemodule-asyncstorage-is-null",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"ios-cocoapods-issues"},"[iOS]"," CocoaPods issues"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Delete the ",Object(r.b)("inlineCode",{parentName:"li"},"node_modules")," folder(s) from your project"),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"yarn")," or ",Object(r.b)("inlineCode",{parentName:"li"},"npm install")),Object(r.b)("li",{parentName:"ol"},"If you're using CocoaPods:",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Make sure your ",Object(r.b)("inlineCode",{parentName:"li"},"Podfile")," has this entry:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Podfile"}),"pod 'RNCAsyncStorage', :path => '../node_modules/@react-native-async-storage/async-storage'\n"))),Object(r.b)("li",{parentName:"ol"},"Make sure your ",Object(r.b)("inlineCode",{parentName:"li"},"Podfile")," does ",Object(r.b)("em",{parentName:"li"},"not")," have an entry for ",Object(r.b)("inlineCode",{parentName:"li"},"react-native-async-storage"),"."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"pod install")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"pod update RNCAsyncStorage")))),Object(r.b)("li",{parentName:"ol"},"Open your Xcode project"),Object(r.b)("li",{parentName:"ol"},"Press \u21e7\u2325\u2318K to clean your build folder"),Object(r.b)("li",{parentName:"ol"},"Build and run your project")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note that every time ",Object(r.b)("inlineCode",{parentName:"p"},"@react-native-async-storage/async-storage")," gets updated, you\nmust also run ",Object(r.b)("inlineCode",{parentName:"p"},"pod update RNCAsyncStorage")," otherwise you'll still be using the\nprevious version.")),Object(r.b)("h2",{id:"ios-fatal-error-reactrctbridgemoduleh-file-not-found"},"[iOS]"," fatal error: 'React/RCTBridgeModule.h' file not found"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"info In file included from /~/@react-native-async-storage/async-storage/ios/RNCAsyncStorage.m:8:\n/~/@react-native-async-storage/async-storage/ios/RNCAsyncStorage.h:8:9: fatal error: 'React/RCTBridgeModule.h' file not found\n\ninfo #import <React/RCTBridgeModule.h>\n             ^~~~~~~~~~~~~~~~~~~~~~~~~\n\ninfo 1 error generated.\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make sure that you've run ",Object(r.b)("inlineCode",{parentName:"p"},"pod install")," or ",Object(r.b)("inlineCode",{parentName:"p"},"pod update RNCAsyncStorage")," (see\nalso ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#ios-cocoapods-issues"}),"CocoaPods issues"),").")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you've manually linked React Native, but use CocoaPods for AsyncStorage,\nAsyncStorage will not be able to find React headers. You'll need to set header\nsearch path, or also consume React Native via CocoaPods.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make sure that ",Object(r.b)("inlineCode",{parentName:"p"},"React")," dependencies are ",Object(r.b)("em",{parentName:"p"},"not")," removed from projects. Without\nthe target dependency set, Xcode may build things out of order and the React\nheaders will not be installed when AsyncStorage is built."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Podfile"}),'post_install do |installer|\n  installer.pods_project.targets.each do |target|\n    if target.name == "React"\n      target.remove_from_project\n    end\n  end\nend\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Try switching back to the legacy build system in Xcode. You can find it in\nFile > Project/Workspace Settings sheet."))),Object(r.b)("h2",{id:"rncasyncstorage-nativemodule-asyncstorage-is-null"},"[@RNC/AsyncStorage]",": NativeModule: AsyncStorage is null"),Object(r.b)("h4",{id:"ios"},"iOS"),Object(r.b)("p",null,"This error means that AsyncStorage was unable to find its native module. This\noccurs because AsyncStorage was not linked into the final app bundle."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Make sure that you've run ",Object(r.b)("inlineCode",{parentName:"p"},"pod install")," or ",Object(r.b)("inlineCode",{parentName:"p"},"pod update RNCAsyncStorage")," (see\nalso ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#ios-cocoapods-issues"}),"CocoaPods issues"),").")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you have an Expo app, AsyncStorage will not work unless you eject the app.\nAfter ejecting the app, you may have to\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/async-storage/docs/link#project-linking"}),"manually link")," depending on whether you chose to\nuse Expo SDK."))))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,c({ref:t},s,{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);