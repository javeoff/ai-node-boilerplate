import {
	describe, it, expect, vi,
} from 'vitest';
import {logger} from './logger.js';

describe('Logger', () => {
	it('should log info messages', () => {
		const infoSpy = vi.spyOn(logger, 'info');
		const message = 'Test info message';

		logger.info(message);

		expect(infoSpy).toHaveBeenCalledWith(message);
		infoSpy.mockRestore();
	});

	it('should log error messages', () => {
		const errorSpy = vi.spyOn(logger, 'error');
		const message = 'Test error message';

		logger.error(message);

		expect(errorSpy).toHaveBeenCalledWith(message);
		errorSpy.mockRestore();
	});
});

