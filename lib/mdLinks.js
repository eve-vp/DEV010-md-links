// importar las funciones
//{}la sintaxis de desestructuración, se pueden extraer 
//partes específicas de un objeto o módulo y asignarlas a variables locales 
// const { extractLinks } = require('./extractLinks');
const  extractLinks  = require('./extractLinks');
const  readFilePath  = require('./readFilePath');
// const { readFilePath } = require('./readFilePath');
const validateLinks = require('./validateLinks');

function mdLinks(filePath, validate) {
// lee el contenido del archivo en la ruta especificada
// y devuelve una promesa.  
    return readFilePath(filePath)
// utiliza .then para esperar la resolución de la promesa
// y finalmente retorna los enlaces extraídos.
.then((content) => {
  const links = extractLinks(content, filePath);
  if (validate) {
    return validateLinks(links);
  }
  return links;
});
}

module.exports = mdLinks;
  // module.exports = {
  //   mdLinks   
  // };
