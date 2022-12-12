FROM node:18

# Create app directory

WORKDIR /codeclient

ENV NODE_ENV=production

# Install app dependencies

COPY package*.json .
RUN npm install


COPY . .
CMD [ "npm", "start" ]