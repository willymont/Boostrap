function mostrarAgradecimiento() {
    document.querySelector('.formulario form').style.display = 'none';
    document.getElementById('agradecimiento').style.display = 'block';
}

function redireccionar() {
    window.location.href = 'index.html';
}

function mostrarSeccion(seccion) {
    // Oculta todas las secciones
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(seccion) {
        seccion.classList.remove('active');
    });

    // Muestra la sección activa
    document.getElementById(seccion).classList.add('active');
}