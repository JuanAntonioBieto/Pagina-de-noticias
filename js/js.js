var cargado = 1;
var activado = false;

$(window).scroll(function () {
	
	
	if ($(window).scrollTop() + $(window).height() + 1 >= $(document).height() && activado == true) {
		cargarNoticias();
	
}
	
});

function cargarNoticias() {
	if (cargado < 3) {
		$.getJSON("https://rawgit.com/JuanAntonioBieto/Pagina-de-noticias/master/json/" + cargado + ".json", function (jsonObject) {
			añadirNoticias(jsonObject);
		}); cargado++;
		} else {
		$('#mas').text('No hay más noticias');
	}
};

function añadirNoticias(json) {
	$.each(json, function (i, item) {
		$("#contenedor5").append(
		'<div class="container-fluid noticias">' +
		'<div class="row" >' +
		'<div class="col-sm-4">' + 
		'<img class="img-responsive imagenes" src="' + item.imgbig +'"alt="imagen">' +
		'</div>' +
		'<div class="col-sm-8">' +
		'<p class="titulos text-justify">' + item.title + '</p>' +
		'<p class="textos text-justify">' + item.description + '</p>' +
		'<p class="fechas">' + item.datetime + '</p>' +
		'</div>' +
		'</div>' +
		'</div>');
	})
};		

$(document).ready(function(){
	
    $(".toggle").click(function(){
		if (activado == false) {
			$("#desactivado").hide();
			$("#activado").show();
			activado = true;
			$("#boton").hide();
			} else {
			$("#activado").hide();
			$("#desactivado").show();
			activado = false;
			$("#boton").show();
		}
	})
	});				