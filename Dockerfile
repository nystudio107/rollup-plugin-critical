ARG TAG=22-alpine
FROM nystudio107/node-dev-base:$TAG

WORKDIR /app/

RUN npm install -g npm@^11.0.0

CMD ["run build"]

ENTRYPOINT ["npm"]
