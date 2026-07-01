ARG TAG=22-alpine
FROM nystudio107/node-dev-base:$TAG

WORKDIR /app/

# Temporary fix ref: https://github.com/nodejs/node/issues/62425#issuecomment-4200715930
RUN npm install -g npm@10.9.8
RUN npm install -g npm@^11.0.0

CMD ["run build"]

ENTRYPOINT ["npm"]
