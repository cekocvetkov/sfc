#!/bin/bash

if [ -z "$1" ]; then
    echo "Please provide the backup file to restore from"
    echo "Usage: ./restore.sh backups/sfcdb_backup_YYYYMMDD_HHMMSS.sql.gz"
    exit 1
fi

BACKUP_FILE=$1

if [ ! -f "$BACKUP_FILE" ]; then
    echo "Backup file not found: $BACKUP_FILE"
    exit 1
fi

# Decompress the backup file
gunzip -c "$BACKUP_FILE" > "${BACKUP_FILE%.gz}"

# Restore the database
docker-compose exec -T db psql -U sfc -d sfcdb < "${BACKUP_FILE%.gz}"

# Clean up the decompressed file
rm "${BACKUP_FILE%.gz}"

echo "Database restored from: $BACKUP_FILE" 