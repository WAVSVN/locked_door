osquery
powershell tool
\\\\\\\\\\\\\\\


syntax: osqueryi


> .all     
select all from a table
> .mode    
choose how data is presented
> .schema [table]  
what columns/rows does this table offer?
> .tables  
list of tables that exist] 


SELECT - choose what information is returned to you,
and then use FROM to specify the table:

> SELECT uid, username, shell, type FROM users;


> .schema  
see what other information is available to query for a given table


the whole table is contained within \\ CREATE TABLE() \\ along with indicators
for whether the values are TEXT, INTEGERS, or some sort of variant of the two

the \\ PRIMARY KEY() \\ section hold all of the UNIQUE VALUES to index the row
this key can be used to \\ JOIN \\ and reference other tables


> .mode 
set the output format
> .mode line
show each value on a new line
> .mode pretty
return to default sql format




\\\\\\\\\\\\\\\\\\\\ practical uses for persistence detection  \\\\\\\\\\\\\\\\\\\\\\\\\\\




> SELECT name,display_name,user_account,path FROM services WHERE start_type = 'AUTO_START';
from the services table, display user information and filepath information for
services whose start type is AUTO_START

> SELECT hidden,name,action FROM scheduled_tasks WHERE enabled=1;
display hidden scheduled tasks  

> SELECT name, data, path FROM registry WHERE key = 'HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\Run';
                                                   > HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce
                                                   > HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run
                                                   > HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\RunOnce

display registry keys written to ''

> SELECT name,path,source,status,username FROM startup_items;
display scripts set to run at startup, as well as the associated user 

> SELECT * FROM autoexec; \
similair funtion to autoruns in powershell form, combines different startup activities into one view






