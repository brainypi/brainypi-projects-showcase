---
id: privoxy
title: Proxy Server on BrainyPi
description: Proxy Server on BrainyPi
image: img/privoxy.png
keywords: ['Ad blocking', 'access control', 'enhanced privacy']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** A non-caching web proxy with advanced filtering capabilities for enhancing privacy, modifying web page data and HTTP headers, controlling access, ads and other junk. It has a flexible configuration and can be customized to your needs.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/privoxy.png')} width="200" />

**Steps to Install:**

1. Copy and paste the following lines into a terminal:

   ```
   sudo apt update
   sudo apt upgrade

   sudo apt install privoxy

   sudo nano /etc/privoxy/config
   ```

2. Find

   ```
   listen-address  127.0.0.1:8118
   listen-address  [::1]:8118
   ```
3. Replace With

   ```
   listen-address :8118
   ```

4. Save the file by pressing CTRL + X, followed by Y, then ENTER.

5. Run the below command.

   ```
   sudo systemctl restart privoxy
   ```
6. Installation will be completed.

**Useful for:** Ad blocking, access control, enhanced privacy.

**Link to original project:** https://github.com/unisx/privoxy

**Link to Youtube Video:** <!-- Link to the Youtube video. -->