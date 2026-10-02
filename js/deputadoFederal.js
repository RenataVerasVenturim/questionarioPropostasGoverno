// ============================================================
// DADOS DOS CANDIDATOS
// ============================================================

const candidatos = {

    A: {
        numero: "1331",
        nome: "Marcelo Freixo",
        partido: "PT",
        perfil:
            "Restrição de armas, amparo a vítimas de violência, valorização do salário mínimo, fiscalização ambiental e direitos humanos.",
        foto: "assets/fotos/freixo.webp"
    },

    B: {
        numero: "1300",
        nome: "Lindbergh Farias",
        partido: "PT",
        perfil:
            "Orçamento Participativo, fomento constitucional para a cultura, proteção social dos jovens e exigências de segurança no trânsito e na indústria.",
        foto: "assets/fotos/lindbergh.webp"
    },

    C: {
        numero: "1177",
        nome: "Doutor Luizinho",
        partido: "PP",
        perfil:
            "Modernização e digitalização da saúde (SUS), unificação de documentos cidadãos (CPF), desenvolvimento econômico da Baixada e apoio a forças de segurança.",
        foto: "assets/fotos/luizinho.webp"
    },

    D: {
        numero: "5080",
        nome: "Glauber Braga",
        partido: "PSOL",
        perfil:
            "Defesa dos direitos dos trabalhadores, combate a taxas abusivas, transparência pública obrigatória e financiamento público de campanhas.",
        foto: "assets/fotos/glauberbraga.webp"
    },

    E: {
        numero: "2258",
        nome: "Wladimir Garotinho",
        partido: "PSD",
        perfil:
            "Desenvolvimento regional do Norte e Noroeste fluminense, proteção do consumidor (energia e pedágio) e verbas fiscais para a Educação Básica.",
        foto: "assets/fotos/wladimirgarotinho.webp"
    }

};


// ============================================================
// QUESTÕES
// ============================================================

const perguntas = [

    {
        titulo: "Segurança Pública e Controle de Armas",

        pergunta:
            "Qual abordagem você considera mais adequada para combater a violência e proteger o cidadão?",

        opcoes: {

            A: "Focar no amparo às vítimas de violência, valorizar a saúde mental e física dos policiais e aumentar o controle e restrição ao porte de armas de fogo.",

            B: "Garantir assistência jurídica gratuita e integral para policiais civis, militares e bombeiros que respondam a processos por atos em serviço.",

            C: "Humanizar o sistema penal, combatendo excessos na execução das penas e prevendo alternativas para evitar o superencarceramento.",

            D: "Fortalecer e reconhecer formalmente as Guardas Municipais na Constituição como parte integrante da segurança pública.",

            E: "Criar e estruturar polícias e órgãos de segurança institucional próprios no âmbito dos Poderes públicos."
        }
    },


    {
        titulo: "Saúde Pública e Atendimento no SUS",

        pergunta:
            "Como o Governo Federal deve priorizar a melhoria da saúde pública para a população?",

        opcoes: {

            A: "Modernizar o SUS com o Cartão Nacional de Vacinação Digital e agilizar o registro de novos remédios e tratamentos na Anvisa.",

            B: "Facilitar a vida do paciente, permitindo que laudos de médicos particulares tenham validade imediata para requerer isenções e direitos.",

            C: "Garantir adicionais de insalubridade e condições dignas para trabalhadores expostos a agentes nocivos e ambientes de risco.",

            D: "Condicionar as políticas públicas de saúde à defesa rigorosa dos direitos humanos e proteção de populações vulneráveis.",

            E: "Assegurar verbas orçamentárias constitucionais fixas e protegidas contra cortes para o custeio da saúde e serviços sociais."
        }
    },


    {
        titulo: "Trabalho, Emprego e Salário Mínimo",

        pergunta:
            "O que deve ser priorizado nas relações de trabalho e no rendimento do trabalhador?",

        opcoes: {

            A: "Criar regras rígidas contra demissões coletivas sem negociação e punir abusos contra o trabalhador.",

            B: "Aprovar uma política permanente de valorização do salário mínimo que garanta aumento real acima da inflação todo ano.",

            C: "Proteger as regras de aposentadoria de professores e trabalhadores da educação básica em reformas da previdência.",

            D: "Desonerar a folha de pagamento e conceder incentivos fiscais para geração de empregos em áreas vulneráveis.",

            E: "Proteger o poder de compra de aposentados e trabalhadores contra perdas inflacionárias na previdência social."
        }
    },


    {
        titulo: "Direitos do Consumidor e Tarifas",

        pergunta:
            "Como proteger o cidadão de cobranças indevidas de empresas de energia, bancos e concessionárias?",

        opcoes: {

            A: "Proibir as distribuidoras de energia de cobrarem contas de luz com base em mera \"estimativa de consumo\".",

            B: "Proibir que operadoras de cartão e bancos cobrem taxas abusivas dos consumidores e estabelecimentos comerciais.",

            C: "Impor regras transparentes de modicidade tarifária e regras rígidas para cobrança de pedágio em rodovias.",

            D: "Evitar aumentos abusivos e regulamentar ressarcimentos de planos de saúde ao sistema público.",

            E: "Tributar lucros e dividendos de grandes empresas para aliviar a carga de imposto cobrada sobre a renda do trabalhador."
        }
    },


    {
        titulo: "Desenvolvimento Econômico do Rio de Janeiro",

        pergunta:
            "Qual a melhor proposta para gerar empregos na Baixada Fluminense, Norte, Noroeste e interior do Estado?",

        opcoes: {

            A: "Criar a Zona Franca da Baixada Fluminense com incentivos fiscais para atração de indústrias e comércio.",

            B: "Criar um Fundo de Desenvolvimento Econômico exclusivo para alavancar os municípios do Norte e Noroeste Fluminense.",

            C: "Exigir prestação de contas pública rigorosa e diária sobre a aplicação de recursos em obras públicas estaduais e municipais.",

            D: "Atrelar os incentivos de desenvolvimento econômico a licenciamentos ambientais rigorosos e preservação do ecossistema.",

            E: "Adotar o Orçamento Participativo para que a própria população das cidades decida onde investir os recursos do Estado."
        }
    },


    {
        titulo: "Educação, Cultura e Juventude",

        pergunta:
            "Qual destas medidas é prioridade para a formação das futuras gerações?",

        opcoes: {

            A: "Destinar 20% de toda a economia obtida com reformas fiscais/previdenciárias diretamente para a Educação Básica.",

            B: "Garantir na Constituição um percentual fixo e permanente de recursos orçamentários para o fomento da Cultura.",

            C: "Aprovar a PEC dos Direitos da Juventude, assegurando acesso a direitos econômicos, sociais e culturais.",

            D: "Criar um plano especial de reconstrução e emergência para a rede física de escolas atingidas por chuvas e desastres.",

            E: "Valorizar financeiramente as bolsas de estudo e residência de médicos e profissionais de saúde e educação."
        }
    },


    {
        titulo: "Transparência Política e Eleições",

        pergunta:
            "Como deve ser o financiamento de campanhas e a prestação de contas dos parlamentares?",

        opcoes: {

            A: "Adotar o financiamento público exclusivo de campanhas para impedir o abuso do poder econômico corporativo.",

            B: "Obrigatoriedade por lei de todos os Deputados e Senadores prestarem contas periodicamente em programa público (\"Programa Prestando Contas\").",

            C: "Instituir o Orçamento Participativo em nível nacional para decisão direta da sociedade na destinação dos impostos.",

            D: "Utilizar a Lei de Acesso à Informação e decretos de transparência para combater sigilos governamentais e apurar denúncias.",

            E: "Exigir mecanismos integrados de transparência sobre o uso de recursos federais transferidos a estados e prefeituras."
        }
    },


    {
        titulo: "Desburocratização e Documentos do Cidadão",

        pergunta:
            "Como facilitar o acesso do cidadão aos serviços públicos no dia a dia?",

        opcoes: {

            A: "Adotar o CPF como número único e suficiente para identificação em qualquer banco de dados ou órgão público do Brasil.",

            B: "Digitalizar integralmente os registros de vacinação e históricos de saúde em uma plataforma nacional online do SUS.",

            C: "Permitir que atestados de médicos particulares valham diretamente para a concessão de isenções fiscais ou licenças.",

            D: "Proibir que administradoras de cartão obriguem consumo mínimo ou dificultem cancelamentos de serviços.",

            E: "Garantir acesso livre e desburocratizado a pareceres e dados de órgãos ambientais e governamentais."
        }
    },


    {
        titulo: "Meio Ambiente e Proteção Social",

        pergunta:
            "Qual deve ser o foco principal da atuação do Estado no meio ambiente e na defesa social?",

        opcoes: {

            A: "Criar mecanismos modernos e rigorosos para avaliação de impacto ambiental em grandes obras e empreendimentos.",

            B: "Garantir proteção legal e reconhecimento oficial aos defensores de direitos humanos e líderes comunitários.",

            C: "Criar o Estatuto de Proteção Civil e destinar recursos para contenção de tragédias de chuvas e encostas no RJ.",

            D: "Criar fundos de desenvolvimento regional vinculados a projetos sustentáveis para o interior do estado.",

            E: "Atrelar concessões públicas a investimentos em obras sociais e de saneamento na Baixada Fluminense."
        }
    },


    {
        titulo: "Segurança no Trânsito, Esporte e Cidadania",

        pergunta:
            "Qual destas medidas propostas você considera mais relevante no seu dia a dia?",

        opcoes: {

            A: "Tornar obrigatória a instalação de equipamentos de segurança avançados, como airbag, em veículos nacionais.",

            B: "Homenagear e inscrever defensores dos direitos civis e humanos no Livro dos Heróis e Heroínas da Pátria.",

            C: "Modernizar a legislação desportiva para garantir incentivo e suporte ao esporte de base nas periferias.",

            D: "Impedir a cobrança indevida ou descontos não autorizados em aposentadorias de idosos e pensionistas.",

            E: "Regulamentar os contratos de concessão rodoviária para impedir aumentos desproporcionais nos pedágios."
        }
    }

];


// ============================================================
// CORRESPONDÊNCIA DAS QUESTÕES
// ============================================================
//
// Cada alternativa corresponde a um ou mais candidatos.
//
// A = Marcelo Freixo
// B = Lindbergh Farias
// C = Doutor Luizinho
// D = Glauber Braga
// E = Wladimir Garotinho
//
// Quando houver mais de um candidato, ambos recebem 1 ponto.
// Exemplo: ["A", "B"]
//
// ============================================================

const correspondencias = [

    // Q1
    {
        A: ["A"],
        B: ["C"],
        C: ["D"],
        D: ["E"],
        E: ["B"]
    },

    // Q2
    {
        A: ["C"],
        B: ["E"],
        C: ["D"],
        D: ["A"],
        E: ["B"]
    },

    // Q3
    {
        A: ["D"],
        B: ["A"],
        C: ["E"],
        D: ["C"],
        E: ["B"]
    },

    // Q4
    {
        A: ["E"],
        B: ["D"],
        C: ["E"],
        D: ["C"],
        E: ["B"]
    },

    // Q5
    {
        A: ["C"],
        B: ["E"],
        C: ["D"],
        D: ["A"],
        E: ["B"]
    },

    // Q6
    {
        A: ["E"],
        B: ["B"],
        C: ["B"],
        D: ["A"],
        E: ["C"]
    },

    // Q7
    {
        A: ["D"],
        B: ["D"],
        C: ["B"],
        D: ["A"],
        E: ["E"]
    },

    // Q8
    {
        A: ["C"],
        B: ["C"],
        C: ["E"],
        D: ["D"],
        E: ["A"]
    },

    // Q9
    {
        A: ["A"],
        B: ["A"],
        C: ["D"],
        D: ["E"],
        E: ["C"]
    },

    // Q10
    {
        A: ["C"],
        B: ["A"],
        C: ["D"],
        D: ["C"],
        E: ["B"]
    }

];


// ============================================================
// MOSTRAR CANDIDATOS
// ============================================================

function mostrarCandidatos() {

    const container = document.getElementById("candidatos");

    let html = "";

    // FOR...IN
    // Percorre A, B, C, D e E

    for (let letra in candidatos) {

        const candidato = candidatos[letra];

        html += `

            <article class="card-candidato">

                <img
                    src="${candidato.foto}"
                    alt="Foto de ${candidato.nome}"
                >

                <h3>
                    ${candidato.nome} 
                </h3>

                <p>
                    <strong>
                        ${candidato.partido}
                    </strong>
                </p>
                <p>
                        ${candidato.perfil}
                </p>

                <a
                    href="proposicoes2.html?deputado=${encodeURIComponent(candidato.nome)}"
                    class="btn principal"
                >
                    Ver proposições
                </a>

            </article>

        `;
    }

    container.innerHTML = html;
}


// ============================================================
// MOSTRAR PERGUNTAS
// ============================================================

function mostrarPerguntas() {

    const container = document.getElementById("perguntas");

    let html = "";

    perguntas.forEach(function(pergunta, indice) {

        html += `

            <section class="pergunta">

                <h2>
                    ${indice + 1}. ${pergunta.titulo}
                </h2>

                <p>
                    <strong>
                        ${pergunta.pergunta}
                    </strong>
                </p>

        `;


        // ====================================================
        // FOR...IN
        // Percorre as alternativas A, B, C, D e E
        // ====================================================

        for (let letra in pergunta.opcoes) {

            html += `

                <label class="opcao">

                    <input
                        type="radio"
                        name="pergunta${indice}"
                        value="${letra}"
                    >

                    <span>
                        <strong>[${letra}]</strong>
                        ${pergunta.opcoes[letra]}
                    </span>

                </label>

            `;
        }

        html += `

            </section>

        `;
    });

    container.innerHTML = html;
}


// ============================================================
// CALCULAR PONTUAÇÃO
// ============================================================

function calcularPontuacao() {

    const pontuacao = {

        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0

    };


    // Percorre todas as perguntas

    perguntas.forEach(function(pergunta, indice) {

        const resposta = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );


        if (resposta) {

            const alternativa = resposta.value;

            const candidatosCorrespondentes =
                correspondencias[indice][alternativa];


            // =================================================
            // FOR...OF
            // Percorre os candidatos que correspondem
            // à alternativa escolhida.
            // =================================================

            for (
                let candidato of candidatosCorrespondentes
            ) {

                pontuacao[candidato]++;

            }

        }

    });

    return pontuacao;
}


// ============================================================
// MOSTRAR RESULTADO
// ============================================================

function mostrarResultado(pontuacao) {

    const resultado =
        document.getElementById("resultado");


    // Maior quantidade de pontos

    const maiorPontuacao =
        Math.max(...Object.values(pontuacao));


    // ========================================================
    // FOR...IN
    // Descobre quais candidatos atingiram a maior pontuação
    // ========================================================

    const empatados = [];

    for (let letra in pontuacao) {

        if (
            pontuacao[letra] === maiorPontuacao
        ) {

            empatados.push(letra);

        }

    }


    let html = `

        <h2>
            Resultado da comparação
        </h2>

        <p>
            A pontuação abaixo representa a quantidade de
            respostas que coincidiram com as correspondências
            cadastradas para cada candidato.
        </p>

    `;


    // ========================================================
    // MOSTRAR CADA CANDIDATO
    // ========================================================

    for (let letra in candidatos) {

        const candidato =
            candidatos[letra];

        const pontos =
            pontuacao[letra];

        const percentual =
            pontos * (100 / perguntas.length);


        const estaNoMaior =
            empatados.includes(letra);


        html += `

            <div class="resultado-candidato">

                <img
                    src="${candidato.foto}"
                    alt="Foto de ${candidato.nome}"
                >

                    <h3>
                        ${candidato.nome}—${candidato.numero}
                    </h3>

                    <p>
                        <strong>
                            ${candidato.partido}
                        </strong>
                    </p>

                    <p>
                        ${candidato.perfil}
                    </p>
                    <a
                        href="proposicoes2.html?deputado=${candidato.nome}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="pdf"
                    >
                        Ver proposições
                    </a>
                <p>
                    ${pontos} ponto(s)
                    — ${percentual.toFixed(0)}%
                </p>

                <div class="barra">

                    <div
                        class="barra-preenchida"
                        style="width: ${percentual}%"
                    >
                    </div>

                </div>

                ${
                    estaNoMaior
                    ?
                    `
                        <strong>
                            Maior pontuação registrada
                        </strong>
                    `
                    :
                    ""
                }

            </div>

        `;
    }


    html += `

        <div class="aviso">

            <strong>
                Como interpretar:
            </strong>

            a pontuação é uma comparação matemática
            entre suas respostas e a tabela de correspondência
            utilizada pelo questionário.

            Ela não constitui recomendação de voto.

        </div>

    `;


    resultado.innerHTML = html;

    resultado.classList.remove("escondido");

    resultado.scrollIntoView({
        behavior: "smooth"
    });
}


// ============================================================
// FORMULÁRIO
// ============================================================

document
    .getElementById("questionario")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        // Verificar se todas as perguntas foram respondidas

        for (
            let i = 0;
            i < perguntas.length;
            i++
        ) {

            const resposta =
                document.querySelector(
                    `input[name="pergunta${i}"]:checked`
                );


            if (!resposta) {

                alert(
                    `Responda à questão ${i + 1} antes de continuar.`
                );

                return;
            }
        }


        const pontuacao =
            calcularPontuacao();


        mostrarResultado(pontuacao);

    });


// ============================================================
// BOTÃO LIMPAR
// ============================================================

document
    .getElementById("limpar")
    .addEventListener("click", function() {

        document
            .getElementById("questionario")
            .reset();


        document
            .getElementById("resultado")
            .classList.add("escondido");

    });


// ============================================================
// INICIALIZAÇÃO
// ============================================================

mostrarCandidatos();

mostrarPerguntas();