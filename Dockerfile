FROM node:latest as build-stage
WORKDIR /
COPY package*.json ./
RUN yarn install
COPY ./ .
RUN yarn run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /dist /app
COPY nginx.conf /etc/nginx/nginx.conf
