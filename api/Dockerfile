
# Set the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY src ./src

# Build the TypeScript files to JavaScript
RUN npm run build

# Set the command to start the app
CMD [ "npm", "run", "serve" ]

