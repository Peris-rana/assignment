#!/bin/bash

MONGO_HOST="localhost"   
MONGO_PORT="27017"         
MONGO_DB="assignment"   
BACKUP_DIR="path to directory"  

# timestamp
TIMESTAMP=$(date +"%F_%T")

BACKUP_FILE="${BACKUP_DIR}/backup_${MONGO_DB}_${TIMESTAMP}.gz"

mongodump --host $MONGO_HOST --port $MONGO_PORT --db $MONGO_DB --gzip --out $BACKUP_FILE

if [ $? -eq 0 ]; then
    echo "MongoDB backup successful! Backup saved to $BACKUP_FILE"
else
    echo "MongoDB backup failed!"
    exit 1
fi
