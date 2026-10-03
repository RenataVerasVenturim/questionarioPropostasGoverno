// ============================================================
// DADOS DOS CANDIDATOS
// ============================================================

const candidatos = {

    A: {
        numero: "131",
        nome: "Benedita da Silva",
        partido: "PT",
        perfil:
            "Pauta Social-Trabalhista / Cotas Raciais, Igualdade Étnica e SUS",
        foto: "assets/fotos/benedita.jpg"
    },

    B: {
        numero: "221",
        nome: "Carlos Jordy",
        partido: "PL",
        perfil:
            "Pauta Conservadora / Garantia da Propriedade Privada e Liberdade de Expressão",
        foto: "assets/fotos/jordy.jpg"
    },

    C: {
        numero: "555",
        nome: "Pedro Paulo",
        partido: "PSD",
        perfil:
            "Pauta Liberal-Social / Responsabilidade Fiscal com Metas Sociais, Defesa do Contribuinte e Porta de Saída de Auxílios",
        foto: "assets/fotos/pedropaulo.jpg"
    },

    D: {
        numero: "222",
        nome: "Carlos Portinho",
        partido: "PL",
        perfil:
            "Pauta Liberal-Econômica e Liberdades Digitais / Combate a Crimes Econômicos, PIX no Setor Público e Marco Civil da Internet",
        foto: "assets/fotos/portinho.jpg"
    },

    E: {
        numero: "500",
        nome: "Monica Benicio",
        partido: "PSOL",
        perfil:
            "Pauta Progressista Urbana / Direitos Humanos, Gênero e Diversidade",
        foto: "assets/fotos/monicabenicio.jpg"
    }

};


// ============================================================
// PERGUNTAS
// ============================================================

const perguntas = [

    {
        titulo:
            "1. Segurança Pública",

        tema:
            "Qual deve ser a principal prioridade na segurança pública?",

        opcoes: {

            A:
                "Garantir os direitos das pessoas, usar câmeras nos uniformes dos policiais, criar canais para receber reclamações e melhorar o atendimento policial especializado.",

            B:
                "Proteger o direito à propriedade, retirar rapidamente pessoas que ocupem propriedades ilegalmente e garantir melhores condições de trabalho para os policiais.",

            C:
                "Divulgar quantos crimes são solucionados pela polícia e permitir que os municípios tenham uma atuação maior na segurança pública.",

            D:
                "Combater fortemente organizações criminosas que movimentam grandes setores da economia e preparar policiais para atender pessoas com deficiência.",

            E:
                "Combater a violência contra mulheres e pessoas de diferentes grupos, evitar abordagens policiais violentas e fiscalizar a atuação das forças de segurança."

        }

    },


    {
        titulo:
            "2. Transporte e Serviços Públicos",

        tema:
            "Qual deve ser a prioridade nos transportes públicos?",

        opcoes: {

            A:
                "Usar parte dos impostos para diminuir o preço das passagens e oferecer transporte gratuito para idosos e estudantes de baixa renda.",

            B:
                "Exigir que as empresas de transporte cumpram seus contratos, combater fraudes e evitar interferências desnecessárias do governo na economia.",

            C:
                "Dar benefícios às empresas somente quando elas cumprirem metas de melhoria do transporte, das ruas e da infraestrutura.",

            D:
                "Permitir o pagamento por PIX nos serviços públicos federais e mostrar claramente de onde vem o dinheiro usado nas obras públicas.",

            E:
                "Criar o programa Tarifa Zero, oferecendo transporte público gratuito nos municípios."

        }

    },


    {
        titulo:
            "3. Trabalho e Emprego",

        tema:
            "Como devem ser protegidos os direitos dos trabalhadores?",

        opcoes: {

            A:
                "Garantir os mesmos direitos trabalhistas para empregadas domésticas, regulamentar a profissão de cuidador de idosos e estabelecer salários mínimos para essas profissões.",

            B:
                "Dar mais liberdade para empresas e trabalhadores fazerem seus acordos, simplificar as regras e diminuir a interferência do governo nos contratos.",

            C:
                "Atualizar as leis trabalhistas para incluir formas de trabalho como o home office e criar regras de transparência nas relações de trabalho.",

            D:
                "Dar mais segurança aos contratos entre empresas e trabalhadores, facilitar a inovação e diminuir a burocracia para as empresas.",

            E:
                "Criar licença menstrual, garantir salários iguais para homens e mulheres e proteger trabalhadores de condições de calor extremo."

        }

    },


    {
        titulo:
            "4. Programas Sociais e Desigualdade",

        tema:
            "Qual deve ser a prioridade dos programas sociais?",

        opcoes: {

            A:
                "Ampliar as cotas para pessoas negras e de baixa renda nas universidades e garantir recursos permanentes para os serviços de assistência social.",

            B:
                "Concentrar os programas sociais nas pessoas em situação de extrema pobreza e não usar cotas ou critérios baseados em grupos sociais.",

            C:
                "Criar um bônus para famílias que recebem o Bolsa Família quando elas atingirem metas de saúde e educação, ajudando-as a melhorar de vida.",

            D:
                "Criar políticas que unam desenvolvimento econômico, melhoria dos serviços públicos, proteção social e defesa dos consumidores.",

            E:
                "Criar políticas específicas para mulheres e pessoas LGBTQIA+, incluindo vagas em creches e moradia para vítimas de violência."

        }

    },


    {
        titulo:
            "5. Impostos e Gastos Públicos",

        tema:
            "Como devem ser cobrados os impostos e administrado o dinheiro público?",

        opcoes: {

            A:
                "Fazer quem ganha mais pagar proporcionalmente mais impostos, criar um imposto sobre grandes fortunas e reduzir impostos sobre itens básicos e a agricultura familiar.",

            B:
                "Reduzir gastos públicos, simplificar os impostos e controlar o crescimento das dívidas do governo.",

            C:
                "Renegociar as dívidas dos estados e municípios com o governo federal, mas exigir metas para melhorar a saúde e a educação, além de proteger os direitos dos contribuintes.",

            D:
                "Combater fraudes e outras práticas ilegais e reduzir o desperdício de dinheiro nas empresas públicas.",

            E:
                "Criar um orçamento específico para políticas voltadas às mulheres e cobrar mais impostos sobre grandes fortunas."

        }

    },


    {
        titulo:
            "6. Liberdade de Expressão e Internet",

        tema:
            "Como devem ser tratadas a liberdade de expressão e as redes sociais?",

        opcoes: {

            A:
                "Aumentar a presença de diferentes grupos raciais na televisão, no cinema e em outras produções culturais e apoiar projetos culturais.",

            B:
                "Impedir que as plataformas retirem conteúdos dos usuários sem uma decisão judicial e apoiar o programa Escola sem Partido.",

            C:
                "Criar regras para os jogos e apostas e aumentar a proteção contra golpes financeiros e crimes digitais contra pessoas vulneráveis.",

            D:
                "Garantir a liberdade de expressão e assegurar que qualquer medida judicial contra conteúdos na internet siga regras claras e o direito de defesa.",

            E:
                "Combater discursos de ódio e ataques contra mulheres nas redes sociais e na internet."

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
    // Percorre A, B, C, D e E

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
            // Percorre as propriedades A, B, C, D e E
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
        D: 0,
        E: 0

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
                    <a
                    
                        href="proposicoes.html?candidato=${letra}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="pdf"
                    >
                        Ver proposições
                    </a>

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
