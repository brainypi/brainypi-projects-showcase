"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[376],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,g=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=(n(4996),["components"]),l={id:49685,title:"Implement EmulationStation on Brainy Pi.",description:"Implement EmulationStation on Brainy Pi.",image:"img/default-image.png",keywords:["games"]},p=void 0,s={unversionedId:"projects/49685",id:"projects/49685",title:"Implement EmulationStation on Brainy Pi.",description:"Implement EmulationStation on Brainy Pi.",source:"@site/docs/projects/49685.md",sourceDirName:"projects",slug:"/projects/49685",permalink:"/brainypi-projects-showcase/docs/projects/49685",draft:!1,tags:[],version:"current",frontMatter:{id:"49685",title:"Implement EmulationStation on Brainy Pi.",description:"Implement EmulationStation on Brainy Pi.",image:"img/default-image.png",keywords:["games"]},sidebar:"projectsSidebar",previous:{title:"Implement Email server on Brainy Pi.",permalink:"/brainypi-projects-showcase/docs/projects/49684"},next:{title:"Implement Mumble Server on Brainy Pi",permalink:"/brainypi-projects-showcase/docs/projects/49686"}},c={},u=[],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Description:")," EmulationStation is a frontend for emulators, which gives a graphical interface for accessing all of your games. It is a core part of RetroPie and is what lets you sort and configure games. Using EmulationStation on Brainy Pi we can start building own alternative to RetroPie."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Image:")," Should be in insta format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to install")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy and paste the following lines into a terminal:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo apt-get install -y git\n\ngit clone --depth=1 https://github.com/RetroPie/RetroPie-Setup.git\n\ncd RetroPie-Setup\n\nsudo ./retropie_setup.sh\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"As we don\u2019t want to install the entirety of RetroPie for this guide we must switch to the ",(0,a.kt)("em",{parentName:"p"},"Manage Packages")," screen."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can do this by pressing the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"B"))," key, then by pressing ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As EmulationStation is a core package for RetroPie, we can switch straight into the first option by pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER")," key."))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Within this next menu, we need to select the ",(0,a.kt)("inlineCode",{parentName:"li"},"emulationstation")," option.  ")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can do this by pressing ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),", then the ",(0,a.kt)("inlineCode",{parentName:"li"},"ENTER")," key.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"We will be using the pre-compiled binary option for this tutorial as it is far faster to install them. Select this option by pressing ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"B")),", then the ",(0,a.kt)("inlineCode",{parentName:"p"},"ENTER")," key.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Press ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Y"))," on your keyboard then the ENTER key to proceed with the installation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now that you have installed EmulationStation, you can quit by pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ESC")," key till you return to the command line.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Installation will be done."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Useful for:")," games"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link to Original project:")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RetroPie/EmulationStation.git"},"https://github.com/RetroPie/EmulationStation.git")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Link to Youtube Video:")))}f.isMDXComponent=!0}}]);