# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 5050

# Define environment variable
ENV PORT 5050

# Command to run the app
CMD ["node", "dist/index.js"]
