windows domain

    forests,trees,domains,active directory
        01\ 15\ 23

        --- a domain is an umbrella of control
        --- domains are managed by a domain controller
        --- subsequent devices added to a domain are stored as objects in active directory
        --- a domain controller is a server that provides domain services as well as web , file, and network services
        --- active directory is an object database of users, groups, devices, and policy
        --- multiple DCs = better security + higher complexity
        --- single DC = easiest to manage + higher risk of full compromise
        --- organizational units allow for different policys to be apllied to different groups or devices in a network through active directory

    

- network management requires centralized control and automation to meet the demands of business at scale

- like a web domain, a network domain is a cocncept and implementation in how assets, both virtual or
physical are managed or controlled

- users, printers, computers, devices, servers, and data are considered objects within the domain. The domain controller is a server




domain controller ( DC )

- server
- primary focal point for domain management 
- domain authentication/control
- DNS
- file sharing
- web services
- network and routing services

depending on size or use case, one or more DC's may be used to manage objects in a network 




> Active Directory 

the database that stores the objects used in Windows Domain services
can scale to millions of objects within a domain and is the backbone of windows domain management 

administrators interface with Active Directory via
- Security
- Local
- Group Policy Objects ( GPO )
these set and deploy changes in how the domain is configured and managed 

Domain controllers are best used when only using one domain name 

ex. "achtermannportfol.io" 

this is considered the root domain there can exist subdomains

ex. "usa.achtermannportfol.io"

best practice is to have the least number of domain controllers and domain names in use to make management of the overall domain easier, howwever someitimes this is not possible 




>whenever you create a domain, a forest and tree are subsequently created by default

 - changes to active directory at the root domain controller replicate to all child domains and other root domain controllers that are in other trees ( if configered to do so )

 - multiple trees are harder to manage but offer additional security in that one domaincan be compromised without inherently affecting the other 

 - this is common when a merger occurs between businesses and they merge their networks 

 


> Organizational Units ( OU )

 - provide an additional method for granular control and delegation of management authority
 - useful when you wish to deplay group policy to a subset of users / groups / computers within a domain
 
 - sales
 - hr
 - engineering
 - etc.

 OUs allow for delegation and management of permission and policies at the OU level so as not to affect other objects within Active Directory



 
 Domains are managed via the local group policy editor 

 - admins can select domains / users / groups / devices to configure unique settings as required by an organization 
 - once a policy has been created or edited, the policy can be pushed at a regular interval or pushed manually for quick deployment of domain changes