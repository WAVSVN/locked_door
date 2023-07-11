at the foundation of live music control is midi communication

most people think midi is just what electronic keyboards use to control notes inside of music software, but in many kinds of live mixing software, midi signals are what the hardware controller uses to tell the software what to do

this simple fact paired with the capability of OSC/PILOT opens up some fun possibilities.

OSC/PILOT is a bi-directional control surface application originally built as a performance tool for electronic music artist, deadmau5.

OSC/PILOT emulates a blank midi device and is fully programmable across 16 channels of midi with 127 individual controls per channel, not to mention the unlimited programming possibilities of OSC. the program allows the user to create touch interfaces to control the device, features native image and text support, and supports reception of media over NDI.

]
]
]

starship is an evolving project that aims to be a portable, powerful replacement for a standard pioneer rekordbox mixer.

in its current configuration, it features realtime NDI capture of 3 available decks inside of rekordbox6

a fully functional fullscreen browser

NDI capture \ reception is achieved through use of NDI groups within OBS

2 decks available for control at all times through the use of the ipad mirror




for those who want to mess with it on their own machine:

this thing isnt going to be plug and play if you download it, beyond getting a license for the software, be prepared to \

- create a midi map inside your preferred software and build the appropriate obs window capture modules

- this will be fixed soon, but I programmed this thing haphazard as hell and midi assignments are less than organized. it works, everything will send, but feel free to organize things if I havent already

- set up either loopmidi for local midi loopback OR

- set up a midi network using RTPmidi and bind it to your desired network ( recommended )

ill try to update the plt file as I get it more in order but for now, here it is



beyond starship, theres some devices ive made for my own music creation to control some of my favorite VSTS as well as some functions in ableton in there too

these are even less finished, live11 includes everything excluding starship in one workspace plus some extra fun



