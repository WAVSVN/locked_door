problems.solutions

- command line recon tool 
> When PowerShell is necessary, restrict PowerShell execution policy to administrators Be aware that there are methods of bypassing the PowerShell execution policy, depending on environment configuration [OS_configuration]


- can execute files or scripts as a different user remotely
> On Windows 10, enable Attack Surface Reduction (ASR) rules to prevent Visual Basic and JavaScript scripts from executing potentially malicious downloaded content [behavior_prevention_on_endpoint]
>


- move \ delete local files 
> Obfuscate/encrypt event files locally and in transit to avoid giving feedback to an adversary [encrypt_sensitive_information]
> Automatically forward events to a log server or data repository to prevent conditions in which the adversary can locate and manipulate data on the local system [remote_data_storage]


- schedule remote AT jobs
> Configure settings for scheduled tasks to force tasks to run under the context of the authenticated account instead of allowing them to run as SYSTEM [OS_configuration]
HKLM\SYSTEM\CurrentControlSet\Control\Lsa\SubmitControl
> Configure the Increase Scheduling Priority option to only allow the Administrators group the rights to schedule a priority process [priviledged_account_management]
configure through group policy 


- perform host discovery on connected networks
> Ensure that unnecessary ports and services are closed to prevent risk of discovery and potential exploitation



- retrieve OS and user information
> Prevent administrator accounts from being enumerated when an application is elevating through UAC since it can lead to the disclosure of account names [OS_configuration]
HKLM\ SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\CredUI\EnumerateAdministrators


