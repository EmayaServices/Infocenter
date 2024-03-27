document.addEventListener("DOMContentLoaded", function() {
    // Al cargar la página, desplazar hacia arriba
    window.scrollTo(0, 0);

    // Variable para controlar si el scroll está habilitado
    var scrollEnabled = true;

    // Obtener todas las pestañas de categorías
    var categoryTabs = document.querySelectorAll('.b-link');

    // Iterar sobre cada pestaña
    categoryTabs.forEach(function(tab) {
        // Agregar un evento de clic a cada pestaña
        tab.addEventListener('click', function(event) {
            // Evitar el comportamiento predeterminado del enlace
            event.preventDefault();

            // Verificar si ya estamos en la parte superior de la página
            if (window.scrollY === 0) {
                // Si ya estamos en la parte superior, no hacer nada
                return;
            }

            // Obtener la posición actual de desplazamiento vertical
            var scrollY = window.scrollY || window.pageYOffset;

            // Calcular la distancia a desplazarse hacia arriba (0 pixels)
            var scrollStep = -scrollY / (0 / 15); // 500 es la duración del desplazamiento en milisegundos

            // Función para realizar el desplazamiento suave
            var scrollInterval = setInterval(function(){
                // Actualizar la posición de desplazamiento
                window.scrollTo(0, scrollY += scrollStep);

                // Detener el desplazamiento cuando se llegue al inicio de la página
                if (scrollY <= 0) clearInterval(scrollInterval);
            }, 0); // Intervalo de tiempo para actualizar el desplazamiento (en milisegundos)
        });
    });
});
