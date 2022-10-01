---
id: mumble-server
title: Low Cost VoIP calls on BrainyPi
description: Low Cost VoIP calls on BrainyPi
image: img/mumble-server.png
keywords: ['Open Source', 'Low Latency', 'High Quality Voice Chat']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** Mumble is a free, open source, low latency, VoIP, high quality voice chat application.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/mumble-server.png')} width="200" />

**Steps to Install:**

1. Copy and paste the following lines into the terminal:

   ```
   sudo apt install mumble-server

   sudo dpkg-reconfigure mumble-server
   ```

2. This command will present you with a few options, set these to how you would like Mumble to operate.

* Autostart: Yes

* High Priority: Yes

* SuperUser: Set the password here as Brainy Pi's password.

3. Run.

   ```
   ip addr show
   ```
4. Mumble server will be installed.

**Useful for:** Open Source, Low Latency, High Quality Voice Chat


**Link to original project:** https://github.com/mumble-voip/mumble

**Link to Youtube Video:** 

**Link to Youtube Video:** <!-- Link to the Youtube video. -->
