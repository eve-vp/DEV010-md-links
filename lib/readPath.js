//Esta función simplemente toma una ruta de archivo como argumento y 
// utiliza path.resolve para convertirla en una ruta absoluta.
const fs = require('fs'); // Importa el módulo 'fs' de Node.js que te permite trabajar con el sistema de archivos del equipo.

const readPath = (filePath) => { // Define una función llamada 'readPath' que toma como argumento la ruta del archivo.
  return new Promise((resolve, reject) => { // Retorna una nueva promesa que puede ser resuelta o rechazada.
    fs.access(filePath, fs.constants.F_OK, (err) => { // Verifica si se puede acceder a la ruta especificada y si existe el archivo.
      if (err) { // Si hay un error al intentar acceder a la ruta o el archivo no existe.
        reject(`The route '${filePath}' 'was not found`); // Rechaza la promesa con un mensaje de error que indica que la ruta no se encontró.
      } else { // Si no hay error y la ruta existe.
        resolve(filePath); // Resuelve la promesa con la ruta del archivo que se verificó con éxito.
      }
    });
  });
};

module.exports = readPath; // Exporta la función 'readPath' para que pueda ser utilizada en otros archivos que lo importen.
