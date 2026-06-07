#!/bin/sh
set -e

cd /home/zayka
echo "Starting Zayka..."

exec node server.js
