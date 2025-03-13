//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    console.log(document.getElementById("amigo"))
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    // Validação: Verifica se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a exibição da lista de amigos
    atualizarListaAmigos();

    // Limpa o campo de entrada
    inputNome.value = "";
}

function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

 
    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gerar um índice aleatório dentro do intervalo do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibir o resultado na página
    document.getElementById("resultado").innerHTML = `🎉 Amigo Sorteado: <strong>${amigoSorteado}</strong>`;
}
