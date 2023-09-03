function Language(idioma_janela) {

    const idiomas = {
        pt: {
            titulo_pagina: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método La Vergne (2003)",
            li_titulo: "SELECIONE O MÉTODO",
            paragrafo_explicacao: ""
                + "O método de La Vergne (2003) para a seleção de acesso a minas subterrâneas foi apresentado pelo autor como um &rdquo;guia superfícial&ldquo; para uma análise preliminar dos possíveis acessos."
                + "<br><br><strong>Observações:</strong><br>"
                + "- O modelo é baseado em regras de ouro< compiladas à época<br>"
                + "- Os limites propostos para profundidade e produção foram superados por avanços tecnológicos.<br>"
                + "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina."
                + "<br><br><strong>Referência:</strong><br>"
                + "- LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003.",

            titulo_section_1: "PARÂMETROS DE ESCOLHA",
            h3_sm: "Cobertura superficial",
            span_sm: "Camada estreita de materiais inconsolidados?",
            span_sm_menor: "Sim",
            span_sm_maior: "Não",
            h3_rock: "Condições do Maciço",
            span_rock: "Rocha íntegra e de boa qualidade/resitencia?",
            span_rock_menor: "Sim",
            span_rock_maior: "Não",
            h3_depth: "Profundidade",
            span_depth: "Ponto mais profundo do corpo de minério:",
            h3_prod: "Produção",
            span_prod: "Produção prevista para a >mina em kt por dia:",
            titulo_section_2: "FLUXOGRAMA",
            titulo_section_3: "ILUSTRAÇÃO",
        },
        en: {
            titulo_pagina: "SELECTION OF ACESS FOR UNDERGROUND MINING: La Vergne Method (2003)",
            li_titulo: "SELECT METHOD",
            paragrafo_explicacao: ""
                + "The method developed by La Verne (2003) for selecting underground mine access was presented as a 'roughly guide' to determine a  viable access in early stages of mining planning."
                + "<br><br><strong>Notes:</strong><br>"
                + "- The model is based upon golden rules of the time of its creation.<br>"
                + "- The author’s proposed limits for each parameter have been surpassed by advancements in technology.<br>"
                + "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning."
                + "<br><br><strong>Reference:</strong><br>"
                + "- LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003."
            ,
            titulo_section_1: "SELECTION PARAMETERS",
            h3_sm: "Surface material",
            span_sm: "Narrow layer of unconsolidated materials?",
            span_sm_menor: "Yes",
            span_sm_maior: "No",
            h3_rock: "Rock mass conditions",
            span_rock: "Is the rock intact and of good quality/strength?",
            span_rock_menor: "Yes",
            span_rock_maior: "No",
            h3_depth: "Depth",
            span_depth: "Orebody deepest point:",
            h3_prod: "Production",
            span_prod: "Projected production for the mine in kt per day:",
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
    Escrever("paragrafo-explicacao", "paragrafo_explicacao")

    // Titulo
    Escrever("titulo-section-1", "titulo_section_1")

    // SURFACE MATERIAL
    Escrever("h3-sm", "h3_sm")
    Escrever("span-sm", "span_sm")
    Escrever("span-sm-menor", "span_sm_menor")
    Escrever("span-sm-maior", "span_sm_maior")

    // ROCK MASS
    Escrever("h3-rock", "h3_rock")
    Escrever("span-rock", "span_rock")
    Escrever("span-rock-menor", "span_rock_menor")
    Escrever("span-rock-maior", "span_rock_maior")

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



