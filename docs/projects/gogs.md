---
id: gogs
title: Personal Git server on BrainyPi
description: Personal Git server on BrainyPi
image: img/gogs.png
keywords: ['Open Source', 'build a simple', 'stable and extensible self-hosted Git service that can be set up in the most painless way']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** Gogs aims to build a simple, stable and extensible self-hosted Git service that can be set up easily. This can be done with independent binary distribution across all platforms that Go supports, Linux, macOS, Windows and ARM-based systems.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/gogs.png')} width="200" />

**Steps to Install:**

1. Copy and paste the following lines into a terminal:
   
   ```
   sudo apt update
   sudo apt upgrade

   sudo apt install mariadb-server git unzip

   sudo mysql_secure_installation
   ```
2. Now just press `enter` and answer some questions according to how you want the access to be set.

3. Run the below commands.

   ```
   sudo mysql -u root -p

   CREATE DATABASE gogs;

   GRANT ALL PRIVILEGES ON gogs.* TO 'goguser'@'localhost' IDENTIFIED BY 'pimylifeup';

   FLUSH PRIVILEGES;

   exit

   sudo adduser --disabled-login git

   cd /home/git
   sudo wget https://dl.gogs.io/0.12.3/gogs_0.12.3_linux_armv7.zip -O gogs.zip
   sudo unzip gogs.zip
   sudo rm gogs.zip

   sudo chown -R git:git /home/git

   sudo systemctl enable /home/git/gogs/scripts/systemd/gogs.service

   sudo systemctl start gogs.service

   sudo systemctl status gogs.service
   ```

4. Gogs will be installed.

**Useful for:** Open Source, build a simple, stable and extensible self-hosted Git service that can be set up in the most painless way.

**Link to original project:** https://github.com/gogs/gogs

**Link to Youtube Video:** <!-- Link to the Youtube video. -->