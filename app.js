//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];
let nomeSorteado = '';

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();
  if (nome !== '') {
    nomes.push(nome);
    input.value = '';
    atualizarLista();
  } else {
    alert('Por favor, insira um nome válido!');
  }
}

/**
 * Sorteia um nome dentre a lista de nomes e apresenta o nome sorteado
 * na tela.
 * Se a lista estiver vazia, exibe uma mensagem de erro.
 */
function sortearAmigo() {
  if (nomes.length > 0) {
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    nomeSorteado = nomes[indiceSorteado];
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${nomeSorteado}`;
  } else {
    alert('Não há nomes na lista!');
  }
}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  nomes.forEach((nome) => {
    const item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
  });
}