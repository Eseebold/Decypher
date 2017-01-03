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
   $("#aplicarCesarIngles").on("click", function (e) {
    var textoBase = $("#textEnvio").val();
     var semilla = $("#semilla").val();
    textoCompacto = AplicarCesar("abcInlges", textoBase, semilla);
    $("#textRetorno").val(textoCompacto);

  });
   $("#aplicarCesarCastellano").on("click", function (e) {
    var textoBase = $("#textEnvio").val();
     var semilla = $("#semilla").val();
    textoCompacto = AplicarCesar("abcCastellano", textoBase, semilla);
    $("#textRetorno").val(textoCompacto);

  });



});
