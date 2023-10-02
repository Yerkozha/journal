
FROM strapi/base

# Set work directory
WORKDIR /app

# Install PM2 globally
RUN yarn global add pm2

# Copy package.json and package-lock.json for optimal caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the Strapi port yarn start / build
EXPOSE 1337

# Start Strapi using PM2
CMD ["pm2-runtime", "yarn", "--", "start"]