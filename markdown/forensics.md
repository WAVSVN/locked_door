> forensics is applliedf to networks and endpoints is the application of investigatory and alaysis techniques to gather and preserve evidence 

- you will probably have to interface with the businesses internal or external legal 

forensic documentation

evidence chain of custody log 

engineering notebook 



these help to provide a timeline \ context of the events in question:

DC logs \\\ authenitcation events
DHCP logs \\\ mac to ip assignments 
DNS logs \\\ host specific dns lookups 
HTTP proxy logs \\\ host http activity
fireall logs \\\ violation of security policy
netflow \\\ endpoint comms
pcap \\\ endpoint comms 

malicious domain found written into the binary > look at dns logs associated with that domain 

goal is to parse out file content using network pcap

analysis of malicious network behaviors to support threat intelligence or other roles in a SOC 


live system forensics

- necessary for confirmation that deeper analysis is necessary
- creates noise on the endpoint due to administrative actions 

memory forensics 

- disconnecting a system prior to memory acquisition will destroy valuable evidence
- rekall can parse memory live, but is onyl useful to determine systems that require a full memory dump 


disk forensics 

- look for something hiding in NTFS data streams 
- good to get a vyte for byte copy of the disk for offline analysis
- disk forensics enable many "deleted" files to be recovered in part or in full 


time stomping
rootkits
signing and encrypting scripts/binaries 

grabbing a memory snapshot can uncover a rootkit 



take photos of the asset as found from all available angles
record time \ individuals \ events up to the beginning of the investigation
record markings \ serial/model numbers \ number of items collected
use chain of custody to record investigatory notes, commands, and procedures taken

use write blockers to maintain integrity of disk evidence
use an air-gapped system for analysis  

