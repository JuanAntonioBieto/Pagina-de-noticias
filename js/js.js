var cargado = 1;


$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        cargar();
	}
});

function cargar() {
    if (cargado < 3) {
        $.getJSON("https://rawgit.com/JuanAntonioBieto/Pagina-de-noticias/master/json/" + cargado + ".json", function (jsonObject) {
            addrow(jsonObject);
		}); cargado++;
		} else {
        $('#mas').text('No hay más noticias');
	}
};

function addrow(json) {
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