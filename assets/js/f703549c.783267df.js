"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[125],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(t),d=a,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||o;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9321:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={id:48899,title:"Grafana",description:"Grafana",image:"img/default-image.png",keywords:["open source","query","visualize","alert","understand metrics. Create","share and explore dashboards with team"]},c=void 0,p={unversionedId:"projects/48899",id:"projects/48899",title:"Grafana",description:"Grafana",source:"@site/docs/projects/48899.md",sourceDirName:"projects",slug:"/projects/48899",permalink:"/brainypi-projects-showcase/docs/projects/48899",draft:!1,tags:[],version:"current",frontMatter:{id:"48899",title:"Grafana",description:"Grafana",image:"img/default-image.png",keywords:["open source","query","visualize","alert","understand metrics. Create","share and explore dashboards with team"]},sidebar:"projectsSidebar",previous:{title:"AnyDesk",permalink:"/brainypi-projects-showcase/docs/projects/48898"},next:{title:"Prometheus",permalink:"/brainypi-projects-showcase/docs/projects/48900"}},u={},l=[],f={toc:l};function d(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:")," Grafana allows you to query, visualize, alert on and understand your metrics no matter where they are stored. Create, explore, and share beautiful dashboards with your team and foster a data driven culture."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,o.kt)("li",{parentName:"ol"},"sudo bash ./brainyinstall grafana.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\ncurl https://packages.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null\necho "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://packages.grafana.com/oss/deb stable main" | sudo tee /etc/apt/sources.list.d/grafana.list\nsudo apt update\nsudo apt install grafana\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Useful for:")," open source, query, visualize, alert, understand metrics. Create, share and explore dashboards with team."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/grafana/grafana"},"https://github.com/grafana/grafana")))}d.isMDXComponent=!0}}]);