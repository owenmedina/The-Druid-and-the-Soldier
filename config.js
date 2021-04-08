const interAttemptTimeout = 100;
const maxDisconnectedTime = 3000;
const maxAttempts = Math.round(maxDisconnectedTime / interAttemptTimeout);

module.exports = { interAttemptTimeout, maxDisconnectedTime, maxAttempts };
