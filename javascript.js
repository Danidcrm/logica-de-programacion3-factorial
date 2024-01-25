// app.js
function calcularFactorial() {
    let input = obtenerNumero();

    if (input !== null) {
        let resultado = factorial(input);
        mostrarResultado(resultado);
    } else {
        mostrarError("Por favor, ingrese un número válido.");
    }
}

function obtenerNumero() {
    let input = document.getElementById('numeroInput').value;
    let numero = parseFloat(input);

    if (!isNaN(numero)) {
        return numero;
    } else {
        return null;
    }
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function mostrarResultado(resultado) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `El factorial es: ${resultado}`;
}

function mostrarError(mensaje) {
    alert(mensaje);
}
