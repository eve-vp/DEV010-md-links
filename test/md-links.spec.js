const mdLinks = require('../lib/mdLinks.js');

describe('mdLinks', () => {
  // Se dercribe la función y se espera que provea un file Markdown
  it('should return a list of links from the provided Markdown file', async () => {
    const filePath = './examples/example1.md';
    const links = await mdLinks(filePath);
    
    // Se puede verificar la longitud de la lista de enlaces
    expect(links).toHaveLength(); // Se espera que haya enlaces

    // Verificar si cada enlace tiene las propiedades adecuadas
    links.forEach(link => {
      expect(link).toHaveProperty('text'); // Se espera que cada enlace tenga una propiedad 'text'
      expect(link).toHaveProperty('href'); // Se espera que cada enlace tenga una propiedad 'href'
      expect(link).toHaveProperty('file'); // Se espera que cada enlace tenga una propiedad 'file'
    });

    // Verificar enlaces específicos en la lista si es necesario
    const expectedLinks = [
      {
        text: 'Logo Title Text 2',
        href: 'https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png',
        file: 'example1.md'
      },
      {
        text: 'imagen ejemplo',
        href: 'https://res.cloudinary.com/practicaldev/image/fetch/s--hcaefXQw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6a413tyi7awhnisccl62.jpg',
        file: 'example2.md'
      }
    ];
    expect(links).toEqual(expect.arrayContaining(expectedLinks)); // Se espera que la lista de enlaces contenga los enlaces esperados
  });
});
