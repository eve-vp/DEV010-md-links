// Paso 1: importar modulo node
const fs = require('fs'); // Importa el módulo 'fs' (FileSystem) de Node.js para trabajar con archivos.
const path = require('path'); // Importa el módulo 'path' de Node.js para trabajar con rutas de archivos.
// const readPath = require('./readPath'); // Importa en modulo readPath
// const extractLinks = require('./linksContent');

function mdLinks(filePath) {
  // Callback iniciando una promesa
  return new Promise((resolve, reject) => {
    // Paso 2: Transforma la ruta ingresada a absoluta
    const absolutePath = path.resolve(filePath); // Convierte la ruta a absoluta.

    // Paso 3: Comprueba que la ruta exista en el computador
    // F.OK constante representa el permiso de lectura en el sistema de archivos
    fs.access(absolutePath, fs.constants.F_OK, (err) => {
      if (err) {
        // Si hay un error al acceder a la ruta, rechaza la promesa con un mensaje de error.
        reject(`La ruta '${absolutePath}' no existe`);
      } else {
        // Paso 4: Asegúrate de que el archivo es Markdown
        // extname extension del archivo
        const fileExtension = path.extname(absolutePath); // Obtiene la extensión del archivo.

        // Comprueba si la extensión del archivo está en la lista de extensiones Markdown válidas.
        if (![".md", ".mkd", ".mdwn", ".mdown", ".mdtxt", ".mdtext", ".markdown", ".text, .txt"].includes(fileExtension)) {
          // Si la extensión no es válida, rechaza la promesa con un mensaje de error.
          reject(`El archivo '${absolutePath}' is not a Markdown file`);
        } else {
          // Paso 5: Lee un archivo
          fs.readFile(absolutePath, 'utf8', (readErr, data) => {
            if (readErr) {
              // Si hay un error al leer el archivo, rechaza la promesa con un mensaje de error.
              reject(`Error could not read file'${absolutePath}': ${readErr.message}`);
            } else {
              // Paso 6: Encuentra los links dentro del documento
              // Llama a la función findLinksInMarkdown para buscar los enlaces en el contenido del archivo.
              const links = linksContent(data, absolutePath);
              // Resuelve la promesa con el arreglo de enlaces encontrados.
              resolve(links);
            }
          });
        }
      }
    });
  });
}

module.exports = mdLinks; // Exporta la función mdLinks para que pueda ser utilizada en otros archivos.