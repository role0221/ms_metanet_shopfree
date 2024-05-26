FROM --platform=linux/amd64 node:20.0.0-slim AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm i --only=production && npm cache clean --force
COPY   . .
RUN npm run build

FROM --platform=linux/amd64 node:20.0.0-slim 
WORKDIR /usr/src/app
COPY   package.json ./
COPY  --from=build /usr/src/app/node_modules ./node_modules
COPY  --from=build /usr/src/app/dist ./

EXPOSE 80
CMD ["node", "src/main.js"]