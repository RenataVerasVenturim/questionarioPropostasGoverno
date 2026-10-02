// ============================================================
// PEGAR O DEPUTADO DA URL
// ============================================================

const parametros =
    new URLSearchParams(window.location.search);

const nomeCandidato =
    parametros.get("deputado");


// ============================================================
// ELEMENTOS DA PÁGINA
// ============================================================

const titulo =
    document.getElementById("titulo");

const descricao =
    document.getElementById("descricao");

const lista =
    document.getElementById("lista-proposicoes");


// ============================================================
// CONFIGURAÇÃO DA PAGINAÇÃO
// ============================================================

let proposicoes = [];

let paginaAtual = 1;

const quantidadePorPagina = 10;


// ============================================================
// VERIFICAR DEPUTADO
// ============================================================

if (!nomeCandidato) {

    titulo.textContent =
        "Deputado não informado";

    descricao.textContent =
        "Não foi possível identificar o deputado.";

} else {

    titulo.textContent =
        `Proposições — ${nomeCandidato}`;

    carregarProposicoes();

}


// ============================================================
// CARREGAR JSON
// ============================================================

function carregarProposicoes() {

    fetch("dados/deputados_rj_proposicoes.json")

        .then(function(resposta) {

            if (!resposta.ok) {

                throw new Error(
                    "Erro ao carregar o arquivo JSON."
                );

            }

            return resposta.json();

        })

        .then(function(dados) {

            // =================================================
            // VERIFICAR SE O DEPUTADO EXISTE NO JSON
            // =================================================

            if (!dados[nomeCandidato]) {

                throw new Error(
                    "Deputado não encontrado no arquivo JSON."
                );

            }


            // =================================================
            // PEGAR AS PROPOSIÇÕES
            // =================================================

            proposicoes =
                dados[nomeCandidato].proposicoes;


            descricao.textContent =
                `${proposicoes.length} proposições encontradas.`;


            mostrarPagina();

        })

        .catch(function(erro) {

            console.error(erro);

            descricao.textContent =
                "Não foi possível carregar as proposições.";

        });

}


// ============================================================
// MOSTRAR PÁGINA
// ============================================================

function mostrarPagina() {

    lista.innerHTML = "";


    const inicio =
        (paginaAtual - 1) *
        quantidadePorPagina;


    const fim =
        inicio +
        quantidadePorPagina;


    const proposicoesPagina =
        proposicoes.slice(inicio, fim);


    // ========================================================
    // MOSTRAR PROPOSIÇÕES
    // ========================================================

   proposicoesPagina.forEach(function(proposicao) {

    const card =
        document.createElement("article");

    card.classList.add("proposicao");

    card.innerHTML = `

        <h2>
            ${proposicao.siglaTipo}
            ${proposicao.numero}/${proposicao.ano}
        </h2>

        <p>
            ${proposicao.ementa ||
            "Ementa não disponível."}
        </p>

        <p>
            <strong>
                Data de apresentação:
            </strong>

            ${proposicao.dataApresentacao || "-"}
        </p>

        <div class="acoes-proposicao">

            <a
                href="${proposicao.uri}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn principal"
            >
                Ver na Câmara
            </a>

        </div>

    `;

    lista.appendChild(card);

});



    mostrarPaginacao();

}


// ============================================================
// PAGINAÇÃO
// ============================================================

function mostrarPaginacao() {

    const totalPaginas =
        Math.ceil(
            proposicoes.length /
            quantidadePorPagina
        );


    if (totalPaginas <= 1) {

        return;

    }


    const navegacao =
        document.createElement("div");

    navegacao.classList.add("paginacao");


    // ========================================================
    // BOTÃO ANTERIOR
    // ========================================================

    const anterior =
        document.createElement("button");

    anterior.textContent =
        "Anterior";

    anterior.classList.add(
        "btn",
        "secundario"
    );

    anterior.disabled =
        paginaAtual === 1;


    anterior.addEventListener(
        "click",
        function() {

            if (paginaAtual > 1) {

                paginaAtual--;

                mostrarPagina();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        }
    );


    // ========================================================
    // INDICADOR DA PÁGINA
    // ========================================================

    const numeroPagina =
        document.createElement("span");

    numeroPagina.textContent =
        `Página ${paginaAtual} de ${totalPaginas}`;


    // ========================================================
    // BOTÃO PRÓXIMA
    // ========================================================

    const proxima =
        document.createElement("button");

    proxima.textContent =
        "Próxima";

    proxima.classList.add(
        "btn",
        "principal"
    );

    proxima.disabled =
        paginaAtual === totalPaginas;


    proxima.addEventListener(
        "click",
        function() {

            if (paginaAtual < totalPaginas) {

                paginaAtual++;

                mostrarPagina();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        }
    );


    navegacao.appendChild(anterior);

    navegacao.appendChild(numeroPagina);

    navegacao.appendChild(proxima);

    lista.appendChild(navegacao);

}