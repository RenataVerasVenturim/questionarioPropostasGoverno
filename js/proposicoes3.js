// ============================================================
// PROPOSIÇÕES DOS DEPUTADOS ESTADUAIS
// ============================================================


// ============================================================
// CONFIGURAÇÕES
// ============================================================

const itensPorPagina = 10;

let paginaAtual = 1;

let proposicoes = [];


// ============================================================
// OBTÉM O NOME DO DEPUTADO PELA URL
// ============================================================

const parametros = new URLSearchParams(
    window.location.search
);

const nomeDeputado = parametros.get("deputado");


// ============================================================
// ELEMENTOS DO HTML
// ============================================================

const tituloDeputado =
    document.getElementById("tituloDeputado");

const listaProposicoes =
    document.getElementById("listaProposicoes");

const paginacao =
    document.getElementById("paginacao");


// ============================================================
// MOSTRA O NOME DO DEPUTADO
// ============================================================

if (nomeDeputado) {

    tituloDeputado.textContent =
        `Proposições de ${nomeDeputado}`;

}


// ============================================================
// BUSCAR PROPOSIÇÕES
// ============================================================

async function carregarProposicoes() {

    try {

        listaProposicoes.innerHTML = `
            <p>
                Carregando proposições...
            </p>
        `;


        const resposta = await fetch(
            "dados/deputados_estaduais_rj_proposicoes.json"
        );


        if (!resposta.ok) {

            throw new Error(
                "Não foi possível carregar o arquivo JSON."
            );

        }


        const dados = await resposta.json();


        // ----------------------------------------------------
        // Verifica se o deputado existe no JSON
        // ----------------------------------------------------

        if (!nomeDeputado || !dados[nomeDeputado]) {

            listaProposicoes.innerHTML = `
                <p>
                    Nenhuma proposição encontrada para
                    este deputado.
                </p>
            `;

            return;

        }


        // ----------------------------------------------------
        // Obtém as proposições do deputado
        // ----------------------------------------------------

        proposicoes =
            dados[nomeDeputado].proposicoes || [];


        if (proposicoes.length === 0) {

            listaProposicoes.innerHTML = `
                <p>
                    Este deputado não possui proposições
                    cadastradas no arquivo.
                </p>
            `;

            return;

        }


        paginaAtual = 1;

        mostrarProposicoes();

        mostrarPaginacao();

    }

    catch (erro) {

        console.error(
            "Erro ao carregar proposições:",
            erro
        );

        listaProposicoes.innerHTML = `
            <p>
                Erro ao carregar as proposições.
            </p>
        `;

    }

}


// ============================================================
// MOSTRAR PROPOSIÇÕES
// ============================================================

function mostrarProposicoes() {

    listaProposicoes.innerHTML = "";


    // --------------------------------------------------------
    // Calcula o intervalo da página atual
    // --------------------------------------------------------

    const inicio =
        (paginaAtual - 1) *
        itensPorPagina;


    const fim =
        inicio +
        itensPorPagina;


    const proposicoesPagina =
        proposicoes.slice(
            inicio,
            fim
        );


    // --------------------------------------------------------
    // Percorre as proposições
    // --------------------------------------------------------

    for (const proposicao of proposicoesPagina) {


        // ----------------------------------------------------
        // Cria o card
        // ----------------------------------------------------

        const card =
            document.createElement("article");

        card.classList.add(
            "proposicao"
        );


        // ----------------------------------------------------
        // Tipo e número
        // ----------------------------------------------------

        let identificacao = "";


        if (
            proposicao.tipo &&
            proposicao.numero
        ) {

            identificacao =
                `${proposicao.tipo} Nº ${proposicao.numero}`;

        }

        else if (proposicao.codigo) {

            identificacao =
                `Proposição ${proposicao.codigo}`;

        }

        else {

            identificacao =
                "Proposição legislativa";

        }


        // ----------------------------------------------------
        // Ementa
        // ----------------------------------------------------

        const ementa =
            proposicao.ementa ||
            "Ementa não informada.";


        // ----------------------------------------------------
        // Autor
        // ----------------------------------------------------

        const autor =
            proposicao.autor ||
            nomeDeputado ||
            "Não informado";


        // ----------------------------------------------------
        // Código
        // ----------------------------------------------------

        let codigoHTML = "";


        if (proposicao.codigo) {

            codigoHTML = `
                <p>
                    <strong>Código:</strong>
                    ${proposicao.codigo}
                </p>
            `;

        }


        // ----------------------------------------------------
        // Data de entrada
        // ----------------------------------------------------

        let entradaHTML = "";


        if (proposicao.entrada) {

            entradaHTML = `
                <p>
                    <strong>Entrada:</strong>
                    ${proposicao.entrada}
                </p>
            `;

        }


        // ----------------------------------------------------
        // Regime de tramitação
        // ----------------------------------------------------

        let regimeHTML = "";


        if (proposicao.regime_tramitacao) {

            regimeHTML = `
                <p>
                    <strong>Regime:</strong>
                    ${proposicao.regime_tramitacao}
                </p>
            `;

        }


        // ----------------------------------------------------
        // Comissões
        // ----------------------------------------------------

        let comissoesHTML = "";


        if (
            proposicao.comissoes &&
            proposicao.comissoes.length > 0
        ) {

            comissoesHTML = `
                <div>

                    <strong>
                        Comissões:
                    </strong>

                    <ul>
                        ${proposicao.comissoes
                            .map(function(comissao) {

                                return `
                                    <li>
                                        ${comissao}
                                    </li>
                                `;

                            })
                            .join("")}
                    </ul>

                </div>
            `;

        }


        // ----------------------------------------------------
        // Monta o conteúdo do card
        // ----------------------------------------------------

        card.innerHTML = `

            <h3>
                ${identificacao}
            </h3>

            <p>
                <strong>Ementa:</strong>
                ${ementa}
            </p>

            <p>
                <strong>Autor:</strong>
                ${autor}
            </p>

            ${codigoHTML}

            ${entradaHTML}

            ${regimeHTML}

            ${comissoesHTML}

            <div class="acoes-proposicao">

                ${
                    proposicao.url
                    ?
                    `
                    <a
                        href="${proposicao.url}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn principal"
                    >
                        Ver proposição na ALERJ
                    </a>
                    `
                    :
                    ""
                }

            </div>

        `;


        // ----------------------------------------------------
        // Adiciona o card à página
        // ----------------------------------------------------

        listaProposicoes.appendChild(
            card
        );

    }

}


// ============================================================
// PAGINAÇÃO
// ============================================================

function mostrarPaginacao() {

    paginacao.innerHTML = "";


    const totalPaginas =
        Math.ceil(
            proposicoes.length /
            itensPorPagina
        );


    // --------------------------------------------------------
    // Se houver apenas uma página, não mostra paginação
    // --------------------------------------------------------

    if (totalPaginas <= 1) {

        return;

    }


    // --------------------------------------------------------
    // Botão ANTERIOR
    // --------------------------------------------------------

    const botaoAnterior =
        document.createElement("button");

    botaoAnterior.classList.add(
        "btn",
        "secundario"
    );

    botaoAnterior.textContent =
        "Anterior";


    botaoAnterior.disabled =
        paginaAtual === 1;


    botaoAnterior.addEventListener(
        "click",
        function() {

            if (paginaAtual > 1) {

                paginaAtual--;

                mostrarProposicoes();

                mostrarPaginacao();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        }
    );


    paginacao.appendChild(
        botaoAnterior
    );


    // --------------------------------------------------------
    // Número das páginas
    // --------------------------------------------------------

    for (
        let numero = 1;
        numero <= totalPaginas;
        numero++
    ) {

        const botao =
            document.createElement("button");


        botao.classList.add(
            "btn"
        );


        if (
            numero === paginaAtual
        ) {

            botao.classList.add(
                "principal"
            );

        }

        else {

            botao.classList.add(
                "secundario"
            );

        }


        botao.textContent =
            numero;


        botao.addEventListener(
            "click",
            function() {

                paginaAtual =
                    numero;

                mostrarProposicoes();

                mostrarPaginacao();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );


        paginacao.appendChild(
            botao
        );

    }


    // --------------------------------------------------------
    // Botão PRÓXIMA
    // --------------------------------------------------------

    const botaoProxima =
        document.createElement("button");

    botaoProxima.classList.add(
        "btn",
        "secundario"
    );

    botaoProxima.textContent =
        "Próxima";


    botaoProxima.disabled =
        paginaAtual === totalPaginas;


    botaoProxima.addEventListener(
        "click",
        function() {

            if (
                paginaAtual <
                totalPaginas
            ) {

                paginaAtual++;

                mostrarProposicoes();

                mostrarPaginacao();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        }
    );


    paginacao.appendChild(
        botaoProxima
    );

}


// ============================================================
// INICIALIZAÇÃO
// ============================================================

carregarProposicoes();