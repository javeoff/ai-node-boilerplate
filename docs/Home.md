**ai-node-boilerplate v0.0.1**

***

# AI Nodejs Boilerplate

The new way to create Node.js app with AI integration and other workflow utilites by this Project Template.

## Features

- **Issue AI**: Automated PR generation based on issues. Just describe issue, AI will make it itself.
- **Pull Requests AI**: AI-powered pull request analysis, review, code refactoring
- **Tests Automation** - AI writes code and run tests automatically to fix errors
- **Linter Automation** - AI writes code and run lints automatically to write code by best practices and file errors
- **Release Automation**: Automated semantic versioning and release management
- **Docker Publishing**: Automated building and publishing of Docker images to GitHub Container Registry
- **TypeScript Docs Automation** - Automated documentation generation based on your codebase
- **Wiki Automation**: Automated GitHub Wiki generation based on docs folder

Read [Boilerplate Wiki](https://github.com/javeoff/ai-node-boilerplate/wiki) to learn more

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

These commands automatically use development or production settings based on `NODE_ENV`:

- `make build` - Build Docker image
- `make run` - Run container
- `make restart` - Restart container
- `make logs` - Show container logs

### Utility Commands
- `make stop` - Stop all containers (both dev and prod)
- `make clean` - Stop and remove all containers and images
- `make help` - Show available commands

## Parameters

### Secrets
- `GH_TOKEN`: GitHub Personal Access Token. GitHub Settings → Developer Settings → Personal Access Tokens
- `OPENAI_API_KEY`: [OpenAI API](https://platform.openai.com/settings/organization/api-keys) key (Important for Pull Requests AI)
- `OPENROUTER_API_KEY`: [OpenRouter API](https://openrouter.ai/) key (Important for Issues AI)
- `NPM_TOKEN`: NPM Access Token - https://www.npmjs.com/settings/[username]/tokens

**Optional**
- `TELEGRAM_BOT_TOKEN`: Telegram Bot API Token (Get it from: @BotFather on Telegram)
- `TELEGRAM_CI_ID`: Telegram Chat ID for CI status notification

### Environments

- `NODE_ENV`: Type of your application. (development/production)
- `CONTAINER_NAME`: Name of your running application
- `IMAGE_NAME`: Name of your application
- `PORT`: Opened port to access your application

## Issues AI

When you add label `aider` for the issue, AI will automatically make code based on your request.

- Information taken from issue title and description
- You can follow by AI status in the issue
- AI will create PR linked to the issue

## Pull Requests AI

When you create pull request will be created, AI will review your PR automatically.

- AI will add labels to the pull request automatically
- You can modify code by command instructions inside pull requests
- You can ask about new code and issue by AI

### PR Commands

- `/aider` - Full access to refactor, fix, add features based on whole codebase
- `/describe` - Automatically generating PR description - title, type, summary, code walkthrough and labels
- `/review` - Adjustable feedback about the PR, possible issues, security concerns, review effort and more
- `/improve` - Code suggestions for improving the PR
- `/ask` - Answering free-text questions about the PR, or on specific code lines
- `/update_changelog` - Automatically updating the CHANGELOG.md file with the PR changes 
- `/similar_issue` - Automatically retrieves and presents similar issues 

## Usage

1. Create project by [using this template](https://github.com/new?template_name=ai-node-boilerplate&template_owner=javeoff)
2. Add required secrets to your repository
3. Add 'aider' label to issues for automated PR generation
4. Docker images will be automatically built and published when Dockerfile is present

## Integrations

- [Codium](https://github.com/Codium-ai/pr-agent) - AI Agent to work with Pull Requests
- [Aider](https://github.com/Aider-AI/aider/) - AI Agent to write and refactor features by AI
- [Aider GitHub Actions](https://github.com/javeoff/aider-github-actions) - AI Tool to connect Aider and GitHub Actions + Pull Requests between
- [Typedoc](https://github.com/TypeStrong/typedoc/) - Tool to create documentation based on codebase automatically
- [XO](https://www.npmjs.com/package/xo) - Tool to wrap best lint rules all in one

## Roadmap

- [ ] Create Auto Deploy project to the hosting
- [ ] Create Auto installing dependencies to the hosting for Auto Deploy
- [ ] Create NPM Package support
