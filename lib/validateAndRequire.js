const path = require('path');
const fs = require('fs');
//  función validateAndRequire que toma dos parámetros: modulePath y allowedExtensions
const validateAndRequire = (modulePath, allowedExtensions) => {
  let resolvedPath;

  if (!allowedExtensions) {
  // Verifica si allowedExtensions está definido y si no, le asigna el valor por defecto ['.js'].
    allowedExtensions = ['.js']; // Extensiones por defecto permitidas
  }
  // Si modulePath es una ruta absoluta, se asigna directamente a resolvedPath.
  if (path.isAbsolute(modulePath)) {
    resolvedPath = modulePath;
  } else {
  //Si no es una ruta absoluta, la función usa path.resolve para intentar resolver 
  //la ruta usando cada una de las extensiones permitidas en allowedExtensions.
    resolvedPath = allowedExtensions
      .map(ext => path.resolve(__dirname, modulePath + ext))
  // el método find para buscar el primer elemento que exista en el sistema de archivos utilizando fs.existsSync.
      .find(fs.existsSync);
  }
  //Si la condición !resolvedPath se evalúa como verdadera, 
  //se lanzará una excepción con el mensaje 'File not found.
  if (!resolvedPath) {
  
  // throw para interrumpir el flujo normal del programa y 
  //generar un error controlado que puede ser capturado por una declaración
    throw new Error('File not found.');
  }
//  la función devuelve el módulo requerido desde la ruta resuelta.
  return require(resolvedPath);
};

module.exports = validateAndRequire;
