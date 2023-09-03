function Language(idioma_janela) {

    const idiomas = {
        pt: {
            titulo_pagina: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método Moser (1996)",
            li_titulo: "SELECIONE O MÉTODO",
            paragrafo_explicacao: ""
                + "O método de Moser (1996) para a seleção de acesso a minas subterrâneas foi desenvolvido a partir da análise de dados de várias minas de 'rochas duras' (hard rock) em escala global."
                + "<br><br><strong>Observações:</strong><br>"
                + "- Moser não analisou minas de rochas brandas (soft rock) para a elaboração de seu modelo.<br>"
                + "- O método de Moser não considera como opção o transporte de minérios por correias transportadoras.<br>"
                + "- Os limites propostos para profundidade e produção foram superados por avanços tecnológicos.<br>"
                + "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina."
                + "<br><br><strong>Referência:</strong><br>"
                + "- MOSER, P. Primary development of underground hard rock mines. In: Symposium On Mine Planning And Equipment Selection. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3."
            ,
            titulo_section_1: "PARÂMETROS DE ESCOLHA",
            h3_logistica: "Logística",
            span_logistica: "A mina utilizará caminhões?",
            span_logistica_sim: "Sim",
            span_logistica_nao: "Não",
            h3_sm: "Cobertura superficial",
            span_sm: "Espessura da camada de material inconsolidado:",
            h3_rock: "Condições das rochas",
            span_rock: "Classificação da qualidade das rochas:",
            h3_open_pit: "Acesso",
            span_open_pit: "O acesso será a partir de uma mina a céu aberto?",
            span_open_pit_sim: "Sim",
            span_open_pit_nao: "Não",
            h3_depth: "Profundidade",
            span_depth: "Ponto mais profundo do corpo de minério:",
            h3_prod: "Produção",
            span_prod: "Produção prevista para a mina em kt por ano:",
            titulo_section_2: "FLUXOGRAMA",
            titulo_section_3: "ILUSTRAÇÃO",
        },
        en: {
            titulo_pagina: "SELECTION OF ACESS FOR UNDERGROUND MINING: Moser Method (1996)",
            li_titulo: "SELECT METHOD",
            paragrafo_explicacao: ""
                + "The Moser (1996) method for selecting underground mine access was developed over several projects of hard rock mines around the world."
                + "<br><br><strong>Notes:</strong><br>"
                + "- Moser did not take into account any data from soft rock mining operations.<br>"
                + "- The author’s proposed limits for each parameter have been surpassed by advancements in technology.<br>"
                + "- The model does not consider the use of inclined belt conveyors as a viable option for transporting ore.<br>"
                + "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning."
                + "<br><br><strong>References:</strong><br>"
                + "- MOSER, P. Primary development of underground hard rock mines. In: Symposium On Mine Planning And Equipment Selection. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3."
            ,
            titulo_section_1: "SELECTION PARAMETERS",
            h3_logistica: "Logistics",
            span_logistica: "Is the mine going to use trucks?",
            span_logistica_sim: "Yes",
            span_logistica_nao: "No",
            h3_sm: "Surface material",
            span_sm: "Thickness of unconsolidated material:",
            h3_rock: "Rock mass conditions",
            span_rock: "Class of rock mass quality:",
            h3_open_pit: "Acess",
            span_open_pit: "Acess from open pit mining?",
            span_open_pit_sim: "Yes",
            span_open_pit_nao: "No",
            h3_depth: "Depth",
            span_depth: "Orebody deepest point:",
            h3_prod: "Produção",
            span_prod: "Projected production for the mine in kt per year:",
            titulo_section_2: "FLOWCHART",
            titulo_section_3: "ILUSTRATION",
        }
    }

    idioma_selecionado = idiomas[idioma_janela]
    let Escrever = (id, texto, op) => {
        const elemento = document.getElementById(id)
        if (op === undefined) {
            elemento.innerHTML = idioma_selecionado[texto]
        } else {
            elemento.options[op].text = idioma_selecionado[texto]
        }
    }

    //HEADER
    Escrever("titulo-pagina", "titulo_pagina")

    // SEÇÃO 0
    Escrever("li-titulo", "li_titulo")

    // SEÇÃO 1
    Escrever("paragrafo-explicacao", "paragrafo_explicacao")

    // Titulo
    Escrever("titulo-section-1", "titulo_section_1")

    // LOGISTICA
    Escrever("h3-logistica", "h3_logistica")
    Escrever("span-logistica", "span_logistica")
    Escrever("span-logistica-nao", "span_logistica_sim")
    Escrever("span-logistica-sim", "span_logistica_nao")

    // SURFACE MATERIAL
    Escrever("h3-sm", "h3_sm")
    Escrever("span-sm", "span_sm")

    // ROCK MASS
    Escrever("h3-rock", "h3_rock")
    Escrever("span-rock", "span_rock")

    // OPEN-PIT
    Escrever("h3-open-pit", "h3_open_pit")
    Escrever("span-open-pit", "span_open_pit")
    Escrever("span-open-pit-sim", "span_open_pit_sim")
    Escrever("span-open-pit-nao", "span_open_pit_nao")

    // PROFUNDIDADE
    Escrever("h3-depth", "h3_depth")
    Escrever("span-depth", "span_depth")

    // PROFUNDIDADE
    Escrever("h3-prod", "h3_prod")
    Escrever("span-prod", "span_prod")

    // SEÇÃO 2
    Escrever("titulo-section-2", "titulo_section_2")

    // SEÇÃO 3
    Escrever("titulo-section-3", "titulo_section_3")
}

