
FROM strapi/base:latest
FROM node:16-buster

RUN echo "deb http://archive.debian.org/debian/ stretch main" > /etc/apt/sources.list
RUN echo "deb-src http://archive.debian.org/debian/ stretch main" >> /etc/apt/sources.list
RUN echo "Acquire::Check-Valid-Until false;" > /etc/apt/apt.conf.d/99disable-valid-until


RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs



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

RUN yarn build

# Expose the Strapi port yarn start / build
EXPOSE 1337

# Start Strapi using PM2
CMD ["pm2-runtime", "start", "yarn", "--interpreter", "bash", "--name", "api", "--", "start"]