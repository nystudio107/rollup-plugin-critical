TAG?=16-alpine
CONTAINER?=$(shell basename $(CURDIR))
DOCKERRUN=docker container run \
	--name ${CONTAINER} \
	--rm \
	-it \
	-v `pwd`:/app \
	${CONTAINER}:${TAG}

.PHONY: docker build clean dev install release ssh test update npm

# Build the Docker container
docker:
	docker build \
		. \
		-t ${CONTAINER}:${TAG} \
		--build-arg TAG=${TAG} \
		--no-cache
# Perform a dist build
build: docker install
	${DOCKERRUN} \
		run build
# Remove node_modules/ & package-lock.json
clean:
	rm -rf node_modules/
	rm -f package-lock.json
# Run in watch mode for development
dev: docker install
	${DOCKERRUN} \
		run dev
# Run npm install
install: docker
	${DOCKERRUN} \
		install
# Release a new version
release: docker install
	${DOCKERRUN} \
		run release
# ssh into the container
ssh: docker
	docker container run \
    	--name ${CONTAINER} \
    	--rm \
    	-it \
    	--entrypoint /bin/sh \
    	-v `pwd`:/app \
    	${CONTAINER}:${TAG}
# Run tests via npm run test
test: docker install
	${DOCKERRUN} \
		run test
# Run tests in dev mode via npm run test-dev
test-dev: docker install
	${DOCKERRUN} \
		run test-dev
# Run npm update
update: docker
	${DOCKERRUN} \
		update
npm: docker
	${DOCKERRUN} \
		$(filter-out $@,$(MAKECMDGOALS))
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
