// Cambiamos el fondo a negro.
document.body.style.backgroundColor = "black";
// Cambiamos el color del texto a blanco.
document.body.style.color = "white";
//
//
//
// Configuramos un fondo con una imagen para el enlace
const cineparkElement = document.getElementById('enlace');

// URL de la imagen de fondo
const imageUrl = 'https://imgs.search.brave.com/iYUTbE1mrEj1UaxMTNIADE88M13McXJOxrsT2JaYC4w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/dmllam8tZm9uZG8t/bmVncm8tdGV4dHVy/YS1ncnVuZ2UtcGFw/ZWwtdGFwaXotb3Nj/dXJvLXBpemFycmEt/cGl6YXJyYS1wYXJl/ZC1oYWJpdGFjaW9u/XzEyNTgtMjgzMTIu/anBnP3NpemU9NjI2/JmV4dD1qcGc';

// Configuramos el fondo con la imagen
cineparkElement.style.backgroundImage = `url(${imageUrl})`;
cineparkElement.style.backgroundSize = 'cover'; // Ajustamos el tamaño de la imagen
cineparkElement.style.backgroundRepeat = 'no-repeat'; // Evitamos que la imagen se repita




//
// Función que se ejecutará al hacer clic en el h1
document.getElementById("enlace").addEventListener("click", function() {
    // Redirigir a la página deseada
    window.location.href = "index.html";
});

// Creamos una nueva sección en la página.
const sectionElement = document.createElement("section");

// Agregamos la sección al cuerpo del documento.
document.body.appendChild(sectionElement);
//
//
//



//
//
// Centramos el título principal (h1).
const h1Element = document.querySelector('h1');
h1Element.style.display = 'flex';
h1Element.style.justifyContent = 'center';
h1Element.style.alignItems = 'center';

// Creamos un título secundario (h2).
const h2Element = document.createElement('h2');
h2Element.textContent = 'Mision Imposible';

// Establecemos estilos para el título secundario (h2).
h2Element.style.display = 'flex';
h2Element.style.justifyContent = 'center';
h2Element.style.alignItems = 'center';
h2Element.style.height = '1vh';


// Centramos el contenedor de video (div video-container).
const videoContainerDiv = document.getElementById('video-container');
videoContainerDiv.style.display = 'flex';
videoContainerDiv.style.justifyContent = 'center';
videoContainerDiv.style.alignItems = 'center';

// Agregamos el título secundario (h2) a la página.
document.body.appendChild(h2Element);




//
//
// Obtenemos el contenedor del video por su ID.
var videoContainer = document.getElementById("video-container");

// Crear un elemento iframe para mostrar el video
var youtubeVideo = document.createElement("iframe");
youtubeVideo.width = "560";
youtubeVideo.height = "315";
youtubeVideo.src = "https://www.youtube.com/embed/FDy3OSjVQw8";
youtubeVideo.frameborder = "0";
youtubeVideo.allowfullscreen = true;

// Agregamos el iframe al contenedor.
videoContainer.appendChild(youtubeVideo);



// Texto de la sinopsis con saltos de línea
var sinopsisText = "En Misión: Imposible- Sentencia Mortal, Parte 1, Ethan Hunt (Tom Cruise) y su equipo del FMI, se embarcan en su misión más peligrosa hasta la fecha: localizar, antes de que caiga en las manos equivocadas, una nueva y terrorífica arma que amenaza a toda la humanidad. En esta tesitura, y con unas fuerzas oscuras del pasado de Ethan acechando, comienza una carrera mortal alrededor del mundo en la que está en juego el control del futuro y el destino del planeta. Enfrentado a un enemigo misterioso y todopoderoso, Ethan se ve obligado a considerar que nada puede anteponerse a su misión, ni siquiera las vidas de aquellos que más le importan.";

// Creamos un elemento de párrafo para la sinopsis.
var sinopsisElement = document.createElement("p");

// Asignamos el texto de la sinopsis al elemento de párrafo.
sinopsisElement.innerHTML = sinopsisText;

// Establecemos estilos para centrar el elemento.
sinopsisElement.style.textAlign = "center";
sinopsisElement.style.margin = "0 auto";
sinopsisElement.style.width = "80%"; 

// Agregamos el elemento de la sinopsis a la página.
document.body.appendChild(sinopsisElement);

// Agregamos el pie de página.
var footerElement = document.createElement("footer");
footerElement.style.textAlign = "center";
footerElement.style.margin = "0 auto";
footerElement.style.width = "80%"; 
footerElement.textContent = "CinePark -- Todos los derechos reservados.";
document.body.appendChild(footerElement);
