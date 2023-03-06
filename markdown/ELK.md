ELK

operational security at scale


Elastic

- best used with a template / map configuration
- indexes as big as 25 gig
- index runs in memory 
- ecs is elastic searches own 

-what are storing
-what index are we in

- Discover

- last 15 minutes, last etc.
- can drag on the histogram to zoom

- if you dont both 3 hour timeframe and host filter when looking throuhg PID's you will be wrong 


\\\\ field     \\\\ value      



Logstash
 
 - covert data, middleware for elasticsearch 

 does a period mean next argument and any where there would be a space you use an underscore within each argument?

why do host ips sometimes show 2 sets of ips? \\\\\


 \\\\\\\\ user.name

 \\\\\\\\ host.ip

 \\\\\\\\ destination.port



finding hostnames:

visualize host.name data into a table 

finding usernames :

user.name.keyword visualized into a table 

event.category:"network" in query 

destination.port 0 to 1023 



find processes spawned by the GUI

filter by category

process.parent.name:"explorer.exe"





process.parent.name:"services.exe"
