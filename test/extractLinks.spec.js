const extractLinks = require('.lib/extractLinks');

describe('extractLinks', () => {
  it('should extract links from the markdown content', () => {
    const markdownContent = `
      This is a [link](https://www.example.com) to an example website.
      Here is another [link](https://www.google.com).`;

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
