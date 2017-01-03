function limpiarTextoBase(textoBase) {
  textoCompacto = textoBase.replace(/\s/g, '').toLowerCase();

  return textoCompacto;
}

function decodeNumLetra(abc, textoBase) {

  var textoCompacto = limpiarTextoBase(textoBase);
  var decodificado = "";
  for (var i = 0; i < (textoCompacto.length); i += 2) {

    decodificado = decodificado + abc.substr(textoCompacto.slice(i, i + 2) - 1, 1);
  }
  return decodificado;
}

function AplicarCesar(abc, textoBase,semilla) {

  var textoCompacto = limpiarTextoBase(textoBase);
  // qwesdfhtwefxcve
  var decodificado = "";
  var posicion="";
  var alfabeto="";
  for (var i = 0; i <(textoCompacto.length) ; i ++) {
    alfabeto=abc;
    posicion = "";
    posicion = parseInt(alfabeto.indexOf(textoCompacto.substr(i, 1))-parseInt(semilla));
    decodificado =decodificado + abc.substr(posicion, 1);
  }
  return decodificado;
}
