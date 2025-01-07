import winston from 'winston';
import {WinstonTransport as AxiomTransport} from '@axiomhq/winston';

const consoleFormat = winston.format.combine(
	winston.format.colorize(),
	winston.format.timestamp({
		format: 'YYYY-MM-DD HH:mm:ss.SSS',
	}),
	winston.format.metadata({fillExcept: ['message', 'level', 'timestamp']}),
	winston.format.padLevels(),
	winston.format.printf(({level, message, timestamp, metadata}) => {
		const meta = Object.keys(metadata).length > 0
			? `\n[metadata]: ${JSON.stringify(metadata, null, 2)}` : '';

		return `[${timestamp}] ${level} >> ${message}${meta}`;
	}),
);

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

export const logger = winston.createLogger({
	level: 'info',
	transports,
});
