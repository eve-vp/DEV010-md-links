const axios = require('axios');

const validateLinks = (links) => {
  return Promise.all(
    links.map((link) =>
      axios
        .get(link.href)
        .then((res) => {
          if (link) {
            link.status = res.status;
            link.ok = "✔️  ok";
            return link;
          } else {
            return {
              href: 'undefined',
              status: 'undefined',
              ok: '❌ fail'
            };
          }
        })
        .catch((err) => {
          if (link) {
            link.status = err.response ? err.response.status : 'undefined';
            link.ok = "❌ fail";
            return link;
          } else {
            return {
              href: 'undefined',
              status: 'undefined',
              ok: '❌ fail'
            };
          }
        })
    )
  );
};

module.exports = validateLinks;
