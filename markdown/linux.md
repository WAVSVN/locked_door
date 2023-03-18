linux

\\\\\\

open source, no license = $avings and control

stable, fully customizable

less abstraction

- command line focused 
- simplifies complexity 
- 

\\\\\\

UNIX philosophy 

' do one thing well, work together ' 

- write programs that do one thing and do it well
- write programs to work together 
- write programs to handle text streams, because that is a universal interface 

learning the first concept improves the second 

\\\\\\


echo $PATH
echo $HOME
echo $SHELL
which less
touch this 


if we can read and write to the root directory, we can access every other directory 

env \ less


instanciation
- creating a piece of data to exist in a virtual space 
- 

0 = --- = 0000
1 = --x = 0001
2 = -w- = 0010
3 = -wx = 0011
4 = r-- = 0100
5 = r-x = 0101
6 = rw- = 0110
7 = rwx = 0111

Binary values represent permissions on the linux opreating system 

ls -p appends a forward slash to all directories 
grep -v will omit everything with a forward slash 

ls -p | grep -v / 

\\\\\\

standard streams in linux 

\\\\\\\

0 = stdin - what gets input  
1 = stdout - what gets output if syntax runs 
2 = stderr - what gets output in the case of an error 

command redirection \ substitution    |  >  >>  

\\\\\\\

find / -perm -u=s -type -f

\\\\\\\\\ Enumeration command for a linux machine ^


touch - creates file 
while read line; do echo

\\\ loops \\\ global vs local scope \\\

for object in ./* ; do file $object ; done 

for i in {2..11}; do echo "192.168.1.$i"; done


for loops are typically for a known quantitiy
while loops tend to be used when the number of interactions needed is not known 



