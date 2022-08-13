"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[378],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,h=m["".concat(l,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1781:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return c}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],u={},l=void 0,s={unversionedId:"raw/48900",id:"raw/48900",title:"48900",description:"Title: Script for installing Prometheus",source:"@site/docs/raw/48900.md",sourceDirName:"raw",slug:"/raw/48900",permalink:"/docs/raw/48900",draft:!1,tags:[],version:"current",frontMatter:{}},p={},c=[{value:"Title: Script for installing Prometheus",id:"title-script-for-installing-prometheus",level:2}],m={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"title-script-for-installing-prometheus"},"Title: Script for installing Prometheus"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," This script intends to install Prometheus onto BrainyPi."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,a.kt)("li",{parentName:"ol"},"sudo bash ./",(0,a.kt)("strong",{parentName:"li"},'"Script_Name"'),".sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nwget https://github.com/prometheus/prometheus/releases/download/v2.22.0/prometheus-2.22.0.linux-armv7.tar.gz\ntar xfz prometheus-2.22.0.linux-armv7.tar.gz\nmv prometheus-2.22.0.linux-armv7/ prometheus/\nrm prometheus-2.22.0.linux-armv7.tar.gz\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Useful for:")," open source, query, visualize, alert, understand metrics. Create, share and explore dashboards with team."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Original link:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus"},"https://github.com/prometheus/prometheus")))}f.isMDXComponent=!0}}]);