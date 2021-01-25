### Stage 1: Build ###

# using official node image for build
FROM node:15-alpine as build

# setting working directory
WORKDIR /app

# installing dependencies
COPY package.json package-lock.json /app
RUN npm install

# build app
COPY . /app
RUN npm run build -- --output-path=./dist/out --prod


### Stage 2: Run ### 

# using official nginx image for run
FROM nginx:1.19.6-alpine as run

# copy app to the server
COPY --from=build /app/dist/out /usr/share/nginx/html
