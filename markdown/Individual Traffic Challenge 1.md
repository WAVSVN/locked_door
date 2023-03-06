Individual Traffic Challenge 1


What OS is the host @ 10.200.2.252 running?
What field/traffic did you use to identify the OS? What is the purpose of that field/traffic? How did query/search for it?

    the host is running an apache 2.2.22 server on debian linux. 
        using the http.user_agent filter to look through http traffic and then following the tcp stream on a corresponding POST http packet (in this case a 404 error) we can find this information along with other useful data
        The purpose of this traffic is a host to client communcation to reflect an error



From what IP is a suspicious file downloaded?
How did you find the file? What makes it suspicious?

    185.91.175.64
    
        used the [ http.request || http.response and frame contains "MZ" and frame contains "DOS" ] 
        filter in wireshark to show all GET requests and saw a .exe with a randomized name which is never a good sign 

            the random character string file name makes the file suspicious




What other suspicious IPs are listed in this traffic after the file download?
What connections stand out as non-standard web addresses or traffic after the download?

if this get happened at packet 4, wouldnt any subsequent unseen ip be considered suspicious?
these stood out to me 

199.201.121.169
188.120.225.17
107.191.46.222
45.55.154.235
185.91.175.64
5.135.28.104

unsure if spurious retransmission is an indicator of non standard or suspicious web traffic 





What non-standard port is HTTP traffic occurring on? (Be sure to exclude ephemeral ports from your search here)

This one had me a little stuck, filtering http in display filters only returns commnications between ephemeral ports 61XXX and port 80, which is standard for http over tcp. is udp port 80 traffic being disguised as tcp traffic in some way, I know port 80 over udp is used for spooky things 




List some of the suspicious/interesting URLs listed in this pcap.

TCnu.YcVBf/hLX%2C4AVZGlqL/zp2qIegw [ wxIAJN2OB.org ]
LyugRBn%265&WG%3DJ6%3F%3DySS/a1jfr2/K$_zjF2Uf9msf5U%3F= [ KYn.edu ]





What makes them suspicious?

the random character strings, the host domain names 




What is the hash value for the downloaded exe?

7C9D5724064693DFEEF76FD4DA8D6F159EF0E6707E67C4A692A03E94F4A6E27A




What malware family does this exe belong to?

classed as a trojan \ worm
looks like it adds registry entries to victim machines
flagged by 60 vendors and 1 sandbox
