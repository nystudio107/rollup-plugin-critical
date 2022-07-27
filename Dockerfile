ARG TAG=16-alpine
FROM nystudio107/node-dev-base:$TAG

WORKDIR /app/

CMD ["run build"]

ENTRYPOINT ["npm"]
