const axios = require('axios');

const validateLinks = (links) => {
  return Promise.all(
    links.map((link) => {
      if (!link || !link.href) {
        return Promise.resolve({
          href: 'undefined',
          status: 'undefined',
          ok: '❌ fail',
        });
      }
      return axios
        .get(link.href)
        .then((res) => {
          link.status = res.status;
          link.ok = "✔️  ok";
          return link;
        })
        .catch((err) => {
          if (err.response && err.response.status) {
            link.status = err.response.status;
          } else {
            link.status = 'undefined';
          }
          link.ok = "❌ fail";
          return link;
        });
    })
  );
};

module.exports = validateLinks;