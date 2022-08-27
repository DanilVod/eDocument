ARG VITE_REPO=https://github.com/vitejs/vite.git
ARG VITE_DIR=vite
ARG TAG=16-alpine

FROM node:$TAG


ENV VITE_REPO=$VITE_REPO
ENV VITE_DIR=$VITE_DIR

WORKDIR /app


COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install -g pnpm && \ 
  pnpm install

ENTRYPOINT ["/entrypoint.sh"]

CMD ["node -v ","npm run dev"]