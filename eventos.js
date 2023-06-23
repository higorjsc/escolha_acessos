//BOTÃO SWITCH DE TROCAR IDIOMAS
function Switch_language(metodo) {
    const switch_botao = document.getElementById("checkbox-switch")
    const switch_texto = document.getElementById("switch-texto")

    if (switch_botao.checked) {
        //Configura a posição to texto PT se switch on (página em ingles)
        switch_texto.innerHTML = "PT"
        switch_texto.style.transform = "translate(5px, -6px)"
        English()
    } else {
        //Configura a posição to texto EN se switch on (página em portugues)
        switch_texto.innerHTML = "EN"
        switch_texto.style.transform = "translate(21px, -6px)"
        Portuguese()
    }

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
        //OBS: o off-set do balão é configurado na função Baloes() em design.js
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })

    //BOTÃO SWITCH LANGUAGE
    const switch_language = document.querySelector("#checkbox-switch")
    //false → A página inicia em português
    switch_language.checked = false
    Switch_language(metodo)
    switch_language.addEventListener("change", () => {
        Switch_language(metodo)
    })

    //label do switch
    const switch_label = document.querySelector(".switch-label") 
    //mouseover no label, não na checkbox invisível
    switch_label.addEventListener("mouseover", () => {
        Baloes("switch-language")
    })
    switch_label.addEventListener("mouseleave", () => Balao_sai())

    // DIVS DO FLUXOGRAMA
    const divs_fluxograma = document.querySelectorAll(".div-fluxograma")
    divs_fluxograma.forEach((elemento) => {
        elemento.addEventListener("mouseover", () => Baloes(elemento.id, metodo))
        elemento.addEventListener("mouseout", () => Balao_sai())
    })

    // RADIO BUTTONS
    const input_parametros = document.querySelectorAll("input[type='radio']")
    input_parametros.forEach((elemento) => {
        elemento.addEventListener("change", () => Calculo(metodo))
    })

    // SELECT
    const select = document.querySelectorAll("select")
    select.forEach((elemento) => {
        elemento.addEventListener("change", () => Calculo(metodo))
    })

    Calculo(metodo)


}
