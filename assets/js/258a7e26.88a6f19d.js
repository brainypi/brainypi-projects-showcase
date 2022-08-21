"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[433],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5599:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),a=(t(4996),["components"]),c={id:48936,title:"IRC server",description:"IRC server",image:"img/default-image.png",keywords:["IRC chat server","POSIX based"]},s=void 0,p={unversionedId:"projects/48936",id:"projects/48936",title:"IRC server",description:"IRC server",source:"@site/docs/projects/48936.md",sourceDirName:"projects",slug:"/projects/48936",permalink:"/brainypi-projects-showcase/docs/projects/48936",draft:!1,tags:[],version:"current",frontMatter:{id:"48936",title:"IRC server",description:"IRC server",image:"img/default-image.png",keywords:["IRC chat server","POSIX based"]},sidebar:"projectsSidebar",previous:{title:"Icecast",permalink:"/brainypi-projects-showcase/docs/projects/48935"},next:{title:"Ebook server",permalink:"/brainypi-projects-showcase/docs/projects/48937"}},l={},u=[],d={toc:u};function m(e){var r=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:"),"  A lightweight, high-performance internet relay chat daemon. Designed to be fast and reliable. Powering IRC networks since 1997.\n",(0,o.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,o.kt)("li",{parentName:"ol"},"sudo bash ./brainyinstall ircd-hybrid.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\nsudo apt install ircd-hybrid\n/usr/bin/mkpasswd brainy\n\nOLD=\'name = "hybrid8.debian.local";\ndescription = "ircd-hybrid 8.1-debian";\nnetwork_name = "debian";\nnetwork_desc = "This is My Network";\nmax_clients = 512;\nWithin the operator { block\nFind and remove\n#\nname = "sheep";\nuser = "*@192.0.2.240/28";\npassword = "xxxxxxxxxxxxx";\'\nNEW=\'name = "pimylifeup.irc";\ndescription = "Raspberry Pi IRC Server";\nnetwork_name = "pimylifeup";\nnetwork_desc = "This is my Raspberry Pi IRC Network";\nmax_clients = 128;\nname = "op";\nuser = "*@*";\npassword = "brainy";\'\nsed -i \'s/$OLD/$NEW/g\' /etc/ircd-hybrid/ircd.conf\nsudo nano /etc/ircd-hybrid/ircd.motd\nsudo /etc/init.d/ircd-hybrid restart\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Useful for:")," IRC chat server, POSIX based"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ircd-hybrid/ircd-hybrid"},"https://github.com/ircd-hybrid/ircd-hybrid")))}m.isMDXComponent=!0}}]);