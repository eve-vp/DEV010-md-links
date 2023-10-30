const extractLinks = require('../lib/extractLinks.js');

describe('extractLinks', () => {
// sta prueba verifica si la función extractLinks extrae correctamente los enlaces del contenido de Markdown proporcionado.
  it('should extract links from the markdown content', () => {
  // variable filePath que indica la ruta del archivo Markdown
    const markdownContent = `
      This is a [link](https://www.example.com) to an example website.
      Here is another [link](https://www.google.com).`;
  // función extractLinks con el contenido de Markdown 
  // y la ruta del archivo como argumentos y se espera que devuelva un array de objetos de enlace específicos
    const filePath = 'path/to/example.md';
    const links = extractLinks(markdownContent, filePath);

    expect(links).toEqual([
      {
        text: 'link',
        href: 'https://www.example.com',
        file: 'path/to/example.md'
      },
      {
        text: 'link',
        href: 'https://www.google.com',
        file: 'path/to/example.md'
      }
    ]);
  });
});
