[**ai-node-boilerplate**](../../README.md)

***

[ai-node-boilerplate](../../modules.md) / [logger](../README.md) / logger

# Variable: logger

> `const` **logger**: `winston.Logger`

Defined in: [utils/logger.ts:72](https://github.com/javeoff/ai-node-boilerplate/blob/30da3a2a1dda985c72ae28506b32160be5c5d054/src/utils/logger.ts#L72)

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
