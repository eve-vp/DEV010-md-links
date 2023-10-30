const mdLinks = require('../lib/mdLinks.js');

describe('mdLinks', () => {
  // Se describe la función y se espera que provea un archivo Markdown
  it('should return a list of links from the provided Markdown file', async () => {
    const filePath = './examples/example.md';
    const links = await mdLinks(filePath);
    
    // Se puede verificar la longitud de la lista de enlaces
    expect(links.length).toBeGreaterThan(0); // Se espera que haya enlaces

    // Verificar si cada enlace tiene las propiedades adecuadas
    links.forEach(link => {
      expect(link).toHaveProperty('text'); // Se espera que cada enlace tenga una propiedad 'text'
      expect(link).toHaveProperty('href'); // Se espera que cada enlace tenga una propiedad 'href'
      expect(link).toHaveProperty('file'); // Se espera que cada enlace tenga una propiedad 'file'
    });

    // Verificar enlaces específicos en la lista si es necesario
    const expectedLinks = [
      {
        text: "I´m an inline-referent link",
        href: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",
        file: "./examples/example.md",
      },
      // Resto de los objetos esperados
    ];
    expect(links).toEqual(expect.arrayContaining(expectedLinks)); // Se espera que la lista de enlaces contenga los enlaces esperados
  });
});
