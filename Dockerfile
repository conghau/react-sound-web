FROM keymetrics/pm2:latest-alpine
LABEL maintainer="hau.tc@mobivi.vn"
ARG ENV_VAR=staging
ARG GIT_BRANCH=production
ENV _ENV $ENV_VAR

RUN rm -rf /var/cache/apk/* && \
    rm -rf /tmp/*

RUN mkdir -p /opt
RUN apk update
RUN apk add yarn


WORKDIR /opt

ADD ./ .

RUN if [ -d "node_modules" ]; then rm -Rf node_modules; fi

RUN yarn install
RUN yarn add pm2 -g

RUN export NODE_ENV=${_ENV}
#CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "staging"]

ENTRYPOINT yarn start && tail -f /dev/null