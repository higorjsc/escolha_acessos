function Escrever(id, texto, op) {
    const elemento = document.getElementById(id)
    if (op === undefined) {

        elemento.innerHTML = texto
    } else {
        elemento.options[op].text = texto
    }
}

function English() {

    Escrever("titulo-pagina", "SELEÇÃO DE MÉTODOS DE ACESSO A MINAS SUBTERRÂNEAS: Método Cardozo (2023)")

    // SEÇÃO 0
    Escrever("li-titulo", "SELECIONE O MÉTODO")

    //SEÇÃO 1
    const paragrafo_explicacao = ""

    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    // Titulo
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

function Portuguese() {

    //HEADER
    Escrever("titulo-pagina", "SELEÇÃO DE MÉTODOS DE ACESSO A MINAS SUBTERRÂNEAS: Método Cardozo (2023)")

    // SEÇÃO 0
    Escrever("li-titulo", "SELECIONE O MÉTODO")

    //SEÇÃO 1
    const paragrafo_explicacao = ""

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
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")

}

