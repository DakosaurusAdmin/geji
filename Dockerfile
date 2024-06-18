# Use official Node.js LTS image as the base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY geji-app/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY geji-app/. .

# inject secrets
COPY ["geji-app/.env.local", ".env"]

# Build the Next.js application for production
RUN npm run build

# Expose the port Next.js runs on (usually 3000)
EXPOSE 3000

# Set the command to run the Next.js application
CMD ["npm", "start"]

# docker build -t nextjs-app .