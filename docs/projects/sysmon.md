---
id: sysmon
title: System Montior on BrainyPi
description: System Montior on BrainyPi
image: img/sysmon.png
keywords: ['user friendly system management tool', 'used in headless setup of single board computers', 'servers with lower system specifications etc']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** Sysmon is a tool used to monitor system performance and manage tasks which is remotely-accessible  for servers and headless single board computer setups.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/sysmon.png')} width="200" />

**Steps to Install:**
1. Copy paste the below command to install and upgrade virtualenv.

   ```
   pip3 install virtualenv --user
   ```
2. Clone the sysmon repository from github using below command.

   ```
   git clone https://github.com/t0xic0der/sysmon.git
   ```

3. Change to sysmon directory.

   ```
   cd sysmon
   ```
4. Create a virtual environment by executing below command.

   ```
   virtualenv venv
   ```
5. Activate the virtual environment by executing below command.

   ```
   source venv/bin/activate.
   ```
6. Run the below command, to properly install header files and static libraries.

   ```
   sudo apt-get install python3.9-dev
   ```
7. Install all dependencies for the project by executing below command.

   ```
   pip3 install -r requirements.txt
   ```
8. Installation is completed.
9. Run the project server by executing the below command that will run the webserver at port 
   6969 and is accessible via all IPv4 and IPv6 addresses.

   ```
   python3 main.py -p 6969 -6. 
   ```
**Useful for :** user friendly system management tool, used in headless setup of single board computers, servers with lower system specifications etc.

**Link to original project:** https://github.com/t0xic0der/sysmon

**Link to Youtube Video:** <!-- Link to the Youtube video. -->