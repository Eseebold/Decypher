$(document).ready(function () {
  var abcInlges = "abcdefghijklmnopqrstuvwxyz";
  var abcCastellano = "abcdefghijklmnñopqrstuvwxyz";
  var textoCompacto = "";

  $("#botonNumLetraIngles").on("click", function (e) {
    var textoBase = $("#textEnvio").val();

    textoCompacto = decodeNumLetra(abcInlges, textoBase);
    $("#textRetorno").val(textoCompacto);

  });
  $("#botonNumLetraCastellano").on("click", function (e) {
    var textoBase = $("#textEnvio").val();

    textoCompacto = decodeNumLetra(abcCastellano, textoBase);
    $("#textRetorno").val(textoCompacto);

  });



});
