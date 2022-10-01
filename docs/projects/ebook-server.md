---
id: ebook-server
title: Store Ebooks on BrainyPi
description: Store Ebooks on BrainyPi
image: img/ebook-server.png
keywords: ['ebooks', 'server', 'personal', 'manage books']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** COPS (Calibre OPDS (and HTML) PHP Server) software acts as a web interface on our Brainy Pi where we can access all our eBooks either through its web interface or by downloading them directly from your Brainy Pi to your devices.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/ebook-server.png')} width="200" />

**Steps to Install:**

1. Copy and paste the following lines into a terminal:

   ```
   sudo apt-get update
   sudo apt-get upgrade

   sudo apt-get install php7.4-gd php7.4-cli php7.4-sqlite3 php7.4-json php7.4-intl php7.4- 
   xml php7.4-mbstring php7.4-zip

   sudo systemctl reload nginx

   sudo mkdir -p /var/www/html/ebooks
   cd /var/www/html/ebooks
   sudo git clone https://github.com/seblucas/cops.git .

   sudo wget https://getcomposer.org/download/1.9.0/composer.phar
   sudo php composer-stable.phar global require "fxp/composer-asset-plugin:~1.1"
   sudo php composer-stable.phar install --no-dev --optimize-autoloader

   mkdir -p /home/pi/storage/eBooks

   sudo cp config_local.php.example config_local.php
   sudo nano config_local.php
   ```

2. Find

   ```
   $config['calibre_directory'] = './';

   $config['cops_title_default'] = "COPS";
   ```

3. Replace With

   ```
   $config['calibre_directory'] = '/home/pi/storage/eBooks/';

   $config['cops_title_default'] = "My Raspberry Pi eBook Server";
   ```

3. Save the file by pressing CTRL + X then Y and lastly press ENTER. 
 
4. Installation of software will be completed.

**Useful for:** ebooks, server, personal, manage books

**Link to original project:** https://github.com/seblucas/cops

**Link to Youtube Video:** <!-- Link to the Youtube video. -->