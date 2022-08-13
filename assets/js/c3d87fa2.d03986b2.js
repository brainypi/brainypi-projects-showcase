"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[861],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3248:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={},c=void 0,s={unversionedId:"raw/48901",id:"raw/48901",title:"48901",description:"Title: Pi-Apps",source:"@site/docs/raw/48901.md",sourceDirName:"raw",slug:"/raw/48901",permalink:"/brainypi-projects-showcase/docs/raw/48901",draft:!1,tags:[],version:"current",frontMatter:{}},l={},u=[{value:"Title: Pi-Apps",id:"title-pi-apps",level:2}],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"title-pi-apps"},"Title: Pi-Apps"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," There is no centralized software repository, except for the apt repositories which lack many desktop applications. Pi-Apps is a well-maintained collection of app installation-scripts that you can run with one click."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,a.kt)("li",{parentName:"ol"},"sudo bash ./brainyinstall piapps.sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nwget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Useful for:")," open source, collection of apps, scripts, can be run with one click"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Botspot/pi-apps"},"https://github.com/Botspot/pi-apps")))}m.isMDXComponent=!0}}]);