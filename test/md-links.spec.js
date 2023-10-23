const mdLinks = require('../lib/mdLinks');
const readPath = require('./readPath'); // Importa en modulo readPath
const extractLinks = require('./extractLinks');
const validateLinks = require('./validatetLinks');

describe('mdLinks', () => {

  it('resolve promise', () => {
    const filePath = './examples/readme.md';
    console.log('filePath');
    expect(filePath).toEqual('./examples/readme.md');
  });

});
