let jogos = [];
const listaJogos = document.getElementById("listaJogos");
const status = document.getElementById("status");
const btnBuscar = document.getElementById("btnBuscar");

async function carregarJogos() {

    try {

        status.textContext = "Uploading Games ... Wait one minute!";
        const resposta = await fetch('games.json');

        if (!resposta.ok) {
            throw new Error("não foi possível carregar este JSON. ❌");
        }

        //Converte a resposta para JSON
        jogos = await resposta.json();

    } catch (erro) {

        status.textContent = `Erro: ${erro.message}`;
    }
}

function mostrarJogos(lista) {

    listaJogos.innerHTML = "";

    lista.forEach((jogo) => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
        <h2>${jogo.nome}</h2>
        <p><strong>Data:</strong> ${jogo.data}<p>
        <p><strong>Categoria:</strong> ${jogo.categoria}</p>
        <p><strong>Nota Geral:</strong> ${jogo.nota}</p>
        `;

        listaJogos.appendChild(card);
    });
}

btnBuscar.addEventListener("click", () => {
        status.textContent = `${jogos.length} Jogos carregados com sucesso ✅`;
    mostrarJogos(jogos);
});

carregarJogos();