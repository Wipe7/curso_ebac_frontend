function validarValores() {
    const valorA = parseFloat(document.getElementById("campoA").value);
    const valorB = parseFloat(document.getElementById("campoB").value);
    const resultadoDiv = document.getElementById("resultado");

    if (isNaN(valorA) || isNaN(valorB)) {
        resultadoDiv.textContent = "Por favor, insira valores numéricos válidos em ambos os campos.";
        resultadoDiv.style.display = "block";
    } else if (valorA < valorB) {
        resultadoDiv.textContent = "Correto, o valor A é menor que o valor B.";
        resultadoDiv.style.display = "block";
    } else if (valorA > valorB) {
        resultadoDiv.textContent = "Incorreto, o valor A é maior que o valor B.";
        resultadoDiv.style.display = "block";
    } else {
        resultadoDiv.textContent = "Os valores são iguais, digite novamente!";
        resultadoDiv.style.display = "block";
    }
}