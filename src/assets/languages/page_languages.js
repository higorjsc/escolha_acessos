window.addEventListener("message", function (event) {
    if (event.data === "CallLanguage") {
        Language_page() // Chame a função do módulo do iframe
    }
})

// FUNÇÃO CHAMADA A CADA TROCA DE IDIOMA E A CADA LOAD DE PÁGINA OU POP UP
// GERENCIA OS TEXTOS QUE ESTARÃO PRESENTES EM TODAS AS PÁGINAS (NÃO APENAS UM MÉTODO ESPECÍFICO)
function Language_page(idioma_child = "none") {

    let idioma_parent = parent.document.getElementById("titulo-pagina").innerText
    idioma_parent = idioma_parent.includes("SELEÇÃO") ? "pt" : "en"

    const idiomas = {
        pt: {
            // CREDITOS
            universidade: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL<br>",
            laboratorio: "LABORATÓRIO DE PROCESSAMENTO MINERAL<br><br><br>",
            versao: "VERSÃO 1.0.0, dd/mm/2023",
            titulo_ferramenta: "SELEÇÃO DE ACESSOS PARA MINAS SUBTERRÂNEAS<br>",
            titulo_autores: "<br>AUTORES<br>",
            autores: "HIGOR CAMPOS<br>FERNANDO CARDOZO<br>CARLOS PETTER<br>RENATO PETTER",
            titulo_apoio: "APOIO<br>",
            apoio_1: "EQUIPE MAFMINE<br>",
            localizacao: "Porto Alegre, Rio Grande do Sul, Brasil,<br>",
            data: "2023.<br>",

            // REFERENCIAS
            titulo_referencias: "<br>REFERENCIAS",
            ref_1: "CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.<br/>",
            ref_2: "CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.",
            ref_3: "LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003.",
            ref_4: "MOSER, P. Primary development of underground hard rock mines. In: Symposium On Mine Planning And Equipment Selection. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3.",

            // REPORTAR BUG
            span_name: "Seu nome: ",
            span_email: "Seu e-mail: ",
            span_message: "<br><br>Sua mensagem:<br>",
            botao_enviar: "ENVIAR ",

            // TITULO POP UPS
            titulo_pop_up_creditos: "CRÉDITOS",
            titulo_pop_up_referencias: "REFERENCIAS",
            titulo_pop_up_report_bug: "REPORTAR ERRO",

            // FOOTER DAS PÁGINAS PRINCIPAIS
            footer_universidade: "Universidade Federal do Rio Grande do Sul",
            footer_laboratorio: "Laboratório de Processamento Mineral",
            footer_localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            footer_contato: "Contato: email@ufrgs.com",
            creditos: "Creditos",
            referencias: "Referencias",
            bug_report: "Reportar erro"
        },
        en: {
            // CREDITOS ENGLISH
            universidade: "UNIVERSIDADE FEDERAL DO RIO GRANDE DO SUL<br>",
            laboratorio: "LABORATÓRIO DE PROCESSAMENTO MINERAL<br><br><br>",
            versao: "VERSION 1.0.0, dd/mm/2023",
            titulo_ferramenta: "SELECTION OF ACESS FOR UNDERGROUND MINING<br>",
            titulo_autores: "<br>AUTHORS<br>",
            autores: "HIGOR CAMPOS<br>FERNANDO CARDOZO<br>CARLOS PETTER<br>RENATO PETTER",
            titulo_apoio: "SUPPORTERS<br>",
            apoio_1: "EQUIPE MAFMINE<br>",
            localizacao: "Porto Alegre, Rio Grande do Sul, Brasil,<br>",
            data: "2023.<br>",

            // REFERENCIAS ENGLISH
            titulo_referencias: "<br>REFERENCES",
            ref_1: "CARDOZO, F. A. C. et al. Choice of access for underground mining for feasibility studies. REM-International Engineering Journal, v. 76, p. 187-193, 2023.<br/>",
            ref_2: "CARDOZO, F. A. C. Modelagem de Escavações Subterrâneas: Contribuições para Escolha de Acessos de Mina. Doutorado—Porto Alegre: Universidade Federal do Rio Grande do Sul, 3 mar. 2023.",
            ref_3: "LA VERGNE, Jack. Hard rock miner's handbook. Tempe/North Bay: McIntosh engineering. ISBN 0-968006-1-6, 2003.",
            ref_4: "MOSER, P. Primary development of underground hard rock mines. In: Symposium On Mine Planning And Equipment Selection. 1996. São Paulo. Proceedings […]. São Paulo, 1996. p. 31-3.",

            // REPORTAR BUG ENGLISH
            span_name: "Your name: ",
            span_email: "Your e-mail: ",
            span_message: "<br><br>Your message:<br>",
            botao_enviar: "SEND ",

            // TITULOS DOS POP UPS ENGLISH
            titulo_pop_up_creditos: "CREDITS",
            titulo_pop_up_referencias: "REFERENCES",
            titulo_pop_up_report_bug: "REPORT ISSUE",

            // FOOTER DAS PÁGINAS PRINCIPAIS ENGLISH
            footer_universidade: "Universidade Federal do Rio Grande do Sul",
            footer_laboratorio: "Laboratório de Processamento Mineral",
            footer_localizacao: "Avenida Bento Gonçalves, 9500, Setor 6, Centro de Tecnologia, LAPROM - Porto Alegre, RS, 91501-970",
            footer_contato: "Contato: email@ufrgs.com",
            creditos: "Credits",
            referencias: "References",
            bug_report: "Report issue"

        }
    }

    idioma_selecionado = idiomas[idioma_parent]
    let Escrever = (id, texto, op) => {
        const elemento = document.getElementById(id)
        if (elemento) {
            if (op === undefined) {
                elemento.innerHTML = idioma_selecionado[texto]
            } else {
                elemento.options[op].text = idioma_selecionado[texto]
            }
        }
    }
    let Escrever_parent = (id, texto, op) => {
        const elemento = parent.document.getElementById(id)
        if (elemento) {
            if (op === undefined) {
                elemento.innerHTML = idioma_selecionado[texto]
            } else {
                elemento.options[op].text = idioma_selecionado[texto]
            }
        }
    }

    // OBJETOS DO POP UP "CREDITOS"
    Escrever("universidade", "universidade")
    Escrever("laboratorio", "laboratorio")
    Escrever("titulo-ferramenta", "titulo_ferramenta")
    Escrever("inspiracao", "inspiracao")
    Escrever("titulo-autores", "titulo_autores")
    Escrever("autores", "autores")
    Escrever("localizacao", "localizacao")
    Escrever("data", "data")
    Escrever("titulo-apoio", "titulo_apoio")
    Escrever("apoio-1", "apoio_1")
    Escrever("versao", "versao")

    // OBJETOS DO POP UP "REFERENCIAS"
    Escrever("titulo_referencias", "titulo_referencias")
    for (i = 1; i <= 10; i++) {
        Escrever(`ref-${i}`, `ref_${i}`)
    }

    // OBJETOS DO POP UP "REPORT BUG"
    Escrever("span-name", "span_name")
    Escrever("span-email", "span_email")
    Escrever("span-message", "span_message")
    Escrever("botao-enviar", "botao_enviar")

    // TITULOS DOS POP UPS
    Escrever_parent("titulo-pop-up-gsi-ob", "titulo_pop_up_gsi_ob")
    Escrever_parent("titulo-pop-up-gsi-hw", "titulo_pop_up_gsi_hw")
    Escrever_parent("titulo-pop-up-gsi-fw", "titulo_pop_up_gsi_fw")
    Escrever_parent("titulo-pop-up-rmr-ob", "titulo_pop_up_rmr_ob")
    Escrever_parent("titulo-pop-up-rmr-hw", "titulo_pop_up_rmr_hw")
    Escrever_parent("titulo-pop-up-rmr-fw", "titulo_pop_up_rmr_fw")
    Escrever_parent("titulo-pop-up-densidade-ob", "titulo_pop_up_densidade_ob")
    Escrever_parent("titulo-pop-up-densidade-hw", "titulo_pop_up_densidade_hw")
    Escrever_parent("titulo-pop-up-densidade-fw", "titulo_pop_up_densidade_fw")
    Escrever_parent("titulo-pop-up-ucs-ob", "titulo_pop_up_ucs_ob")
    Escrever_parent("titulo-pop-up-ucs-hw", "titulo_pop_up_ucs_hw")
    Escrever_parent("titulo-pop-up-ucs-fw", "titulo_pop_up_ucs_fw")
    Escrever_parent("titulo-pop-up-ahp", "titulo_pop_up_ahp")
    Escrever_parent("titulo-pop-up-creditos", "titulo_pop_up_creditos")
    Escrever_parent("titulo-pop-up-referencias", "titulo_pop_up_referencias")
    Escrever_parent("titulo-pop-up-report_bug", "titulo_pop_up_report_bug")

    //FOOTER
    Escrever("footer-universidade", "footer_universidade")
    Escrever("footer-laboratorio", "footer_laboratorio")
    Escrever("footer-localizacao", "footer_localizacao")
    Escrever("footer-contato", "footer_contato")
    Escrever("creditos", "creditos")
    Escrever("referencias", "referencias")
    Escrever("bug_report", "bug_report")

}