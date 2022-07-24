//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
// Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

document.write("<h3>Meses:</h3>");
document.write(`<ul>`);
for (let indiceMeses = 0; indiceMeses < meses.length; indiceMeses++) {
  document.write(`<li> ${meses[indiceMeses]}</li>`);
}

document.write(`</ul>`);
