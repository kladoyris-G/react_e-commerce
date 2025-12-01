# Use Node 18
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install 

# Expose React dev server port
EXPOSE 3000

# Start React in development mode
CMD ["npm", "start"]


