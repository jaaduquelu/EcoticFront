FROM node:14.19.0 AS build
ENV NODE_ENV development
WORKDIR /app
COPY . .
RUN npm install node-sass
RUN npm install
RUN npm run build --prod

FROM nginx AS publish
RUN apt-get update && apt-get install -y nginx-extras
WORKDIR /app
COPY --from=build /app/build /var/wwww
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]