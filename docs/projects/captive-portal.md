---
id: captive-portal
title: Captive Portal on BrainyPi
description: Captive Portal on BrainyPi
image: img/captive-portal.png
keywords: ['Wifi-Hotspot', 'Caffe Wifi', 'College Wifi', 'marketing']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** A Captive Portal is a web page that the user of a public-access network is obliged to view and interact with before access is granted.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/captive-portal.png')} width="200" />

**Steps to Install:**

1. Update the OS using below commands before installing captive software by 
   just copy pasting the following lines into a terminal:
 
    ```
    sudo apt update
    sudo apt upgrade
    ```

2. Now for installation run the below command.

   ```
   sudo apt install git libmicrohttpd-dev
   ```

3. We can get along with setting up our captive software, _nodogsplash_.

* nodogsplash is a somewhat lightweight captive portal solution that is easily set up and 
  highly configurable.

* To get this software off their git , clone its repository with the following commands.

  ```
  cd ~
  git clone https://github.com/nodogsplash/nodogsplash.git
  ```

* We can now proceed with compiling and installing the software by typing the following 
 commands.

  ```
  cd ~/nodogsplash
  make
  sudo make install
  ```

* We can now make some modifications to the configuration file by typing the below command

  ```
  sudo nano /etc/nodogsplash/nodogsplash.conf
  ```

* We need to add the following information, this tells what interface the nodogsplash 
  software should show up on and what address it should be listening on.

  ```
  GatewayInterface wlan0
  GatewayAddress 192.168.220.1
  MaxClients 250
  AuthIdleTimeout 480
  ```

* Now save and quit out of the file by pressing CTRL + X then pressing Y and then ENTER.

* With our changes to nodogsplash’s configuration saved, we can start up the software by 
  typing the following command.

  ```
  sudo nodogsplash
  ```
4. Installation will be completed.  

**Useful for:** Wifi-Hotspot, Caffe Wifi, College Wifi, marketing 

**Link to original project:**  https://github.com/nodogsplash/nodogsplash.git

**Link to Youtube Video:** <!-- Link to the Youtube video. -->