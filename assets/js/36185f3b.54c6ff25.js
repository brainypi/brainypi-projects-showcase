"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[709],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1493:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=r(4996),p=["components"],s={id:"pos",title:"POS on BrainyPi",description:"POS on BrainyPi",image:"img/pos.png",keywords:["low cost","can embed multiple hardware parts","Point of sale"]},l=void 0,c={unversionedId:"projects/pos",id:"projects/pos",title:"POS on BrainyPi",description:"POS on BrainyPi",source:"@site/docs/projects/pos.md",sourceDirName:"projects",slug:"/projects/pos",permalink:"/brainypi-projects-showcase/docs/projects/pos",draft:!1,tags:[],version:"current",frontMatter:{id:"pos",title:"POS on BrainyPi",description:"POS on BrainyPi",image:"img/pos.png",keywords:["low cost","can embed multiple hardware parts","Point of sale"]},sidebar:"projectsSidebar",previous:{title:"Media Server on BrainyPi",permalink:"/brainypi-projects-showcase/docs/projects/plex"},next:{title:"Proxy Server on BrainyPi",permalink:"/brainypi-projects-showcase/docs/projects/privoxy"}},u={},m=[],d={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," IotPoS software is made for micro, small and medium businesses. It is\nmodified to work with single-board computers as the Raspberry pi by making\nuse of the GPIO interface, giving options and IoT functions not possible with\ncommon devices. "),(0,i.kt)("img",{alt:"Oops!, No Image to display.",src:(0,a.Z)("img/pos.png"),width:"200"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps to Install:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the github repository by using the below command.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"git clone https://www.github.com/hiramvillarreal/iotpos\n"))),(0,i.kt)("li",{parentName:"ol"},"Change the directory to ",(0,i.kt)("inlineCode",{parentName:"li"},"iotpos")," by using the below command.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd iotpos\n"))),(0,i.kt)("li",{parentName:"ol"},"Copy paste the below command to terminal, this should enable ",(0,i.kt)("em",{parentName:"li"},"execute")," permission to the\ninstall.sh script and run it.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"sudo chmod +x install.sh\nsudo ./install.sh\n"))),(0,i.kt)("li",{parentName:"ol"},"Once installation is complete ,just enter your password. That's all is to be done!")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Useful for:")," low cost, can embed multiple hardware parts, Point of sale. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hiramvillarreal/iotpos"},"https://github.com/hiramvillarreal/iotpos")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link to Youtube Video:")," "))}f.isMDXComponent=!0}}]);