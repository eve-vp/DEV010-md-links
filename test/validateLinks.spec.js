const validateLinks = require('.lib/validateLinks');

describe('validateLinks', () => {
  it('should validate links and return their statuses', async () => {
    const markdownContent = `
      This is a [valid link](https://www.google.com) to an example website.
      Here is an [invalid link](https://www.nonexistentwebsite.com).`;

    const filePath = 'path/to/example.md';
    const links = await validateLinks(markdownContent, filePath);

    expect(links).toEqual([
      {
        text: 'valid link',
        href: 'https://www.google.com',
        file: 'path/to/example.md',
        status: 200,
        statusText: 'OK'
      },
      {
        text: 'invalid link',
        href: 'https://www.nonexistentwebsite.com',
        file: 'path/to/example.md',
        status: 'No status',
        statusText: 'No status text'
      }
    ]);
  });
});
