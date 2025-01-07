[**ai-node-boilerplate v0.0.1**](../../README.md)

***

[ai-node-boilerplate](../../modules.md) / [logger](../README.md) / logger

# Variable: logger

> `const` **logger**: `winston.Logger`

Defined in: [utils/logger.ts:71](https://github.com/javeoff/ai-node-boilerplate/blob/2152fde227e8eb38820644596406b15209b94ec9/src/utils/logger.ts#L71)

The main logger instance used throughout the application.
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
