/* 1- Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función. */
function paridad() {
  if (numero % 2 == 0) {
    document.write("PAR");
  } else {
    document.write("IMPAR");
  }
}

let numero = prompt("Ingresa un número entero");

if (Number(numero) == numero) {
  paridad();
} else {
  alert("Ingrese un número válido");
}
