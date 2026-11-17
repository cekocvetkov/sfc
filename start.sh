#!/bin/sh
# Stop the container if migrations fail, instead of serving an app on an outdated schema.
set -e

echo "Running database migrations..."
node node_modules/prisma/build/index.js migrate deploy

echo "Starting application..."
exec node server.js
