"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[737],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),y=p(n),f=o,g=y["".concat(c,".").concat(f)]||y[f]||l[f]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5949:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return y}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=n(4996),a=["components"],c={id:48907,title:"Syncthing",description:"Syncthing",image:"img/48907.png",keywords:["Open Source","continuous file synchronization program","synchronizes files between two or more computers in real time","safely"]},p=void 0,u={unversionedId:"projects/48907",id:"projects/48907",title:"Syncthing",description:"Syncthing",source:"@site/docs/projects/48907.md",sourceDirName:"projects",slug:"/projects/48907",permalink:"/brainypi-projects-showcase/docs/projects/48907",draft:!1,tags:[],version:"current",frontMatter:{id:"48907",title:"Syncthing",description:"Syncthing",image:"img/48907.png",keywords:["Open Source","continuous file synchronization program","synchronizes files between two or more computers in real time","safely"]},sidebar:"projectsSidebar",previous:{title:"Gogs",permalink:"/brainypi-projects-showcase/docs/projects/48906"},next:{title:"Netatalk",permalink:"/brainypi-projects-showcase/docs/projects/48908"}},l={},y=[],f={toc:y};function g(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Description:")," Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes."),(0,i.kt)("img",{alt:"Oops!, No Image to display.",src:(0,s.Z)("img/48907.png"),width:"200"}),"**Steps to install:-**",(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,i.kt)("li",{parentName:"ol"},"sudo bash ./brainyinstall syncthing.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\nsudo apt update\nsudo apt full-upgrade\nsudo apt install apt-transport-https\ncurl -s https://syncthing.net/release-key.txt | gpg --dearmor | sudo tee /usr/share/keyrings/syncthing-archive-keyring.gpg >/dev/null\necho "deb [signed-by=/usr/share/keyrings/syncthing-archive-keyring.gpg] https://apt.syncthing.net/ syncthing stable" | sudo tee /etc/apt/sources.list.d/syncthing.list\nsudo apt update\nsudo apt install syncthing\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Useful for:")," Open Source, continuous file synchronization program, synchronizes files between two or more computers in real time, safely "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/syncthing/"},"https://github.com/syncthing/")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Forum Link:")," ",(0,i.kt)("a",{parentName:"p",href:"https://forum.brainypi.com/t/troubleshooting-syncthing/25"},"https://forum.brainypi.com/t/troubleshooting-syncthing/25")))}g.isMDXComponent=!0}}]);