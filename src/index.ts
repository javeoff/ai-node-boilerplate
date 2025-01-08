import process from 'node:process';
import os from 'node:os';
import {logger} from './utils/logger.js';

const memoryLimit = Number(process.env.MAX_MEMORY_LIMIT ?? 512);
const cpuLimit = Number(process.env.MAX_CPU_LIMIT ?? 80);
const warningThreshold = 0.8;

function getResourceUsage() {
    const memoryUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    return {
        heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024 * 100) / 100, // MB
        heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024 * 100) / 100, // MB
        rss: Math.round(memoryUsage.rss / 1024 / 1024 * 100) / 100, // MB
        systemTotal: Math.round(totalMemory / 1024 / 1024 / 1024 * 100) / 100, // GB
        systemFree: Math.round(freeMemory / 1024 / 1024 / 1024 * 100) / 100, // GB
        cpuUser: Math.round(cpuUsage.user / 1_000_000), // Ms
        cpuSystem: Math.round(cpuUsage.system / 1_000_000), // Ms
        cpuCount: os.cpus().length,
        cpuUsagePercent: Math.round((cpuUsage.user + cpuUsage.system) / (os.cpus().length * 1e6) * 100),
        isMemoryWarning: (Math.round(memoryUsage.rss / 1024 / 1024 * 100) / 100) > (memoryLimit * warningThreshold),
        isCpuWarning: Math.round((cpuUsage.user + cpuUsage.system) / (os.cpus().length * 1e6) * 100) > (cpuLimit * warningThreshold)
    };
}

// Логируем информацию о запуске
logger.info('Application started');
logger.info(`Resource limits: Memory ${memoryLimit}MB, CPU ${cpuLimit}%`);

// Запускаем мониторинг ресурсов каждые 5 секунд
setInterval(() => {
	const usage = getResourceUsage();

	// Выбираем уровень логирования в зависимости от использования ресурсов
    if (usage.isMemoryWarning || usage.isCpuWarning) {
        logger.warn('Resource usage approaching limits:', {
            ...usage,
            memoryLimit,
            cpuLimit
        });
	} else {
		logger.info('Resource usage:', usage);
	}
}, 5000);
