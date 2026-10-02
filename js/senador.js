// ============================================================
// DADOS DOS CANDIDATOS
// ============================================================

const candidatos = {

    A: {
        numero: "131",
        nome: "Benedita da Silva",
        partido: "PT",
        perfil:
            "Foco na defesa dos direitos trabalhistas, combate à discriminação de raça e gênero, cotas na educação, apoio à cultura e fortalecimento da seguridade social.",
        foto: "assets/fotos/benedita.jpg"
    },

    B: {
        numero: "221",
        nome: "Carlos Jordy",
        partido: "PL",
        perfil:
            "Foco na neutralidade ideológica na educação, flexibilização do acesso a armas de fogo, rigor penal sem acordos em corrupção e flexibilização de modelos de trabalho.",
        foto: "assets/fotos/jordy.jpg"
    },

    C: {
        numero: "555",
        nome: "Pedro Paulo",
        partido: "PSD",
        perfil:
            "Foco em responsabilidade e renegociação fiscal com condicionantes sociais, transparência em métricas policiais e portas de saída em programas de transferência de renda.",
        foto: "assets/fotos/pedropaulo.jpg"
    },

    D: {
        numero: "222",
        nome: "Carlos Portinho",
        partido: "PL",
        perfil:
            "Foco no combate ao crime organizado no setor econômico, preservação da liberdade de expressão na internet, incentivo às Sociedades Anônimas do Futebol (SAF) e modernização de instrumentos de mercado.",
        foto: "assets/fotos/portinho.jpg"
    }

};


// ============================================================
// PERGUNTAS
// ============================================================

// ============================================================
// PERGUNTAS
// ============================================================

const perguntas = [

    {
        titulo:
            "1. Segurança Pública e Combate ao Crime",

        tema:
            "O que deve ser a principal prioridade no combate à violência?",

        opcoes: {

            A:
                "Punir com mais severidade os crimes de preconceito de raça, cor e gênero, tratando-os como crimes gravíssimos.",

            B:
                "Facilitar o direito do cidadão ter e transportar armas para se defender e proibir acordos que reduzam penas para corruptos.",

            C:
                "Obrigar as polícias a divulgarem claramente à população quantos crimes elas conseguem resolver de fato.",

            D:
                "Combater com rigor o crime organizado na economia e fazer o preso que trabalha contribuir para a Previdência (INSS)."

        }

    },


    {
        titulo:
            "2. Trabalho, Emprego e Renda",

        tema:
            "Como o governo deve cuidar dos empregos e dos direitos dos trabalhadores?",

        opcoes: {

            A:
                "Proteger trabalhadores com menos garantias, como empregados domésticos, e proibir grávidas de trabalharem em locais perigosos à saúde.",

            B:
                "Permitir que patrão e empregado combinem horários flexíveis por hora, sem precisar seguir todas as regras da carteira assinada (CLT).",

            C:
                "Exigir metas de saúde e educação das famílias do Bolsa Família para ajudá-las a conquistar independência do benefício.",

            D:
                "Criar regras para empresas darem parte de suas ações aos funcionários e dar desconto em impostos para reformar os portos do país."

        }

    },


    {
        titulo:
            "3. Educação, Cultura e Internet",

        tema:
            "Qual deve ser o papel do governo na educação, na cultura e no que as pessoas dizem na internet?",

        opcoes: {

            A:
                "Garantir cotas para negros e alunos pobres nas faculdades públicas e dar auxílio financeiro para o trabalhador acessar eventos culturais.",

            B:
                "Criar o programa \"Escola sem Partido\" para impedir que professores façam propaganda política ou ideológica em sala de aula.",

            C:
                "Exigir transparência e metas de qualidade antes de liberar dinheiro público para projetos e entidades sociais.",

            D:
                "Proteger a liberdade de expressão na internet, proibindo que postagens sejam apagadas sem decisão da Justiça, e apoiar eventos esportivos."

        }

    },


    {
        titulo:
            "4. Apoio Social e Cuidado com as Pessoas",

        tema:
            "Como o governo deve ajudar e proteger a população?",

        opcoes: {

            A:
                "Criar leis severas contra o preconceito e abrir delegacias e centros de apoio especializados para mulheres e minorias.",

            B:
                "Garantir que o governo seja neutro e fiscalize com rigor o dinheiro repassado para ONGs e associações.",

            C:
                "Pagar um valor extra no Bolsa Família para famílias que têm pessoas com deficiência.",

            D:
                "Treinar policiais e agentes de segurança para atenderem com respeito e preparo pessoas com deficiência ou autismo."

        }

    },


    {
        titulo:
            "5. Gestão do Dinheiro Público e Obras",

        tema:
            "Como o governo deve organizar as contas públicas e as melhorias nas cidades?",

        opcoes: {

            A:
                "Criar áreas protegidas para cuidar da natureza e incentivar pequenos negócios comunitários.",

            B:
                "Fiscalizar de perto todas as contas e compras do governo para evitar desperdício e corrupção.",

            C:
                "Permitir que prefeituras cobrem uma taxa para reformar áreas de comércio e cortar descontos de impostos quando o governo estiver sem dinheiro.",

            D:
                "Obrigar órgãos do governo a aceitarem pagamento por Pix e divulgar na internet de onde vem o dinheiro de cada obra."

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
    // Percorre A, B, C e D

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
            // Percorre as propriedades A, B, C e D
            // do objeto pergunta.opcoes
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

    for (let letra in pontuacao) {

        if (
            pontuacao[letra] ===
            maiorPontuacao
        ) {

            empatados.push(letra);

        }

    }


    // ========================================================
    // CABEÇALHO DO RESULTADO
    // ========================================================

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
    // RESULTADOS DOS CANDIDATOS
    // ========================================================

    // FOR...IN

    for (let letra in pontuacao) {

        let candidato =
            candidatos[letra];


        // Cada questão vale uma fração de 100%.

        let percentual =
            pontuacao[letra] *
            (100 / perguntas.length);


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

                        ${candidato.nome}— ${candidato.numero}

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


    // ========================================================
    // COLOCAR RESULTADO NO HTML
    // ========================================================

    resultadoHTML.innerHTML =
        html;


    // Remove a classe que escondia o resultado

    resultadoHTML.classList.remove(
        "escondido"
    );


    // Rola a página até o resultado

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


        // Verifica se todas as perguntas foram respondidas

        if (
            resultado.respondidas <
            perguntas.length
        ) {

            alert(
                `Responda todas as ${perguntas.length} perguntas antes de continuar.`
            );

            return;

        }


        // Mostra o resultado

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