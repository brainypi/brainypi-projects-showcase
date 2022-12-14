---
id: plex
title: Media Server on BrainyPi
description: Media Server on BrainyPi
image: img/plex.png
keywords: ['free tv', 'live tv', 'movies', 'series', 'media']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** Plex is a client-server setup where the client directly streams data from the Plex media server. As a result we can have all our movies, music, and photos located on this one device, the server. We will be using the Brainy Pi to achieve this.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/plex.png')} width="200" />

**Steps to Install:**

1. Just copy and paste the following lines into a terminal to upgrade all the packages.

   ```
    sudo apt-get update
    sudo apt-get upgrade
   ```

2. We need to install apt-transport-https” package. This package allows the **`“apt”`** 
   package manager to retrieve packages over the “https” protocol that the Plex repository 
   uses.

   ```
   sudo apt-get install apt-transport-https
   ```
3. Now add the Plex repositories to the “apt” keyrings directory.

 * Run the following command to download and save the key to our keyrings directory.

   ```
   curl https://downloads.plex.tv/plex-keys/PlexSign.key | gpg --dearmor | sudo tee 
   /usr/share/keyrings/plex-archive-keyring.gpg >/dev/null
   ```

4. With the Plex GPG key now added, we can add the official plex repository to 
   the sources list by running the following command.

   ```
   echo deb [signed-by=/usr/share/keyrings/plex-archive-keyring.gpg] 
   https://downloads.plex.tv/repo/deb public main | sudo tee 
   /etc/apt/sources.list.d/plexmediaserver.list
    ```
5. Since we have added a new repository to our sources, we will need to run the “update” 
   command again to refresh the package list.
   ```
   sudo apt-get update
   ```

6. To install the _plexmediaserver_ package, run the command below.

   ```
   sudo apt install plexmediaserver
   ```
7. Installation is completed. 

8. The installation process for Plex sets up a few different things for us.

  * First, it creates a user and group for Plex to run under. This user and group is called 
   “plex“.

  * It will also set up two directories, one to store files temporarily that Plex is transcoding. We can find this folder at _"/var/lib/plexmediaserver/tmp_transcoding“_.

  * The second directory is where Plex will store all the metadata it retrieves for your 
    media. This folder can be found at _“/var/lib/plexmediaserver/Library/Application 
    Support“_

**Useful for:** free tv, live tv, movies, series, media.

**Link to original project:** https://github.com/plexinc

**Link to Youtube Video:** <!-- Link to the Youtube video. -->