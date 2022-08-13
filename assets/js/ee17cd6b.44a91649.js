"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[141],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},c=void 0,p={unversionedId:"raw/48883",id:"raw/48883",title:"48883",description:"Title: Script for installing PiHole",source:"@site/docs/raw/48883.md",sourceDirName:"raw",slug:"/raw/48883",permalink:"/docs/raw/48883",draft:!1,tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Title: Script for installing PiHole",id:"title-script-for-installing-pihole",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"title-script-for-installing-pihole"},"Title: Script for installing PiHole"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),": This bash script intends to install PiHole onto BrainyPi."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,i.kt)("li",{parentName:"ol"},"sudo bash ./",(0,i.kt)("strong",{parentName:"li"},'"Script_Name"'),".sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\necho installing pihole...\nsudo apt install curl\ncurl -sSL https://install.pi-hole.net | bash\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Useful for:")," ad blocking, linux, network, DNS sinkhole, protects devices from unwanted content, no client side software."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link to original project :")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pi-hole"},"https://github.com/pi-hole")))}m.isMDXComponent=!0}}]);