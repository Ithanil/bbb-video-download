FROM node:18-alpine
RUN apk add --no-cache chromium ffmpeg imagemagick

RUN adduser -D bigbluebutton bigbluebutton
USER bigbluebutton
WORKDIR /home/bigbluebutton

COPY package.json ./
RUN yarn install
COPY . .
