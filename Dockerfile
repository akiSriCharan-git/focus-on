FROM node:14

# Create app directory
WORKDIR /usr/src/app

RUN npm install pm2 -g

COPY package*.json ./

# Install production dependencies
RUN npm ci 

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]
