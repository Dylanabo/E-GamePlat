FROM node:18

# Create app directory
WORKDIR /code

ENV NODE_ENV=production

# Install app dependencies
COPY package*.json ./
RUN npm install


EXPOSE 8079
# Bundle app source

COPY . .
CMD [ "npm", "start" ]