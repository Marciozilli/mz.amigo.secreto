// O principal objetivo deste desafio é fortalecer suas habilidades em 
// lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o Desafio.

// Array para armazenar todos os nomes adicionados
const amigos = [];

// Função chamada ao clicar no botão "Adicionar"
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim(); // remove espaços extras

  // --- Validações ---
  // Nome deve ter pelo menos 3 caracteres
  if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 letras.");
    return; // impede de adicionar nomes curtos
  }
  // Nome não pode começar com número
  if (/^[0-9]/.test(nome)) {
    alert("O nome não pode começar com número.");
    return; // impede de adicionar nomes iniciados com número
  }
   // --- NOVO: impede duplicatas ---
  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    return;
  }
  // Se passou nas validações, adiciona ao array
  amigos.push(nome);

  // Atualiza a lista exibida na tela
  atualizarLista();

  // Limpa o campo de input e mantém o foco
  input.value = "";       
  input.focus();          
}

// Atualiza a <ul> com os nomes armazenados no array
// <ul>  -  definir uma lista não ordenada na página
function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  const label = document.getElementById("listaAmigosLabel"); // Corrigido
  ul.innerHTML = ""; // limpa lista anterior

  // Atualiza a contagem de participantes
  label.textContent = `Lista de Participantes: ${amigos.length}`;

  // Cria um <li> para cada nome no array
  // List Item) é a tag usada para definir um item individual dentro de uma lista
  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    // Adiciona o <li> à <ul>  
    ul.appendChild(li);
  });
}

// Sorteia um amigo secreto
function sortearAmigo() {
  // Precisa ter pelo menos 2 pessoas
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 participantes para sortear.");
    return;
  }

  // Pergunta quem está sorteando
  const sorteador = prompt("Digite o seu nome exatamente como está na lista:");

  // Verifica se o nome é válido e existe na lista
  // operador || é chamado de "OU lógico". Retorna true se pelo menos uma das expressões for verdadeira.
  if (!sorteador || !amigos.includes(sorteador)) {
    alert("Nome inválido ou não encontrado na lista.");
    return;
  }

  let sorteado;

  // Continua sorteando até sair um nome diferente do próprio sorteador
  do {
    const indice = Math.floor(Math.random() * amigos.length); // pega índice aleatório
    sorteado = amigos[indice];
  } while (sorteado === sorteador);

  // Mostra o resultado na lista "resultado"
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${sorteador} tirou ${sorteado}</li>`;
}

// Mantém o cursor no input e permite adicionar nomes apertando Enter
const input = document.getElementById("amigo");
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});
