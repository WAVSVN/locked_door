Elastic.Logstash.Kibana

operational security at scale

Elastic

- best used with a template / map configuration
- indexes as big as 25 gig
- index runs in memory 
- ecs is elastic searches own thing 

-what are we storing?
-what index are we in?

- Discover

- last 15 minutes, last < inser timeframe here >
- can drag on the histogram to zoom
- if you dont both 3 hour timeframe and host filter when looking throuhg PID's you will probably be wrong 


\\\\ field     \\\\ value      



Logstash
 
 - converts data, middleware for elastic search and kibana 


Kibana

- essentially what ELK uses as its visual engine or ui, displays data converted by logstash


- some general useful filters for network log analysis:

 \\\\\\\\ data_stream.dataset 

 \\\\\\\\ user.name

 \\\\\\\\ host.ip

 \\\\\\\\ destination.port

 \\\\\\\\ data_stream.dataset
 
- windows.sysmon_operational
- windown.powershell_operational

 \\\\\\\\ event.category: file



 finding hostnames:




visualize host.name data into a table 

\\\\\\\\ finding usernames :

user.name.keyword visualized into a table 


event.category:"network" in query 

destination.port 0 to 1023 



\\\\\\\\\ find processes spawned by the GUI

filter by category

process.parent.name:"explorer.exe"

process.parent.name:"services.exe"




\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

> use script block text in conjunction with powershell or command line logs within ELK to determine what the binary is actually doing on the sytem

process.name.text:"binary_name" or powershell.file.script_block_text: * 



New filter
- host.hostname
is EC2AMAZ


Absolute start time?

- "enable this logging as a potential remediation" 



- process shows us what is doing something, network only shows us what a host is doing, not what specifically on that host is carrying the function out 

FILTER OUT VALUES TO REMOVE CLUTTER

CLSID (class ID) is commonly related to the 

- can reference a binay
- can correllate to a registry key


explorer shouldnt run powershell


event.process.start
rdp connection lasted roughly 30 minutes

administrator account is in use, meaning they have admin credentials and can authenticate on any box in the network using those credentials 

logon type 10 will show remote interactive user sessions 
data_stream.dataset: windows.powershell_operational


> powershell log analysis 

\\\\\\\\ data_stream.dataset: windows.powershell_operational

\\\\\\\\ powershell.file.script_block_text

\\\\\\\\ winlog.process.pid                 22236



> security alert events 

\\\\\\\\ endpoint.events.security 

\\\\\\\\ event.outcome

\\\\\\\\ event.category: authentication





