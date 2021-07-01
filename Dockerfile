FROM node:13.12.0-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

ARG REACT_APP_API_BASE_URL
ENV REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL}

RUN npm run build

CMD ["npm", "start"]


#FROM nginx:1.17.0-alpine

#COPY --from=build /app/build /var/www
#COPY nginx.conf /etc/nginx/nginx.conf

#EXPOSE 80

#ENTRYPOINT ["nginx","-g","daemon off;"]
