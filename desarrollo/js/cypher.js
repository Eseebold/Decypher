function limpiarTextoBase(textoBase) {
  textoCompacto = textoBase.replace(/\s/g, '').toLowerCase();

  return textoCompacto;
}

function decodeNumLetra(abc, textoBase) {

  var textoCompacto = limpiarTextoBase(textoBase);
  var textoEnPares = [];
  var decodificado = "";
  for (var i = 0; i < (textoCompacto.length); i += 2) {

   decodificado=decodificado+ abc.substr(textoCompacto.slice(i,i+2)-1,1);

  }


  return decodificado;
}

function AplicarCesar(abc, textoCompacto) {


}
