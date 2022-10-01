---
id: apple-nas
title: AppleShare on BrainyPi
description: AppleShare on BrainyPi
image: img/apple-nas.png
keywords: ['AppleShare', 'NAS', 'iOS', 'Mac', 'File sharing', 'storage']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** The Apple Filing Protocol is Apple’s proprietary network protocol for delivering files over a network. Netatalk is a freely-available Open Source AFP fileserver. A UNIX, Linux or BSD system running Netatalk is capable of serving many Macintosh clients simultaneously as an AppleShare file server (AFP).

<img alt="Oops!, No Image to display." src={useBaseUrl('img/apple-nas.png')} width="200" />


**Steps to Install:**

1. Just copy and paste the following lines into a terminal:

   ```sh
   sudo apt update
   sudo apt upgrade

   sudo apt install netatalk

   sudo nano /etc/netatalk/afp.conf
   ```

  * Now add the following lines into it.

   ```ini
   [Homes]
     basedir regex = /home 
     path = <foldername>

   [My AFP Share Name]
     path = /path/to/directory

   [My AFP Share Name]
     path = /path/to/directory
     time machine = true

   [My AFP Share Name]
     path = /path/to/directory
     read only = true

   [Global]
     guest account = pi

   ```

    * With changes to the configuration complete, you can go ahead and save the file by pressing CTRL + X then Y followed by ENTER.

2. Now run the following command.

   ```
   sudo systemctl restart netatalk
   ```
3. Installation will be completed.
 

**Useful for:** AppleShare, NAS, iOS, Mac, File sharing, storage

**Link to original project:** https://github.com/Netatalk/Netatalk

**Link to Youtube Video:**