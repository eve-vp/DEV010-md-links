const axios = require('axios');
const validateLinks = require('../lib/validateLinks');
// la función jest.mock('axios') para simular el módulo axios
jest.mock('axios');

describe('validateLinksFunc', () => {
// 'should handle undefined links'. 
// Esta prueba verifica si la función validateLinks maneja correctamente los enlaces no definidos.
  it('should handle undefined links', async () => {
// Se define una lista de enlaces donde uno de los objetos de enlace tiene href como undefined
    const links = [{ href: undefined }];
  
    const result = await validateLinks(links);
// se espera que el primer objeto de resultado tenga una propiedad status que sea igual a la cadena 'undefined'  
    expect(result[0].status).toBe('undefined');
  
  });

  // it('should return validated links with status', () => {

  //   const markdownLinks = [
  //     {
  //       href: 'https://www.example.com',
  //       status: 200,
  //       ok: '✔️  ok'
  //     }
  //   ];

  //   return validateLinks(markdownLinks).then((validatedLinks) => {
  //     expect(validatedLinks).toEqual([
  //       { 
  //         href: 'https://www.example.com',
  //         status: 200, 
  //         ok: '✔️  ok' 
  //       }
  //     ]);
  //   });

  // });

  // it('should handle undefined links', () => {

  //   const badLinks = [
  //     {
  //       href: undefined,
  //       status: 'undefined',
  //       ok: '❌ fail'
  //     }
  //   ];

  //   return validateLinks(badLinks).then((validatedLinks) => {
  //     expect(validatedLinks).toEqual([
  //       {
  //         href: undefined,
  //         status: 'undefined',
  //         ok: '❌ fail'  
  //       }
  //     ]);
  //   });

  // });

});
