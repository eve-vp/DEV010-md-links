const axios = require('axios');
const validateLinks = require('../lib/validateLinks');

jest.mock('axios');

describe('validateLinksFunc', () => {

  it('should handle undefined links', async () => {

    const links = [{ href: undefined }];
  
    const result = await validateLinks(links);
  
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
