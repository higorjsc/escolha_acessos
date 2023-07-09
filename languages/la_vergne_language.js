function Escrever(id, texto, op) {
    const elemento = document.getElementById(id)
    if (op === undefined) {
        elemento.innerHTML = texto
    } else {
        elemento.options[op].text = texto
    }
}

function English() {

    //HEADER
    Escrever("titulo-pagina", "SELECTION OF ACESS FOR UNDERGROUND MINING: La Vergne Method (2003)")

    // SEÇÃO 0
    Escrever("li-titulo", "SELECT METHOD")

    //SEÇÃO 1
    const paragrafo_explicacao = "The method developed by La Verne (2003) for selecting underground mine access was presented as a 'roughly guide' to determine a  viable access in early stages of mining planning."
        + "<br><br><strong>Notes:</strong><br>"
        + "- The model is based upon golden rules of the time of its creation.<br>"
        + "- The author’s proposed limits for each parameter have been surpassed by advancements in technology.<br>"
        + "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning."
        + "<br><br><strong>Reference:</strong><br>"
        + "LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003."


    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    // Titulo
    Escrever("titulo-section-1", "SELECTION PARAMETERS")

    // SURFACE MATERIAL
    Escrever("h3-sm", "Surface material")
    Escrever("span-sm", "Is the layer of unconsolidated materials narrow?")
    Escrever("span-sm-menor", "Yes")
    Escrever("span-sm-maior", "No")

    // ROCK MASS
    Escrever("h3-rock", "Rock mass conditions")
    Escrever("span-rock", "Is the rock intact and of good quality/strength?")
    Escrever("span-rock-menor", "Yes")
    Escrever("span-rock-maior", "No")

    // PROFUNDIDADE
    Escrever("h3-depth", "Depth")
    Escrever("span-depth", "Orebody deepest point:")

    // PROFUNDIDADE
    Escrever("h3-prod", "Production")
    Escrever("span-prod", "Projected production for the mine in kt per year:")

    // SEÇÃO 2
    Escrever("titulo-section-2", "FLOWCHART")

    // SEÇÃO 3
    Escrever("titulo-section-3", "ILUSTRATION")

    //RODAPÉ
    Escrever("universidade", "UFRGS Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "LAPROM Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")

}

function Portuguese() {

    //HEADER
    Escrever("titulo-pagina", "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método La Vergne (2003)")

    // SEÇÃO 0
    Escrever("li-titulo", "SELECIONE O MÉTODO")

    //SEÇÃO 1
    const paragrafo_explicacao = "O método de La Vergne (2003) para a seleção de acesso a minas subterrâneas foi apresentado pelo autor como um &rdquo;guia superfícial&ldquo; para uma análise preliminar dos possíveis acessos."
        + "<br><br><strong>Observações:</strong><br>"
        + "- O modelo é baseado em regras de ouro compiladas à época<br>"
        + "- Os limites propostos para profundidade e produção foram superados por avanços tecnológicos.<br>"
        + "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina."
        + "<br><br><strong>Referência:</strong><br>"
        + "LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003."

    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    // Titulo
    Escrever("titulo-section-1", "PARÂMETROS DE ESCOLHA")

    // SURFACE MATERIAL
    Escrever("h3-sm", "Cobertura superficial")
    Escrever("span-sm", "Camada de materiais inconsolidados estreita?")
    Escrever("span-sm-menor", "Sim")
    Escrever("span-sm-maior", "Não")

    // ROCK MASS
    Escrever("h3-rock", "Condições do Maciço")
    Escrever("span-rock", "Rocha íntegra e de boa qualidade/resitencia?")
    Escrever("span-rock-menor", "Sim")
    Escrever("span-rock-maior", "Não")

    // PROFUNDIDADE
    Escrever("h3-depth", "Profundidade")
    Escrever("span-depth", "Ponto mais profundo do corpo de minério:")

    // PROFUNDIDADE
    Escrever("h3-prod", "Produção")
    Escrever("span-prod", "Produção prevista para a mina em kt por dia:")

    // SEÇÃO 2
    Escrever("titulo-section-2", "FLUXOGRAMA")

    // SEÇÃO 3
    Escrever("titulo-section-3", "ILUSTRAÇÃO")

    //RODAPÉ
    Escrever("universidade", "UFRGS Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "LAPROM Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")

}

