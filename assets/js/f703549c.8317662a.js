"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[125],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9321:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:48899,title:"Script for installing Grafana",description:"Script for installing Grafana",image:"img/default-image.png",keywords:["open source","query","visualize","alert","understand metrics. Create","share and explore dashboards with team"]},c=void 0,p={unversionedId:"projects/48899",id:"projects/48899",title:"Script for installing Grafana",description:"Script for installing Grafana",source:"@site/docs/projects/48899.md",sourceDirName:"projects",slug:"/projects/48899",permalink:"/docs/projects/48899",draft:!1,tags:[],version:"current",frontMatter:{id:"48899",title:"Script for installing Grafana",description:"Script for installing Grafana",image:"img/default-image.png",keywords:["open source","query","visualize","alert","understand metrics. Create","share and explore dashboards with team"]},sidebar:"projectsSidebar",previous:{title:"Script for installing AnyDesk",permalink:"/docs/projects/48898"},next:{title:"Script for installing Prometheus",permalink:"/docs/projects/48900"}},l={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:")," This script intends to install Grafana onto BrainyPi."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,o.kt)("li",{parentName:"ol"},"sudo bash ./",(0,o.kt)("strong",{parentName:"li"},'"Script_Name"'),".sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\ncurl https://packages.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null\necho "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://packages.grafana.com/oss/deb stable main" | sudo tee /etc/apt/sources.list.d/grafana.list\nsudo apt update\nsudo apt install grafana\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Useful for:")," open source, query, visualize, alert, understand metrics. Create, share and explore dashboards with team."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Original link:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grafana/grafana"},"https://github.com/grafana/grafana")))}d.isMDXComponent=!0}}]);