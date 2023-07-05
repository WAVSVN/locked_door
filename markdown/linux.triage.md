steps for linux triage 

- profile overrulles shell ability 

- read profile
- read bashrc

>check for random private directorys created in the users home folder 

check for timestamps related to the time of breach 

check the /tmp directory 

check logs/permissions  
<sudo -l>
</var/log/>
</var/backups>

check for automated tasks < cronjobs >
<crontab -l>



<ps aux | less>
- better for triage than top 

grep for root 

<ss -tulpn>
- display all listening TCP and UDP sockets, and the associated process 

<cat <file< | base64 -d>

</etc/shadow> 