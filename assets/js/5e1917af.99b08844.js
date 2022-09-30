"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[751],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(4996),["components"]),p={id:49680,title:"Captive Portal on Brainy Pi",description:"Captive Portal on Brainy Pi",image:"img/default-image.png",keywords:["remote access","secure"]},s=void 0,l={unversionedId:"projects/49680",id:"projects/49680",title:"Captive Portal on Brainy Pi",description:"Captive Portal on Brainy Pi",source:"@site/docs/projects/49680.md",sourceDirName:"projects",slug:"/projects/49680",permalink:"/brainypi-projects-showcase/docs/projects/49680",draft:!1,tags:[],version:"current",frontMatter:{id:"49680",title:"Captive Portal on Brainy Pi",description:"Captive Portal on Brainy Pi",image:"img/default-image.png",keywords:["remote access","secure"]},sidebar:"projectsSidebar",previous:{title:"To Implement Joomla on Brainy Pi",permalink:"/brainypi-projects-showcase/docs/projects/49679"},next:{title:"Implement Graphana on Brainy Pi",permalink:"/brainypi-projects-showcase/docs/projects/49681"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:")," A Captive Portal is a web page that the user of a public-access network is obliged to view and interact with before access is granted."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Image:")," Should be in insta format."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to install")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update the OS using below commands before installing captive software by just copy pasting the following lines into a terminal:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt upgrade\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download AnyDesk to your Pi by running the following command on your device."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"wget https://download.anydesk.com/rpi/anydesk_6.1.1-1_armhf.deb\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the apt package manager to fix any missing packages."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install -f\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Installing this package is as simple as running the following command."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"sudo dpkg -i anydesk_6.1.1-1_armhf.deb\n")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If any error is encountered while processing anydesk_1.1-1_armhf.deb,try using ",(0,o.kt)("inlineCode",{parentName:"li"},"arm64.deb"),"\ninstead of ",(0,o.kt)("inlineCode",{parentName:"li"},"armhf.deb")," as AnyDesk doesnt support 64 bit OS.")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Installation will be completed.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Useful for:")," remote access, secure."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,o.kt)("a",{parentName:"p",href:"https://anydesk.com/en"},"https://anydesk.com/en")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link to Youtube Video:")))}d.isMDXComponent=!0}}]);