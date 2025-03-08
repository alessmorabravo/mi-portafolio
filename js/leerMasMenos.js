$(document).ready(function () {
  $(".leerMas").on("click", function () {
    let elemento = $(this).data("contenido");
    $("#" + elemento).slideDown();
    $(this).hide(); // Oculta el botón de "Leer más"
  });

  $(".leerMenos").on("click", function () {
    let elemento = $(this).data("contenido");
    $("#" + elemento).slideUp();
    $(".leerMas[data-contenido='" + elemento + "']").show(); // Muestra el botón de "Leer más"
  });
});
