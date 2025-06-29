#!/bin/bash

# Create backups directory if it doesn't exist
mkdir -p backups

# Generate timestamp for the backup file
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backups/sfcdb_backup_${TIMESTAMP}.sql"

# Create backup using pg_dump
docker-compose exec -T db pg_dump -U sfc sfcdb > "${BACKUP_FILE}"

# Compress the backup
gzip "${BACKUP_FILE}"

echo "Backup created: ${BACKUP_FILE}.gz"

# Optional: Keep only last 7 days of backups
find backups -name "sfcdb_backup_*.sql.gz" -mtime +7 -delete 