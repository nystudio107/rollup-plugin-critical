ARG TAG=16-alpine
FROM nystudio107/node-dev-base:$TAG

WORKDIR /app/

RUN npm install -g npm@^9.2.0

CMD ["run build"]

ENTRYPOINT ["npm"]
