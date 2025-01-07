# GitHub Actions Automation Suite

## Description
This project includes several GitHub Actions workflows for automating development processes and Docker-based development/production environments.

## Quick Start

```bash
# Development environment (default)
make build          # Build development Docker image
make run           # Run development container
make restart       # Restart development container
make logs          # View development container logs

# Production environment
NODE_ENV=production make build    # Build production Docker image
NODE_ENV=production make run     # Run production container
NODE_ENV=production make restart # Restart production container
NODE_ENV=production make logs    # View production container logs
```

## Available Make Commands

### Environment-based Commands
These commands automatically use development or production settings based on `NODE_ENV`:

- `make build` - Build Docker image
- `make run` - Run container
- `make restart` - Restart container
- `make logs` - Show container logs

### Development-specific Commands
- `make build-dev` - Build development Docker image
- `make run-dev` - Run development container with hot-reload
- `make restart-dev` - Restart development container
- `make logs-dev` - Show development container logs

### Production-specific Commands
- `make build-prod` - Build production Docker image
- `make run-prod` - Run production container
- `make restart-prod` - Restart production container
- `make logs-prod` - Show production container logs

### Utility Commands
- `make stop` - Stop all containers (both dev and prod)
- `make clean` - Stop and remove all containers and images
- `make help` - Show available commands

## Environment Configuration

### Development Environment
- Uses hot-reload for real-time code changes
- Mounts local directory into container
- Exposes port 3000

### Production Environment
- Optimized for production use
- Minimal image size
- No development dependencies

## Container Details
- Development container name: myapp-dev
- Production container name: myapp-prod
- Default port: 3000
- Image tags:
  - Development: myapp:dev
  - Production: myapp:prod

## GitHub Actions Features

- **Release Automation**: Automated semantic versioning and release management
- **Docker Image Publishing**: Automated building and publishing of Docker images to GitHub Container Registry
- **PR Review Assistant**: AI-powered pull request analysis and review
- **Aider Integration**: Automated PR generation based on issues

## Required Secrets

### Mandatory
- `GH_TOKEN`: GitHub Personal Access Token
  - Required permissions: `contents`, `packages`, `issues`, `pull-requests`
  - Used in: release.yml, docker-publish.yml, pr_agent.yml, aider.yml
  - How to create: GitHub Settings → Developer Settings → Personal Access Tokens

- `OPENROUTER_API_KEY`: OpenRouter API key
  - Used for AI features in pr_agent.yml and aider.yml
  - Get it from: https://openrouter.ai/

- `NPM_TOKEN`: NPM Access Token
  - Required for publishing packages to NPM
  - Used in: release.yml
  - Get it from: https://www.npmjs.com/settings/[username]/tokens

### Optional
- `TELEGRAM_BOT_TOKEN`: Telegram Bot API Token
  - Used for build notifications
  - Get it from: @BotFather on Telegram

- `TELEGRAM_CI_ID`: Telegram Chat ID
  - Used to specify where notifications should be sent
  - How to get: Send a message to @userinfobot

## Workflows

### release.yml
Handles semantic versioning and automated releases when changes are pushed to main branch.

### docker-publish.yml
Builds and publishes Docker images to GitHub Container Registry. Only runs if Dockerfile exists in the repository.

### pr_agent.yml
Provides AI-powered analysis and review of pull requests using OpenRouter API.

### aider.yml
Automatically generates pull requests from issues labeled with 'aider'.

## Usage

1. Add required secrets to your repository
2. Push changes to main branch to trigger release workflow
3. Add 'aider' label to issues for automated PR generation
4. Docker images will be automatically built and published when Dockerfile is present

## Requirements
- Node.js LTS version
- Docker (if using container features)
- GitHub repository with Actions enabled
