const request = require('request');

const fetchMyIp = (callback) => {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if(error) {
      callback(error, null);
      return;
    }
      const data = JSON.parse(body);
      callback(null, data.ip);
  });
};

module.exports = { fetchMyIp };