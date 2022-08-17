'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0 ;
  for(let i = 0; i < num.length; i++){
    sum = sum + num[i] * 2 ** (num.length - 1 - i);
  }
    return sum;
}

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