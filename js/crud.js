var alunos = [{ 'nome': 'Alan', 'email': 'alan@google.com', 'idade': '40' },
{ 'nome': 'Dito', 'email': 'dito@gmail.com', 'idade': '35' }]

var lista = document.querySelector('#lista-alunos')
var nome = document.querySelector('input[name=nome]')
var email = document.querySelector('input[name=email]')
var idade = document.querySelector('input[name=idade]')

document.querySelector('button[class=adicionar]').addEventListener('click', function (eventoDoForm) {
    eventoDoForm.preventDefault();
    alunos.push({ 'nome': nome.value, 'email': email.value, 'idade': idade.value });
    mostrarAlunos();
    document.querySelector('form').reset()
})

new function () {
    mostrarAlunos();
}

function mostrarAlunos() {
    var tbody = [];
    for (var i = 0; i < alunos.length; i++) {
        tbody.push(`
        <tr><td>${alunos[i].nome}</td>
        <td>${alunos[i].email}</td>
        <td>${alunos[i].idade}</td>
        </tr>
        `)
    }
    lista.innerHTML = tbody.join('')
}