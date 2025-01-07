function logMessage(message) {
  const timestamp = new Date().toISOString().replace('T', ' ').slice(0, 23);
  console.log(`[${timestamp}] ${message}`);
}

module.exports = {
  logMessage
};
