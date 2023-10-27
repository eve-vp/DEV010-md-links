const  mdLinks  = require('./lib/mdLinks'); // Importa la función mdLinks desde el archivo mdLinks.js
const filePath = './examples/example.md'; 
const validate = true; // o false, dependiendo del caso

mdLinks(filePath, validate) // Llama a la función mdLinks con la ruta del archivo como argumento
  .then(links => {
    // Haces algo con los links si la promesa se resuelve exitosamente
    console.log(links);
  })
  .catch(console.error);

  // if(validate) {
  //   validateLinks(links)
  //     .then(validate => resolvee(inksValidated)) 
  //     .catch(err => reject(err)); 
  // } else {
  //   resolve(links);
  // }