TAG?=14-alpine
CONTAINER?=$(shell basename $(CURDIR))
DOCKERRUN=docker container run \
	--name ${CONTAINER} \
	--rm \
	-t \
	-v `pwd`:/app \
	${CONTAINER}:${TAG}

.PHONY: docker build dev fix install lint update npm

docker:
	docker build \
		. \
		-t ${CONTAINER}:${TAG} \
		--build-arg TAG=${TAG} \
		--no-cache
build: docker install update
	${DOCKERRUN} \
		run build
check: docker install
	${DOCKERRUN} \
		run check
install: docker
	${DOCKERRUN} \
		install
lint: docker install
	${DOCKERRUN} \
		run lint
test: docker install
	${DOCKERRUN} \
		run test
update: docker
	${DOCKERRUN} \
		update
npm: docker
	${DOCKERRUN} \
		$(filter-out $@,$(MAKECMDGOALS))
%:
	@:
# ref: https://stackoverflow.com/questions/6273608/how-to-pass-argument-to-makefile-from-command-line
