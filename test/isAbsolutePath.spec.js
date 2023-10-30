const isAbsolutePath = require('../lib/isAbsolutePath.js'); 

describe('isAbsolutePath', () => {
  it('should return a promise that resolves with the file path if it exists', () => {
    return isAbsolutePath('path/to/existing/file.md').then((result) => {
      expect(result).toEqual('path/to/existing/file.md');
    });
  });

  it('should return a promise that rejects with an error message if the file path does not exist', () => {
    return isAbsolutePath('path/to/nonexistent/file.md').catch((error) => {
      expect(error).toEqual("The route 'path/to/nonexistent/file.md' was not found");
    });
  });
});
