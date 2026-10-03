// ============================================================
// CANDIDATOS
// ============================================================

const candidatos = {

    A: "Benedita da Silva",
    B: "Carlos Jordy",
    C: "Pedro Paulo",
    D: "Carlos Portinho",
    E: "Monica Benicio",

};


// ============================================================
// ELEMENTOS DO HTML
// ============================================================

const titulo =
    document.querySelector("#titulo");

const descricao =
    document.querySelector("#descricao");

const lista =
    document.querySelector("#lista-proposicoes");


// ============================================================
// IDENTIFICAR CANDIDATO PELA URL
// ============================================================

const parametros =
    new URLSearchParams(
        window.location.search
    );

const letra =
    parametros.get("candidato");

const nomeCandidato =
    candidatos[letra];


// ============================================================
// VARIÁVEIS DA PAGINAÇÃO
// ============================================================

let proposicoes = [];

let paginaAtual = 1;

const quantidadePorPagina = 10;


// ============================================================
// VERIFICAR CANDIDATO
// ============================================================

if (!nomeCandidato) {

    titulo.textContent =
        "Candidato não encontrado";

    descricao.textContent =
        "Não foi possível identificar o candidato.";

} else {

    carregarProposicoes();

}


// ============================================================
// CARREGAR JSON
// ============================================================

async function carregarProposicoes() {

    try {

        const resposta =
            await fetch(
                "dados/senado_rj_proposicoes.json"
            );

        if (!resposta.ok) {

            throw new Error(
                `Erro HTTP: ${resposta.status}`
            );

        }

        const dados =
            await resposta.json();


        // ====================================================
        // LOCALIZAR O CANDIDATO
        // ====================================================

        const candidato =
            dados[nomeCandidato];

        if (!candidato) {

            throw new Error(
                "Candidato não encontrado no JSON."
            );

        }


        // ====================================================
        // PEGAR AS PROPOSIÇÕES
        // ====================================================

        proposicoes =
            candidato.proposicoes;


        if (!Array.isArray(proposicoes)) {

            throw new Error(
                "O campo 'proposicoes' não é um array."
            );

        }


        // ====================================================
        // MOSTRAR PRIMEIRA PÁGINA
        // ====================================================

        mostrarPagina();

    } catch (erro) {

        console.error(
            "Erro ao carregar proposições:",
            erro
        );

        titulo.textContent =
            "Erro ao carregar proposições";

        descricao.textContent =
            "Não foi possível carregar os dados das proposições.";

    }

}


// ============================================================
// MOSTRAR PÁGINA
// ============================================================

function mostrarPagina() {

    titulo.textContent =
        `Proposições de ${nomeCandidato}`;


    // ========================================================
    // CALCULAR POSIÇÃO NO ARRAY
    // ========================================================

    const inicio =
        (paginaAtual - 1) *
        quantidadePorPagina;

    const fim =
        inicio +
        quantidadePorPagina;


    // ========================================================
    // PEGAR SOMENTE 10 PROPOSIÇÕES
    // ========================================================

    const proposicoesPagina =
        proposicoes.slice(
            inicio,
            fim
        );


    // ========================================================
    // DESCRIÇÃO
    // ========================================================

    const totalPaginas =
        Math.ceil(
            proposicoes.length /
            quantidadePorPagina
        );

    descricao.textContent =
        `${proposicoes.length} proposições encontradas. Página ${paginaAtual} de ${totalPaginas}.`;


    // ========================================================
    // LIMPAR LISTA
    // ========================================================

    lista.innerHTML = "";


    // ========================================================
    // MOSTRAR AS 10 PROPOSIÇÕES
    // ========================================================

    for (
        let proposicao of proposicoesPagina
    ) {

        let identificacao =
            `${proposicao.siglaTipo || ""}
             ${proposicao.numero || ""}
             ${proposicao.ano || ""}`;


        let data =
            formatarData(
                proposicao.dataApresentacao
            );


        let url =
            proposicao.uri ||
            proposicao.url ||
            proposicao.urlInteiroTeor;


        lista.innerHTML += `

            <article class="proposicao">

                <div class="proposicao-cabecalho">

                    <span class="tipo">

                        ${proposicao.siglaTipo || "Proposição"}

                    </span>

                    <strong>

                        ${proposicao.numero || ""}/${proposicao.ano || ""}

                    </strong>

                </div>


                <h2>

                    ${identificacao}

                </h2>


                <p class="ementa">

                    ${
                        proposicao.ementa ||
                        "Ementa não disponível."
                    }

                </p>


                <p class="data">

                    <strong>
                        Apresentação:
                    </strong>

                    ${data}

                </p>


                ${
                    url
                    ?
                    `
                        <a
                            href="${url}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn principal"
                        >
                            Ver proposição oficial →
                        </a>
                    `
                    :
                    `
                        <p>
                            Link oficial não disponível.
                        </p>
                    `
                }

            </article>

        `;

    }


    // ========================================================
    // BOTÕES DE PAGINAÇÃO
    // ========================================================

    mostrarBotoesPaginacao(
        totalPaginas
    );

}


// ============================================================
// BOTÕES DE PAGINAÇÃO
// ============================================================

function mostrarBotoesPaginacao(
    totalPaginas
) {

    const paginacao =
        document.createElement("div");

    paginacao.classList.add(
        "paginacao"
    );


    // ========================================================
    // BOTÃO ANTERIOR
    // ========================================================

    const botaoAnterior =
        document.createElement("button");

    botaoAnterior.textContent =
        "← Anterior";

    botaoAnterior.disabled =
        paginaAtual === 1;


    botaoAnterior.addEventListener(
        "click",
        function() {

            paginaAtual--;

            mostrarPagina();

            window.scrollTo(
                0,
                0
            );

        }
    );


    // ========================================================
    // NÚMERO DA PÁGINA
    // ========================================================

    const numeroPagina =
        document.createElement("span");

    numeroPagina.textContent =
        `Página ${paginaAtual} de ${totalPaginas}`;


    // ========================================================
    // BOTÃO PRÓXIMA
    // ========================================================

    const botaoProxima =
        document.createElement("button");

    botaoProxima.textContent =
        "Próxima →";

    botaoProxima.disabled =
        paginaAtual === totalPaginas;


    botaoProxima.addEventListener(
        "click",
        function() {

            paginaAtual++;

            mostrarPagina();

            window.scrollTo(
                0,
                0
            );

        }
    );


    // ========================================================
    // ADICIONAR BOTÕES
    // ========================================================

    paginacao.appendChild(
        botaoAnterior
    );

    paginacao.appendChild(
        numeroPagina
    );

    paginacao.appendChild(
        botaoProxima
    );


    lista.appendChild(
        paginacao
    );

}


// ============================================================
// FORMATAR DATA
// ============================================================

function formatarData(
    data
) {

    if (!data) {

        return "Não informada";

    }


    const dataObjeto =
        new Date(data);


    if (
        isNaN(
            dataObjeto.getTime()
        )
    ) {

        return "Data não disponível";

    }


    return dataObjeto.toLocaleDateString(
        "pt-BR"
    );

}
