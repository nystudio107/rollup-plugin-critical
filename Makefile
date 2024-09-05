TAG?=20-alpine
CONTAINER?=$(shell basename $(CURDIR))
DOCKER_RUN=docker container run --rm -it -v `pwd`:/app
IMAGE_INFO=$(shell docker image inspect $(CONTAINER):$(TAG))
IMAGE_NAME=${CONTAINER}:${TAG}

.PHONY: build clean dev image-build image-check lint release ssh test test-coverage test-dev npm

# Perform a dist build
build: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run build
# Remove node_modules/ & package-lock.json
clean:
	rm -rf node_modules/
	rm -f package-lock.json
# Run in watch mode for development
dev: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run dev
# Build the Docker image & run npm install
image-build:
	docker build . -t ${IMAGE_NAME} --build-arg TAG=${TAG} --no-cache
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} install
# Ensure the image has been created
image-check:
ifeq ($(IMAGE_INFO), [])
image-check: image-build
endif
# Run eslint & tsc to check the code
lint: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run lint
# Release a new version
release: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run release
# ssh into the already running container
ssh: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ --entrypoint=/bin/sh ${IMAGE_NAME}
# Run tests via npm run test
test: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run test
# Run tests with coverage via npm run test-coverage
test-coverage: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run test-coverage
# Run tests in dev mode via npm run test-dev
test-dev: image-check
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} run test-dev
npm: docker
	${DOCKER_RUN} --name ${CONTAINER}-$@ ${IMAGE_NAME} $(filter-out $@,$(MAKECMDGOALS)) $(MAKEFLAGS)
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
