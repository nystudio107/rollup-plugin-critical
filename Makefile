TAG?=16-alpine
CONTAINER?=$(shell basename $(CURDIR))
DOCKERRUN=docker container run \
	--name ${CONTAINER} \
	--rm \
	-it \
	-v `pwd`:/app \
	${CONTAINER}:${TAG}

.PHONY: docker build clean install test update npm

# Build the Docker container
docker:
	docker build \
		. \
		-t ${CONTAINER}:${TAG} \
		--build-arg TAG=${TAG} \
		--no-cache
# Perform a dist build
build: docker install update
	${DOCKERRUN} \
		run build
# Remove node_modules/ & package-lock.json
clean:
	rm -rf node_modules/
	rm -f package-lock.json
# Run npm install
install: docker
	${DOCKERRUN} \
		install
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
