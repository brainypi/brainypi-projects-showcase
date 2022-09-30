"use strict";(self.webpackChunkshunyainterfaces=self.webpackChunkshunyainterfaces||[]).push([[657],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5216:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),l=(t(4996),["components"]),i={id:49679,title:"To Implement Joomla on Brainy Pi",description:"To Implement Joomla on Brainy Pi",image:"img/default-image.png",keywords:["Publishing web contents","flexible","ease of use"]},p=void 0,s={unversionedId:"projects/49679",id:"projects/49679",title:"To Implement Joomla on Brainy Pi",description:"To Implement Joomla on Brainy Pi",source:"@site/docs/projects/49679.md",sourceDirName:"projects",slug:"/projects/49679",permalink:"/brainypi-projects-showcase/docs/projects/49679",draft:!1,tags:[],version:"current",frontMatter:{id:"49679",title:"To Implement Joomla on Brainy Pi",description:"To Implement Joomla on Brainy Pi",image:"img/default-image.png",keywords:["Publishing web contents","flexible","ease of use"]},sidebar:"projectsSidebar",previous:{title:"Implement Plex on Brainy Pi",permalink:"/brainypi-projects-showcase/docs/projects/49672"},next:{title:"Captive Portal on Brainy Pi",permalink:"/brainypi-projects-showcase/docs/projects/49680"}},u={},c=[],m={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description:"),"\nJoomla is a popular open-source content management system that allows you to publish your web content easily. It is very flexible as it helps to manage different types of web content."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Image:")," Should be in insta format."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to install")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Just copy and paste the following lines into a terminal:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting up NGINX on the Brainy Pi.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt upgrade\n\nsudo apt remove apache2\n\nsudo apt install nginx\n\nsudo systemctl start nginx\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Configuring NGINX for PHP.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install php7.4-fpm php7.4-mbstring php7.4-mysql php7.4-curl php7.4-gd php7.4-curl php7.4-zip php7.4-xml -y\n\nsudo nano /etc/nginx/sites-enabled/default\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Find and Replace following lines")),(0,r.kt)("p",null,"Find"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"index index.html index.htm;\n")),(0,r.kt)("p",null,"Replace With"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"index index.php index.html index.htm;\n")),(0,r.kt)("p",null,"Find"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#location ~ \\.php$ {\n        #       include snippets/fastcgi-php.conf;\n        #\n        #       # With php5-cgi alone:\n        #       fastcgi_pass 127.0.0.1:9000;\n        #       # With php5-fpm:\n        #       fastcgi_pass unix:/var/run/php5-fpm.sock;\n        #}\n")),(0,r.kt)("p",null,"Replace With"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"location ~ \\.php$ {\n               include snippets/fastcgi-php.conf;\n               fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;\n        }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once that is all done, we can save and exit by pressing CTRL + X then Y and lastly ENTER.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo systemctl reload nginx\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To this file, add the following line of code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once that is all done, we can save and exit by pressing CTRL + X then Y and lastly ENTER."))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"To set up MYSQL on Brainy Pi:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the following commands.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt upgrade\n\nsudo apt install mariadb-server\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It will ask several questions, answer ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Y"))," or ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"n"))," accordingly.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"To install Joomla on the Brainy Pi:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt install php7.4-intl\n\nsudo nano /etc/nginx/sites-available/joomla.conf\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy and paste the following text into this file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server {\n    listen 80;\n    listen [::]:80;\n\n    root /var/www/joomla;\n\n    index index.php index.html index.htm;\n    server_name _;\n\n    client_max_body_size 100M;\n    autoindex off;\n    \n    location / {\n        try_files $uri $uri/ /index.php?$args;\n    }\n\n    # deny running scripts inside writable directories\n    location ~* /(images|cache|media|logs|tmp)/.*.(php|pl|py|jsp|asp|sh|cgi)$ {\n      return 403;\n      error_page 403 /403_error.html;\n    }\n\n    location ~ .php$ {\n        include snippets/fastcgi-php.conf;\n        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        include fastcgi_params;\n    }\n\n    # caching of files \n    location ~* \\.(ico|pdf|flv)$ {\n            expires 1y;\n    }\n\n    location ~* \\.(js|css|png|jpg|jpeg|gif|swf|xml|txt)$ {\n            expires 14d;\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo ln -s /etc/nginx/sites-available/joomla.conf /etc/nginx/sites-enabled/joomla.conf\n\nsudo rm /etc/nginx/sites-enabled/default\n\nsudo systemctl reload nginx\n\nsudo mysql -u root -p\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enter the following lines")),(0,r.kt)("p",null,"CREATE USER 'joomlausr'@'localhost' IDENTIFIED BY '","[","PASSWORD","]","';"),(0,r.kt)("p",null,"GRANT ALL PRIVILEGES ON joomladb.","*"," TO 'joomlausr'@'localhost';"),(0,r.kt)("p",null,"FLUSH PRIVILEGES;"),(0,r.kt)("p",null,"quit;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run the commands")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo mkdir -p /var/www/joomla\n\ncd /var/www/joomla\n\nsudo wget https://downloads.joomla.org/cms/joomla4/4-0-3/Joomla_4-0-3-Stable-Full_Package.tar.gz\n\nsudo tar -xvf Joomla_4-0-3-Stable-Full_Package.tar.gz\n\nsudo rm Joomla_4-0-3-Stable-Full_Package.tar.gz\n\nsudo chown -R www-data:www-data /var/www/joomla*\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Installation will be completed.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Useful for:")," Publishing web contents, flexible, ease of use."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link to original project:")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/joomla"},"https://github.com/joomla")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Link to Youtube Video:")))}d.isMDXComponent=!0}}]);