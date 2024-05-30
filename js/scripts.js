// js/scripts.js
// Añade un listener al formulario de contacto para manejar el envío
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Previene el comportamiento predeterminado del formulario
    event.preventDefault();
    // Muestra una alerta indicando que el formulario fue enviado
    alert('Formulario enviado');
});
