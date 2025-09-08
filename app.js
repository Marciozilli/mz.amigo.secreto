// O principal objetivo deste desafio é fortalecer suas habilidades em 
// lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o Desafio.

// Array para armazenar todos nomes adicionados
const amigos = [];

// Seleciona input uma vez
const input = document.getElementById("amigo");

// Mantém cursor no input e permite adicionar nomes apertando Enter
input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

// Função chamada ao clicar no botão "Adicionar" ou Enter
function adicionarAmigo() {
  const nome = input.value.trim(); // remove espaços extras

  // --- Validações ---
  if (nome.length < 3) {
    alert("O nome deve ter pelo menos 3 letras.");
    return; 
  }
  if (/^[0-9]/.test(nome)) {
    alert("O nome não pode começar com número.");
    return; 
  }
  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado.");
    return; 
  }

  // Adiciona ao array
  amigos.push(nome);

  // Atualiza lista exibida na tela
  atualizarLista();

  // LIMPA  campo de input e mantém o foco
  input.value = "";       
  input.focus();          
}

// Atualiza a <ul> com os nomes armazenados no array
function atualizarLista() {
  const ul = document.getElementById("listaAmigos");
  const label = document.getElementById("listaAmigosLabel"); 
  ul.innerHTML = ""; // limpa lista anterior

  // Atualiza a contagem de participantes
  label.textContent = `Lista de Participantes: ${amigos.length}`;

  // Cria um <li> para cada nome no array
  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);
  });
}

// Sorteia um amigo secreto
function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  // LIMPA resultados antigos antes do novo sorteio
  resultado.innerHTML = "";

  // Precisa ter pelo menos 2 pessoas
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 participantes para sortear.");
    return;
  }

  // Pergunta quem está sorteando
  const sorteador = prompt("Digite o seu nome exatamente como está na lista:");

  if (!sorteador || !amigos.includes(sorteador)) {
    alert("Nome inválido ou não encontrado na lista.");
    return;
  }

  let sorteado;
  do {
    const indice = Math.floor(Math.random() * amigos.length);
    sorteado = amigos[indice];
  } while (sorteado === sorteador);

  // Mostra o resultado do sorteio
  resultado.innerHTML = `<li>${sorteador} tirou ${sorteado}</li>`;

  // --- CORREÇÃO: LIMPA lista participantes após sorteio ---
  amigos.length = 0;        // esvazia o array
  atualizarLista();          // atualiza o HTML, contagem volta a 0
}
