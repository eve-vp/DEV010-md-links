const readPath = require('../lib/readPath.js'); // Corrige la ruta de importación del módulo readPath.js

describe('readPath', () => {
  it('should return a promise that resolves with the file path if it exists', () => {
    return readPath('path/to/existing/file.md').then((result) => {
      expect(result).toEqual('path/to/existing/file.md');
    });
  });

  it('should return a promise that rejects with an error message if the file path does not exist', () => {
    return readPath('path/to/nonexistent/file.md').catch((error) => {
      expect(error).toEqual("The route 'path/to/nonexistent/file.md' was not found");
    });
  });
});
