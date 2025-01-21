// Mensagem de boas-vindas
alert('Bem-vindo ao Jogo do Amigo Secreto!');

let amigos = [];
let amigosRestantes = []; 

// Função para adicionar amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        amigosRestantes.push(nome); 
        atualizarLista();
        input.value = "";
    } else if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
    } else {
        alert("Digite um nome válido!");
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("remove-button");
        botaoRemover.onclick = function () {
            removerAmigo(index);
        };

        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    amigosRestantes = amigos.slice(); 
    atualizarLista();
}

// Função para sortear um amigo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de sortear.");
        return;
    }

    if (amigosRestantes.length === 0) {
        alert("Todos os amigos já foram sorteados! Reiniciando a lista...");
        amigosRestantes = amigos.slice();
    }

    if (amigosRestantes.length > 0) {
        let indexSorteado = Math.floor(Math.random() * amigosRestantes.length);
        let amigoSorteado = amigosRestantes[indexSorteado];
        amigosRestantes.splice(indexSorteado, 1); 

        // Limpa o resultado anterior e exibe o novo sorteio
        resultado.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong> 🎉</li>`;
    }
}
