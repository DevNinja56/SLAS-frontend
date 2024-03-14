#!/bin/bash

PROJECT_PATH="/home/ubuntu/[project-name]"

# Remove all Docker cache
echo "Removing all Docker cache..."
sudo docker system prune -a -f
sudo docker builder prune --force --all

# Check if directory exists
if [[ -d "$PROJECT_PATH" ]]; then
    echo "Project directory found."

    # Check if docker-compose.yml file is present in the directory
    if [[ -f "$PROJECT_PATH/docker-compose.yml" ]]; then
        echo "docker-compose.yml found. Stopping Docker Compose..."
        (cd "$PROJECT_PATH" && sudo docker-compose down)
    fi

    # Delete the directory
    echo "Deleting the project directory..."
    sudo rm -rf "$PROJECT_PATH"
else
    echo "Project directory does not exist. No action taken."
fi

# Check if any docker containers are running
if [[ $(docker ps -q) ]]; then
    echo "Running containers found. Stopping them..."
    sudo docker stop $(docker ps -q)
fi

# Check if any docker containers are present
if [[ $(docker ps -a -q) ]]; then
    echo "Containers found. Removing them..."
    sudo docker rm $(docker ps -a -q)
fi

# Check if any docker images are present
if [[ $(docker images -q) ]]; then
    echo "Images found. Removing them..."
    sudo docker rmi -f $(docker images -aq)
fi

# Delete unnecessary files
echo "Deleting unnecessary files..."
sudo rm -rf /usr/local/share/.cache
sudo rm -rf /var/lib/docker/overlay2

# Exit with success status
echo "Done."
exit 0
