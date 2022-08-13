"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[850],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6339:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={id:48896,title:"POS Vault",description:"POS Vault",image:"img/default-image.png",keywords:["reduce cost","embed multiple hardware parts","Point of sale"]},c=void 0,l={unversionedId:"projects/48896",id:"projects/48896",title:"POS Vault",description:"POS Vault",source:"@site/docs/projects/48896.md",sourceDirName:"projects",slug:"/projects/48896",permalink:"/brainypi-projects-showcase/docs/projects/48896",draft:!1,tags:[],version:"current",frontMatter:{id:"48896",title:"POS Vault",description:"POS Vault",image:"img/default-image.png",keywords:["reduce cost","embed multiple hardware parts","Point of sale"]},sidebar:"projectsSidebar",previous:{title:"Pi-hole",permalink:"/brainypi-projects-showcase/docs/projects/48883"},next:{title:"Plex",permalink:"/brainypi-projects-showcase/docs/projects/48897"}},p={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description"),": This PoS software is made for micro, small and medium businesses. It is modified to work with single-board computers as the Raspberry pi by making use of the GPIO interface, giving options and IoT functions not possible with common devices."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,i.kt)("li",{parentName:"ol"},"sudo bash ./brainyinstall posvault.sh"),(0,i.kt)("li",{parentName:"ol"},"After running this script, enter system password, this will complete the installation.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\ngit clone https://www.github.com/hiramvillarreal/iotpos\ncd iotpos\nsudo chmod +x install.sh\nsudo ./install.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Useful for:")," reduce cost, embed multiple hardware parts, Point of sale "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hiramvillarreal/iotpos"},"https://github.com/hiramvillarreal/iotpos")))}f.isMDXComponent=!0}}]);