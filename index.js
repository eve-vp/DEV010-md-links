const mdLinks = require('./mdLinks'); // Importa la función mdLinks desde el archivo mdLinks.js
const filePath = 'example.md'; // Ruta de ejemplo del archivo Markdown

mdLinks(filePath) // Llama a la función mdLinks con la ruta del archivo como argumento
  .then(links => {
    // Haces algo con los links si la promesa se resuelve exitosamente
    console.log("Links encontrados:", links);
  })
  .catch(error => {
    // Manejas cualquier error que ocurra durante la ejecución de mdLinks
    console.error("Error:", error);
  });
