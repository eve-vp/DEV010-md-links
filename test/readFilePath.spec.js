const readFilePath = require('../lib/readFilePath.js'); // Ajusta la ruta de importación del módulo readFilePath.js

describe('readFilePath', () => {
  it('should return a promise that resolves with the content of the file if it exists', () => {
    const filePath = './examples/example.md'; // Ajusta la ruta del archivo de ejemplo

    return readFilePath(filePath).then((result) => {
      // Verifica si el resultado contiene ciertas palabras clave
      expect(result).toMatch(/Here's our logo/); // Verifica si el resultado contiene la frase "Here's our logo"
      expect(result).toMatch(/Inline-style/); // Verifica si el resultado contiene la frase "Inline-style"
      // Agrega más expectativas según sea necesario
    });
  });

  it('should return a promise that rejects with an error message if the file path does not exist', () => {
    const filePath = './examples/nonexistent.md'; // Ajusta la ruta de un archivo que no existe
    return readFilePath(filePath).catch((error) => {
      expect(error).toEqual(`The route '${filePath}' was not found`);
    });
  });
});
