//Esta función simplemente toma una ruta de archivo como argumento y 
// utiliza path.resolve para convertirla en una ruta absoluta.
const path = require('node:path');

function readPath(filePath) {
  return path.resolve(filePath);
}

module.exports = readPath;