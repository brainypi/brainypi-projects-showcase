---
id: radio-station
title: <!-- Describe the project in 1 sentence -->
description: <!-- Describe the project in 1 sentence -->
image: img/radio-station.png
keywords: ['audio/video streaming server', 'radio', 'supports mp3']
---


import useBaseUrl from '@docusaurus/useBaseUrl';



**Description:** Icecast is an audio/video streaming media server that can be used to create everything 
  from Internet radio stations to privately running music playlists. DarkIce is a live audio streamer capable of recording audio from an audio interface (e.g., a sound card), encodes the audio, and sends it to a streaming server.

<img alt="Oops!, No Image to display." src={useBaseUrl('img/radio-station.png')} width="200" />

**Steps to Install:**

1. Copy and paste the following lines into a terminal:

   ```
   Wget https://github.com/x20mar/darkice-with-mp3-for-raspberrpi/blob/master/darkice_1.0.1- 
   999~mp3+1_armhf.deb?raw=true mv darkice_1.0.1-999~mp3+1_armhf.deb?raw=true darkice_1.0.1- 
   999~mp3+1_armhf.deb
   sudo apt-get install libmp3lame0 libtwolame0
   sudo dpkg -i darkice_1.0.1-999~mp3+1_armhf.deb

   sudo apt-get install icecast2
   ```

2. During the installation process, it will ask you if you want to configure Icecast2.   
   Select `Yes`.

3. The next screen will ask you to specify the domain name. 
  * Select `OK` to use the default hostname "localhost".

4. Now, in the next steps, you will be required to add 3 passwords.  
* The first one is to control access to media sources.  
* The second is to use stream relays.  
* The third password is to grant access to the administration console.
* Click `ok` to use the default password.
* The default username will be “admin”.

5. Run the below command.

   ```
   sudo nano darkice.cfg
   ```

6. Then copy and paste these configurations in the file:

   ```
   # this section describes general aspects of the live streaming session
   [general]
   duration     = 0     # duration of encoding, in seconds. 0 means forever
   bufferSecs   = 5     # size of internal slip buffer, in seconds
   reconnect    = yes   # reconnect to the server(s) if disconnected
   # this section describes the audio input that will be streamed
   [input]
   device          = plughw:0,0  # Soundcard device for the audio input
   sampleRate      = 22050     # sample rate in Hz. try 11025, 22050 or 44100
   bitsPerSample   = 16        # bits per sample. try 16
   channel         = 2         # channels. 1 = mono, 2 = stereo
   # this section describes a streaming connection to an IceCast2 server
   # there may be up to 8 of these sections, named [icecast2-0] ... [icecast2-7]
   [icecast2-0]
   bitrateMode     = abr       # average bit rate
   format          = mp3       # format of the stream: ogg vorbis
   bitrate         = 320       # bitrate of the stream sent to the server
   server          = localhost # host name of the server
   port            = 8000      # port of the IceCast2 server, usually 8000
   password        = lolcat123 # source password to the IceCast2 server
   mountPoint      = Stream.mp3  # mount point of this stream on the IceCast2 server
   name            =  Raspberry Pi Stream # name of the stream
   description     = Broadcast from Raspberry Pi # description of the stream
   #public         = yes       advertise this stream?
   ```

7. Save the changes using Ctrl+X ,then press Y ,and then Enter.

8. Then create another file named "darkice.sh" using the below command:

   ```
   sudo nano darkice.sh
   ```

9. Paste the below line in the file. This line contains the address to the configuration 
    file.

    ```
    sudo /usr/bin/darkice -c /home/pi/darkice.cfg
    ```

10. Then make the darkice.sh file executable using the below command:

    ```
    sudo chmod 777 /home/pi/darkice.sh
    ```

11. Next, start the Icecast2 service using the below command:

    ```
    sudo service icecast2 start
    ```
12. Installation will be completed.

**Useful for**: audio/video streaming server, radio, supports mp3.

**Link to original project:** https://github.com/xiph/Icecast-Server

**Link to Youtube Video:** <!-- Link to the Youtube video. -->