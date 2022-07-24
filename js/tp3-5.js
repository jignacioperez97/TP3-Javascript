/* 2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
  sólo por minúsculas o por una mezcla de ambas. */

function letras() {
  if (texto == texto.toUpperCase()) {
    alert("El texto está en mayúsculas");
  } else if (texto == texto.toLowerCase()) {
    alert("El texto está en minúsculas");
  } else {
    alert("El texto tiene mayúsculas y minúsculas");
  }
}

let texto = prompt("Introduzca un texto");

letras();
