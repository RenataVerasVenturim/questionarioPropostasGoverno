const candidatos = {

    A: {
        nome: "Lula (PT)",
        vice: "Geraldo Alckmin (PSB)",
        perfil: "Desenvolvimento econômico, políticas sociais e atuação do Estado",
        foto: "assets/fotos/lula.png",
        pdf: "assets/propostas/proposta-pt-lula.pdf"
    },

    B: {
        nome: "Romeu Zema (NOVO)",
        vice: "Eduardo Girão (NOVO)",
        perfil: "Responsabilidade fiscal, redução do Estado e liberdade econômica",
        foto: "assets/fotos/zema.png",
        pdf: "assets/propostas/proposta-novo-zema.pdf"
    },

    C: {
        nome: "Flávio Bolsonaro (PL)",
        vice: "Alfredo Gaspar (PL)",
        perfil: "Segurança pública, redução de impostos e valores conservadores",
        foto: "assets/fotos/flaviobolsonaro.png",
        pdf: "assets/propostas/proposta-pl-flaviobolsonaro.pdf"
    },

    D: {
        nome: "Ronaldo Caiado (PSD)",
        vice: "Gilberto Kassab (PSD)",
        perfil: "Responsabilidade fiscal, gestão pública e segurança",
        foto: "assets/fotos/ronaldocaiado.png",
        pdf: "assets/propostas/proposta-psd-ronaldocaiado.pdf"
    },

    E: {
        nome: "Renan Santos (Missão)",
        vice: "Coronel Medina",
        perfil: "Transformação institucional, segurança e reformas estruturais",
        foto: "assets/fotos/renansantos.png",
        pdf: "assets/propostas/proposta-missao-renansantos.pdf"
    },

    F: {
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

const perguntas = [

    {
        eixo: "Economia, Impostos e Papel do Estado",

        titulo: "Qual visão melhor representa o modelo econômico que o Brasil deve adotar?",

        opcoes: {

            A: "O Estado deve atuar como indutor do desenvolvimento sustentável, promovendo reindustrialização com transição ecológica, tributando super-ricos e fundos exclusivos para isentar a renda dos mais pobres, mantendo um arcabouço fiscal flexível que preserva os pisos sociais.",

            B: "O governo deve realizar um choque fiscal rigoroso, enxugar a máquina, privatizar todas as empresas estatais, focar em parcerias público-privadas (PPPs) em todos os setores e cortar o IRPJ das empresas para atrair investimentos.",

            C: "É preciso promover um \"Tesouraço\" nos gastos públicos, cortar no mínimo 10 ministérios, revisar a reforma tributária para reduzir o IVA e priorizar a liberdade de mercado, a propriedade privada e a redução da carga fiscal sobre famílias e empresas.",

            D: "A prioridade é a estabilização fiscal plurianual, fazendo as despesas obrigatórias crescerem abaixo do PIB nominal, eliminando privilégios e subsídios ineficientes sem aumentar impostos e mantendo a autonomia do Banco Central.",

            E: "É necessária uma transformação sistêmica radical por meio de uma PEC de Transição, com Zonas Econômicas Especiais (ZEEs) com desburocratização em 15 dias e um plano regional de desdolarização na América do Sul.",

            F: "O país deve adotar um \"Capitalismo Humanizado\", que combine liberdade econômica, simplificação tributária e responsabilidade fiscal com proteção social aos vulneráveis e criação de 10 mil Escolas de Empreendedorismo."

        }
    },


    {
        eixo: "Segurança Pública e Combate ao Crime Organizado",

        titulo: "Como o Estado deve enfrentar as facções criminosas e a violência urbana?",

        opcoes: {

            A: "Com coordenação federativa via PEC da Segurança Pública, fortalecimento do Sistema Único de Segurança Pública (SUSP), inteligência financeira para asfixiar o crime, controle de armas e uso de câmeras corporais em policiais.",

            B: "Concedendo autonomia para que os estados definam seus próprios crimes e penas, classificando facções como organizações terroristas e garantindo proteção legal e retaguarda jurídica para policiais no enfrentamento armado.",

            C: "Declarando facções como narcoterroristas (\"bandido armado com fuzil é abatido\"), reduzindo a maioridade penal de 18 para 16 anos, aplicando castração química para estupradores, construindo o Complexo Federal de Segurança Máxima TREVA e implantando o sistema de inteligência \"Muralha Brasileira\".",

            D: "Com a Presidência assumindo o comando direto da segurança pública, isolando líderes criminosos no Regime Especial Disciplinar Antiterrorismo (REDAD), promovendo cooperação policial sul-americana (SULPOL) e confiscando bens do crime para restituir as vítimas.",

            E: "Adotando de imediato a doutrina do \"Direito Penal do Inimigo\" (DPI) e a diretriz \"Prendeu, Matou\", com Estado de Defesa em áreas dominadas e isolamento estilo CECOT salvadorenho.",

            F: "Recriando o Ministério da Segurança Pública e implementando o Projeto FATO (Força de Alerta Total), com uso massivo de Inteligência Artificial e criação da Guarda Municipal FOCO com 5% do efetivo das cidades."

        }
    },


    {
        eixo: "Assistência Social e Combate à Pobreza",

        titulo: "Qual a diretriz ideal para os programas de transferência de renda e auxílio social?",

        opcoes: {

            A: "Expandir e fortalecer o Bolsa Família e o SUAS como direitos permanentes, garantindo também a política de valorização do salário mínimo com ganho real acima da inflação.",

            B: "Reestruturar o auxílio através das Casas da Cidadania, estabelecendo um Plano de Desenvolvimento Social familiar individualizado com foco obrigatório na inserção no mercado de trabalho.",

            C: "Manter o apoio social como ponto de partida, construindo uma trilha de emancipação pela qualificação profissional, crédito acessível e formação de patrimônio para a autonomia da família.",

            D: "Unificar os cadastros no Sistema Nacional de Gestão Social Integrada, criando regras de transição suave em que o benefício cai gradualmente conforme a renda formal aumenta.",

            E: "Substituir gradualmente o formato assistencialista tradicional pelas Frentes Cidadãs, exigindo participação dos beneficiários em frentes de trabalho para prestação de serviços públicos comunitários.",

            F: "Valorizar o Bolsa Família como instrumento temporário contra a pobreza extrema e fomentar cooperativas de consumo e habitação para reduzir o custo de vida das famílias."

        }
    },


    {
        eixo: "Gestão Pública, Política e Reformas Institucionais",

        titulo: "De que forma a administração pública e o sistema político devem ser geridos?",

        opcoes: {

            A: "Com gestão democrática e participativa, realização de concursos públicos unificados e fortalecimento das instâncias de controle social e diálogo com movimentos civis.",

            B: "Eliminando a possibilidade de sigilos de 100 anos, divulgando notas fiscais e dados abertos em tempo real e incentivando a união progressiva de pequenos municípios sem sustentação financeira.",

            C: "Realizando cortes drásticos em despesas administrativas e cargos comissionados, profissionalizando gestões de estatais e assegurando maior transparência e rastreabilidade nas emendas parlamentares.",

            D: "Encaminhando no primeiro dia de mandato uma Proposta de Emenda à Constituição (PEC) para extinguir a reeleição no Executivo e contratando gestores públicos com metas e indicadores objetivos.",

            E: "Instituindo a Lei de Responsabilidade Gerencial, que condiciona verbas de fundos partidários, emendas e a elegibilidade de políticos a metas objetivas de desempenho em saúde, educação e emprego.",

            F: "Criando o programa Sociedade Está de Olho (SEO), que utiliza Inteligência Artificial e controle social ativo para auditar gastos e licitações em todos os órgãos públicos."

        }
    },


    {
        eixo: "Educação e Saúde Pública",

        titulo: "Qual estratégia deve guiar os investimentos em saúde e educação?",

        opcoes: {

            A: "Consolidação do SUS 100% público com o programa \"Agora tem Especialistas\", expansão da educação em tempo integral e ampliação do programa Pé-de-Meia contra a evasão escolar.",

            B: "Ampliação de parcerias público-privadas (PPPs) tanto na gestão de escolas quanto em unidades de saúde e hospitais públicos, integrando o esporte preventivo à saúde.",

            C: "Implementação do Voucher-Creche e Voucher Educacional para suprir a falta de vagas na rede pública, além da criação do prontuário eletrônico único no SUS Digital.",

            D: "Foco na alfabetização e matemática até o final do 2º ano do ensino fundamental, com regulação transparente de filas na saúde com base no risco clínico do paciente.",

            E: "Priorização total da educação básica sobre a superior, substituição do sistema de cotas por bolsas de estudo por mérito e uso de assistentes virtuais de IA (modelo \"DoctorSV\") na triagem da saúde.",

            F: "Implementação do método pedagógico SOFT (Escola de Pensadores), criação da Telessaúde Brasil para desafogar o SUS e programas nacionais permanentes de saúde mental e gestão emocional."

        }
    },


    {
        eixo: "Proteção Social, Mulheres e Valores",

        titulo: "Qual a prioridade nas políticas transversais e direitos individuais?",

        opcoes: {

            A: "Enfrentamento estrutural ao racismo e à desigualdade de gênero, promoção de direitos de populações vulneráveis e valorização da diversidade cultural e das periferias.",

            B: "Autonomia econômica da mulher pelo estímulo ao empreendedorismo, com planos individualizados de desenvolvimento familiar e apoio continuado a idosos.",

            C: "Defesa intransigente da família, da vida desde a concepção e da liberdade religiosa, implementando o programa \"Brasil por Elas\" com a assistente virtual ClarIA e monitoramento eletrônico de agressores.",

            D: "Criação da Secretaria Nacional da Segurança da Mulher, patrulhas Maria da Penha, perda total dos bens de feminicidas para indenizar as vítimas e prioridade absoluta à infância.",

            E: "Foco na retomada da ordem institucional, proteção territorial das famílias e substituição do assistencialismo pela disciplina e mérito individual.",

            F: "Projeto \"Mulheres Vivas\" contra o feminicídio e focado no fortalecimento da autoestima feminina, combate à \"tirania da beleza\" nas redes sociais e proteção ativa da infância contra predadores digitais."

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
                        ${candidato.nome}
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