document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');

    // Itera sobre cada accordion-item
    accordionItems.forEach(function (item) {
        var collapseElement = item.querySelector('.accordion-collapse');

        // Agrega un event listener para el evento 'shown.bs.collapse' (se dispara cuando se muestra el contenido colapsado)
        collapseElement.addEventListener('shown.bs.collapse', function () {
            // Agrega la clase 'active' al accordion-item actual
            item.classList.add('active');
        });

        // Agrega un event listener para el evento 'hidden.bs.collapse' (se dispara cuando se oculta el contenido colapsado)
        collapseElement.addEventListener('hidden.bs.collapse', function () {
            // Remueve la clase 'active' del accordion-item actual
            item.classList.remove('active');
        });

        // Verifica si el elemento está inicialmente expandido
        if (collapseElement.classList.contains('show')) {
            item.classList.add('active');
        }
    });
});