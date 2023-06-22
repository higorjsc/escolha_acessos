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
    Escrever("titulo-pagina", "SELEÇÃO DE MÉTODOS DE ACESSO A MINAS SUBTERRÂNEAS: Método Cardozo (2023)")

    //SEÇÃO 1
    let paragrafo_explicacao = "The UBC mining method selection is a modified version of the Nicholas (1981) approach developed by the University of British Columbia in Vancouver, B.C., Canada.<br><br>" +
        "<strong>The modifications include:<br></strong>" +
        "&ensp;&ensp;- The weights of each selection criteria were adjusted;<br>" +
        "&ensp;&ensp;- A value of '-10' is assigned to significantly discount a mining method without completely eliminating it;<br>" +
        "&ensp;&ensp;- 'Depth' and Bieniawski (1989) RMR were introduced as additional new criteria in the selection process;<br>" +
        "&ensp;&ensp;- 'Fracture Spacing' and 'Fracture Strenght' were removed from the selection criteria;<br>" +
        "&ensp;&ensp;- 'Very Narrow' was included as an option in the 'Ore thickness' selection criteria;<br>" +
        "&ensp;&ensp;- 'Very Weak' was included as an option in the 'Rock Substance Strength' selection criteria.<br><br>" +
        "<strong>Notes:<br></strong>" +
        "&ensp;&ensp; - The UBC procedure modifies Nicholas approach to put emphasis  on stope mining rather than caving techniques"
    Escrever("paragrafo-explicacao", paragrafo_explicacao)

        
    // RODAPÉ
    Escrever("universidade", "Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")
}

function Portuguese() {

    //HEADER
    Escrever("titulo-pagina", "SELEÇÃO DE MÉTODOS DE ACESSO A MINAS SUBTERRÂNEAS: Método Cardozo (2023)")

    //SEÇÃO 1
    const paragrafo_explicacao = "O UBC Mining Method Selection (1995) é uma versão modificada do método de Nicholas (1981), criada pela University of British Columbia em Vancouver, B.C., Canada.<br><br>" +
        "<strong>As modificações incluem:<br></strong>" +
        "&ensp;&ensp;- Ajuste dos pesos atribuidos a cada critério de seleção;<br>" +
        "&ensp;&ensp;- O valor '-10' foi adicionado para descontar fortemente um método de lavra sem elimina-lo completamente;<br>" +
        "&ensp;&ensp;- 'Profundidade' e 'RMR (Bieniawski, 1989)' foram adicionados como critérios de seleção;<br>" +
        "&ensp;&ensp;- Remoção dos critérios de seleção 'Espaçamento das Fraturas' e 'Características das inter-fraturas';<br>" +
        "&ensp;&ensp;- Adição do valor 'muito estreito' como opção para a espessura do minério;<br>" +
        "&ensp;&ensp;- Adição do valor 'muito fraca' como opção para a Rock Substance Strenght.<br><br>" +
        "<strong>Observações:<br></strong>" +
        "&ensp;&ensp; - O método UBC foi desenvolvido para priorizar os métodos de 'stope', adaptando-se ao cenário da mineração Canadense da época."

    Escrever("paragrafo-explicacao", paragrafo_explicacao)

    
    //RODAPÉ
    Escrever("universidade", "UFRGS Universidade Federal do Rio Grande do Sul")
    Escrever("laboratorio", "LAPROM Laboratório de Processamento Mineral")
    Escrever("localizacao", "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970")
    Escrever("contato", " Contato: email@ufrgs.com")
    Escrever("desenvolvedor", "Desenvolvedor: Higor Campos")
    Escrever("contato-desenvolvedor", " Contato: hhigor1217@gmail.com")

}

