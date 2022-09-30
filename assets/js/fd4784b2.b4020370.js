"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[81],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4959:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=(n(4996),["components"]),p={id:49690,title:"Implement Privoxy on BrainyPi.",description:"Implement Privoxy on BrainyPi.",image:"img/default-image.png",keywords:["Ad blocking","access control","enhanced privacy"]},c=void 0,l={unversionedId:"projects/49690",id:"projects/49690",title:"Implement Privoxy on BrainyPi.",description:"Implement Privoxy on BrainyPi.",source:"@site/docs/projects/49690.md",sourceDirName:"projects",slug:"/projects/49690",permalink:"/brainypi-projects-showcase/docs/projects/49690",draft:!1,tags:[],version:"current",frontMatter:{id:"49690",title:"Implement Privoxy on BrainyPi.",description:"Implement Privoxy on BrainyPi.",image:"img/default-image.png",keywords:["Ad blocking","access control","enhanced privacy"]},sidebar:"projectsSidebar",previous:{title:"Implement Apple NAS on Brainy Pi.",permalink:"/brainypi-projects-showcase/docs/projects/49689"},next:{title:"Ebook server",permalink:"/brainypi-projects-showcase/docs/projects/49691"}},s={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," A non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, ads and other junk. It has a flexible configuration and can be customized to your needs. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Image:")," Should be in insta format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy and paste the following lines into a terminal:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt upgrade\n\nsudo apt install privoxy\n\nsudo nano /etc/privoxy/config\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"listen-address  127.0.0.1:8118\nlisten-address  [::1]:8118\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace With"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"listen-address :8118\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the file by pressing CTRL + X, followed by Y, then ENTER.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the below command."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo systemctl restart privoxy\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Installation will be completed."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Useful for:")," Ad blocking, access control, enhanced privacy."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/unisx/privoxy"},"https://github.com/unisx/privoxy")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link to Youtube Video:")))}d.isMDXComponent=!0}}]);