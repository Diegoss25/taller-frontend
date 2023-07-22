const btn = document.querySelector('#reproducir-btn');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');
const video = videoContainer.querySelector('video');

btn.addEventListener('click', () => {
    videoContainer.classList.add('show');
    video.play(); // Reproducir el video al abrir el contenedor
});

close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    video.pause(); // Pausar el video al cerrar el contenedor
});

  // Seleccionar el elemento del encabezado
const header = document.querySelector('header');

// Función para cambiar el estilo del encabezado al hacer scroll
function handleScroll() {
if (window.scrollY > 0) {
    header.classList.add('header-scroll');
} else {
    header.classList.remove('header-scroll');
}
}

// Agregar un event listener para el evento de scroll
window.addEventListener('scroll', handleScroll);
const btnReproducirFav = document.querySelector('#reproducirFav-btn');
const videoContainer2 = document.querySelector('.video-container');
const close2 = document.querySelector('.close');
const video2 = videoContainer.querySelector('video');

btnReproducirFav.addEventListener('click', () => {
    videoContainer2.classList.add('show');
    video.play(); // Reproducir el video al abrir el contenedor
});

close.addEventListener('click', () => {
    videoContainer.classList.remove('show');
    video.pause(); // Pausar el video al cerrar el contenedor
});




