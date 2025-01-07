# Variables
NODE_ENV ?= development
APP_NAME=myapp
DEV_TAG=$(APP_NAME):dev
PROD_TAG=$(APP_NAME):prod
CONTAINER_NAME_DEV=$(APP_NAME)-dev
CONTAINER_NAME_PROD=$(APP_NAME)-prod

# Generic commands
.PHONY: build
build:
	@if [ "$(NODE_ENV)" = "production" ]; then \
		make build-prod; \
	else \
		make build-dev; \
	fi

.PHONY: run
run:
	@if [ "$(NODE_ENV)" = "production" ]; then \
		make run-prod; \
	else \
		make run-dev; \
	fi

.PHONY: restart
restart:
	@if [ "$(NODE_ENV)" = "production" ]; then \
		make restart-prod; \
	else \
		make restart-dev; \
	fi

.PHONY: logs
logs:
	@if [ "$(NODE_ENV)" = "production" ]; then \
		make logs-prod; \
	else \
		make logs-dev; \
	fi

# Development commands
.PHONY: build-dev
build-dev:
	docker build --target development -t $(DEV_TAG) .

.PHONY: run-dev
run-dev:
	docker run -d --name $(CONTAINER_NAME_DEV) \
		-p 3000:3000 \
		-v $(PWD):/app \
		$(DEV_TAG)

.PHONY: restart-dev
restart-dev:
	docker restart $(CONTAINER_NAME_DEV)

.PHONY: logs-dev
logs-dev:
	docker logs -f $(CONTAINER_NAME_DEV)

# Production commands
.PHONY: build-prod
build-prod:
	docker build --target production -t $(PROD_TAG) .

.PHONY: run-prod
run-prod:
	docker run -d --name $(CONTAINER_NAME_PROD) \
		-p 3000:3000 \
		$(PROD_TAG)

.PHONY: restart-prod
restart-prod:
	docker restart $(CONTAINER_NAME_PROD)

.PHONY: logs-prod
logs-prod:
	docker logs -f $(CONTAINER_NAME_PROD)

# General commands
.PHONY: stop
stop:
	docker stop $(CONTAINER_NAME_DEV) || true
	docker stop $(CONTAINER_NAME_PROD) || true

.PHONY: clean
clean: stop
	docker rm $(CONTAINER_NAME_DEV) || true
	docker rm $(CONTAINER_NAME_PROD) || true
	docker rmi $(DEV_TAG) || true
	docker rmi $(PROD_TAG) || true

.PHONY: help
help:
	@echo "Available commands:"
	@echo "  build         - Build Docker image (dev/prod based on NODE_ENV)"
	@echo "  run          - Run container (dev/prod based on NODE_ENV)"
	@echo "  restart      - Restart container (dev/prod based on NODE_ENV)"
	@echo "  logs         - Show container logs (dev/prod based on NODE_ENV)"
	@echo "  build-dev     - Build development Docker image"
	@echo "  run-dev       - Run development container"
	@echo "  restart-dev   - Restart development container"
	@echo "  logs-dev      - Show development container logs"
	@echo "  build-prod    - Build production Docker image"
	@echo "  run-prod      - Run production container"
	@echo "  restart-prod  - Restart production container"
	@echo "  logs-prod     - Show production container logs"
	@echo "  stop          - Stop all containers"
	@echo "  clean         - Stop and remove containers and images"
	@echo "  help          - Show this help message"
