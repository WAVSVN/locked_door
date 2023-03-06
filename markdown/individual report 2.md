
individual report 2 

- ran triage2.exe as admin 
- powershell booted and then terminated 
- startup processes have been removed from task manager somehow 
- you can find startup apps in windows settings > appas and features > startup 
- what the fuck is lanman.dll ( is this for persistence ? )
- while the contents is "encrypted" much of it is still human readable if choose an unreadable character and ctrl - shft - l to select all and delete.  



possibly uses .net framework v4.0.30319
using rundll32 to run lanman.dll
pretty sure wills user account name is willn                                                                                                                                                                                                       


looks for localmachine\my-password using lanman.dll to import pfx certificates ( personal information exchange )
converts the result to a secure string ( A b c d 1 2 3 4 )
forces that string as plain text 
i think it used to send that plaintext string out of the local machine but im unsure
or its just a standard way for lanman and a local machine to interact
i believe this because lanman is the service that allows a local machine to share files with other devices over a network

Triage2.exe changed the password to lanman.pfx to Abcd1234
rundll.32 is the name task manager gives to the pfx import wizard
even though this doesnt set off any flags on its own, I still find this action suspicious
unless the program is actually just written to change the password and thats where the process ends

does triage2.exe simply import a 


the block of code following the secure string conversion looks very similiar to calls observed within lanman.dll at line 151

not a known file hash 
flagged 0 of 61 VT flags 

I still think its doing weird things 

observing handles associted with lanman.pfx (5048) lanman server (2520) and lanman workstation (1888) yielded no furthur reason for investigation, as all associated processes/services are standard windows OS operating procedure 

steps for remediation 

- its likely a powershell script to automate a pfx certificate import 

the only thing suspicious is the odd startup control behavior mentioned before, which could mean persistence for some unknown reason to always run that .pfx import , select a local machine, and pass it the password Abcd1234 

however, even if persistence exists in this particular instance, its not necessarily a malicious action, and could just be a powershell script that someone uses to import a certain .pfx certificate without going through the hassle of the wizard each time. we believe this to be the case, as the program must be launched with administator priviledges and subsequently, the only way to import a .pfx to the local machine rather than the current user is with administrator priviledges. This fact combined with the normal handle activity on the associated process ID is why at this time we believe no furthur action needs to be taken regarding the matter, this is assuming the user has permission to import that certificate. if any action were taken, it would be advisable to follow up with the user who launched Triage2.exe so we are able to confirm / disprove our preliminary findings here. \




\\\\\\\\\\\\ V2 \\\\\\\\\\\\\\


persistence
- file path for persistence in HKCU current version run registry key is 
    >c:/windows/system32/rundll32.exe,c:/windows/system32/lanman.dll,register 
    <rundll32.exe is loading <lanman.dll with the <register function>>>

    - lanman presumably stands for local area network manager
     




process events 

- found in strings 
    > http://crl.microsoft.com/pki/crl/products/MicRooCerAut_2010-06-23.crl0Z

    > C:\workspace\SimpleDLL\x64\Release\Lanman.pdb

    > C:\workspace\RobsTestApp\obj\x64\Release\Procsrv.pdb

    > procsrv.exe




network activity 


- constant tcp traffic between procsrv.exe and IP 162.125.6.18 <dropbox>
    > mostly tcp recieve, every so often tcp send packet is observed 

















