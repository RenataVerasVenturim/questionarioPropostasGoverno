// ============================================================
// DADOS DOS CANDIDATOS
// ============================================================

const candidatos = {

    A: {
        nome: "Eduardo Paes",
        perfil: "Gestão eficiente e pragmatismo regional",
        foto: "../assets/fotos/candidato-a.jpg",
        pdf: "../assets/propostas/candidato-a.pdf"
    },

    B: {
        nome: "Anthony Garotinho",
        perfil: "Proteção social e programas históricos",
        foto: "../assets/fotos/candidato-b.jpg",
        pdf: "../assets/propostas/candidato-b.pdf"
    },

    C: {
        nome: "Pedro Ruas",
        perfil: "Ordem pública, metas e segurança integrada",
        foto: "../assets/fotos/candidato-c.jpg",
        pdf: "../assets/propostas/candidato-c.pdf"
    },

    D: {
        nome: "WILLIAM SIRI",
        perfil: "Direitos humanos, serviços públicos diretos e justiça socioambiental",
        foto: "../assets/fotos/candidato-d.jpg",
        pdf: "../assets/propostas/candidato-d.pdf"
    }

};


// ============================================================
// PERGUNTAS
// ============================================================

const perguntas = [

    {
        titulo:
            "1. Qual deve ser a estratégia prioritária do Estado no combate ao crime organizado e à violência?",

        opcoes: {

            A:
                "Foco no patrulhamento territorial por indicadores criminais, fortalecimento das investigações financeiras contra milícias e facções, e escolha estritamente técnica dos comandantes de batalhões e delegados.",

            B:
                "Enfrentamento direto com foco em inteligência e tecnologia específica, aliado a programas de prevenção social e valorização das forças policiais.",

            C:
                "Restabelecimento da autoridade e da ordem pública por meio do Escudo Fluminense, com reconhecimento facial, drones nas divisas, scanners de carga e blitzes integradas.",

            D:
                "Modelo centrado na proteção da vida e direitos humanos, prevenção social da violência, fim das indicações políticas nas polícias e tratamento do uso de drogas como saúde pública."

        }
    },


    {
        titulo:
            "2. Como a rede estadual de saúde e as filas de atendimento devem ser organizadas?",

        opcoes: {

            A:
                "Recuperando a eficiência dos hospitais estaduais e UPAs, contratando especialistas, garantindo repasses aos municípios e humanizando o atendimento.",

            B:
                "Reorganizando a rede na Rede Fluminense de Cuidado, com fila transparente auditada, SOS Odonto / Hospital do Dente e auditoria geral.",

            C:
                "Criando os CIAMEs para consultas e exames no mesmo dia, Hospitais de Alta Resolução e mutirões permanentes de cirurgias eletivas.",

            D:
                "Reestatizando a gestão, encerrando gradualmente contratos com OSs/OSCIPs e terceirizadas, realizando concursos públicos e aplicando o mínimo constitucional de 12%."

        }
    },


    {
        titulo:
            "3. Qual o modelo educacional prioritário para o Ensino Médio e a rede estadual?",

        opcoes: {

            A:
                "Expansão do ensino médio técnico profissionalizante em tempo integral, alinhado às vocações econômicas regionais e fortalecimento da FAETEC.",

            B:
                "Implantação do Programa Geração Fluminense e Geração Tech, pagamento do piso nacional do magistério e equipes de saúde nas escolas.",

            C:
                "Programa Aprendizagem Nota 10, alfabetização na idade certa, metas de desempenho e implementação de escolas cívico-militares.",

            D:
                "Retomada dos CIEPs em tempo integral, renda de permanência escolar para inscritos no CadÚnico, laicidade do ensino religioso e unificação das carreiras."

        }
    },


    {
        titulo:
            "4. Qual deve ser a abordagem do Governo frente à vulnerabilidade social e à fome?",

        opcoes: {

            A:
                "Parceria com prefeituras para elevar o IDH e atrair empresas para gerar emprego e renda.",

            B:
                "Retomada e modernização de programas de transferência de renda e segurança alimentar, como Cheque Cidadão e Restaurantes Populares.",

            C:
                "Autonomia pelo trabalho, qualificação profissional em parceria com o Sistema S e regularização fundiária.",

            D:
                "Criação da Renda Básica Fluminense, fim da escala 6x1 nos contratos públicos e maior participação da agricultura familiar."

        }
    },


    {
        titulo:
            "5. Como o Estado deve gerir suas contas, tributos e investimentos em infraestrutura?",

        opcoes: {

            A:
                "Equilíbrio fiscal, gestão por resultados, atração de investimentos privados e expansão do BRT e da Linha 3 do Metrô.",

            B:
                "Alívio financeiro ao cidadão, redução da alíquota do IPVA e desburocratização dos serviços públicos.",

            C:
                "Gestão por metas, fiscalização rigorosa dos contratos, Meu Primeiro Emprego e segurança viária.",

            D:
                "Reestatização da CEDAE, fortalecimento dos servidores estatutários, Estado Esponja e paridade de gênero e raça no secretariado."

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
// MOSTRAR OS CANDIDATOS
// ============================================================

function mostrarCandidatos() {

    candidatosHTML.innerHTML = "";

    for (let letra in candidatos) {

        let candidato = candidatos[letra];

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
                        ${candidato.perfil}
                    </p>

                    <a
                        class="pdf"
                        href="${candidato.pdf}"
                        target_blank
                        
                    >
                        Ver proposta
                    </a>

                </div>

            </article>

        `;

    }

}


// ============================================================
// MOSTRAR AS PERGUNTAS
// ============================================================

function mostrarPerguntas() {

    perguntasHTML.innerHTML = "";


    perguntas.forEach(function(pergunta, indice) {

        let html = `

            <section class="pergunta">

                <h2>
                    ${pergunta.titulo}
                </h2>

        `;


        // FOR...IN
        // percorre A, B, C e D

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

    });

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


    perguntas.forEach(function(pergunta, indice) {

        let resposta = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );


        if (resposta) {

            let letra = resposta.value;

            pontuacao[letra]++;

            respondidas++;

        }

    });


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


    let maiorPontuacao =
        Math.max(...Object.values(pontuacao));


    let empatados = [];


    for (let letra in pontuacao) {

        if (pontuacao[letra] === maiorPontuacao) {

            empatados.push(letra);

        }

    }


    let html = `

        <h2>
            Sua comparação de alinhamento
        </h2>

        <p>
            Veja abaixo a correspondência das suas respostas
            com cada perfil de propostas.
        </p>

    `;


    // ========================================================
    // RESULTADO
    // ========================================================

    if (empatados.length > 1) {

        html += `

            <div class="empate">

                <h3>
                    Houve empate entre os maiores resultados
                </h3>

                <p>
                    O questionário encontrou a mesma pontuação
                    máxima para mais de um perfil.
                </p>

            </div>

        `;

    }


    // ========================================================
    // MOSTRAR TODOS OS RESULTADOS
    // ========================================================

    for (let letra in pontuacao) {

        let candidato =
            candidatos[letra];


        let percentual =
            (pontuacao[letra] / perguntas.length) * 100;


        let destaque = "";


        if (empatados.includes(letra)) {

            destaque = " maior-resultado";

        }


        html += `

            <article class="resultado-candidato${destaque}">

                <img
                    src="${candidato.foto}"
                    alt="Foto de ${candidato.nome}"
                >

                <div>

                    <h3>
                        ${candidato.nome}
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

                        ${pontuacao[letra]}
                        de
                        ${perguntas.length}
                        respostas

                    </p>

                    <a
                        class="pdf"
                        href="${candidato.pdf}"
                        download
                    >

                        Baixar plano de governo

                    </a>

                </div>

            </article>

        `;

    }


    resultadoHTML.innerHTML = html;


    resultadoHTML.classList.remove("escondido");


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
                "Responda todas as perguntas antes de continuar."
            );

            return;

        }


        mostrarResultado(
            resultado.pontuacao
        );

    }
);


// ============================================================
// LIMPAR QUESTIONÁRIO
// ============================================================

botaoLimpar.addEventListener(
    "click",
    function() {

        questionario.reset();


        resultadoHTML.innerHTML = "";


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