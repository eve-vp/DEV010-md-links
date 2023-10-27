function extractLinks(markdownContent, filePath) {
  // Se declara una expresión regular llamada linkRegex que busca enlaces en el contenido Markdown
  // La expresión regular se utiliza con la bandera g para encontrar todos los enlaces en el contenido, no solo el primero.
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links = []; // // Inicializa la variable links como un arreglo vacío
  let match; // Se inicializa match

  // Bucle while para buscar enlaces en el contenido del archivo Markdown
  // markdownContent busca el próximo enlace en el contenido y devuelve un objeto "match"
  // El bucle continúa hasta que no se encuentren más coincidencias.
  while ((match = linkRegex.exec(markdownContent)) !== null) {
    // Crea un objeto para cada link con las propiedades texto, href y archivo
    const text = match[1]; // se refiere al primer grupo capturado por la expresión regular
    const url = match[2];

    links.push({
      text,
      href: url, 
      file: filePath
    });

  }

  return links;

}

module.exports = extractLinks;
// Exportamos la función para que pueda ser utilizada en otros archivos.