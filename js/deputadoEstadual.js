// ============================================================
// DADOS DOS CANDIDATOS
// ============================================================

const candidatos = {

    A: {
        numero: "44444",
        nome: "Márcio Canella",
        partido: "UNIÃO",
        perfil:
            "Defesa do consumidor, saúde pública, proteção em grandes eventos, transporte intermunicipal e transição governamental.",
        foto: "assets/fotos/marciocanella.webp"
    },

    B: {
        numero: "45456",
        nome: "Léo Vieira Filho",
        partido: "PSDB",
        perfil:
            "Saúde mental infantojuvenil, capacitação profissional, assistência social e fortalecimento de iniciativas comunitárias.",
        foto: "assets/fotos/leovieira.webp"
    },

    C: {
        numero: "50123",
        nome: "Flávio Serafini",
        partido: "PSOL",
        perfil:
            "Educação, servidores públicos, cultura tradicional, água, saneamento e políticas socioambientais.",
        foto: "assets/fotos/flavioserafini.webp"
    },

    D: {
        numero: "22322",
        nome: "Índia Armelau",
        partido: "PL",
        perfil:
            "Inclusão de pessoas com deficiência, saúde pública, doação de sangue, transparência e gestão pública digital.",
        foto: "assets/fotos/indiaarmelau.webp"
    },

    E: {
        numero: "13021",
        nome: "Elika Takimoto",
        partido: "PT",
        perfil:
            "Ciência e tecnologia, segurança escolar, prevenção de desastres e políticas ambientais.",
        foto: "assets/fotos/elikatakimoto.webp"
    },

    F: {
        numero: "11500",
        nome: "Felipinho Ravis",
        partido: "PP",
        perfil:
            "Educação inclusiva, saúde da mulher, proteção contra violência vicária e políticas relacionadas aos animais domésticos.",
        foto: "assets/fotos/felipinhoravis.webp"
    }

};


// ============================================================
// QUESTÕES
// ============================================================

const perguntas = [

    {
        titulo: "Proteção ao Consumidor e Eventos de Grande Porte",

        pergunta:
            "Ao frequentar grandes shows, eventos e transporte público no estado, qual medida você considera mais importante?",

        opcoes: {

            A:
                "Exigir água gratuita, permissão de levar o próprio lanche e protocolos contra calor excessivo em shows, além de garantir que passagens de ônibus intermunicipais durem 1 ano com remarcação garantida.",

            B:
                "Apoiar projetos que reconheçam e fortaleçam instituições comunitárias locais e projetos de capacitação e acolhimento direto às famílias vulneráveis.",

            C:
                "Garantir que a água e o saneamento básico sejam reconhecidos como direitos humanos essenciais para toda a população.",

            D:
                "Isentar a tarifa de transporte público (passe livre) para pessoas com deficiência ou doenças crônicas que necessitam de tratamento.",

            E:
                "Destinar recursos arrecadados do petróleo para reforçar a infraestrutura urbana e proteger moradores contra desastres naturais.",

            F:
                "Estimular o empreendedorismo local e feiras de serviços para impulsionar a renda nas comunidades."

        }
    },


    {
        titulo: "Saúde Pública e Cuidados no SUS",

        pergunta:
            "Qual deve ser a prioridade da saúde pública estadual?",

        opcoes: {

            A:
                "Oferecer no SUS a vacina contra a Herpes Zoster (\"cobreiro\") para idosos e pessoas com baixa imunidade.",

            B:
                "Focar na prevenção, diagnóstico precoce e tratamento da depressão em crianças e adolescentes.",

            C:
                "Proteger o poder de compra e o bem-estar dos profissionais de saúde e servidores públicos.",

            D:
                "Facilitar a doação de sangue com unidades móveis (Hemóvel) em shoppings, estações e locais de grande movimento.",

            E:
                "Direcionar verbas para a prevenção de emergências climáticas e saúde ambiental preventiva.",

            F:
                "Criar uma linha de cuidado completa no SUS para a saúde da mulher na menopausa e climatério."

        }
    },


    {
        titulo: "Educação, Escolas e Inclusão",

        pergunta:
            "O que é mais urgente para melhorar as nossas escolas públicas?",

        opcoes: {

            A:
                "Estabelecer regras claras de fiscalização e punição para organizações que não garantirem a segurança do público jovem.",

            B:
                "Capacitar professores para identificar sinais de depressão e apoiar a saúde mental dos alunos.",

            C:
                "Distribuir sobras de verbas da educação (Abono FUNDEB) como prêmio salarial para os profissionais de ensino.",

            D:
                "Atualizar as regras de acessibilidade e identificação de pessoas com deficiência nas instituições.",

            E:
                "Criar um Observatório de Violência Escolar para mapear dados e incentivar meninas e mulheres nas ciências e tecnologia.",

            F:
                "Garantir salas e pausas de regulação sensorial e emocional para estudantes autistas e neurodivergentes nas escolas."

        }
    },


    {
        titulo: "Proteção da Mulher e da Família",

        pergunta:
            "No combate à violência e no apoio às mulheres, qual ação deve receber destaque?",

        opcoes: {

            A:
                "Defender a família e o consumidor com punições severas a empresas que colocam vidas em risco por ganância.",

            B:
                "Oferecer cursos de capacitação profissional e empoderamento feminino para mães e mulheres nas comunidades.",

            C:
                "Fomentar a cultura e os modos de vida tradicionais de mulheres indígenas, quilombolas e caiçaras.",

            D:
                "Proteger os dados pessoais e garantir acesso facilitado a serviços de saúde e doação de sangue sem burocracia.",

            E:
                "Oferecer bolsas de estudo e cotas de pesquisa prioritárias para mães e mulheres em situação de vulnerabilidade.",

            F:
                "Combater a \"violência vicária\", em que agressores usam os próprios filhos para causar sofrimento à mulher."

        }
    },


    {
        titulo: "Meio Ambiente, Clima e Recursos Naturais",

        pergunta:
            "Como o Estado deve lidar com enchentes e questões ambientais?",

        opcoes: {

            A:
                "Exigir planejamento preventivo para aliviar o calor extremo em eventos (jatos de água, climatizadores).",

            B:
                "Promover esportes, lazer ao ar livre e qualidade de vida para jovens e idosos.",

            C:
                "Criar o Dia da Segurança Hídrica para conscientizar a população e defender o acesso à água limpa e saneamento.",

            D:
                "Aplicar critérios de sustentabilidade e eficiência energética na gestão de imóveis e órgãos do estado.",

            E:
                "Usar o excesso de royalties do petróleo obrigatoriamente em obras de contenção de encostas e drenagem urbana.",

            F:
                "Fomentar negócios de serviços e empreendedorismo sustentável voltados ao bem-estar dos animais domésticos (pets)."

        }
    },


    {
        titulo: "Gestão Pública e Dinheiro do Contribuinte",

        pergunta:
            "Qual regra deve ser seguida para garantir um governo honesto e eficiente?",

        opcoes: {

            A:
                "Criar regras rígidas e obrigatórias de transição governamental para impedir que novos prefeitos ou governadores fiquem sem informações da gestão anterior.",

            B:
                "Fortalecer parcerias com entidades privadas e ONGs que comprovem atendimentos gratuitos à população.",

            C:
                "Rever os cálculos de aposentadoria dos servidores estaduais para não reduzir abruptamente seus benefícios após anos de trabalho.",

            D:
                "Usar o Governo Digital, a transparência e a LGPD para mapear e gerir com integridade todo o patrimônio de imóveis do Estado.",

            E:
                "Instituir o Dia da Avaliação de Políticas Públicas para analisar se o dinheiro gasto pelo governo traz resultados reais.",

            F:
                "Organizar as redes de atendimento sem criar novos cargos ou gastos burocráticos desnecessários."

        }
    },


    {
        titulo: "Cultura, Tradição e Apoio à Comunidade",

        pergunta:
            "Qual iniciativa cultural ou social você apoia mais?",

        opcoes: {

            A:
                "Garantir a valorização da advocacia e os direitos dos cidadãos nos processos administrativos estaduais.",

            B:
                "Criar projetos de incentivo ao esporte comunitário e encaminhamento para o mercado de trabalho.",

            C:
                "Garantir que pelo menos 10% do Fundo Estadual de Cultura seja destinado às manifestações de povos e comunidades tradicionais.",

            D:
                "Integrar o Estado à campanha nacional \"Junho Vermelho\" de incentivo contínuo à doação de sangue.",

            E:
                "Declarar patrimônios históricos e religiosos imateriais e valorizar o papel histórico das mulheres na sociedade.",

            F:
                "Reconhecer eventos populares tradicionais, como festas religiosas locais, como de interesse cultural e turístico."

        }
    }

];


// ============================================================
// CORRESPONDÊNCIA DAS QUESTÕES
// ============================================================
//
// Cada alternativa corresponde ao candidato cuja proposta
// ou proposição legislativa foi utilizada como referência.
//
// A = Márcio Canella
// B = Léo Vieira Filho
// C = Flávio Serafini
// D = Índia Armelau
// E = Elika Takimoto
// F = Felipinho Ravis
//
// ============================================================

const correspondencias = [

    // Q1
    {
        A: ["A"],
        B: ["B"],
        C: ["C"],
        D: ["D"],
        E: ["E"],
        F: ["F"]
    },

    // Q2
    {
        A: ["A"],
        B: ["B"],
        C: ["C"],
        D: ["D"],
        E: ["E"],
        F: ["F"]
    },

    // Q3
    {
        A: ["A"],
        B: ["B"],
        C: ["C"],
        D: ["D"],
        E: ["E"],
        F: ["F"]
    },

    // Q4
    {
        A: ["A"],
        B: ["B"],
        C: ["C"],
        D: ["D"],
        E: ["E"],
        F: ["F"]
    },

    // Q5
    {
        A: ["A"],
        B: ["B"],
        C: ["C"],
        D: ["D"],
        E: ["E"],
        F: ["F"]
    },

    // Q6
    {
        A: ["A"],
        B: ["B"],
        C: ["C"],
        D: ["D"],
        E: ["E"],
        F: ["F"]
    },

    // Q7
    {
        A: ["A"],
        B: ["B"],
        C: ["C"],
        D: ["D"],
        E: ["E"],
        F: ["F"]
    }

];


// ============================================================
// MOSTRAR CANDIDATOS
// ============================================================

function mostrarCandidatos() {

    const container =
        document.getElementById("candidatos");

    let html = "";


    // ========================================================
    // FOR...IN
    // Percorre A, B, C, D, E e F
    // ========================================================

    for (let letra in candidatos) {

        const candidato =
            candidatos[letra];


        html += `

            <article class="card-candidato">

                <img
                    src="${candidato.foto}"
                    alt="Foto de ${candidato.nome}"
                >

                <h3>
                    ${candidato.nome} — ${candidato.numero}
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
                    href="proposicoes3.html?deputado=${encodeURIComponent(candidato.nome)}"
                    class="btn principal"
                >
                    Ver proposições
                </a>

            </article>

        `;
    }


    container.innerHTML =
        html;
}


// ============================================================
// MOSTRAR PERGUNTAS
// ============================================================

function mostrarPerguntas() {

    const container =
        document.getElementById("perguntas");

    let html = "";


    perguntas.forEach(
        function(pergunta, indice) {

            html += `

                <section class="pergunta">

                    <h2>
                        ${indice + 1}.
                        ${pergunta.titulo}
                    </h2>

                    <p>
                        <strong>
                            ${pergunta.pergunta}
                        </strong>
                    </p>

            `;


            // =================================================
            // FOR...IN
            // Percorre as alternativas A-F
            // =================================================

            for (
                let letra in pergunta.opcoes
            ) {

                html += `

                    <br>

                    <label class="opcao">

                        <input
                            type="radio"
                            name="pergunta${indice}"
                            value="${letra}"
                        >

                        <span>
                            <strong>
                                [${letra}]
                            </strong>

                            ${pergunta.opcoes[letra]}
                        </span>

                    </label>

                `;
            }


            html += `

                </section>

            `;

        }
    );


    container.innerHTML =
        html;
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
        E: 0,
        F: 0

    };


    perguntas.forEach(
        function(pergunta, indice) {

            const resposta =
                document.querySelector(
                    `input[name="pergunta${indice}"]:checked`
                );


            if (resposta) {

                const alternativa =
                    resposta.value;


                const candidatosCorrespondentes =
                    correspondencias[indice][alternativa];


                // =============================================
                // FOR...OF
                // Percorre os candidatos correspondentes
                // =============================================

                for (
                    let candidato
                    of candidatosCorrespondentes
                ) {

                    pontuacao[candidato]++;

                }

            }

        }
    );


    return pontuacao;
}


// ============================================================
// MOSTRAR RESULTADO
// ============================================================

function mostrarResultado(pontuacao) {

    const resultado =
        document.getElementById("resultado");


    const maiorPontuacao =
        Math.max(
            ...Object.values(pontuacao)
        );


    // ========================================================
    // FOR...IN
    // Descobre os candidatos empatados
    // ========================================================

    const empatados = [];


    for (
        let letra in pontuacao
    ) {

        if (
            pontuacao[letra] ===
            maiorPontuacao
        ) {

            empatados.push(
                letra
            );

        }

    }


    let html = `

        <h2>
            Resultado da comparação
        </h2>

        <p>
            A pontuação abaixo representa a quantidade
            de respostas que coincidiram com as
            correspondências cadastradas para cada candidato.
        </p>

    `;


    // ========================================================
    // FOR...IN
    // Mostra todos os candidatos
    // ========================================================

    for (
        let letra in candidatos
    ) {

        const candidato =
            candidatos[letra];


        const pontos =
            pontuacao[letra];


        const percentual =
            pontos *
            (100 / perguntas.length);


        const estaNoMaior =
            empatados.includes(letra);


        const destaque =
            estaNoMaior
                ? " maior-resultado"
                : "";


        html += `

            <article
                class="resultado-candidato${destaque}"
            >

                <img
                    src="${candidato.foto}"
                    alt="Foto de ${candidato.nome}"
                >

                <div>

                    <h3>
                        ${candidato.nome}
                        — ${candidato.numero}

                        <small>
                            (${candidato.partido})
                        </small>
                    </h3>

                    <p>
                        ${candidato.perfil}
                    </p>

                    <p class="percentual">
                        ${percentual.toFixed(0)}%
                    </p>

                    <div class="barra">

                        <div
                            class="barra-preenchida"
                            style="width:${percentual}%"
                        ></div>

                    </div>

                    <p>
                        ${pontos}
                        de
                        ${perguntas.length}
                        respostas
                    </p>

                    <a
                        href="proposicoes3.html?deputado=${encodeURIComponent(candidato.nome)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn principal"
                    >
                        Ver proposições
                    </a>

                    ${
                        estaNoMaior
                        ?
                        `
                            <p>
                                <strong>
                                    Maior pontuação registrada
                                </strong>
                            </p>
                        `
                        :
                        ""
                    }

                </div>

            </article>

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


    resultado.innerHTML =
        html;


    resultado.classList.remove(
        "escondido"
    );


    resultado.scrollIntoView({
        behavior: "smooth"
    });
}


// ============================================================
// FORMULÁRIO
// ============================================================

document
    .getElementById("questionario")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // ================================================
            // VERIFICAR SE TODAS AS QUESTÕES FORAM RESPONDIDAS
            // ================================================

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


            mostrarResultado(
                pontuacao
            );

        }
    );


// ============================================================
// BOTÃO LIMPAR
// ============================================================

document
    .getElementById("limpar")
    .addEventListener(
        "click",
        function() {

            document
                .getElementById("questionario")
                .reset();


            document
                .getElementById("resultado")
                .classList.add(
                    "escondido"
                );

        }
    );


// ============================================================
// INICIALIZAÇÃO
// ============================================================

mostrarCandidatos();

mostrarPerguntas();