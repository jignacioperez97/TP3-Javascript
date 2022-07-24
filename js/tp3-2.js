/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
 cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades = [];

do {
  let ciudad = prompt(`Ingrese el nombre de una ciudad`);

  ciudades.push(ciudad);
} while (confirm(`Desea continuar?`));

document.write(`Array = `);

for (let i = 0; i < ciudades.length; i++) {
  document.write(ciudades[i]);
  document.write(" ");
}
document.write(`<br>`);
document.write(`Longitud= ${ciudades.length}`);
document.write(`<br>`);
document.write(`Primera ciudad= ${ciudades[0]}`);
document.write(`<br>`);
document.write(`Tercera ciudad= ${ciudades[2]}`);
document.write(`<br>`);
document.write(`Última ciudad= ${ciudades[ciudades.length - 1]}`);
