"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[57],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9778:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:48908,title:"Script for installing Netatalk",description:"Script for installing Netatalk",image:"img/default-image.png",keywords:["Open Source AFP fileserver"]},c=void 0,p={unversionedId:"projects/48908",id:"projects/48908",title:"Script for installing Netatalk",description:"Script for installing Netatalk",source:"@site/docs/projects/48908.md",sourceDirName:"projects",slug:"/projects/48908",permalink:"/docs/projects/48908",draft:!1,tags:[],version:"current",frontMatter:{id:"48908",title:"Script for installing Netatalk",description:"Script for installing Netatalk",image:"img/default-image.png",keywords:["Open Source AFP fileserver"]},sidebar:"projectsSidebar",previous:{title:"Script for installing Syncthing",permalink:"/docs/projects/48907"},next:{title:"Script for installing Privoxy",permalink:"/docs/projects/48909"}},s={},u=[],f={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," This script intends to install Netatalk (implementation of Apple NAS) onto BrainyPi."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,a.kt)("li",{parentName:"ol"},"sudo bash ./",(0,a.kt)("strong",{parentName:"li"},'"Script_Name"'),".sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nsudo apt install netatalk\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Useful for:")," Open Source AFP fileserver"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Original link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Netatalk/Netatalk"},"https://github.com/Netatalk/Netatalk")))}m.isMDXComponent=!0}}]);