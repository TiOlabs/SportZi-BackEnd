// config.js

const crypto = require('crypto');

const JWT_SECRET = crypto.randomBytes(32).toString('hex');
console.log(JWT_SECRET);


module.exports = {
    JWT_SECRET: JWT_SECRET
  };
  