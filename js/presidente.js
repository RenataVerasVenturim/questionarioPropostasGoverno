const candidatos = {

    A: {
        numero: "13",
        nome: "Lula (PT)",
        vice: "Geraldo Alckmin (PSB)",
        perfil: "Desenvolvimento econômico, políticas sociais e atuação do Estado",
        foto: "assets/fotos/lula.png",
        pdf: "assets/propostas/proposta-pt-lula.pdf"
    },

    B: {
        numero: "30",
        nome: "Romeu Zema (NOVO)",
        vice: "Eduardo Girão (NOVO)",
        perfil: "Responsabilidade fiscal, redução do Estado e liberdade econômica",
        foto: "assets/fotos/zema.png",
        pdf: "assets/propostas/proposta-novo-zema.pdf"
    },

    C: {
        numero: "22",
        nome: "Flávio Bolsonaro (PL)",
        vice: "Alfredo Gaspar (PL)",
        perfil: "Segurança pública, redução de impostos e valores conservadores",
        foto: "assets/fotos/flaviobolsonaro.png",
        pdf: "assets/propostas/proposta-pl-flaviobolsonaro.pdf"
    },

    D: {
        numero: "55",
        nome: "Ronaldo Caiado (PSD)",
        vice: "Gilberto Kassab (PSD)",
        perfil: "Responsabilidade fiscal, gestão pública e segurança",
        foto: "assets/fotos/ronaldocaiado.png",
        pdf: "assets/propostas/proposta-psd-ronaldocaiado.pdf"
    },

    E: {
        numero: "14",
        nome: "Renan Santos (Missão)",
        vice: "Coronel Medina",
        perfil: "Transformação institucional, segurança e reformas estruturais",
        foto: "assets/fotos/renansantos.png",
        pdf: "assets/propostas/proposta-missao-renansantos.pdf"
    },

    F: {
        numero: "70",
        nome: "Augusto Cury (Avante)",
        vice: "Júlio Delgado (Avante)",
        perfil: "Educação, empreendedorismo e desenvolvimento humano",
        foto: "assets/fotos/augustocury.png",
        pdf: "assets/propostas/proposta-avante-augustocury.pdf"
    }

};


// ======================================================
// ELEMENTOS DO HTML
// ======================================================

const candidatosHTML = document.getElementById("candidatos");

const perguntasHTML = document.getElementById("perguntas");

const formulario = document.getElementById("questionario");

const resultado = document.getElementById("resultado");

const botaoLimpar = document.getElementById("limpar");


// ======================================================
// MOSTRAR CANDIDATOS
// ======================================================

for (let letra in candidatos) {

    let candidato = candidatos[letra];

    candidatosHTML.innerHTML += `

        <article class="candidato">

            <img 
                src="${candidato.foto}" 
                alt="Foto de ${candidato.nome}"
            >

            <h3>
                ${candidato.nome} 
            </h3>

            <p>
                <strong>Vice:</strong> ${candidato.vice}
            </p>

            <p>
                ${candidato.perfil}
            </p>

            <a 
                href="${candidato.pdf}" 
                target="_blank"
            >
                Ver proposta (PDF)
            </a>

        </article>

    `;

}


// ======================================================
// PERGUNTAS
// ======================================================

// ======================================================
// PERGUNTAS
// ======================================================

const perguntas = [

    {
        eixo: "Economia e Dinheiro Público",

        titulo:
            "Como o governo deve lidar com o dinheiro, impostos e empresas?",

        opcoes: {

            A:
                "O governo deve usar o dinheiro público para gerar empregos e criar indústrias ecológicas, cobrar mais impostos dos muito ricos para dar desconto aos mais pobres, e investir nos serviços básicos.",

            B:
                "O governo deve gastar o mínimo possível, vender todas as empresas estatais para empresários, cortar impostos das empresas e deixar o mercado funcionar com total liberdade.",

            C:
                "O governo deve cortar gastos com a própria máquina (fechar ministérios), diminuir impostos das famílias e das compras do dia a dia, e garantir a liberdade do comércio sem interferência do Estado.",

            D:
                "O governo deve organizar as contas com regras rígidas para a dívida do país não crescer, tirar privilégios e auxílios desnecessários, sem criar novos impostos e mantendo a inflação baixa.",

            E:
                "O governo precisa fazer uma reforma radical e imediata nas contas públicas, aprovar abertura de novos negócios em até 15 dias e diminuir a dependência do dólar.",

            F:
                "O país deve unir o livre mercado com o cuidado humano: facilitar a vida de quem abre empresas e gera empregos, mas garantindo ajuda aos mais pobres e ensinando empreendedorismo nas comunidades."

        }
    },


    {
        eixo: "Segurança Pública e Combate ao Crime",

        titulo:
            "Qual a melhor forma de combater a violência e as facções criminosas?",

        opcoes: {

            A:
                "O governo federal deve trabalhar junto com estados e municípios, usar inteligência para cortar o dinheiro do crime organizado, controlar armas e exigir câmeras no uniforme dos policiais.",

            B:
                "Cada estado deve ter liberdade para criar suas próprias leis e punições, tratar facções como grupos terroristas e dar total apoio e proteção jurídica aos policiais em serviço.",

            C:
                'Tratar criminosos armados com fuzil com tolerância zero ("fuzilou, é abatido"), reduzir a idade penal de 18 para 16 anos, dar penas bem mais duras e criar presídios de máxima segurança.',

            D:
                "O Presidente da República deve liderar a segurança pessoalmente, isolar chefes de facções em presídios duríssimos sem contato externo, tomar os bens dos criminosos e devolver o dinheiro às vítimas.",

            E:
                "Adotar regras rigorosas contra o crime organizado (tratar o criminoso como inimigo da sociedade), com ações diretas nas áreas dominadas e isolamento severo em presídios de segurança máxima.",

            F:
                "Usar tecnologia de ponta, inteligência artificial e câmeras integradas para prever e evitar que os crimes aconteçam, além de criar turmas de segurança comunitária nas cidades."

        }
    },


    {
        eixo: "Ajuda Social e Combate à Pobreza",

        titulo:
            "Como devem funcionar os auxílios financeiros do governo para quem precisa?",

        opcoes: {

            A:
                "Manter o Bolsa Família como um direito permanente e garantir que o salário mínimo aumente todo ano acima da inflação.",

            B:
                "Reorganizar os auxílios dando um plano individual para cada família, cobrando que a pessoa faça cursos e busque um emprego para deixar de depender do benefício.",

            C:
                "Garantir a ajuda financeira de início, mas dar cursos de capacitação, crédito para pequenos negócios e oportunidades para que a família consiga andar com as próprias pernas.",

            D:
                "Juntar todos os cadastros em um sistema único sem fraudes e fazer com que a pessoa não perca o auxílio de vez assim que conseguir um trabalho com carteira assinada, reduzindo o valor aos poucos.",

            E:
                "Exigir que quem recebe o benefício do governo participe de frentes de trabalho para prestar serviços comunitários à sua cidade em troca do apoio.",

            F:
                "Apoiar o Bolsa Família, mas ajudar as pessoas a criarem pequenos negócios ou cooperativas (de compras de alimentos e moradia) para diminuir o custo de vida no bairro."

        }
    },


    {
        eixo: "Transparência e Gestão do Governo",

        titulo:
            "Como os políticos e os órgãos públicos devem ser controlados e geridos?",

        opcoes: {

            A:
                "Fazer um governo transparente e participativo, contratando funcionários por concursos públicos e conversando com a sociedade e movimentos sociais.",

            B:
                "Acabar com o sigilo de 100 anos em documentos governamentais, mostrar todas as contas e notas fiscais na internet e incentivar cidades muito pequenas a se unirem para economizar dinheiro.",

            C:
                "Cortar cargos indicados por políticos, enxugar a quantidade de ministérios e dar total transparência para mostrar para onde vai o dinheiro das emendas dos deputados.",

            D:
                "Criar uma lei para proibir que presidentes sejam reeleitos e contratar diretores do governo cobrando metas claras de trabalho e resultados reais.",

            E:
                "Punir políticos e cortar verbas de partidos ou governantes que não atingirem metas reais de melhoria na saúde, na educação e na geração de empregos.",

            F:
                "Usar inteligência artificial e a ajuda direta dos cidadãos para vigiar cada centavo do dinheiro público e identificar fraudes em compras e obras do governo."

        }
    },


    {
        eixo: "Saúde e Educação",

        titulo:
            "O que deve ser prioridade nas escolas e postos de saúde?",

        opcoes: {

            A:
                "Fortalecer o SUS 100% público trazendo mais médicos especialistas, ampliar as escolas de tempo integral e pagar um incentivo financeiro para o estudante não largar a escola (Pé-de-Meia).",

            B:
                "Fazer parcerias com a iniciativa privada para gerenciar creches, escolas e hospitais públicos, buscando melhorar a qualidade e agilizar o atendimento.",

            C:
                "Dar cupons/vouchers para a família matricular o filho em creche ou escola particular se faltar vaga no setor público, e criar o histórico médico digital único no SUS.",

            D:
                "Garantir que toda criança saiba ler, escrever e fazer contas até os 7 anos (fim do 2º ano), e organizar a fila de exames do SUS de acordo com a gravidade de saúde do paciente.",

            E:
                "Focar o dinheiro da educação nas crianças e no ensino básico em vez das faculdades, e usar assistentes virtuais de inteligência artificial no atendimento da saúde.",

            F:
                "Ensinar inteligência e saúde emocional nas escolas para evitar ansiedade e bullying, e usar consultas por videochamada (telessaúde) para acabar com as filas dos postos."

        }
    },


    {
        eixo: "Proteção Social e Valores",

        titulo:
            "Quais políticas devem ser prioritárias para proteger as pessoas no dia a dia?",

        opcoes: {

            A:
                "Combater o preconceito de raça e gênero, proteger os grupos mais vulneráveis e apoiar a diversidade cultural e o desenvolvimento das periferias.",

            B:
                "Ajudar a mulher a conquistar sua independência financeira pelo empreendedorismo e apoiar a família em todas as fases da vida.",

            C:
                "Defender a família tradicional, a vida desde o início da gravidez e a liberdade religiosa, monitorando agressores de mulheres com tornozeleira eletrônica.",

            D:
                "Criar uma secretaria nacional focada na segurança da mulher, patrulhar bairros contra a violência doméstica e tirar os bens do agressor para indenizar a vítima.",

            E:
                "Focar no respeito às regras, na disciplina individual, no mérito próprio e na proteção das famílias contra o crime e a desordem.",

            F:
                "Proteger as mulheres contra o feminicídio com aplicativo de alerta e apoio psicológico, além de combater a pressão das redes sociais sobre a imagem e autoestima das jovens."

        }
    }

];


// ======================================================
// MOSTRAR PERGUNTAS
// ======================================================

for (let indice in perguntas) {

    let pergunta = perguntas[indice];

    perguntasHTML.innerHTML += `

        <section class="pergunta">

            <p class="eixo">
                ${pergunta.eixo}
            </p>

            <h2>
                ${Number(indice) + 1}. ${pergunta.titulo}
            </h2>

    `;


    for (let letra in pergunta.opcoes) {

        perguntasHTML.innerHTML += `

            <label class="opcao">

                <input
                    type="radio"
                    name="pergunta${indice}"
                    value="${letra}"
                >

                <strong>
                    ${letra})
                </strong>

                <span>
                    ${pergunta.opcoes[letra]}
                </span>

            </label>

        `;

    }


    perguntasHTML.innerHTML += `

        </section>

    `;

}


// ======================================================
// CALCULAR COMPARAÇÃO
// ======================================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    let pontuacao = {

        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0

    };


    let respondidas = 0;


    for (let indice in perguntas) {

        let resposta = document.querySelector(
            `input[name="pergunta${indice}"]:checked`
        );


        if (resposta) {

            pontuacao[resposta.value]++;

            respondidas++;

        }

    }


    if (respondidas < perguntas.length) {

        alert(
            "Responda todas as perguntas antes de visualizar a comparação."
        );

        return;

    }


    // ==================================================
    // MOSTRAR RESULTADO
    // ==================================================

    resultado.innerHTML = `

        <h2>
            Comparação com os planos
        </h2>

        <p>
            A porcentagem representa a correspondência matemática
            entre as alternativas selecionadas e cada plano cadastrado.
        </p>

        <div class="resultados-candidatos"></div>

    `;


    let resultadosHTML =
        resultado.querySelector(".resultados-candidatos");


    for (let letra in candidatos) {

        let candidato = candidatos[letra];

        let percentual =
            (pontuacao[letra] / perguntas.length) * 100;


        resultadosHTML.innerHTML += `

            <article class="resultado-candidato">

                <img
                    src="${candidato.foto}"
                    alt="Foto de ${candidato.nome}"
                >

                <div>

                    <h3>
                        ${candidato.nome}— ${candidato.numero}
                    </h3>

                    <p>
                        Correspondência:
                        <strong>
                            ${percentual.toFixed(1)}%
                        </strong>
                    </p>

                    <a
                        href="${candidato.pdf}"
                        target="_blank"
                    >
                        Consultar proposta
                    </a>

                </div>

            </article>

        `;

    }


    resultado.classList.remove("escondido");

});


// ======================================================
// LIMPAR QUESTIONÁRIO
// ======================================================

botaoLimpar.addEventListener("click", function () {

    formulario.reset();

    resultado.innerHTML = "";

    resultado.classList.add("escondido");

});