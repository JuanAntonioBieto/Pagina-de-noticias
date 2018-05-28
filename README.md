# Pagina-de-noticias
## Link: https://rawgit.com/JuanAntonioBieto/Pagina-de-noticias/master/principal.html


## Diseño de la página:

### Primera versión: 
![Diseño 1](https://rawgit.com/JuanAntonioBieto/Pagina-de-noticias/master/img/dise%C3%B1o1.jpg)

Está fue la primera versión de mi página, en la cabecera el jumbotron con el título, debajo la navbar, y después la notícia más reciente
en grande que se lee en horizontal, las otras notícias se leían de arriba a abajo, y a la derecha de la página estarían los anuncios.
En la versión móvil la publicidad estaría debajo de la navbar y las noticias estarían en horizontal.

### Segunda versión:
![Diseño 2](https://rawgit.com/JuanAntonioBieto/Pagina-de-noticias/master/img/Dise%C3%B1o2.png)

Está es la segunda versión de la página y con la que he decido quedarme, es una versión más simple pero, que me ha convencido más que 
la anterior. En la parte superior tenemos la navbar, debajo tenemos el jumbotron con el nombre de la página, las noticias tienen todas 
el mismo tamaño y són todas horizontales, y a la derecha tenemos los anuncios. En la versión móvil debajo del jumbotron están los
anuncios, y las noticias están en vertical.

## Explicación de la página:

## Página principal:

### Parte superior:
La parte superior de la página tiene la navbar, la cual en su lado izquierdo tiene el nombre de la página que al hacerle click nos envía
a la página principal, en la parte derecha está el bóton de activar/desactivar del scroll(si el botón está activado el botón de cargar
más noticias desaparecera, y al desactivar el scroll volverá ha aparecer), y los iconos de twitter y discord.
Justo debajo está el jumbotron que también al hacerle click nos envía a la página principal.
### Noticias:
Después tenemos las noticias las cuales están distribuidas en:
#### Col-sm-4
La cual contiene la imagen de la noticia, al hacer click en la imagen nos abre una ventana modal la cual contiene la imagen pero en un 
tamaño más grande, en la versión móvil los elementos de la ventana modal desaparecen y solo se queda la imagen, para quitar la modal 
simplemente hay que hacer click fuera de la imagen.
#### Col-sm-8
Esta parte contiene primero el título de la noticia el cual al hacer click te envía a la página de la noticia, justo debajo se encuentra
el texto de la noticia, y debajo de este texto se encuentra la fecha y hora.
### Noticias cargadas y botón de carga:
Debajo de las noticias se encuentra el botón de cargar el cual cargara hasta 2 veces, 3 noticias por cada carga las cuales están en el 
json y las cargamos apartir del javascript, estas noticias siguen el mismo formato que las anteriores, cuando no queden más noticias el
texto del botón se cambiaria por "No hay más noticias", al hacer click saldra un gif de "cargado" al cargar la noticia desaparecera.
### Anuncios:
Los anuncios están a la derecha de la página y son de un tamaño de 300x600, se muestran utilizando un iframe, si hacemos click encima de
los anuncions nos llevara a la página en la cual están.

### Versión móvil:

### Parte superior:
La navbar ahora está en vertical en vez de ir de un lado a otro de la pantalla.
El jumbotron se mantiene debajo de la navbar.
### Anuncios:
Los anuncios ahora están justo debajo del jumbotron con un tamaño de 320x100.
### Noticias: 
Las noticias siguen el mismo formato, lo que ahora están en vertical.

## Página de las noticias:

### Parte superior:
Tiene el mismo formato que en la página principal tanto en la versión móvil como en la de ordenador.
### Noticia:
La noticia esta dentro de un contenedor, el cual esta distribuido en: 
#### Título
Tenemos el título centrado en la parte superior del contenedor.
#### Imagen
Debajo del título está la imagen de la noticia la cual es diferente a la que estaba en la página principal, además es responsive.
#### Texto
Depués tenemos el texto de la noticia.
#### Video
Al terminar la noticia tenemos un video responsive que trata sobre la noticia.
#### Fecha
Por último abajo a la derecha del contenedor tenemos la fecha y hora.
#### Anuncios 
Són iguales que la página principal tanto para la versión móvil como para la de ordenador.

### Versión móvil:
Aparte de lo que he dicho antes la única diferencia importante és que la noticia pasa de leerse en horizontal a leerse en vertical.

## Características:

### Botón scroll y botón cargar noticias:
El botón de scroll permite cargar noticias bajando el scroll y a su vez esconde el botón de cargar noticias, esto lo hace cuando está 
activado cuando no lo esta, el botón de cargar noticias es visible. Por defecto está desactivado.
### Contenedor de las noticias:
Aparte de lo que se ha dicho antes, cuando la pantalla es suficientemente estrecha el contenedor de la noticia se hace más grande para
que pueda caber el texto.




