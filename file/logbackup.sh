#!bin/bash

\\\\\ very much under construction but a simple tool for log backup

exec 2>> /tmp/hasher_error.log

echo "Provide directory for backup:"
read USERDIR
echo "Processing..."
sleep 3

echo "backup log of $USERDIR" >> logbackup.log
for file in $(find $USERDIR -name "*.log") 
do
    echo $file >> /tmp/hash.log
    md5sum $file >> /tmp/hash.log
done

