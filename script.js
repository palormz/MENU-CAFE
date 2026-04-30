function calcularTotal() {
    let seleccionados = document.querySelectorAll('input[type="checkbox"]:checked');
    let total = 0;
    let lista = "Elegiste:<br>";

    seleccionados.forEach(item => {
        total += parseInt(item.value);
        lista += item.parentElement.textContent + "<br>";
    });

    lista += "<br>Total: $" + total;

    document.getElementById("resultado").innerHTML = lista;
}
