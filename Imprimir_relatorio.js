
function Imprimir_relatorio(metodo) {

    let idioma = Obter_idioma() //pt ou en

    //Define os textos fixos com base no idioma
    let ob = idioma == "pt" ? "Corpo de minério: " : "Orebody: "
    let geo = idioma == "pt" ? "Geometria: " : "Geometry: "
    let hw = "Hanging wall: "
    let fw = "Footwall: "
    let titulo_user_input = idioma == "pt" ? "DADOS INSERIDOS: " : "INPUT DATA: "
    let titulo_resultados = idioma == "pt" ? "PREFERENCIAS: " : "RANKING: "

    //OBTÉM A DATA E HORA TUAL
    const options = { day: "numeric", month: "long", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric" }
    const dataHoraFormatada = new Date().toLocaleString(undefined, options)

    //OBTÉM O ELEMENTO E RETORNA O TEXTO A SER ESCRITO
    let Texto = (id) => {
        const elemento = document.getElementById(id).innerText
        return elemento
    }
    let Texto_select = (id) => {
        const elemento = document.getElementById(id).selectedOptions[0].innerText
        return elemento
    }
    let Texto_input = (id) => {
        const elemento = document.getElementById(id).value
        return elemento
    }

    //DEFINI A FORMATAÇÃO DO PDF
    const identacao = 40
    const line_spacing = 5
    const left_margin = 30
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
    doc.text(dataHoraFormatada, left_margin, y_coord += line_spacing)

    // SUBTITULO INPUTS
    y_coord += 10
    doc.setFontSize(12)
    doc.setFontStyle("bold")
    doc.text(titulo_user_input, left_margin, y_coord += line_spacing)

    // SURFACE MATERIALS
    y_coord += 10
    doc.setFontStyle("bold")
    doc.text(Texto("h2-sm") + ": ", identacao, y_coord += line_spacing)


    const pdfData = doc.output("datauristring") // Gera o URL do documento PDF

    // Abre o PDF em uma nova janela
    const newWindow = window.open("", "_blank")
    newWindow.document.write("<html><body><embed width=\"100%\" height=\"100%\" type=\"application/pdf\" src=\"" + pdfData + "\"></body></html>")
    newWindow.document.close()
}
