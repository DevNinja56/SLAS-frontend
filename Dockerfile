# Use a base image that includes Node.js
FROM node:18-alpine

# Update packages in the Alpine Linux
RUN apk update

# Set the working directory in the container
WORKDIR /app

# Install global dependencies
RUN npm install -g serve pm2

# Copy the current directory contents into the container at /app
COPY build /app

# Copy the pm2 script into the container at /app
COPY pm2.config.yml /app

# Copy the environment file into the container at /app
COPY .env /app

# Define the command to run the app using PM2
CMD ["pm2-runtime", "start", "pm2.config.yml"]

# Make port 3000 available to the world outside this container
EXPOSE 3000
