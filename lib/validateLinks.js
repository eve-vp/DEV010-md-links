const axios = require('axios');

const validateLinks = (links) => {
  return Promise.all(links.map(link => {

    if(!link.href) {
      link.status = 'undefined'; 
      return Promise.resolve(link);
    }
        // return Promise.resolve({
        //   href: 'undefined',
        //   status: 'undefined',
        //   ok: '❌ fail',
      
      return axios.get(link.href)
        .then((res) => {
          link.status = res.status;
          // link.ok = "✔️  ok";
          return link;
        })
        .catch((err) => {
          link.status = 'error';
          // if (err.response && err.response.status) {
          //   link.status = err.response.status;
          // } else {
          //   link.status = 'undefined';
          // }
          // link.ok = "❌ fail";
          return link;
        });
    })
  );
};

module.exports = validateLinks;