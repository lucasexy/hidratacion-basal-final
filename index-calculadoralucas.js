function calcular() {
    var number = parseInt(document.getElementById("peso").value);
    var resultado = document.getElementById("Resultado");
    if (number >= 0 && number <= 10) {
        resultado.innerHTML = "La cantidad necesaria es: " + (number * 100 / 16) + "cc/hr";
    } else if (number > 10 && number <= 20) {
        resultado.innerHTML = "La cantidad necesaria es: " + (((number - 10) * 50 + 1500) / 16) + "cc/hr";
    } else if (number > 20 && number <= 30) {
        resultado.innerHTML = "La cantidad necesaria es: " + (((number - 20) * 20 + 1500) / 16) + "cc/hr";
    } else if (number > 30) {
        resultado.innerHTML = "La cantidad necesaria es: " + (((((number * 4 + 7) / (number + 90)) * 2000) / 24).toFixed(2)) + "cc/hr";
    } else {
        resultado.innerHTML = "Ingrese un número válido";
    }
}
