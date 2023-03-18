email protocol 

\\\\\

email header -

sender address
reciever address
domain the sender belongs to 
sender verification
email servers the file transitioned through
associated ip addresses

\\\\\
amazonses.com =  amazon simple email service 



DKIM

verifies signature of original email sender 
email is signed with a key generated using that signature 
s
bh
b
combined will verify with the key


DMARC

policy for what happens of DKIM is triggered 


SPF

spf record

list / range / domain of ip's that are authorized to send email from an account 
open spf record is reason for suspicion / alert





remediation for email compromise

remove the email
verifiy it wasnt sent to anyone else
check for indicators listed in the network
file hash : script hash
look for ip/domain traffic after this event 

filter ip/domain with in\out rules 
spam filters
the best kind 