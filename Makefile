# Variables
NODE_ENV ?= development
-include .env

# Generic commands
.PHONY: build
build:
	docker-compose build

.PHONY: run
run:
	docker-compose up -d

.PHONY: restart
restart:
	docker-compose restart

.PHONY: logs
logs:
	docker-compose logs -f

.PHONY: stop
stop:
	docker-compose stop

.PHONY: clean
clean: stop
	docker-compose down -v --rmi all

.PHONY: ps
ps:
	docker-compose ps

.PHONY: help
help:
	@echo "Available commands:"
	@echo "  build         - Build Docker image using docker-compose"
	@echo "  run          - Run containers using docker-compose"
	@echo "  restart      - Restart containers"
	@echo "  logs         - Show container logs"
	@echo "  stop         - Stop containers"
	@echo "  clean        - Stop and remove containers, volumes, and images"
	@echo "  ps           - Show running containers"
	@echo "  help         - Show this help message"
	@echo ""
	@echo "Environment variables (can be set in .env file):"
	@echo "  NODE_ENV           - Environment (development/production)"
	@echo "  MAX_MEMORY_LIMIT   - Memory limit in MB (default: 512)"
	@echo "  MAX_CPU_LIMIT      - CPU usage limit in % (default: 80)"
	@echo "  MAX_CPU_CORES      - Number of CPU cores (default: 1)"
