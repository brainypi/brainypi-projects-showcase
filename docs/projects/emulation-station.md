---
id: emulation-station
title: Retro Gaming on BrainyPi
description: Retro Gaming on BrainyPi
image: img/emulation-station.png
keywords: ['retro gaming']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** EmulationStation is a frontend for emulators, which gives a graphical interface for accessing all of your games. It is a core part of RetroPie and is what lets you sort and configure games. Using EmulationStation on Brainy Pi we can start building own alternative to RetroPie.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/emulation-station.png')} width="200" />

**Steps to Install:**

1. Copy and paste the following lines into a terminal:

   ```
   sudo apt-get install -y git

   git clone --depth=1 https://github.com/RetroPie/RetroPie-Setup.git

   cd RetroPie-Setup

   sudo ./retropie_setup.sh
   ```

2. As we don’t want to install the entirety of RetroPie for this guide we must switch to the _Manage Packages_ screen.

* You can do this by pressing the **`B`** key, then by pressing `ENTER`.

* As EmulationStation is a core package for RetroPie, we can switch straight into the first option by pressing the `ENTER` key.

3. Within this next menu, we need to select the `emulationstation` option.  
 
* You can do this by pressing `2`, then the `ENTER` key.

4. We will be using the pre-compiled binary option for this tutorial as it is far faster to install them. Select this option by pressing **`B`**, then the `ENTER` key.

5. Press **`Y`** on your keyboard then the ENTER key to proceed with the installation.

6. Now that you have installed EmulationStation, you can quit by pressing the `ESC` key till you return to the command line.

7. Installation will be done.


**Useful for:** retro gaming

**Link to original project:**  https://github.com/RetroPie/EmulationStation.git

**Link to Youtube Video:** <!-- Link to the Youtube video. -->