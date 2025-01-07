[**ai-node-boilerplate v0.0.1**](../../README.md)

***

[ai-node-boilerplate](../../modules.md) / [logger](../README.md) / logger

# Variable: logger

> `const` **logger**: `winston.Logger`

Defined in: [utils/logger.ts:72](https://github.com/javeoff/ai-node-boilerplate/blob/0463917ef5a5ec16958f91518b7ed71dc041d9a8/src/utils/logger.ts#L72)

The main logger instance used throughout the application.
Supports axiom logging if AXIOM_TOKEN environment variable is present.
Configured with:
- Default log level: 'info'
- Console transport (always enabled)
- Axiom transport (enabled when AXIOM_TOKEN is present)

## Example

```typescript
import { logger } from './utils/logger';

logger.info('Application started');
logger.error('An error occurred', { error: new Error('Something went wrong') });
```
