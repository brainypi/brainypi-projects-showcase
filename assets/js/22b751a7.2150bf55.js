"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[337],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1376:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=(r(4996),["components"]),i={id:48935,title:"Icecast",description:"Icecast",image:"img/default-image.png",keywords:["audio/video streaming server","radio","supports mp3","ogg"]},c=void 0,p={unversionedId:"projects/48935",id:"projects/48935",title:"Icecast",description:"Icecast",source:"@site/docs/projects/48935.md",sourceDirName:"projects",slug:"/projects/48935",permalink:"/brainypi-projects-showcase/docs/projects/48935",draft:!1,tags:[],version:"current",frontMatter:{id:"48935",title:"Icecast",description:"Icecast",image:"img/default-image.png",keywords:["audio/video streaming server","radio","supports mp3","ogg"]},sidebar:"projectsSidebar",previous:{title:"Privoxy",permalink:"/brainypi-projects-showcase/docs/projects/48909"},next:{title:"IRC server",permalink:"/brainypi-projects-showcase/docs/projects/48936"}},u={},l=[],m={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Description:")," Icecast is a streaming media server which currently supports Ogg, Opus, WebM and MP3 streams. It can be used to create an Internet radio station or a privately running jukebox and many things in between.\n",(0,o.kt)("strong",{parentName:"p"},"Steps to install:-")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the directory where the script is."),(0,o.kt)("li",{parentName:"ol"},"sudo bash ./brainyinstall icecast2.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/sh\nWget https://github.com/x20mar/darkice-with-mp3-for-raspberry-pi/blob/master/darkice_1.0.1-999~mp3+1_armhf.deb?raw=true\nmv darkice_1.0.1-999~mp3+1_armhf.deb?raw=true darkice_1.0.1-999~mp3+1_armhf.deb\nsudo apt-get install libmp3lame0 libtwolame0\nsudo dpkg -i darkice_1.0.1-999~mp3+1_armhf.deb\nsudo apt-get install icecast2\n\ncat <<EOF > darkice.cfg\n# this section describes general aspects of the live streaming session\n[general]\nduration     = 0     # duration of encoding, in seconds. 0 means forever\nbufferSecs   = 5     # size of internal slip buffer, in seconds\nreconnect    = yes   # reconnect to the server(s) if disconnected\n# this section describes the audio input that will be streamed\n[input]\ndevice          = plughw:0,0  # Soundcard device for the audio input\nsampleRate      = 22050     # sample rate in Hz. try 11025, 22050 or 44100\nbitsPerSample   = 16        # bits per sample. try 16\nchannel         = 2         # channels. 1 = mono, 2 = stereo\n# this section describes a streaming connection to an IceCast2 server\n# there may be up to 8 of these sections, named [icecast2-0] ... [icecast2-7]\n[icecast2-0]\nbitrateMode     = abr       # average bit rate\nformat          = mp3       # format of the stream: ogg vorbis\nbitrate         = 320       # bitrate of the stream sent to the server\nserver          = localhost # host name of the server\nport            = 8000      # port of the IceCast2 server, usually 8000\npassword        = lolcat123 # source password to the IceCast2 server\nmountPoint      = Stream.mp3  # mount point of this stream on the IceCast2 server\nname            =  Raspberry Pi Stream # name of the stream\ndescription     = Broadcast from Raspberry Pi # description of the stream\n#public          = yes       advertise this stream?\nEOF\n\ncat <<EOF > darkice.sh\nsudo /usr/bin/darkice -c /home/pi/darkice.cfg\nEOF\n\nsudo chmod 777 /home/pi/darkice.sh\nsudo service icecast2 start\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Useful for:")," audio/video streaming server, radio, supports mp3, ogg"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xiph/Icecast-Server"},"https://github.com/xiph/Icecast-Server")))}d.isMDXComponent=!0}}]);