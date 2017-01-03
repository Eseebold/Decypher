const ArrayCifrador = {
  abcInlges: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
  abcCastellano: "abcdefghijklmnñopqrstuvwxyzabcdefghijklmnñopqrstuvwxyzabcdefghijklmnñopqrstuvwxyzabcdefghijklmnñopqrstuvwxyz"
}
var alfabeto = "";
var paconsola = "";

function limpiarTextoBase(textoBase) {
  textoCompacto = textoBase.replace(/\s/g, '').toLowerCase();

  return textoCompacto;
}

function decodeNumLetra(abc, textoBase) {
  alfabeto = ArrayCifrador[abc];
  var textoCompacto = limpiarTextoBase(textoBase);
  var decodificado = "";
  for (var i = 0; i < (textoCompacto.length); i += 2) {

    decodificado = decodificado + alfabeto.substr(textoCompacto.slice(i, i + 2) - 1, 1);
  }
  return decodificado;
}

function AplicarCesar(abc, textoBase, semilla) {
  alfabeto = ArrayCifrador[abc];
  console.log(alfabeto);
  var textoCompacto = limpiarTextoBase(textoBase);
  // qwesdfhtwefxcve
  var decodificado = "";
  var posicion = "";
  for (var i = 0; i < (textoCompacto.length); i++) {
    posicion = "";
    posicion = parseInt(alfabeto.indexOf(textoCompacto.substr(i, 1)) + parseInt(semilla));
    decodificado = decodificado + alfabeto.substr(posicion, 1);
  }
  return decodificado;
}

function AplicarVigeniere(abc, textoBase, clave) {
  var tablaVigeniere = [];
  alfabeto = ArrayCifrador[abc];

  // Esto crea los alfabetos que usaremos para Vigeniere (num de alfabetos segun clave ej. LIME = 4)
  for (i = 0; i < (clave.length); i++) {
    tablaVigeniere[i] = [];
    for (j = (alfabeto.indexOf(clave.substr(i, 1))); j < (alfabeto.length) / 4; j++) {
      tablaVigeniere[i][j] = alfabeto.substr(j, 1);
    }
  }
  var textoCompacto = limpiarTextoBase(textoBase);
    while (clave.length < textoCompacto.length)
    {
      clave= clave+clave;
    }
  clave=clave.slice(0,textoCompacto.length);

  for (i = 0; i < (clave.length); i++)
  {
    paconsola = (i%clave.length);
    console.log(paconsola);
  }





console.log(textoCompacto);
  console.log(clave.slice(clave));
  console.log(clave.length);
  console.log(textoCompacto.length);
  return textoCompacto
}
