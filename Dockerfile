ARG TAG=20-alpine
FROM nystudio107/node-dev-base:$TAG

WORKDIR /app/

RUN npm install -g npm@^10.0.0

CMD ["run build"]

ENTRYPOINT ["npm"]
