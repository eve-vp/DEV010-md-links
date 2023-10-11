function mdLinks(filePath) {
  return new Promise((resolve, reject) => {
    // Paso 2: Transforma la ruta ingresada a absoluta
    const absolutePath = path.resolve(filePath);

    // Paso 3: Comprueba que la ruta exista en el computador
    fs.access(absolutePath, fs.constants.F_OK, (err) => {
      if (err) {
        reject(`La ruta '${absolutePath}' no existe`);
      } else {
        // Paso 4: Asegúrate que el archivo es Markdown
        const fileExtension = path.extname(absolutePath);
        if (![".md", ".mkd", ".mdwn", ".mdown", ".mdtxt", ".mdtext", ".markdown", ".text"].includes(fileExtension)) {
          reject(`El archivo '${absolutePath}' no es un archivo Markdown`);
        } else {
          // Paso 5: Lee un archivo
          fs.readFile(absolutePath, 'utf8', (readErr, data) => {
            if (readErr) {
              reject(`Error al leer el archivo '${absolutePath}': ${readErr.message}`);
            } else {
              // Paso 6: Encuentra los links dentro del documento
              const links = findLinksInMarkdown(data, absolutePath);
              resolve(links);
            }
          });
        }
      }
    });
  });
}
module.exports = mdLinks;