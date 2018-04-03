FROM alpine
RUN apk add --update nodejs nodejs-npm && npm install npm@latest -g
COPY ./ /home/
VOLUME /home
ENTRYPOINT node /home/server.js