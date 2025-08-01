FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
RUN npm run build
RUN npm prune --production
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
ENTRYPOINT ["npm", "start"]
