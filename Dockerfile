FROM node:16.17.0-slim

RUN npm install -g @nestjs/cli@10.2.1

USER node

WORKDIR home/node/app

CMD [ "tail", "-f", "/dev/null" ]