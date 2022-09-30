"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[565],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6729:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(4996),["components"]),p={id:49926,title:"Implement Eddystone on Brainy Pi",description:"Implement Eddystone on Brainy Pi",image:"img/default-image.png",keywords:["Advertising","indoor navigation","notification and interaction"]},c=void 0,s={unversionedId:"projects/49926",id:"projects/49926",title:"Implement Eddystone on Brainy Pi",description:"Implement Eddystone on Brainy Pi",source:"@site/docs/projects/49926.md",sourceDirName:"projects",slug:"/projects/49926",permalink:"/brainypi-projects-showcase/docs/projects/49926",draft:!1,tags:[],version:"current",frontMatter:{id:"49926",title:"Implement Eddystone on Brainy Pi",description:"Implement Eddystone on Brainy Pi",image:"img/default-image.png",keywords:["Advertising","indoor navigation","notification and interaction"]},sidebar:"projectsSidebar",previous:{title:"Implement Sysmon on Brainy Pi",permalink:"/brainypi-projects-showcase/docs/projects/49905"}},l={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," Eddystone is an open beacon protocol developed by Google that allows beacons to send radio signals with a webpage address (URL) to any mobile device."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Image:")," Should be in insta format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the packages using below command if it is not up to date:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get upgrade\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy paste the below command in the terminal to switch on Brainy Pi's Bluetooth device."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo hciconfig hci0 up\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy paste the below command to switch on the Low Energy Advertising mode, and set it to\nthe Nonconnectable undirected advertising mode."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo hciconfig hci0 leadv 3\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can generate a command to broadcast URL of your choice as an Eddystone beacon by\nutilizing the script by going to the ",(0,a.kt)("a",{parentName:"p",href:"https://yencarnacion.github.io/eddystone-url-calculator/"},"Yencarnacion\u2019s Eddystone Calculator")," and type your URL into the textbox and press ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Useful for :")," Advertising, indoor navigation, notification and interaction."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/eddystone"},"https://github.com/google/eddystone")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link to Youtube Video:")))}m.isMDXComponent=!0}}]);