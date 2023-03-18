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


- some useful filters for network log analysis:

 \\\\\\\\ user.name

 \\\\\\\\ host.ip

 \\\\\\\\ destination.port


\\\\\\\\\ finding hostnames:

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



