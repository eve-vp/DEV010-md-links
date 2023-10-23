const readPath = require('./readPath');

describe('readPath', () => {
  it('should return a promise that resolves with the file path if it exists', () => {
    return readPath('path/to/existing/file.md').then((result) => {
      expect(result).toEqual('path/to/existing/file.md');
    });
  });

  it('should return a promise that rejects with an error message if the file path does not exist', () => {
    return readPath('path/to/nonexistent/file.md').catch((error) => {
      expect(error).toEqual("La ruta 'path/to/nonexistent/file.md' no se encontró");
    });
  });
});
