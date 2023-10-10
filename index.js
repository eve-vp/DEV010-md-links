// Importar la función mdLinks desde el módulo mdLinks.js
const mdLinks = require('./md-links.js');
// declarar la variable receivePath y nanalizar su ruta
const receivePath = './examples';

// Llamar a la función mdLinks con la ruta de tu archivo Markdown
// pasa 2 argumentos receivePath y false
mdLinks(receivePath, false)
// then() para manejar los enlaces encontrados
  .then((links) => {
  // si la promesa se resuelve con éxito, se imprime el enlace
    console.log(links);
  })
  // catch() si ocurre un error durante el proceso
  .catch((error) => {
    // Maneja los errores si ocurren
    console.error(error.message);
  });
