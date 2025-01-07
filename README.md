# GitHub Actions Automation Suite

## Description
This project includes several GitHub Actions workflows for automating development processes:

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
