# GitHub Actions Automation Suite

[![Release](https://github.com/organization/repo/actions/workflows/release.yml/badge.svg)](https://github.com/organization/repo/actions/workflows/release.yml)
[![Docker](https://github.com/organization/repo/actions/workflows/docker-publish.yml/badge.svg)](https://github.com/organization/repo/actions/workflows/docker-publish.yml)

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Required Secrets](#required-secrets)
- [Workflows](#workflows)
- [Local Development](#local-development)
- [Usage](#usage)
- [Requirements](#requirements)

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

## Installation

```bash
# Install via npm
npm install @organization/github-actions-automation

# Or using yarn
yarn add @organization/github-actions-automation
```

## Requirements
- Node.js LTS version (16.x or higher)
- Docker (if using container features)
- GitHub repository with Actions enabled
- Git

## Local Development

1. Clone the repository
```bash
git clone https://github.com/organization/repo.git
cd repo
```

2. Install dependencies
```bash
npm install
```

3. Build the project
```bash
npm run build
```

4. Run tests
```bash
npm test
```

## Contributing
Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
