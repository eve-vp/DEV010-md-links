
function extractLinks(markdownContent, filePath) {
// Se declara una expresión regular llamada linkRegex que busca enlaces en el contenido Markdown
// expresión regular se utiliza con la bandera g para encontrar todos los enlaces en el contenido, no solo el primero.
const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
const matches = []; // variable matches como un arreglo para almacenar los enlaces encontrados
let match; // inicializamos match
// bucle while para buscar enlaces en el contenido del archivo Markdown
// (markdownContent) busca el próximo enlace 
// en el contenido y devuelve un objeto "match"
// El bucle continúa hasta que no se encuentren más coincidencias.
while ((match = linkRegex.exec(markdownContent)) !== null) {
// Extraemos el texto y la URL del enlace del objeto
const text = match[1];
const url = match[2];
// Creamos un objeto que representa el enlace con las propiedades "text", "href" y "file".
const link = {
  text: text,
  href: url,
  file: filePath,
};
// Agregamos el objeto "link" al arreglo "matches" para almacenarlo.
matches.push(link);
}
// Finalmente, retornamos el arreglo "matches" 
// que contiene todos los enlaces encontrados.
return matches;
}
// Exportamos la función para que pueda ser utilizada en otros archivos.
module.exports = extractLinks;