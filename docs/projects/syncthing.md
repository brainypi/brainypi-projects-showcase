---
id: syncthing
title: Sync files between devices
description: Sync files between devices
image: img/syncthing.png
keywords: ['Open Source', 'continuous file synchronization program', 'synchronizes files between two or more computers in real time', 'safely']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** Syncthing is a software designed to synchronize files between multiple devices including Brainy Pi. Data is synchronized between nodes using TLS. This encryption  provides  security and privacy. 

<img alt="Oops!, No Image to display." src={useBaseUrl('img/syncthing.png')} width="200" />

**Steps to Install:**

1. Copy and paste the following lines into a terminal:

   ```
   sudo apt update
   sudo apt full-upgrade

   sudo apt install apt-transport-https

   curl -s https://syncthing.net/release-key.txt | gpg --dearmor | sudo tee 
   /usr/share/keyrings/syncthing-archive-keyring.gpg >/dev/null

   echo "deb [signed-by=/usr/share/keyrings/syncthing-archive-keyring.gpg] 
   https://apt.syncthing.net/ syncthing stable" | sudo tee 
   /etc/apt/sources.list.d/syncthing.list

   sudo apt update

   sudo apt install syncthing
   ```
2. Installation will be done.

**Useful for:** Open Source, continuous file synchronization program, synchronizes files between two or more computers in real time, safely.

**Link to original project:** https://github.com/syncthing/

**Link to Youtube Video:** <!-- Link to the Youtube video. -->