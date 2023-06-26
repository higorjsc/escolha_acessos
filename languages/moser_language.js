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
    Escrever("titulo-pagina", "SELECTION OF ACESS FOR UNDERGROUND MINING: Moser Method (1996")

    // SEÇÃO 0
    Escrever("li-titulo", "SELECT METHOD")

    //SEÇÃO 1
    const paragrafo_explicacao = ""

    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    // Titulo
    Escrever("titulo-section-1", "SELECTION PARAMETERS")

    // LOGISTICA
    Escrever("h3-logistica", "Logistics")
    Escrever("span-logistica", "A mina utilizará caminhões?")
    Escrever("span-logistica-nao", "No")
    Escrever("span-logistica-sim", "Yes")

    // SURFACE MATERIAL
    Escrever("h3-sm", "Surface material")
    Escrever("span-sm", "Thickness of unconsolidated material:")

    // ROCK MASS
    Escrever("h3-rock", "Rock mass conditions")
    Escrever("span-rock", "RMR class of rock mass:")

    // OPEN-PIT
    Escrever("h3-open-pit", "Acess")
    Escrever("span-open-pit", "Acess from open pit mining?")
    Escrever("span-open-pit-nao", "No")
    Escrever("span-open-pit-sim", "Yes")

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
    Escrever("titulo-pagina", "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS: Método Moser (1996)")

    // SEÇÃO 0
    Escrever("li-titulo", "SELECIONE O MÉTODO")

    // SEÇÃO 1
    const paragrafo_explicacao = "O método de Moser (1996) para a seleção de acesso a minas subterrâneas foi desenvolvido a partir da análise de dados de várias minas  &rdquo;hard rock&ldquo; em escala global."
        + "&ensp;De acordo com o autor, todas as minas analisadas foram visitadas pessoalmente por uma única pessoa para garantir a consistência dos dados.<br>"
        + "<br><strong>Observações:</strong><br>"
        + "- O método de Moser não considera como opção o transporte de minérios por correias transportadoras.<br>"
        + "- Os limites propostos para profundidade e produção foram superados devido aos avanços tecnológicos.<br>"
        + "<br><strong>Referência:</strong><br>"
        + "MOSER, P. Primary development of underground hard rock mines. In: SYMPOSIUM ON MINE PLANNING AND EQUIPMENT SELECTION. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3."

    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    // Titulo
    Escrever("titulo-section-1", "PARÂMETROS DE ESCOLHA")

    // LOGISTICA
    Escrever("h3-logistica", "Logística")
    Escrever("span-logistica", "A mina utilizará caminhões?")
    Escrever("span-logistica-nao", "Não")
    Escrever("span-logistica-sim", "Sim")

    // SURFACE MATERIAL
    Escrever("h3-sm", "Cobertura superficial")
    Escrever("span-sm", "Espessura da camada de material inconsolidado:")

    // ROCK MASS
    Escrever("h3-rock", "Condições do Maciço")
    Escrever("span-rock", "Classe do maciço no sistema RMR:")

    // OPEN-PIT
    Escrever("h3-open-pit", "Acesso")
    Escrever("span-open-pit", "Acesso por open pit mining?")
    Escrever("span-open-pit-nao", "Não")
    Escrever("span-open-pit-sim", "Sim")

    // PROFUNDIDADE
    Escrever("h3-depth", "Profundidade")
    Escrever("span-depth", "Ponto mais profundo do corpo de minério:")

    // PROFUNDIDADE
    Escrever("h3-prod", "Produção")
    Escrever("span-prod", "Produção prevista para a mina em kt por ano:")

    // SEÇÃO 2
    Escrever("titulo-section-2", "FLUXOGRAMA")

    // SEÇÃO 3
    Escrever("titulo-section-3", "ILUSTRAÇÃO")

    // RODAPÉ
    Escrever("universidade", "UFRGS Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "LAPROM Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")
}

