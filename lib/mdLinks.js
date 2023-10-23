// Paso 1: importar modulo node
const path = require('path');
const readPath = require('./readPath');
const extractLinks = require('./extractLinks');
const validateLinks = require('./validateLinks');

function mdLinks(filePath) {
  // Callback iniciando una promesa
  return new Promise((resolve, reject) => {
  // Convierte la ruta a absoluta.
    const absolutePath = path.resolve(filePath);

    readPath(absolutePath)
      .then((validatedPath) => {
        const fileExtension = path.extname(validatedPath);
        if (![".md", ".mkd", ".mdwn", ".mdown", ".mdtxt", ".mdtext", ".markdown", ".text, .txt"].includes(fileExtension)) {
          reject(`The File '${validatedPath}' is not a Markdown file`);
        } else {
          validateLinks(validatedPath)
            .then((links) => {
              resolve(links);
            })
            .catch((error) => {
              reject(error);
            });
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = mdLinks;
