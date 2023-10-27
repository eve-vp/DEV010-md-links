const axios = require('axios');
const validateLinks = require('../lib/validateLinks');

jest.mock('axios');

describe('validateLinksFunc', () => {
  it('should return validated links with status', () => {
    const links = [{ href: 'https://www.example.com' }];
    const mockResponse = { status: 200 };

    axios.get.mockResolvedValue(mockResponse);

    return validateLinks(links).then((validatedLinks) => {
      expect(validatedLinks).toEqual([
        {
          href: 'https://www.example.com',
          status: 200,
          ok: expect.stringContaining('✔️ok'),
        },
      ]);
    });
  });

  it('should handle undefined links', () => {
    const links = [{}]; // Link vacío para simular un escenario incorrecto
    const mockError = {}; // Error vacío para simular un error de respuesta

    axios.get.mockRejectedValue(mockError);

    return validateLinks(links).then((validatedLinks) => {
      expect(validatedLinks).toEqual([
        {
          href: 'undefined',
          status: 'undefined',
          ok: expect.stringContaining('❌fail'),
        },
      ]);
    });
  });
});
