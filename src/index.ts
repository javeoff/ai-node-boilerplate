import {logger} from './utils/logger.js';
import process from 'node:process';
import os from 'node:os';

function getResourceUsage() {
    const memoryUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    
    return {
        memory: {
            heapUsed: Math.round(memoryUsage.heapUsed / 1024 / 1024 * 100) / 100, // MB
            heapTotal: Math.round(memoryUsage.heapTotal / 1024 / 1024 * 100) / 100, // MB
            rss: Math.round(memoryUsage.rss / 1024 / 1024 * 100) / 100, // MB
            systemTotal: Math.round(totalMemory / 1024 / 1024 / 1024 * 100) / 100, // GB
            systemFree: Math.round(freeMemory / 1024 / 1024 / 1024 * 100) / 100, // GB
        },
        cpu: {
            user: Math.round(cpuUsage.user / 1000000), // ms
            system: Math.round(cpuUsage.system / 1000000), // ms
            cpuCount: os.cpus().length,
        }
    };
}

// Логируем информацию о запуске
logger.info('[AI Node Boilerplace] Application started');

// Запускаем мониторинг ресурсов каждые 5 секунд
setInterval(() => {
    const usage = getResourceUsage();
    logger.info('Resource usage:', usage);
}, 5000);
