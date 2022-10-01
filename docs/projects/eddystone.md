---
id: eddystone
title: BLE beacon using Eddystone
description: BLE beacon using Eddystone
image: img/eddystone.png
keywords: ['Advertising', 'indoor navigation', 'notification and interaction']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** Eddystone is an open beacon protocol developed by Google that allows beacons to send radio signals with a webpage address (URL) to any mobile device.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/eddystone.png')} width="200" />

**Steps to Install:**

1. Update the packages using below command if it is not up to date:

   ```
   sudo apt-get update
   sudo apt-get upgrade
   ```
2. Copy paste the below command in the terminal to switch on Brainy Pi's Bluetooth device.

   ```
   sudo hciconfig hci0 up
   ```
3. Copy paste the below command to switch on the Low Energy Advertising mode, and set it to 
   the Nonconnectable undirected advertising mode.

   ```
   sudo hciconfig hci0 leadv 3
   ```
4. You can generate a command to broadcast URL of your choice as an Eddystone beacon by 
   utilizing the script by going to the [Yencarnacion’s Eddystone Calculator](https://yencarnacion.github.io/eddystone-url-calculator/) and type your URL into the textbox and press `ENTER`.

**Useful for:** Advertising, indoor navigation, notification and interaction.

**Link to original project:** https://github.com/google/eddystone

**Link to Youtube Video:** <!-- Link to the Youtube video. -->