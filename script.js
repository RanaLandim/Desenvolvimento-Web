document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  // Obter os valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var dataNascimento = document.getElementById('dataNascimento').value;
  var sexo = document.getElementById('sexo').value;
  var estadoCivil = document.getElementById('estadoCivil').value;

  // Obter as áreas de interesse selecionadas
  var areasInteresse = [];
  var checkboxes = document.getElementsByName('areas');
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      areasInteresse.push(checkboxes[i].value);
    }
  }

  // Exibir os valores no console
  console.log('Nome:', nome);
  console.log('E-mail:', email);
  console.log('Data de Nascimento:', dataNascimento);
  console.log('Sexo:', sexo);
  console.log('Estado Civil:', estadoCivil);
  console.log('Áreas de Interesse:', areasInteresse);

  // Exibir mensagem de envio bem-sucedido
  var mensagem = document.getElementById('mensagem');
  mensagem.innerHTML = 'Formulário enviado com sucesso!';
});
