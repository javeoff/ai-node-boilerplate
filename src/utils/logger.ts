/**
 * Winston logger configuration module.
 * @module logger
 */

import process from 'node:process';
import winston from 'winston';
import {WinstonTransport as AxiomTransport} from '@axiomhq/winston';

/**
 * Console output format for Winston logger.
 * Combines colorization, timestamps, metadata, and custom formatting.
 * Format includes:
 * - Colorized output
 * - Timestamp in YYYY-MM-DD HH:mm:ss.SSS format
 * - Metadata handling
 * - Level padding
 * - Custom printf format
 */
const consoleFormat = winston.format.combine(
	winston.format.colorize(),
	winston.format.timestamp({
		format: 'YYYY-MM-DD HH:mm:ss.SSS',
	}),
	winston.format.metadata({fillExcept: ['message', 'level', 'timestamp']}),
	winston.format.padLevels(),
	winston.format.printf(({level, message, timestamp, metadata}) => {
		const meta = Object.keys(metadata as Record<string, unknown>).length > 0
			? `\n[metadata]: ${JSON.stringify(metadata, null, 2)}` : '';

		return `[${String(timestamp)}] ${String(level)} >> ${String(message)}${meta}`;
	}),
);

/**
 * Array of Winston transports.
 * By default includes Console transport.
 * Axiom transport is added if AXIOM_TOKEN environment variable is present.
 */
const transports: winston.transport[] = [
	new winston.transports.Console({
		format: consoleFormat,
	}),
];

if (process.env.AXIOM_TOKEN) {
	transports.push(
		new AxiomTransport({
			token: process.env.AXIOM_TOKEN,
			dataset: process.env.AXIOM_DATASET,
			orgId: process.env.AXIOM_ORG_ID,
		}),
	);
}

/**
 * The main logger instance used throughout the application.
 * Supports axiom logging if AXIOM_TOKEN environment variable is present.
 * Configured with:
 * - Default log level: 'info'
 * - Console transport (always enabled)
 * - Axiom transport (enabled when AXIOM_TOKEN is present)
 *
 * @example
 * ```typescript
 * import { logger } from './utils/logger';
 *
 * logger.info('Application started');
 * logger.error('An error occurred', { error: new Error('Something went wrong') });
 * ```
 */
export const logger: winston.Logger = winston.createLogger({
	level: 'info',
	transports,
});
