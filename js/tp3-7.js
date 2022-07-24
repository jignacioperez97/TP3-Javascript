/* 4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

let numeroMultiplicar = parseInt(prompt("Escriba un número"));

let numeroAMultiplicar = 1;

function numero() {
  for (numeroAMultiplicar = 1; numeroAMultiplicar <= 10; numeroAMultiplicar++) {
    let numeroMultiplicado = numeroMultiplicar * numeroAMultiplicar;
    document.write(
      `${numeroMultiplicar} * ${numeroAMultiplicar} = ${numeroMultiplicado}`
    );
    document.write(`<br>`);
  }
}

numero();
