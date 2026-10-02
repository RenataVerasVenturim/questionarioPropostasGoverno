// ============================================================
// DADOS DOS CANDIDATOS
// ============================================================

const candidatos = {

    A: {
        nome: "Benedita da Silva",
        partido: "PT",
        perfil:
            "Pauta Social, Direitos Trabalhistas, Combate à Discriminação, Cotas e Cultura.",
        foto: "assets/fotos/benedita.jpg"
    },

    B: {
        nome: "Carlos Jordy",
        partido: "PL",
        perfil:
            "Pauta Conservadora, Escola sem Partido, Segurança Pública e Defesa da Propriedade.",
        foto: "assets/fotos/jordy.jpg"
    },

    C: {
        nome: "Pedro Paulo",
        partido: "PSD",
        perfil:
            "Responsabilidade Fiscal, Meritocracia, Transparência de Dados e Eficiência Social.",
        foto: "assets/fotos/pedropaulo.jpg"
    },

    D: {
        nome: "Carlos Portinho",
        partido: "PL",
        perfil:
            "Desenvolvimento Econômico, Liberdade Digital, Combate ao Crime Organizado no Setor Privado e Inclusão.",
        foto: "assets/fotos/portinho.jpg"
    }

};


// ============================================================
// PERGUNTAS
// ============================================================

const perguntas = [

    {
        titulo:
            "1. Segurança Pública e Legislação Penal",

        tema:
            "Qual diretriz deve ser priorizada na política de segurança e combate à criminalidade?",

        opcoes: {

            A:
                "Agravar as penas e focar o combate aos crimes resultantes de preconceito de raça, cor e discriminação de gênero.",

            B:
                "Garantir garantias e prerrogativas aos agentes de segurança pública e agravar as penas para crimes cometidos com o uso de simulacro de arma de fogo.",

            C:
                "Tornar obrigatória a divulgação padronizada das taxas de elucidação de crimes pelas polícias e extinguir o benefício da saída temporária de presos (\"saidinhas\").",

            D:
                "Reprimir com rigor organizações criminosas que atuam em grandes setores da economia e coibir práticas ilícitas no setor público e privado."

        }

    },


    {
        titulo:
            "2. Educação e Ambiente Escolar",

        tema:
            "Qual deve ser a orientação do Estado em relação às escolas e ao currículo educacional?",

        opcoes: {

            A:
                "Incluir obrigatoriamente a disciplina de História e Cultura da África nos currículos e fortalecer a política de cotas raciais e sociais no ensino superior.",

            B:
                "Instituir o programa \"Escola sem Partido\" para evitar a doutrinação política e ideológica no ambiente escolar.",

            C:
                "Condicionar os investimentos e repasses públicos na educação ao atingimento de metas de desempenho, meritocracia e transparência.",

            D:
                "Proteger a liberdade de expressão e garantir a capacitação de profissionais para o acolhimento de pessoas com deficiência ou condições comportamentais incomuns."

        }

    },


    {
        titulo:
            "3. Trabalho, Renda e Relações de Emprego",

        tema:
            "Qual modelo de regulação do trabalho e emprego você defende?",

        opcoes: {

            A:
                "Ampliar a proteção ao trabalho doméstico, estender o seguro-desemprego à categoria e proibir a exigência de atestado de gravidez na contratação.",

            B:
                "Permitir regimes mais flexíveis de jornada de trabalho e defender a desocupação imediata de propriedades privadas invadidas.",

            C:
                "Criar leis de meritocracia no setor público, com acordos de resultados, e incentivar parcerias público-privadas (PPPs).",

            D:
                "Regulamentar a contratação e remuneração justa de serviços de saúde e reabilitação no modelo de atenção domiciliar (Home Care)."

        }

    },


    {
        titulo:
            "4. Transparência, Dados e Liberdade Digital",

        tema:
            "Como o governo deve atuar em relação à internet e à proteção de dados?",

        opcoes: {

            A:
                "Criar conselhos estatais com participação da sociedade civil para combater a discriminação e fiscalizar abusos contra o consumidor.",

            B:
                "Criar mecanismos de combate à intolerância ideológica e proibir a censura ou perseguição a opiniões políticas na internet.",

            C:
                "Criar a Lei de Dados Abertos e proibir expressamente a comercialização ou cessão não autorizada de dados cadastrais dos cidadãos.",

            D:
                "Atualizar o Marco Civil da Internet para assegurar o devido processo legal e proteger a liberdade de expressão em remoções de conteúdo."

        }

    },


    {
        titulo:
            "5. Programas Sociais e Assistência à População",

        tema:
            "Qual o papel das políticas sociais do Estado?",

        opcoes: {

            A:
                "Garantir assistência médica, social e habitação integral pelo Estado para famílias em situação de extrema vulnerabilidade.",

            B:
                "Permitir o redirecionamento emergencial de verbas de fundos eleitorais ou partidários para o atendimento à saúde da população.",

            C:
                "Pagar benefício adicional no Bolsa Família para famílias com membros com deficiência e criar \"portas de saída\" do programa vinculadas a metas de educação e saúde.",

            D:
                "Obrigar a capacitação contínua de agentes de segurança pública para o atendimento humanizado a pessoas com deficiência."

        }

    },


    {
        titulo:
            "6. Gestão Fiscal e Administração Pública",

        tema:
            "Qual mecanismo de gestão pública é mais adequado para a eficiência do Estado?",

        opcoes: {

            A:
                "Fortalecer a gestão pública direta e a municipalização de serviços essenciais como o SUS.",

            B:
                "Exercer controle rigoroso sobre os gastos públicos e a aplicação de verbas em campanhas e órgãos governamentais.",

            C:
                "Condicionar a renegociação de dívidas de Estados e Municípios com a União ao cumprimento de metas sociais em saúde, educação e segurança.",

            D:
                "Determinar a obrigatoriedade do recebimento via Pix por órgãos do Governo Federal e divulgar com transparência a origem dos recursos de obras públicas."

        }

    },


    {
        titulo:
            "7. Proteção à Infância, Consumidor e Aposentados",

        tema:
            "Como o Estado deve proteger os grupos mais vulneráveis?",

        opcoes: {

            A:
                "Criar legislações rigorosas de combate à exploração e à violência de gênero e de raça.",

            B:
                "Aumentar as penas para quem expõe crianças e adolescentes a eventos com conteúdo de nudez ou lascívia ou faz falsa denúncia de crimes sexuais.",

            C:
                "Obrigar empresas prestadoras de serviço público a agendarem atendimento com hora marcada e proteger produtos essenciais do consumidor.",

            D:
                "Suspender descontos e mensalidades não autorizados cobrados por associações sobre aposentadorias e pensões."

        }

    },


    {
        titulo:
            "8. Meio Ambiente, Propriedade e Uso do Solo",

        tema:
            "Qual deve ser a diretriz nacional para o meio ambiente e uso do solo?",

        opcoes: {

            A:
                "Reduzir investimentos em matrizes de alto risco, como usinas nucleares, e focar na preservação comunitária e reservas biológicas.",

            B:
                "Garantir a reintegração de posse rápida e efetiva para proprietários rurais e urbanos contra invasões.",

            C:
                "Exigir contrapartidas socioambientais claras e transparência em concessões de serviços públicos.",

            D:
                "Readequar e redefinir limites de parques nacionais para conciliar a preservação ambiental com o ecoturismo e o desenvolvimento regional."

        }

    },


    {
        titulo:
            "9. Saúde Pública e Emergências",

        tema:
            "Qual a prioridade no sistema de saúde e urgências?",

        opcoes: {

            A:
                "Estruturar e expandir os Bancos de Olhos e de tecidos humanos integrados à rede do SUS.",

            B:
                "Destinar prioritariamente recursos de fundos públicos para o combate a epidemias e emergências sanitárias.",

            C:
                "Determinar que aeronaves da Força Aérea Brasileira (FAB) deem prioridade ao transporte de órgãos para transplante sobre o transporte de autoridades.",

            D:
                "Garantir o direito à assistência de fisioterapia e terapia ocupacional no atendimento domiciliar tanto no SUS quanto no setor privado."

        }

    },


    {
        titulo:
            "10. Cultura, Memória e Identidade Nacional",

        tema:
            "Como o Estado deve valorizar a cultura e os símbolos nacionais?",

        opcoes: {

            A:
                "Instituir o Dia Nacional da Consciência Negra (20 de novembro) como feriado nacional e apoiar a produção cultural comunitária.",

            B:
                "Declarar São José de Anchieta patrono da educação brasileira e combater o patrulhamento ideológico nas artes e na cultura.",

            C:
                "Proibir a poluição visual por propaganda eleitoral em vias públicas e eventos durante grandes momentos nacionais e internacionais.",

            D:
                "Garantir incentivos e segurança jurídica para o investimento privado no mercado esportivo, de grandes eventos e de entretenimento."

        }

    }

];


// ============================================================
// ELEMENTOS DO HTML
// ============================================================

const candidatosHTML =
    document.querySelector("#candidatos");

const perguntasHTML =
    document.querySelector("#perguntas");

const questionario =
    document.querySelector("#questionario");

const resultadoHTML =
    document.querySelector("#resultado");

const botaoLimpar =
    document.querySelector("#limpar");


// ============================================================
// MOSTRAR CANDIDATOS
// ============================================================

function mostrarCandidatos() {

    candidatosHTML.innerHTML = "";

    // FOR...IN
    // Percorre A, B, C e D.

    for (let letra in candidatos) {

        let candidato =
            candidatos[letra];

        candidatosHTML.innerHTML += `

            <article class="candidato">

                <img
                    src="${candidato.foto}"
                    alt="Foto de ${candidato.nome}"
                >

                <div class="candidato-conteudo">

                    <h3>
                        ${letra} — ${candidato.nome}
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
                        href="proposicoes.html?candidato=${letra}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="pdf"
                    >
                        Ver proposições
                    </a>

                </div>

            </article>

        `;

    }

}


// ============================================================
// MOSTRAR PERGUNTAS
// ============================================================

function mostrarPerguntas() {

    perguntasHTML.innerHTML = "";


    perguntas.forEach(
        function(pergunta, indice) {

            let html = `

                <section class="pergunta">

                    <h2>
                        ${pergunta.titulo}
                    </h2>

                    <p>
                        ${pergunta.tema}
                    </p>

            `;


            // =================================================
            // FOR...IN
            // =================================================
            //
            // Percorre A, B, C e D dentro de pergunta.opcoes.
            //

            for (let letra in pergunta.opcoes) {

                html += `

                    <label class="opcao">

                        <input
                            type="radio"
                            name="pergunta${indice}"
                            value="${letra}"
                        >

                        <span class="letra">
                            ${letra})
                        </span>

                        ${pergunta.opcoes[letra]}

                    </label>

                `;

            }


            html += `

                </section>

            `;


            perguntasHTML.innerHTML += html;

        }
    );

}


// ============================================================
// CALCULAR PONTUAÇÃO
// ============================================================

function calcularPontuacao() {

    let pontuacao = {

        A: 0,
        B: 0,
        C: 0,
        D: 0

    };


    let respondidas = 0;


    perguntas.forEach(
        function(pergunta, indice) {

            let resposta =
                document.querySelector(
                    `input[name="pergunta${indice}"]:checked`
                );


            if (resposta) {

                let letra =
                    resposta.value;

                pontuacao[letra]++;

                respondidas++;

            }

        }
    );


    return {

        pontuacao: pontuacao,

        respondidas: respondidas

    };

}


// ============================================================
// MOSTRAR RESULTADO
// ============================================================

function mostrarResultado(pontuacao) {

    resultadoHTML.innerHTML = "";


    // ========================================================
    // MAIOR PONTUAÇÃO
    // ========================================================

    let maiorPontuacao =
        Math.max(
            ...Object.values(pontuacao)
        );


    // ========================================================
    // VERIFICAR EMPATE
    // ========================================================

    let empatados = [];


    // FOR...IN
    // Percorre A, B, C e D.

    for (let letra in pontuacao) {

        if (
            pontuacao[letra]
            ===
            maiorPontuacao
        ) {

            empatados.push(letra);

        }

    }


    let html = `

        <h2>
            Seu alinhamento com as alternativas
        </h2>

        <p>
            O resultado representa uma comparação matemática
            entre suas respostas e as alternativas apresentadas
            no questionário.
        </p>

    `;


    // ========================================================
    // EMPATE
    // ========================================================

    if (empatados.length > 1) {

        html += `

            <div class="empate">

                <h3>
                    Houve empate entre os maiores resultados
                </h3>

                <p>
                    Mais de uma alternativa apresentou a mesma
                    pontuação máxima.
                </p>

            </div>

        `;

    }


    // ========================================================
    // RESULTADOS
    // ========================================================

    // FOR...IN
    // Percorre os candidatos A, B, C e D.

    for (let letra in pontuacao) {

        let candidato =
            candidatos[letra];


        // Cada questão vale 10%.
        //
        // Como são 10 questões:
        //
        // 1 resposta = 10%
        // 2 respostas = 20%
        // 3 respostas = 30%
        // ...
        // 10 respostas = 100%

        let percentual =
            pontuacao[letra] * 10;


        let destaque = "";


        if (
            empatados.includes(letra)
        ) {

            destaque =
                " maior-resultado";

        }


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

                        <small>
                            (${candidato.partido})
                        </small>

                    </h3>

                    <p>
                        ${candidato.perfil}
                    </p>

                    <p class="percentual">

                        ${percentual}%

                    </p>

                    <div class="barra">

                        <div
                            class="barra-preenchida"
                            style="width:${percentual}%"
                        ></div>

                    </div>

                    <p>

                        ${pontuacao[letra]}
                        de
                        ${perguntas.length}
                        respostas

                    </p>

                </div>

            </article>

        `;

    }


    resultadoHTML.innerHTML =
        html;


    resultadoHTML.classList.remove(
        "escondido"
    );


    resultadoHTML.scrollIntoView({

        behavior: "smooth"

    });

}


// ============================================================
// SUBMIT DO QUESTIONÁRIO
// ============================================================

questionario.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        let resultado =
            calcularPontuacao();


        if (
            resultado.respondidas
            <
            perguntas.length
        ) {

            alert(
                "Responda todas as 10 perguntas antes de continuar."
            );

            return;

        }


        mostrarResultado(
            resultado.pontuacao
        );

    }
);


// ============================================================
// BOTÃO LIMPAR
// ============================================================

botaoLimpar.addEventListener(
    "click",
    function() {

        questionario.reset();


        resultadoHTML.innerHTML =
            "";


        resultadoHTML.classList.add(
            "escondido"
        );


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ============================================================
// INICIALIZAÇÃO
// ============================================================

mostrarCandidatos();

mostrarPerguntas();