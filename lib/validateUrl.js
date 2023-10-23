const axios = require('axios');
// se utilizó Axios para hacer solicitudes GET 
//a cada uno de los enlaces y se almacenaron los resultados 
//de validación en las propiedades status y statusText

const extractLinks = require('./extractLinks');

const validateLinks = (markdownContent, filePath) => {
  return new Promise((resolve, reject) => {
    const links = extractLinks(markdownContent, filePath); // Se utiliza la función extractLinks para obtener los enlaces del contenido.

    const linkPromises = links.map(link => {
      return axios.get(link.href)
        .then(response => {
          link.status = response.status; // Agrega la propiedad 'status' al objeto de enlace para almacenar el código de estado de la respuesta.
          link.statusText = response.statusText; // Agrega la propiedad 'statusText' al objeto de enlace para almacenar el mensaje de estado de la respuesta.
          return link;
        })
        .catch(error => {
          link.status = error.response ? error.response.status : 'No status';
          link.statusText = error.response ? error.response.statusText : 'No status text';
          return link;
        });
    });

    Promise.all(linkPromises)
      .then(validatedLinks => {
        resolve(validatedLinks); // Resuelve la promesa con los enlaces validados.
      })
      .catch(err => {
        reject(err); // Rechaza la promesa si ocurre un error durante el proceso de validación.
      });
  });
};

module.exports = validateLinks;
