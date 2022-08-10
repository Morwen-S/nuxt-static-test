FROM node:14.16.1-alpine as build
COPY . .
RUN npm install
RUN npm run generate-credit

FROM nginx:latest
ADD /docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /.output/public /var/www/html
