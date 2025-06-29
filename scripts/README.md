# Database Backup and Restore Scripts

This directory contains scripts for managing PostgreSQL database backups and restores in a Docker environment.

## Prerequisites

- Docker and Docker Compose installed
- PostgreSQL database running in Docker
- `gzip` utility installed on your system

## Scripts Overview

### 1. Backup Script (`backup.sh`)

Creates a compressed backup of your PostgreSQL database.

#### Features:
- Creates timestamped backups
- Automatically compresses backups using gzip
- Maintains a 7-day backup history
- Creates backups in a `backups` directory

#### Usage:
```bash
./backup.sh
```

#### Output:
- Creates a file in the format: `backups/sfcdb_backup_YYYYMMDD_HHMMSS.sql.gz`
- Automatically removes backups older than 7 days

### 2. Restore Script (`restore.sh`)

Restores the database from a backup file.

#### Features:
- Validates backup file existence
- Handles compressed (.gz) backup files
- Cleans up temporary files after restore

#### Usage:
```bash
./restore.sh backups/sfcdb_backup_YYYYMMDD_HHMMSS.sql.gz
```

## Setting Up Automated Backups

### Using Cron (Linux/macOS)

1. Open your crontab:
```bash
crontab -e
```

2. Add a line to run daily backups (example: at 2 AM):
```bash
0 2 * * * /path/to/your/project/scripts/backup.sh
```

### Using Task Scheduler (Windows)

1. Open Task Scheduler
2. Create a new Basic Task
3. Set the trigger (e.g., Daily at 2 AM)
4. Action: Start a program
5. Program/script: `bash`
6. Add arguments: `/path/to/your/project/scripts/backup.sh`

## Backup File Structure

```
backups/
├── sfcdb_backup_20240321_020000.sql.gz
├── sfcdb_backup_20240322_020000.sql.gz
└── sfcdb_backup_20240323_020000.sql.gz
```

## Best Practices

1. **Regular Testing**
   - Periodically test the restore process
   - Verify backup file integrity

2. **Storage Management**
   - Monitor backup directory size
   - Ensure sufficient disk space

3. **Security**
   - Keep backup files secure
   - Consider encrypting sensitive data
   - Implement proper access controls

4. **Monitoring**
   - Check backup logs regularly
   - Set up notifications for backup failures

## Troubleshooting

### Common Issues

1. **Permission Denied**
   ```bash
   chmod +x backup.sh restore.sh
   ```

2. **Backup File Not Found**
   - Ensure the backup file exists in the specified path
   - Check file permissions

3. **Database Connection Issues**
   - Verify Docker containers are running
   - Check database credentials in docker-compose.yml

