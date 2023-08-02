function Language(idioma_janela) {

    const idiomas = {
        en: {
            titulo_pagina: "SELECTION OF ACESS FOR UNDERGROUND MINING: Cardozo Method (2023)",
            li_titulo: "SELECT METHOD",
            paragrafo_explicacao: ""
                + "The Cardozo method (2023) for selecting underground mine acess is a combination and update of the procedures proposed by Moser (1996) and La Vergne (2003)."
                + "In this method, Cardozo incorporates  some of the parameters proposed by Moser into the flowchart layout presented by La Vergne, and updates the proposed values as limits for depth and production according to the reality of 2023.  "
                + "<br><br><strong>Notes:</strong><br>"
                + "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning."
                + "<br><br><strong>Referênces:</strong><br>"
                + "<a href ='http://dx.doi.org/10.1590/0370-44672021760094' target ='_blank'>- CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.<br/></a>"
                + "<a href ='http://hdl.handle.net/10183/262393' target ='_blank'>- CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.</a>",
            titulo_section_1: "SELECTION PARAMETERS",
            h3_sm: "Surface material",
            span_sm: "Thickness of unconsolidated material:",
            h3_rock: "Rock mass conditions",
            span_rock: "RMR class of rock mass:",
            h3_depth: "Depth",
            span_depth: "Orebody deepest point:",
            h3_prod: "Production",
            span_prod: "Projected production for the mine in kt per day:",
            titulo_section_2: "FLOWCHART",
            titulo_section_3: "ILUSTRATION",
        },
        pt: {
            titulo_pagina: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método Cardozo (2023)",
            li_titulo: "SELECIONE O MÉTODO",
            paragrafo_explicacao: ""
                + "O método de Cardozo (2023) para seleção de acessos a minas subterrâneas é uma combinação e atualização dos procedimentos propostos por Moser (1996) e La Vergne (2003)."
                + " Nesse método, Cardozo incorpora alguns dos parâmetros propostos por Moser ao layout do fluxograma apresentado por La Vergne, além de atualizar os valores propostos como limites para profundidade e produção de acordo com a realidade de 2023."
                + "<br><br><strong>Observações:</strong><br>"
                + "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina."
                + "<br><br><strong>Referências:</strong><br>"
                + "<a href ='http://dx.doi.org/10.1590/0370-44672021760094' target ='_blank'>- CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.<br/></a>"
                + "<a href ='http://hdl.handle.net/10183/262393' target ='_blank'>- CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.</a>",
    
            titulo_section_1: "PARÂMETROS DE ESCOLHA",
            h3_sm: "Cobertura superficial",
            span_sm: "Espessura da camada de material inconsolidado:",
            h3_rock: "Condições do Maciço",
            span_rock: "Classe do maciço no sistema RMR:",
            h3_depth: "Profundidade",
            span_depth: "Ponto mais profundo do corpo de minério:",
            h3_prod: "Produção",
            span_prod: "Produção prevista para a mina em kt por dia:",
            titulo_section_2: "FLUXOGRAMA",
            titulo_section_3: "ILUSTRAÇÃO",
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

    //SEÇÃO 1
    Escrever("paragrafo-explicacao", "paragrafo_explicacao")

    // Titulo
    Escrever("titulo-section-1", "titulo_section_1")

    // SURFACE MATERIAL
    Escrever("h3-sm", "h3_sm")
    Escrever("span-sm", "span_sm")

    // ROCK MASS
    Escrever("h3-rock", "h3_rock")
    Escrever("span-rock", "span_rock")

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









