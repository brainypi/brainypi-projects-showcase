---
id: irc-server
title: Personal IRC Server
description: Personal IRC Server
image: img/irc-server.png
keywords: ['IRC chat server', 'POSIX based']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** A high-performance, light weighted internet relay chat daemon. Designed to be fast and reliable. Powering IRC networks since 1997. 

<img alt="Oops!, No Image to display." src={useBaseUrl('img/irc-server.png')} width="200" />

**Steps to Install:**

1. Just copy and paste the following lines into a terminal:

   ```
   sudo apt update
   sudo apt upgrade

   sudo apt install ircd-hybrid

   /usr/bin/mkpasswd brainy

   sudo nano /etc/ircd-hybrid/ircd.conf
   ```

2. Find

   ```
   name = "hybrid8.debian.local";

   description = "ircd-hybrid 8.1-debian";

   network_name = "debian";
   network_desc = "This is My Network";

   max_clients = 512;

   Within the operator { block

   Find and remove

   #

   name = "sheep";

   user = "*@192.0.2.240/28";

   password = "xxxxxxxxxxxxx";
   ```

3. Replace

   ```
   name = "pimylifeup.irc";

   description = "Raspberry Pi IRC Server";

   network_name = "pimylifeup";
   network_desc = "This is my Raspberry Pi IRC Network";

   max_clients = 128;

   name = "op";

   user = "*@*";

   password = "brainy";
   ```

4. Save and quit out of the file by pressing Ctrl +X , then press Y and then Enter.

5. Run the following command.

   ```
   sudo nano /etc/ircd-hybrid/ircd.motd

   sudo /etc/init.d/ircd-hybrid restart
   ```
6. Installation will be completed.

**Useful for:** IRC chat server, POSIX based.

**Link to original project:** https://github.com/ircd-hybrid/ircd-hybrid