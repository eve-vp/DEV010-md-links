const mdLinks = validateAndRequire('./mdlinks');

const validateAndRequire = (modulePath) => {

  let resolvedPath;

  if(path.isAbsolute(modulePath)) {
    resolvedPath = modulePath;
  } else {
    resolvedPath = path.resolve(__dirname, modulePath); 
  }

  return require(resolvedPath);

}

module.exports = validateAndRequire;