var cargado = 1;
var activado = false;

$(document).ready(function(){
	$(window).scroll(function () {
		if ($(window).scrollTop() + $(window).height() + 1 >= $(document).height() && activado == true) {
			cargarNoticias();

		}

	});
	

//Activar-desactivar scroll
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
});


	//Cambiar imagen modal
	$("body").on("click", ".imagenes", function(){
		var id = $(this).attr('id');
		$("#imagenModal").attr("src","img/"+id+"Big.png");

	});
});

//Metodos
function cargarNoticias() {
	if (cargado < 3) {
		$("#gif").show();
		$.getJSON("https://rawgit.com/JuanAntonioBieto/Pagina-de-noticias/master/json/" + cargado + ".json", function (jsonObject) {
			añadirNoticias(jsonObject);
			$("#gif").hide();
		}); 
		cargado++;
	} else {
		$('#boton').text('No hay más noticias');
	}
};

function añadirNoticias(json) {
	$.each(json, function (i, item) {
		$("#contenedor5").append(
			'<div class="container-fluid noticias">' +
			'<div class="row" >' +
			'<div class="col-sm-4">' + 
			'<img data-toggle="modal" data-target="#myModal" class="img-responsive imagenes" id="imagen'  + (((cargado - 2)*3 + i + 1)+ 4) + '"src="' + item.imgbig +'"alt="imagen">' +
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
