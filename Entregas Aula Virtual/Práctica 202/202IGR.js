
document.addEventListener('DOMContentLoaded', function () {

    // Mostrar cuantos caracteres quedan en Mensaje

    // 1. Variables
    var mensaje = document.getElementById('mensaje');
    var contador = document.getElementById('contador');
    var maxLength = mensaje.getAttribute('maxlength');

    // 2. Actualizar inicialmente el contador
    contador.innerHTML = `${maxLength} caracteres restantes`;

    // 3. Función para actualizar el contador
    mensaje.addEventListener('input', function () {
        var caracteresRestantes = maxLength - mensaje.value.length;
        contador.innerHTML = `${caracteresRestantes} caracteres restantes`;
    });

    // Comprobar que la longitud y la letra del DNI son correctas
    document.getElementById('dni').addEventListener('input', function(e) {
        var dni = e.target.value;
        if (dni.length === 9) {
            var numero = dni.substring(0, 8);
            var letra = dni.charAt(8).toUpperCase();
            var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
            var letraCalculada = letras.charAt(parseInt(numero, 10) % 23);
            if (letra !== letraCalculada) {
                alert('La letra del DNI no es correcta.');
            }
        }
    });

    // Mostrar días en el select de Fecha de matriculación
    var selectDia = document.getElementById('dia_matriculacion');
    console.log('Select día:', selectDia);

    for (var i = 1; i <= 31; i++) {
        var optionDia = document.createElement('option');
        optionDia.value = i;
        optionDia.text = i;
        selectDia.appendChild(optionDia);
    }

    // Mostrar meses en el select de Fecha de matriculación
    var selectMes = document.getElementById('mes_preferente');
    console.log('Select mes:', selectMes);
    
    for (var i = 1; i <= 12; i++) {
        var optionMes = document.createElement('option');
        optionMes.value = i;
        optionMes.text = i;
        selectMes.appendChild(optionMes);
    }

    // Añadir evento de clic al botón para validar el campo Mensaje antes de enviar
    form.addEventListener('submit', function (e) {

        var mensajeValor = mensaje.value.length;
        var alerta = document.getElementById('alerta');
    
        // Verificar si el mensaje cumple con la longitud requerida
        if (mensajeValor < 2 || mensajeValor > 500) {

            // Mostrar mensaje de alerta
            alerta.style.display = 'block';
    
            // Prevenir el envío del formulario
            e.preventDefault();

        } else {

            // Si cumple, ocultar el mensaje de alerta
            alerta.style.display = 'none';
        }
    });

    // Añadir evento de clic al botón para ir a Google
    document.getElementById('link').addEventListener('click', function () {
        window.location.href = 'https://www.google.com';
    });

});

// Función que muestra casilla de otro año en "Introduce curso"
function mostrarOtro() {

    var select = document.getElementById('opciones');
    var otroCampo = document.getElementById('otroCampo');

    if (select.value === 'otro') {
        // Mostrar mensaje de alerta
        otroCampo.style.display = 'block';
    } else {
        // Prevenir el envío del formulario
        otroCampo.style.display = 'none';
    }

}