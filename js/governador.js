// ============================================================
// DADOS DOS CANDIDATOS
// ============================================================

const candidatos = {

    A: {
        numero: "55",
        nome: "Eduardo Paes",
        perfil: "Gestão eficiente e pragmatismo regional",
        foto: "assets/fotos/candidato-a.jpg",
        pdf: "assets/propostas/candidato-a.pdf"
    },

    B: {
        numero: "10",
        nome: "Anthony Garotinho",
        perfil: "Proteção social e programas históricos",
        foto: "assets/fotos/candidato-b.jpg",
        pdf: "assets/propostas/candidato-b.pdf"
    },

    C: {
        numero: "22",
        nome: "Douglas Ruas",
        perfil: "Ordem pública, metas e segurança integrada",
        foto: "assets/fotos/candidato-c.jpg",
        pdf: "assets/propostas/candidato-c.pdf"
    },

    D: {
        numero: "50",
        nome: "William Siri",
        perfil: "Direitos humanos, serviços públicos diretos e justiça socioambiental",
        foto: "assets/fotos/candidato-d.jpg",
        pdf: "assets/propostas/candidato-d.pdf"
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
            "1. Como o Estado deve agir para combater a violência e o crime organizado (milícias e tráfico)?",

        opcoes: {

            A:
                "Focar o policiamento nos bairros com mais crimes, cortar o dinheiro do crime organizado e escolher os chefes da polícia por capacidade técnica, sem indicação de políticos.",

            B:
                "Usar tecnologia de inteligência (como rastrear fuzis e criar delegacia especial anti-facção), valorizar os policiais e criar projetos sociais para afastar jovens do crime.",

            C:
                "Ocupar o território com presença policial constante, usar câmeras com reconhecimento facial, drones nas divisas, blitzes e revistas para fechar as rotas do crime.",

            D:
                "Focar na proteção da vida e nos direitos humanos, criar oportunidades sociais para a juventude negra, acabar com indicações políticas nas polícias, acabar com revistas vexatórias e tratar o uso de drogas como saúde pública."

        }
    },


    {
        titulo:
            "2. Qual é a melhor forma de melhorar os hospitais e acabar com as filas na saúde?",

        opcoes: {

            A:
                "Arrumar os hospitais estaduais e UPAs, contratar mais médicos especialistas, garantir remédios e repassar o dinheiro em dia para as prefeituras.",

            B:
                'Organizar uma fila única e transparente na internet, criar hospitais e atendimento rápido para tratamento dentário ("SOS Odonto / Hospital do Dente") e fazer uma auditoria nas contas da saúde nos primeiros 100 dias.',

            C:
                "Criar centros regionais para o paciente fazer consulta e exame no mesmo dia (CIAME), ter hospitais para resolver casos graves rápido e fazer mutirões contínuos de cirurgias.",

            D:
                "O próprio Estado administrar os hospitais diretamente (sem repassar para empresas privadas/OSs), contratar profissionais por concurso público e investir o mínimo obrigatório de 12% do orçamento na saúde."

        }
    },


    {
        titulo:
            "3. Como deve ser a escola pública de Ensino Médio no estado?",

        opcoes: {

            A:
                "Aumentar as escolas técnicas em tempo integral, ligando os cursos às profissões e indústrias de cada região do estado (fortalecendo a FAETEC).",

            B:
                "Oferecer cursos de tecnologia para os jovens (Geração Tech), pagar o piso nacional aos professores e levar atendimento de saúde e bombeiros para dentro das escolas.",

            C:
                "Garantir que as crianças aprendam a ler na idade certa, premiar escolas que cumprirem metas de ensino e implantar escolas cívico-militares (militares cuidam da disciplina e professores do ensino).",

            D:
                "Voltar com o modelo dos CIEPs em tempo integral (com cultura, esporte e 4 refeições), dar uma bolsa em dinheiro para alunos carentes não abandonarem a escola e garantir o ensino laico (sem aula de religião)."

        }
    },


    {
        titulo:
            "4. O que o governo deve fazer para ajudar quem está passando dificuldade financeira ou fome?",

        opcoes: {

            A:
                "Trabalhar junto com as prefeituras para atrair empresas, criar empregos e melhorar a estrutura das cidades.",

            B:
                "Voltar com programas práticos de ajuda direta, como o Cheque Cidadão (dinheiro na mão), Restaurantes Populares, Café do Trabalhador e Sopa da Cidadania.",

            C:
                "Dar cursos de capacitação profissional em parceria com o Sistema S para as pessoas conseguirem trabalho, além de entregar o documento de posse da casa própria para famílias vulneráveis.",

            D:
                'Criar a "Renda Básica Fluminense" com um auxílio em dinheiro permanente para os 10% mais pobres, incentivar melhores condições de trabalho e comprar no mínimo 50% da merenda escolar de pequenos agricultores.'

        }
    },


    {
        titulo:
            "5. Como o governo deve cuidar do dinheiro público, impostos e obras?",

        opcoes: {

            A:
                "Manter as contas equilibradas, atrair investimentos de empresas privadas (petróleo, gás, turismo) e fazer grandes obras de transporte, como a expansão do BRT e o metrô.",

            B:
                'Baixar impostos do cidadão (como cortar a taxa do IPVA de 4% para 2%), facilitar o pagamento de dívidas e oferecer serviços públicos no celular pelo aplicativo "Rio na Palma da Mão".',

            C:
                'Cobrar metas rígidas dos serviços públicos (ex: estradas sem buracos), criar o programa "Meu Primeiro Emprego" para jovens e investir no conserto de rodovias.',

            D:
                'O Estado voltar a controlar a água e o esgoto (reestatizar a CEDAE), contratar servidores por concurso, proteger as cidades contra enchentes ("Estado Esponja") e garantir igualdade de gênero e raça nos cargos do governo.'

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
                         ${candidato.nome}
                    </h3>

                    <p>
                        ${candidato.perfil}
                    </p>

                    <a
                        class="pdf"
                        href="${candidato.pdf}"
                        target="_blank"
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
        // Percorre A, B, C e D

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
                        ${candidato.nome} — ${candidato.numero}
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
                        target="_blank"
                    >

                        Ver plano de governo

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