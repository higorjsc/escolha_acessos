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
    Escrever("titulo-pagina", "SELECTION OF ACESS FOR UNDERGROUND MINING: Cardozo Method (2023)")

    // SEÇÃO 0
    Escrever("li-titulo", "SELECT METHOD")

    //SEÇÃO 1
    const paragrafo_explicacao = "The Cardozo method (2023) for selecting underground mine acess is a combination and update of the procedures proposed by Moser (1996) and La Vergne (2003)."
        + "In this method, Cardozo incorporates  some of the parameters proposed by Moser into the flowchart layout presented by La Vergne, and updates the proposed values as limits for depth and production according to the reality of 2023.  "
        + "<br><br><strong>Notes:</strong><br>"
        + "- The proposed model does not replace detailed feasibility studies, but aims to significantly reduce the amount of work in the early stages of mining planning."
        + "<br><br><strong>Reference:</strong><br>"

    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    // Titulo
    Escrever("titulo-section-1", "SELECTION PARAMETERS")

    // SURFACE MATERIAL
    Escrever("h3-sm", "Surface material")
    Escrever("span-sm", "Thickness of unconsolidated material:")

    // ROCK MASS
    Escrever("h3-rock", "Rock mass conditions")
    Escrever("span-rock", "RMR class of rock mass:")

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
    // Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    // Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")

}


function Portuguese() {

    //HEADER
    Escrever("titulo-pagina", "SELEÇÃO DE MÉTODOS DE ACESSO A MINAS SUBTERRÂNEAS: Método Cardozo (2023)")

    // SEÇÃO 0
    Escrever("li-titulo", "SELECIONE O MÉTODO")

    //SEÇÃO 1
    const paragrafo_explicacao = "O método de Cardozo (2023) para seleção de acessos a minas subterrâneas é uma combinação e atualização dos procedimentos propostos por Moser (1996) e La Vergne (2003)."
        + " Nesse método, Cardozo incorpora alguns dos parâmetros propostos por Moser ao layout do fluxograma apresentado por La Vergne, além de atualizar os valores propostos como limites para profundidade e produção de acordo com a realidade de 2023."
        + "<br><br><strong>Observações:</strong><br>"
        + "- O método não dispensa estudos detalhados de viabilidade, mas objetiva diminuir a quantidade de esforços nas etapas inicias do planejamento da mina."
        + "<br><br><strong>Referência:</strong><br>"
        + ""

    Escrever("paragrafo-explicacao", paragrafo_explicacao)


    Escrever("titulo-section-1", "PARÂMETROS DE ESCOLHA")

    // SURFACE MATERIAL
    Escrever("h3-sm", "Cobertura superficial")
    Escrever("span-sm", "Espessura da camada de material inconsolidado:")

    // ROCK MASS
    Escrever("h3-rock", "Condições do Maciço")
    Escrever("span-rock", "Classe do maciço no sistema RMR:")

    // PROFUNDIDADE
    Escrever("h3-depth", "Profundidade")
    Escrever("span-depth", "Ponto mais profundo do corpo de minério:")

    // PROFUNDIDADE
    Escrever("h3-prod", "Produção")
    Escrever("span-prod", "Produção prevista para a mina em kt por dia:")

    // SEÇÃO 2
    Escrever("titulo-section-2", "FLUXOGRAMA")
    Escrever("titulo-section-3", "ILUSTRAÇÃO")

    //RODAPÉ
    Escrever("universidade", "UFRGS Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "LAPROM Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    // Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    // Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")

}

