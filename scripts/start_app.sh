#!/bin/bash

# echo "Starting Docker Compose..."

PROJECT_PATH="/home/ubuntu/[project-name]"
ENV_PATH="/home/ubuntu/.env"

# Check if the directory exists
if [[ -d "$PROJECT_PATH" ]]; then
    echo "$PROJECT_PATH folder found."
else
    echo "Creating $PROJECT_PATH folder..."
    sudo mkdir -p "$PROJECT_PATH"
fi

# Copy the .env file if it exists
if [[ -f "$ENV_PATH" ]]; then
    echo "Copying .env file..."
    sudo cp "$ENV_PATH" "$PROJECT_PATH/.env"
else
    echo "Warning: .env file not found, proceeding without it."
fi

cd "$PROJECT_PATH" || exit

# Delete yarn.lock if it exists
if [[ -f yarn.lock ]]; then
    echo "Delete yarn.lock file..."
    sudo rm -rf yarn.lock
else
    echo "Warning: yarn.lock file not found, proceeding without it."
fi

# Delete package-lock.json if it exists
if [[ -f package-lock.json ]]; then
    echo "Delete package-lock.json file..."
    sudo rm -rf package-lock.json
else
    echo "Warning: package-lock.json file not found, proceeding without it."
fi

yarn install

yarn build

# Start Docker Compose if docker-compose.yml is present
if [[ -f docker-compose.yml ]]; then
    sudo docker-compose up -d
    echo "Docker Compose started."
else
    echo "Error: docker-compose.yml not found. Docker Compose cannot start."
    exit 1
fi

# Exit with success status
echo "Done."
exit 0
