"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[909],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return y}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(t),y=o,f=m["".concat(p,".").concat(y)]||m[y]||u[y]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4955:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=(t(4996),["components"]),s={id:49688,title:"Implement Syncthing on Brainy Pi.",description:"Implement Syncthing on Brainy Pi.",image:"img/default-image.png",keywords:["Open Source","continuous file synchronization program","synchronizes files between two or more computers in real time","safely"]},p=void 0,c={unversionedId:"projects/49688",id:"projects/49688",title:"Implement Syncthing on Brainy Pi.",description:"Implement Syncthing on Brainy Pi.",source:"@site/docs/projects/49688.md",sourceDirName:"projects",slug:"/projects/49688",permalink:"/brainypi-projects-showcase/docs/projects/49688",draft:!1,tags:[],version:"current",frontMatter:{id:"49688",title:"Implement Syncthing on Brainy Pi.",description:"Implement Syncthing on Brainy Pi.",image:"img/default-image.png",keywords:["Open Source","continuous file synchronization program","synchronizes files between two or more computers in real time","safely"]},sidebar:"projectsSidebar",previous:{title:"Implement Gogs on Brainy Pi",permalink:"/brainypi-projects-showcase/docs/projects/49687"},next:{title:"Implement Apple NAS on Brainy Pi.",permalink:"/brainypi-projects-showcase/docs/projects/49689"}},l={},u=[],m={toc:u};function y(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Syncthing is a software designed to synchronize files between multiple devices including Raspberry Pi. Data is synchronized between nodes using TLS. This encryption  provides  security and privacy. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Image:"),"  Should be in insta format."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy and paste the following lines into a terminal:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'sudo apt update\nsudo apt full-upgrade\n\nsudo apt install apt-transport-https\n\ncurl -s https://syncthing.net/release-key.txt | gpg --dearmor | sudo tee \n/usr/share/keyrings/syncthing-archive-keyring.gpg >/dev/null\n\necho "deb [signed-by=/usr/share/keyrings/syncthing-archive-keyring.gpg] \nhttps://apt.syncthing.net/ syncthing stable" | sudo tee \n/etc/apt/sources.list.d/syncthing.list\n\nsudo apt update\n\nsudo apt install syncthing\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Installation will be done."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Useful for:")," Open Source, continuous file synchronization program, synchronizes files between two or more computers in real time, safely."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/syncthing/"},"https://github.com/syncthing/")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link to Youtube Video:")))}y.isMDXComponent=!0}}]);