'use strict'
//         INTRO TO CS
//    A   B       AND   OR    XOR
//    0   0        0    0      0
//    1   0        0    1      1    recordemos que 1 = true
//    0   1        1    1      0                   0 = false
//    1   1        1    1      0

// DE BINARIO A DECIMAL
// Primero enumeramos las posiciones de los numeros, empezando desde el 0 y de derecha
// a izquierda. ej : 43
// binario ----> 101011
// posicion ---> 543210

// Elevamos el numero 2 a cada posicion, lo multiplicamos por el numero binario y por 
// ultimo sumamos todos ellos.
//
// (2^0)*1 + (2^1)*1 + (2^2)*0 + (2^3)*1 + (2^4)*0 + (2^5)*1
//    1    +    2    +    0    +    8    +    0    +   32  = 43


function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0 ;
  for(let i = 0; i < num.length; i++){
    sum = sum + num[i] * 2 ** (num.length - 1 - i);
  }
    return sum;
}

//      DECIMAL A BINARIO
// Dividiremos nuestro numero por 2, y anotaremos el resto a un costado.
// Esto se repite hasta que el numero se reduzca a 1/2.
//
//    43 / 2 = 21 ---> 1
//    21 / 2 = 10 ---> 1
//    10 / 2 = 5  ---> 0
//    5 / 2  = 2  ---> 1
//    2 / 2  = 1  ---> 0
//    1 / 2  = 0  ---> 1
//
// Procedemos a anotar el listado de restos en reversa. 

function DecimalABinario(num) {
  // tu codigo aca
  var numeroenbinario = [];
  while(num>=1){
    numeroenbinario.unshift(num % 2)
    num = Math.floor(num/2)
  }
  return numeroenbinario.join("");
  }
  let res = "";


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}