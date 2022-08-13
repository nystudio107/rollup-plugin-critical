TAG?=16-alpine
CONTAINER?=$(shell basename $(CURDIR))
DOCKERRUN=docker container run \
	--name ${CONTAINER} \
	--rm \
	-t \
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
# Perform a dist build, then run npm publish
publish: docker build
	${DOCKERRUN} \
		publish
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
