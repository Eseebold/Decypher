$(document).ready(function () {

  var textoCompacto = "";

  $("#botonNumLetraIngles").on("click", function (e) {
    var textoBase = $("#textEnvio").val();

    textoCompacto = decodeNumLetra("abcInlges", textoBase);
    $("#textRetorno").val(textoCompacto);

  });
  $("#botonNumLetraCastellano").on("click", function (e) {
    var textoBase = $("#textEnvio").val();

    textoCompacto = decodeNumLetra("abcCastellano", textoBase);
    $("#textRetorno").val(textoCompacto);

  });
   $("#cesarIngles").on("click", function (e) {
    var textoBase = $("#textEnvio").val();
     var semilla = $("#semilla").val();
    textoCompacto = AplicarCesar("abcInlges", textoBase, semilla);
    $("#textRetorno").val(textoCompacto);

  });
   $("#cesarCastellano").on("click", function (e) {
    var textoBase = $("#textEnvio").val();
     var semilla = $("#semilla").val();
    textoCompacto = AplicarCesar("abcCastellano", textoBase, semilla);
    $("#textRetorno").val(textoCompacto);

  });
    $("#vigeniereIngles").on("click", function (e) {
    var textoBase = $("#textEnvio").val();
     var clave = $("#clave").val();
    textoCompacto = AplicarVigeniere("abcInlges", textoBase, clave);
    $("#textRetorno").val(textoCompacto);

  });
   $("#vigeniereCastellano").on("click", function (e) {
    var textoBase = $("#textEnvio").val();
     var clave = $("#clave").val();
    textoCompacto = AplicarVigeniere("abcCastellano", textoBase, clave);
    $("#textRetorno").val(textoCompacto);

  });



});
