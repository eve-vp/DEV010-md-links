// importar las funciones
const  extractLinks  = require('./extractLinks');
const  readFilePath  = require('./readFilePath');
const validateLinks = require('./validateLinks');
const validateAndRequire = require('./isAbsolutePath'); 

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
