---
id: pi-apps
title: Install popular apps with one click. (Pi-Apps)
description: Install popular apps with one click. (Pi-Apps)
image: img/pi-apps.png
keywords: ['desktop apps', 'open source', 'collection of apps', 'scripts', 'one-click-install']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** There is no centralized software repository, except for the apt repositories which lack many desktop applications. Pi-Apps is a well-maintained collection of app installation-scripts that you can run with one click. 

<img alt="Oops!, No Image to display." src={useBaseUrl('img/pi-apps.png')} width="200" />

**Steps to Install:**
1.  Copy and paste the following lines into the terminal:
    ```sh
    wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash
    ```
2.  Installation is completed.  

3.  To Update Pi-Apps:
    *   Pi-apps will automatically check for updates on boot and display a notification to update.
    *   To manually run the updater, use this command:
        ```sh
        ~/pi-apps/updater gui
        ```

**Useful for:** desktop apps, open source, collection of apps, scripts, one-click-install

**Link to original project:** https://github.com/Botspot/pi-apps

**Link to Youtube Video:** <!-- Link to the Youtube video. -->