FROM node:20-slim

WORKDIR /home/node/app

COPY .env ./

CMD ["tail", "-f", "/dev/null"]