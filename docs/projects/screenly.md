---
id: screenly
title: Digital Signage on Brainy Pi
description: Digital Signage on Brainy Pi
image: img/screenly.png
keywords: ['to upload contents', 'create and schedule playlists on single interface', '']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** Screenly OSE (Open Source Edition) is a digital signage software package that allows one to easily manage and display webpages, videos, images etc and make full use of Brainy Pi hardware.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/screenly.png')} width="200" />

**Steps to Install:**


1. Update your Brainy Pi OS using below commands before installing _Screenly_ Software.  
   `sudo apt update`   
   `sudo apt full-upgrade`  

2. Run the below script which will download the install script from the 
   _Screenly_ website 
   and pass it directly to _`bash`_.  
   `bash <(curl -sL https://www.screenly.io/install-ose.sh)`  

3. During installation process, we will be asked a series of questions.

  * The first of these is whether we want to continue. You will be warned that 
  the standard desktop environment, if available, will no longer work after installation.  
  * Type **`Y`** to continue with the Screenly installation process on Brainy Pi.  

  * Next, you will be asked if you want to use the experimental branch of Screenly.
  * Type **`N`** to decline as experimental feature is unstable.  

  * Now it will  ask the version which we want to install  so select the "Production 
      Branch".

  * After this it will ask  `"do you want screenly to manage our network"`, press **`Y`**. 

  * Finally, you will be asked if you want to perform a full system upgrade, press **`N`**.
 
  * Screenly will now be installed on your Raspberry Pi.
 
  * Now it will ask for changing password we don't need to do that for now so just press 
    enter.

  * Finally, you will be asked to restart your Raspberry Pi to complete the installation of 
     Screenly for which  you need to type in **`Y`** then press `ENTER`.  

**Useful for:** to upload contents, create and schedule playlists on single interface,
                display Full HD images, videos and live web pages.  

**Link to Original Project:** https://github.com/Screenly/screenly-ose.git

**Link to Youtube Video:** <!-- Link to the Youtube video. -->