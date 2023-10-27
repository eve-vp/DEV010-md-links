//Esta función simplemente toma una ruta de archivo como argumento y 
// utiliza path.resolve para convertirla en una ruta absoluta.
const fs = require('fs'); // Importa el módulo 'fs' de Node.js que te permite trabajar con el sistema de archivos del equipo.
const colors = require('colors'); //para darle color a la salida en la consola

const readFilePath = (filePath) => { // Define una función llamada 'readFilePath' que toma como argumento la ruta del archivo.
  return new Promise((resolve, reject) => { // Retorna una nueva promesa que puede ser resuelta o rechazada.
    if (!fs.existsSync(filePath)) { // Verifica si el archivo no existe  
      reject(`The route '${filePath}' was not found`);
    } 
      else {  
      fs.readFile(filePath, 'utf8', (err, content) => { // Verifica si se puede acceder a la ruta especificada y si existe el archivo.
      if (err) { // Si hay un error al intentar acceder a la ruta o el archivo no existe.
        reject(`Error reading file: ${err}`); // Rechaza la promesa con un mensaje de error que indica que la ruta no se encontró.
      } 
      else { // Si no hay error y la ruta existe.
        resolve(content); // Resuelve la promesa con la ruta del archivo que se verificó con éxito.
      }
    });
  }
});
};


module.exports = readFilePath;
