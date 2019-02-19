# Stage one
FROM node:10  as build-stage

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build

#Stage two
FROM nginx:1.15

COPY  ./nginx_config /etc/nginx/
COPY --from=build-stage /app/build/ /usr/share/nginx/html
