//OBTÉM O ELEMENTO E RETORNA O TEXTO A SER ESCRITO
function Texto(id) {
    const elemento = document.getElementById(id).innerText
    return elemento
}
function Texto_select(id) {
    const elemento = document.getElementById(id).selectedOptions[0].innerText
    return elemento
}

function Imprimir_cardoso(data, titulos) {

    //DEFINE A FORMATAÇÃO DO PDF
    const identacao = 30
    const line_spacing = 5
    const left_margin = 20
    let y_coord = 30

    //INICIA O PDF
    const doc = new jsPDF("p", "mm", "a4")
    doc.setProperties({
        title: Texto("titulo-pagina")
    })
    doc.setFont("Roboto")

    // TITULO DA PAGINA
    doc.setFontSize(12)
    doc.setFontStyle("bold")
    doc.text(Texto("titulo-pagina"), left_margin, y_coord)

    // DATA E HORA
    doc.setFontSize(10)
    doc.setFontStyle("normal")
    doc.text(data, left_margin, y_coord += line_spacing)

    // SUBTITULO INPUTS
    y_coord += 10
    doc.setFontSize(12)
    doc.setFontStyle("bold")
    doc.text(titulos["inputs"], left_margin, y_coord += line_spacing)

    // SURFACE MATERIALS
    y_coord += 10
    doc.setFontStyle("normal")
    let radio_sm = Get_input_value("radio-sm") ? (Get_input_value("radio-sm") == "maior" ? "> 70 m" : "< 70 m") : ""
    doc.text(Texto("h3-sm") + ": " + radio_sm, identacao, y_coord += line_spacing)

    // ROCK MASS
    y_coord += 2
    doc.setFontStyle("normal")
    let radio_rock_mass = Get_input_value("radio-rock") ? (Get_input_value("radio-rock") == "maior" ? "classe V" : "classe entre I e IV") : ""
    doc.text(Texto("h3-rock") + ": " + radio_rock_mass, identacao, y_coord += line_spacing)

    // PROFUNDIDADE
    y_coord += 2
    doc.setFontStyle("normal")
    doc.text(Texto("h3-depth") + ": " + Texto_select("select-depth"), identacao, y_coord += line_spacing)

    // PRODUÇÃO
    y_coord += 2
    doc.setFontStyle("normal")
    doc.text(Texto("h3-prod") + ": " + Texto_select("select-prod"), identacao, y_coord += line_spacing)

    // RESULTADOS
    y_coord += 10
    doc.setFontStyle("bold")
    doc.text(titulos["resultados"], left_margin, y_coord += line_spacing)
    y_coord += 10
    doc.setFontStyle("normal")
    doc.text(Texto("span-resultado-final"), identacao, y_coord += line_spacing)


    const pdfData = doc.output("datauristring") // Gera o URL do documento PDF

    // Abre o PDF em uma nova janela
    const newWindow = window.open("", "_blank")
    newWindow.document.write("<html><body><embed width=\"100%\" height=\"100%\" type=\"application/pdf\" src=\"" + pdfData + "\"></body></html>")
    newWindow.document.close()
}

function Imprimir_la_vergne(data, titulos) {
    //DEFINE A FORMATAÇÃO DO PDF
    const identacao = 30
    const line_spacing = 5
    const left_margin = 20
    let y_coord = 30

    //INICIA O PDF
    const doc = new jsPDF("p", "mm", "a4")
    doc.setProperties({
        title: Texto("titulo-pagina")
    })
    doc.setFont("Roboto")

    // TITULO DA PAGINA
    doc.setFontSize(12)
    doc.setFontStyle("bold")
    doc.text(Texto("titulo-pagina"), left_margin, y_coord)

    // DATA E HORA
    doc.setFontSize(10)
    doc.setFontStyle("normal")
    doc.text(data, left_margin, y_coord += line_spacing)

    // SUBTITULO INPUTS
    y_coord += 10
    doc.setFontSize(12)
    doc.setFontStyle("bold")
    doc.text(titulos["inputs"], left_margin, y_coord += line_spacing)

    // SURFACE MATERIALS
    y_coord += 10
    doc.setFontStyle("normal")
    let radio_sm = Get_input_value("radio-sm") ? (Get_input_value("radio-sm") == "maior" ? "> 70 m" : "< 70 m") : ""
    doc.text(Texto("h3-sm") + ": " + radio_sm, identacao, y_coord += line_spacing)

    // ROCK MASS
    y_coord += 2
    doc.setFontStyle("normal")
    let radio_rock_mass = Get_input_value("radio-rock") ? (Get_input_value("radio-rock") == "maior" ? "classe V" : "classe entre I e IV") : ""
    doc.text(Texto("h3-rock") + ": " + radio_rock_mass, identacao, y_coord += line_spacing)

    // PROFUNDIDADE
    y_coord += 2
    doc.setFontStyle("normal")
    doc.text(Texto("h3-depth") + ": " + Texto_select("select-depth"), identacao, y_coord += line_spacing)

    // PRODUÇÃO
    y_coord += 2
    doc.setFontStyle("normal")
    doc.text(Texto("h3-prod") + ": " + Texto_select("select-prod"), identacao, y_coord += line_spacing)

    // RESULTADOS
    y_coord += 10
    doc.setFontStyle("bold")
    doc.text(titulos["resultados"], left_margin, y_coord += line_spacing)
    y_coord += 10
    doc.setFontStyle("normal")
    doc.text(Texto("span-resultado-final"), identacao, y_coord += line_spacing)


    const pdfData = doc.output("datauristring") // Gera o URL do documento PDF

    // Abre o PDF em uma nova janela
    const newWindow = window.open("", "_blank")
    newWindow.document.write("<html><body><embed width=\"100%\" height=\"100%\" type=\"application/pdf\" src=\"" + pdfData + "\"></body></html>")
    newWindow.document.close()
}

function Imprimir_moser(data, titulos) {
    //DEFINE A FORMATAÇÃO DO PDF
    const identacao = 30
    const line_spacing = 5
    const left_margin = 20
    let y_coord = 30

    //INICIA O PDF
    const doc = new jsPDF("p", "mm", "a4")
    doc.setProperties({
        title: Texto("titulo-pagina")
    })
    doc.setFont("Roboto")

    // TITULO DA PAGINA
    doc.setFontSize(12)
    doc.setFontStyle("bold")
    doc.text(Texto("titulo-pagina"), left_margin, y_coord)

    // DATA E HORA
    doc.setFontSize(10)
    doc.setFontStyle("normal")
    doc.text(data, left_margin, y_coord += line_spacing)

    // SUBTITULO INPUTS
    y_coord += 10
    doc.setFontSize(12)
    doc.setFontStyle("bold")
    doc.text(titulos["inputs"], left_margin, y_coord += line_spacing)

    // LOGISTICA
    y_coord += 10
    doc.setFontStyle("normal")
    let radio_logistica = Get_input_value("radio-logistica") ? (Get_input_value("radio-logistica") == "sim" ? "Com caminhões" : "Sem caminhões") : ""
    doc.text(Texto("h3-sm") + ": " + radio_logistica, identacao, y_coord += line_spacing)

    // ROCK MASS
    y_coord += 2
    doc.setFontStyle("normal")
    let radio_rock_mass = Get_input_value("radio-rock") ? (Get_input_value("radio-rock") == "maior" ? "classe entre VI e VII" : "classe entre I e V") : ""
    doc.text(Texto("h3-rock") + ": " + radio_rock_mass, identacao, y_coord += line_spacing)

    // SURFACE MATERIALS
    y_coord += 2
    doc.setFontStyle("normal")
    let radio_sm = Get_input_value("radio-sm") ? (Get_input_value("radio-sm") == "maior" ? "> 70 m" : " < 70 m") : ""
    doc.text(Texto("h3-sm") + ": " + radio_sm, identacao, y_coord += line_spacing)

    // ACESSO
    y_coord += 2
    doc.setFontStyle("normal")
    let radio_acesso = Get_input_value("radio-open-pit")?.charAt(0).toUpperCase() + Get_input_value("radio-open-pit")?.slice(1) ?? " "
    doc.text("Open Pit mine? " + radio_acesso, identacao, y_coord += line_spacing)


    // PROFUNDIDADE
    y_coord += 2
    doc.setFontStyle("normal")
    doc.text(Texto("h3-depth") + ": " + Texto_select("select-depth"), identacao, y_coord += line_spacing)

    // PRODUÇÃO
    y_coord += 2
    doc.setFontStyle("normal")
    doc.text(Texto("h3-prod") + ": " + Texto_select("select-prod"), identacao, y_coord += line_spacing)

    // RESULTADOS
    y_coord += 10
    doc.setFontStyle("bold")
    doc.text(titulos["resultados"], left_margin, y_coord += line_spacing)
    y_coord += 10
    doc.setFontStyle("normal")
    doc.text(Texto("span-resultado-final"), identacao, y_coord += line_spacing)

    // Gera o URL do documento PDF
    const pdfData = doc.output("datauristring")

    // Abre o PDF em uma nova janela
    const newWindow = window.open("", "_blank")
    newWindow.document.write("<html><body><embed width=\"100%\" height=\"100%\" type=\"application/pdf\" src=\"" + pdfData + "\"></body></html>")
    newWindow.document.close()
}

function Imprimir_relatorio(metodo) {

    //Define os textos fixos com base no idioma
    titulos = {
        "inputs": (Obter_idioma() == "pt" ? "DADOS INSERIDOS: " : "INPUT DATA: "),
        "resultados": (Obter_idioma() == "pt" ? "RESULTADO: " : "RESULT: ")
    }

    //OBTÉM A DATA E HORA TUAL
    const options = { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
    const dataHoraFormatada = new Date().toLocaleString(undefined, options)

    if (metodo == "cardozo") {
        Imprimir_cardoso(dataHoraFormatada, titulos)
    } else if (metodo == "la_vergne") {
        Imprimir_la_vergne(dataHoraFormatada, titulos)
    } else if (metodo == "moser") {
        Imprimir_moser(dataHoraFormatada, titulos)

    }
}
