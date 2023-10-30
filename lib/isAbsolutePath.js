const path = require('path');
const fs = require('fs');

const validateAndRequire = (modulePath, allowedExtensions) => {
  let resolvedPath;

  if (!allowedExtensions) {
    allowedExtensions = ['.js']; // Extensiones por defecto permitidas
  }

  if (path.isAbsolute(modulePath)) {
    resolvedPath = modulePath;
  } else {
    resolvedPath = allowedExtensions
      .map(ext => path.resolve(__dirname, modulePath + ext))
      .find(fs.existsSync);
  }

  if (!resolvedPath) {
    throw new Error('File not found.');
  }

  return require(resolvedPath);
};

module.exports = validateAndRequire;
