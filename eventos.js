//BOTÃO SWITCH DE TROCAR IDIOMAS
function Switch_language() {
    const switch_botao = document.getElementById("checkbox-switch")
    const switch_texto = document.getElementById("switch-texto")
    let idioma
    if (switch_botao.checked) {
        //Configura a posição to texto PT se switch on (página em ingles)
        switch_texto.innerHTML = "PT"
        switch_texto.style.transform = "translate(5px, -6px)"
        idioma = "en"
    } else {
        //Configura a posição to texto EN se switch on (página em portugues)
        switch_texto.innerHTML = "EN"
        switch_texto.style.transform = "translate(21px, -6px)"
        idioma = "pt"
    }

    Language(idioma)

}

function Obter_idioma() {
    let idioma = document.getElementById("titulo-section-1").innerText
    idioma = idioma.includes("PARÂMETROS") ? "pt" : "en"
    return idioma
}

function Eventos(metodo) {

    //POSICIONA O BALÃO DE AJUDA NA POSIÇÃO DO CURSOR
    var balao = document.getElementById("balao")
    document.addEventListener("mousemove", function (event) {
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    //BOTÃO SWITCH LANGUAGE
    const switch_language = document.querySelector("#checkbox-switch")
    switch_language.onchange = () => Switch_language()

    //BOTÃO IMPRIMIR
    const botao_imprimir = document.querySelector("#botao-imprimir")
    botao_imprimir.onclick = () => Imprimir_relatorio(metodo)

    //MOUSE OVER SWITCH
    const switch_label = document.querySelector("#switch-label")
    switch_label.onmouseover = () => Baloes(switch_label.id)
    switch_label.onmouseout = () => Balao_sai()

    // DIVS DO FLUXOGRAMA
    const divs_fluxograma = document.querySelectorAll(".div-fluxograma")
    divs_fluxograma.forEach((elemento) => {
        elemento.onmouseover = () => Baloes(elemento.id, metodo)
        elemento.onmouseout = () => Balao_sai()
    })

    // RADIO BUTTONS
    const radios = document.querySelectorAll("input[type='radio']")
    radios.forEach((elemento) => {
        elemento.onchange = () => Calculo(metodo)
        elemento.onmouseover = () => Baloes(elemento.id, metodo)
        elemento.onmouseout = () => Balao_sai()
    })

    // MOUSE OVER DOS RADIO BUTTONS
    const label_radio_button = document.querySelectorAll(".radio-label")
    label_radio_button.forEach((elemento) => {
        elemento.onmouseover = () => Baloes(elemento.id, metodo)
        elemento.onmouseout = () => Balao_sai()
    })

    // SELECT
    const select = document.querySelectorAll("select")
    select.forEach((elemento) => {
        elemento.onchange = () => Calculo(metodo)
        elemento.onmouseover = () => Baloes(elemento.id, metodo)
        elemento.onmouseout = () => Balao_sai()
    })

    Switch_language()
    Calculo(metodo)
}
