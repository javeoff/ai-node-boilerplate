# [1.6.0](https://github.com/javeoff/ai-node-boilerplate/compare/v1.5.1...v1.6.0) (2025-01-08)


### Features

* **env:** add IMAGE_NAME and PORT variables to .env.example for better configuration ([77143c3](https://github.com/javeoff/ai-node-boilerplate/commit/77143c3d2afe973eb66e614787d16fda24e9ab02))

## [1.5.1](https://github.com/javeoff/ai-node-boilerplate/compare/v1.5.0...v1.5.1) (2025-01-08)


### Bug Fixes

* Correct Ansible playbook shell module syntax for .env file creation ([86d46e8](https://github.com/javeoff/ai-node-boilerplate/commit/86d46e88b7fd6c8308e936fba6c54a265f408362))

# [1.5.0](https://github.com/javeoff/ai-node-boilerplate/compare/v1.4.0...v1.5.0) (2025-01-07)


### Features

* Add SSH_PATH parameter to deployment configuration ([b212067](https://github.com/javeoff/ai-node-boilerplate/commit/b2120672e93b4b294f7804365f80a24db2ad4141))

# [1.4.0](https://github.com/javeoff/ai-node-boilerplate/compare/v1.3.0...v1.4.0) (2025-01-07)


### Features

* Add dynamic environment variables to Ansible deployment workflow ([367ce4a](https://github.com/javeoff/ai-node-boilerplate/commit/367ce4ab37493c9b9e571313e6c664d8810f1127))
* Dynamically fetch GitHub environment variables and secrets for deployment ([30da3a2](https://github.com/javeoff/ai-node-boilerplate/commit/30da3a2a1dda985c72ae28506b32160be5c5d054))

# [1.3.0](https://github.com/javeoff/ai-node-boilerplate/compare/v1.2.0...v1.3.0) (2025-01-07)


### Features

* **env:** add CONTAINER_NAME variable to .env.example for better configuration ([10b6f2b](https://github.com/javeoff/ai-node-boilerplate/commit/10b6f2b5c8cd2d6d2c49d8a72e755536a6f03ec1))

# [1.2.0](https://github.com/javeoff/ai-node-boilerplate/compare/v1.1.0...v1.2.0) (2025-01-07)


### Features

* **docs:** update README.md to reflect new project name and features for AI Node.js Boilerplate ([03f7aa7](https://github.com/javeoff/ai-node-boilerplate/commit/03f7aa710b082e728632c16cf3be1c2bd2351263))

# [1.1.0](https://github.com/javeoff/ai-node-boilerplate/compare/v1.0.0...v1.1.0) (2025-01-07)


### Features

* Add environment-based generic commands to Makefile ([77a476a](https://github.com/javeoff/ai-node-boilerplate/commit/77a476aa1462c6c8c56b1c0c3a4d6d28526e2599))
* Add Makefile with Docker development and production commands ([421bfd3](https://github.com/javeoff/ai-node-boilerplate/commit/421bfd3d46e205ffdf9a5ceac998cdacc30b2181))
* Add multi-stage Dockerfile for dev and prod environments ([0f0f9ff](https://github.com/javeoff/ai-node-boilerplate/commit/0f0f9ffcdf1ec7805ae4348f444a64be404047a0))
* Combine Dockerfile with multi-stage builds for dev and prod environments ([787528a](https://github.com/javeoff/ai-node-boilerplate/commit/787528a327c17576d1aba452ad46b3512086fcd4))

# 1.0.0 (2025-01-07)


### Bug Fixes

* **pr_agent.yml:** update GITHUB_TOKEN secret reference to use correct key for consistency and clarity ([bccee6f](https://github.com/javeoff/ai-node-boilerplate/commit/bccee6f1475ae0946e11065729c4bd9dbb25c7bc))
* **workflow:** update condition to check for Dockerfile existence in GitHub Actions workflow to ensure proper execution ([009e016](https://github.com/javeoff/ai-node-boilerplate/commit/009e0167108643354eeb194d7575d416dae30bdb))


### Features

* Add function to format timestamp ([7d9897e](https://github.com/javeoff/ai-node-boilerplate/commit/7d9897eac30ccf4e1eec878a66df8747e8129607))
* Configure OpenRouter as AI provider for PR Agent workflow ([a507650](https://github.com/javeoff/ai-node-boilerplate/commit/a5076507b9c84f5b0b286bf4edb105a1542e0193))
* **docs:** add Home.md file with introductory content for AI Node Boilerplate project ([13e8e3a](https://github.com/javeoff/ai-node-boilerplate/commit/13e8e3a5f43ee8f33fe528e010eacd058ebdf5c5))
* **docs:** add README update automation in pre-commit hook ([5e0453b](https://github.com/javeoff/ai-node-boilerplate/commit/5e0453bf37d2798a084380bf530fa9406a84d567))
* **docs:** add README.md file with project title for better documentation and project clarity ([4a73f10](https://github.com/javeoff/ai-node-boilerplate/commit/4a73f10bdd09174201fcea77e7359eac212f9134))
* Enhance logger format with metadata and improved readability ([25f6e9d](https://github.com/javeoff/ai-node-boilerplate/commit/25f6e9d95308effec80370d06f2a9c8f49700a2e))
* Improve timestamp format in logger ([94ac95d](https://github.com/javeoff/ai-node-boilerplate/commit/94ac95dec0fc55f26d54fe2c1149dcc534736e32))
* **logger:** add Winston logger with Axiom integration for improved logging ([4466fda](https://github.com/javeoff/ai-node-boilerplate/commit/4466fda6ab0cf302ad2bf872bc26369c834ca425))
* Update logger timestamp format to improve readability ([31371cc](https://github.com/javeoff/ai-node-boilerplate/commit/31371cca88e9eb776ab0e36f777ac6fe86d1d5ee))
* **workflow:** add GitHub Actions workflow for publishing wiki on main branch updates ([6ae64bd](https://github.com/javeoff/ai-node-boilerplate/commit/6ae64bdceaa6bc6d899567d4affdbc9b6badb310))
* **workflows:** add GitHub Actions workflows for PR generation, release, and PR agent functionality ([e1c0666](https://github.com/javeoff/ai-node-boilerplate/commit/e1c0666f0e359f11b458e9504cc180fb0300b06a))
