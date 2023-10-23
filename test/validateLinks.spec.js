const validateLinks = require('../lib/validateLinks');

describe('validateLinksFunc', () => {
  it('should return an array of validated link', async () => {
    const markdownContent = '[link](https://www.example.com)';
    const filePath = '/path/to/markdown/file.md';
    const validateLinksFunc = await validateLinks(markdownContent, filePath);
    expect(validateLinksFunc).toEqual([
      {
        href: 'https://www.example.com',
        status: 200, // Agrega el código de estado esperado para el enlace válido.
        statusText: 'OK', // Agrega el texto de estado esperado para el enlace válido.
        text: 'link',
      }
    ]);
    
  });
});