/* 3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

let lados1 = parseInt(
  prompt("Escriba la medida de los lados laterales de un rectángulo")
);

let lados2 = parseInt(
  prompt("Escriba la medida de los lados superior e inferior de un rectángulo")
);

let perimetros = 0;

function perimetro() {
  perimetros = 2 * (lados1 + lados2);
  return document.write(`${perimetros}`);
}

perimetro();
