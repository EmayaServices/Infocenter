
// Este script se encarga de controlar el carrusel al abrir el modal
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Botón que activó el modal
    var imageSrc = button.find('img').attr('src'); // Obtiene la URL de la imagen de la miniatura
    var modal = $(this);
  
    // Encuentra la imagen correspondiente en el carrusel y la activa
    modal.find('.carousel-inner .carousel-item').removeClass('active');
    modal.find('.carousel-inner .carousel-item img[src="' + imageSrc + '"]').closest('.carousel-item').addClass('active');

    // Detiene el autoplay y mantiene la funcionalidad de los botones del carrusel
    $('#carouselExampleControls').carousel({
      interval: false,
      pause: true
    });
});

