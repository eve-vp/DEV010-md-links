const mdLinks = require('../lib/mdLinks');

describe('mdLinks', () => {

  it('resolve promise', () => {
    const filePath = './examples/readme.md';
    console.log('filePath');
    expect(filePath).toEqual('./examples/readme.md');
  });

});
