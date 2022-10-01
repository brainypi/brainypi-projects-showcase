---
id: email-server
title: Personal Email server on Brainypi
description: Personal Email server on Brainypi
image: img/email-server.png
keywords: ['Email', 'collaboration', 'groupware', 'and content management - up and running in minutes', 'on your own hardware or in the cloud', 'low cost']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** We will be using Citadel software package to implement email server on Brainy Pi.It is an easy to set up, powerful yet versatile mailing server which does not require extensive configuration to get it up and running. It is 100% open source software.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/email-server.png')} width="200" />

**Steps to Install:**

1. Copy and paste the following lines into the terminal:

   ```
   sudo apt update
   sudo apt upgrade

   sudo apt install build-essential curl g++ gettext shared-mime-info libssl-dev zlib1g-dev 

   curl https://easyinstall.citadel.org/install | sudo bash
   ```
2. You will first be asked to set a username for your admin user. By default, this user will be called _admin_.

 * If you want to use a different username for the admin, you can enter it at this stage. 
    
* Otherwise, you can press the ENTER key to continue.

3. You will now be asked to enter a password for your admin user.

* The default password for this is _citadel_. It is highly recommended to change this to 
  something more secure.

* Press the ENTER key to continue to the final step.

4. In these final steps, we define the ports for the Citadel web interface on 
  our Brainy Pi.

* If you are not running another web server such as Apache, it is best to set HTTP to port 80, and HTTPS to port 443.

5. With this the software should be successfully installed.

**Useful for:** Email, collaboration, groupware, and content management - up and running in minutes, on your own hardware or in the cloud, low cost.

**Link to original project:** https://www.citadel.org/source.html

**Link to Youtube Video:** <!-- Link to the Youtube video. -->