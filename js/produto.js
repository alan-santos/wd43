
var inputTam = document.querySelector('input[type=range]');

inputTam.oninput = function () {
    document.querySelector('output[for=tamanho]').value = inputTam.value;
}
