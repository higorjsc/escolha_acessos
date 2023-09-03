function Switch_language() {
    const switch_botao = document.getElementById("checkbox-switch")
    const switch_texto = document.getElementById("switch-texto")

    // Armazena o valor da checkbox de troca de idioma
    let idioma
    if (switch_botao.checked) {
        // Configura a posição do texto PT se switch on (página em inglês)
        switch_texto.innerHTML = "PT"
        switch_texto.style.transform = "translate(5px, -6px)"
        idioma = "en"
    } else {
        // Configura a posição do texto EN se switch off (página em português)
        switch_texto.innerHTML = "EN"
        switch_texto.style.transform = "translate(21px, -6px)"
        idioma = "pt"
    }

    // Chame as funções para alterar o idioma da página conforme a preferência do usuário
    Language(idioma)
    Language_page(idioma)

    const frame = Iframe_ativo()
    // Envia uma mensagem para o Iframe ativo para trocar de idioma também
    if (frame) frame.contentWindow.postMessage("CallLanguage", "*")
}

function Armazenar_valor(objeto) {
    // Verifica se o armazenamento local é suportado
    if (typeof (Storage) !== "undefined") {

        // Obtém o valor atual do input
        let type = objeto.type
        let valor
        if (type == "checkbox") {
            valor = objeto.checked ? true : false
        } else {
            valor = objeto.value
        }

        // Armazena o valor do input no armazenamento local
        localStorage.setItem(objeto.id, valor)
    } 
}

function Verificar_memoria(id) {
    // Verifica se o armazenamento local é suportado
    if (typeof (Storage) !== "undefined") {

        // Tenta recuperar o valor armazenado para o input especificado pelo id
        let valor = localStorage.getItem(id)

        // Se houver um valor armazenado, verifica se é uma string representando um booleano
        if (valor !== null) {
            if (valor === "true") {
                return true
            } else if (valor === "false") {
                return false
            } else {
                return valor
            }
        } else {
            // Caso não haja valor armazenado, retorna false
            return null
        }

    } else {
        return null
    }
}

// OBTÉM O ID DO IFRAME ATIVO NO POP UP
function Iframe_ativo() {
    const iframes = Array.from(document.querySelectorAll("iframe"))
    const iframeAtivo = iframes.find(element => element.style.display === "block")
    return iframeAtivo || null
}

// FECHA A DIV QUE CONTÉM OS IFRAMES-POP-UPS
function Fechar_pop_up() {
    const pop_up = document.getElementById("main-pop-up")
    pop_up.style.display = "none"
}

// ABRE A DIV QUE CONTÉM OS IFRAMES-POP-UPS E DEFINE AS DIMENSÓES
function Configurar_pop_up(id) {

    // Modifica o id do span-titulo do pop up para ser diferenciado na função de trocar idiomas
    let Modificar_id = (id = "none") => {
        const titulo = document.querySelector(".titulo-pop-up")
        titulo.id = "titulo-pop-up-" + id
    }

    // Define as dimensões de cada pop-up
    const pop_up = document.getElementById("main-pop-up")
    if (id.includes("creditos")) {
        pop_up.style.width = "550px"
        pop_up.style.height = "500px"
        pop_up.style.left = "45%"
        pop_up.style.top = "25%"
        Modificar_id("creditos")
    } else if (id.includes("referencias")) {
        pop_up.style.width = "550px"
        pop_up.style.height = "500px"
        pop_up.style.left = "45%"
        pop_up.style.top = "25%"
        Modificar_id("referencias")
    } else if (id.includes("bug_report")) {
        pop_up.style.width = "420px"
        pop_up.style.height = "400px"
        pop_up.style.left = "45%"
        pop_up.style.top = "25%"
        Modificar_id("report_bug")
    }
    pop_up.style.display = "block"
}

// ABRE QUALQUER IFRAME-POP-UP
function Open_iframe(id_trigger) {

    // Desabilita o display de todos os iframes
    let Desabilitar_iframe = () => {
        const iframes = document.querySelectorAll("iframe")
        iframes.forEach(element => {
            element.style.display = "none"
        })
    }

    Desabilitar_iframe()
    let frame = document.getElementById(("iframe-" + id_trigger))

    // Chama a função que configura largura, altura e titulo da janela pop up
    Configurar_pop_up(id_trigger)

    // Cria uma URL
    const endereco = ("components/" + id_trigger +"/" + id_trigger + ".html")
    frame.src = endereco
    frame.style.display = "block"

    // ADICIONA O TITULO DO POP UP
    Language_page()
}

// CONFIGURA O MOVIMENTO DOS POP UPS. OBS: ESSA FUNÇÃO DEVE SER APRIMORADA.
function Mover_pop_up() {

    const main_pop_up = document.getElementById("main-pop-up")
    const barra_pop_up = document.getElementById("barra-pop-up")
    const overlay_div = document.getElementById("overlay-div")

    let position = { x: 0, y: 0 }
    let limite = {
        right: 0,
        left: 0,
        top: 0,
        bottom: 0
    }

    // Interrompe o movimento do pop up
    let Interromper = () => {
        document.removeEventListener("mousemove", Move_element)
        overlay_div.style.display = "none"
    }

    // Eventos que interromperão o movimento do pop up 
    document.onmouseup = () => Interromper()
    document.onscroll = () => Interromper()
    document.onkeydown = () => Interromper()
    document.onclick = () => Interromper()

    barra_pop_up.addEventListener("mousedown", (event) => {

        // Coloca uma div invisível sobre toda a página e todo o pop up, para evitar interações durante o arraste
        overlay_div.style.display = "block"

        // Impede o usuário de selecionar textos enquanto arrasta o pop up
        document.body.style.userSelect = "none"

        // Calcula a largura e altura do body. Os valores variam com o scroll da página (manter cálculo dentro desse evento)
        let body_height = document.body.clientHeight - 5
        let body_width = document.body.clientWidth

        // Define a posição do mouse em relação ao pop up
        position.x = event.clientX - main_pop_up.offsetLeft
        position.y = event.clientY - main_pop_up.offsetTop

        // Define os limites de movimento do pop up
        limite.right = body_width - main_pop_up.clientWidth
        limite.bottom = body_height - main_pop_up.clientHeight

        // Chama a função para mover
        document.addEventListener("mousemove", Move_element)
    })

    // Move o pop up enquanto mousedown
    let Move_element = (event) => {

        let x = event.clientX - position.x
        let y = event.clientY - position.y

        // Conserva os limites de movimento estabelecidos
        x = x < limite.left ? limite.left : x
        x = x > limite.right ? limite.right : x
        y = y < limite.top ? limite.top : y
        y = y > limite.bottom ? limite.bottom : y

        main_pop_up.style.left = `${x}px`
        main_pop_up.style.top = `${y}px`
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
        balao.style.top = event.clientY + "px"
        balao.style.left = event.clientX + "px"
    })


    //BOTÃO SWITCH LANGUAGE
    let switch_language = document.querySelector("#checkbox-switch")
    switch_language.onchange = () => {
        Switch_language()
        Armazenar_valor(switch_language)
    }
    switch_language.checked = Verificar_memoria(switch_language.id) != null ? Verificar_memoria(switch_language.id) : false

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

    // FECHAR POP UP
    let pop_ups = document.getElementById("fechar-pop-up")
    pop_ups.addEventListener("click", Fechar_pop_up, false)
    document.addEventListener("keydown", function (event) {
        if (event.code === "Escape") {
            Fechar_pop_up()
        }
    })

    // NENHUMA IMAGEM É ARRASTÁVEL
    const imagens = document.querySelectorAll("img")
    imagens.forEach((element) => {
        element.draggable = false
    })

    // ABRIR POP UPS DO FOOTER DA JANELA PRINCIPAL
    const spans_footer = document.querySelectorAll(".span-footer-2")
    spans_footer.forEach((element) => {
        element.onclick = () => Open_iframe(element.id)
    })

    Switch_language()
    Mover_pop_up()
    Calculo(metodo)
}
