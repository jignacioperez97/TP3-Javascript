/* 3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */

let resultadosDados = [];

document.write(`Resultados de dados:`);
for (let i = 0; i < 50; i++) {
  dado1 = Math.floor(Math.random() * 6 + 1);
  dado2 = Math.floor(Math.random() * 6 + 1);
  let sumaDados = dado1 + dado2;

  resultadosDados.push(sumaDados);
  document.write(` `);
  document.write(`${resultadosDados[i]}`);
}
document.write(`<br>`);
document.write(`<br>`);
document.write(`<br>`);
document.write(`Repeticiones de resultados:`);
document.write(`<br>`);

/* 
for (let posiblesResultados = 0; posiblesResultados < resultadosDados.length ; posiblesResultados++) {
 document.write(`Se repitieron ${}`)
}
 */
