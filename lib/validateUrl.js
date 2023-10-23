const axios = require('axios');

// Valida la url
const validateURL = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        if (response.statusText === 'OK') {
          resolve({ status: response.status, ok: 'ok' });
        } 
      })
      .catch((error) => {
        if (error.response && error.response.statusText === 'Not Found') {
          reject({ status: error.response.status, ok: 'Fail' });
        } else if (error.response && error.response.statusText) {
          reject({ status: error.response.status, ok: error.response.statusText });
        } else {
          reject({ status: 'Unknown error validating URL', ok: 'Unknown error validating URL' });
        }
      });
  });
};

module.exports = validateURL;