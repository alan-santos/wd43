
function calcularMedia(notasAluno) {
    var soma = 0;

    for (var i = 0; i < notasAluno.length; i++) {
        soma = soma + notasAluno[i]
    }

    return (soma / notasAluno.length).toFixed(1)
}

var aluno = []
var botaoAdicionar = document.querySelector('button[class=adicionar]')
var nota = document.querySelector('input[name=nota]')

botaoAdicionar.addEventListener('click', function (eventoDoForm) {
    eventoDoForm.preventDefault();
    aluno.push(parseFloat(nota.value));
})


var output = document.querySelector('output[for=nota]');
document.querySelector('#calcular').addEventListener('click', function () {
    var media = calcularMedia(aluno)
    output.innerHTML = '<strong> Média</strong> = ' + media
})




