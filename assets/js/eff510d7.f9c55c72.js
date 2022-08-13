"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[597],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),f=l(n),m=o,g=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(g,a(a({ref:e},s),{},{components:n})):r.createElement(g,a({ref:e},s))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1394:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:48903,title:"Script for installing an Emulation Station",description:"Script for installing an Emulation Station",image:"img/default-image.png",keywords:["Emulation and games"]},p=void 0,l={unversionedId:"projects/48903",id:"projects/48903",title:"Script for installing an Emulation Station",description:"Script for installing an Emulation Station",source:"@site/docs/projects/48903.md",sourceDirName:"projects",slug:"/projects/48903",permalink:"/brainypi-projects-showcase/docs/projects/48903",draft:!1,tags:[],version:"current",frontMatter:{id:"48903",title:"Script for installing an Emulation Station",description:"Script for installing an Emulation Station",image:"img/default-image.png",keywords:["Emulation and games"]},sidebar:"projectsSidebar",previous:{title:"Script for installing an Email server",permalink:"/brainypi-projects-showcase/docs/projects/48902"},next:{title:"Script for installing Mumble Server",permalink:"/brainypi-projects-showcase/docs/projects/48904"}},s={},u=[],f={toc:u};function m(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," This script intends to install an Emulation station (RetroPie) onto BrainyPi."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,i.kt)("li",{parentName:"ol"},"sudo bash ./",(0,i.kt)("strong",{parentName:"li"},'"Script_Name"'),".sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\ngit clone --depth=1 https://github.com/RetroPie/RetroPie-Setup.git\ncd RetroPie-Setup\nsudo ./retropie_setup.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Useful for:")," Emulation and games"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Original link:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/RetroPie/RetroPie-Setup"},"https://github.com/RetroPie/RetroPie-Setup")))}m.isMDXComponent=!0}}]);