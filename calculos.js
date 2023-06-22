
function Get_input_value(nome) {
    let radio = document.querySelector(`input[name='${nome}']:checked`)
    return radio ? radio.value : null
}

function Disable(metodo, div, classe) {

    const container = document.querySelector(`#${div}`)
    container.style.opacity = "0.5"

    const elementos = document.querySelectorAll(`.${classe}`)
    elementos.forEach(element => {
        element.disabled = true
    })
}

function Enable(metodo, div, classe) {

    const container = document.querySelector(`#${div}`)
    container.style.opacity = "1"

    const elementos = document.querySelectorAll(`.${classe}`)
    elementos.forEach(element => {
        element.disabled = false
    })
}
function Mostra_green(metodo, id) {
    const elemento = document.getElementById(id)
    elemento.style.display = "block"
    elemento.style.backgroundColor = "rgb(0 128 0 / 19.5%)"
    elemento.style.borderColor = "rgb(0 128 0 / 19.5%)"
}

function Mostra_red(metodo, id) {
    const elemento = document.getElementById(id)
    elemento.style.display = "block"
    elemento.style.backgroundColor = "rgb(249 3 3 / 30.2%)"
    elemento.style.borderColor = "rgb(249 3 3 / 30.2%)"
}

function Mostra_classe_red(metodo) {
    const elementos = document.querySelectorAll(".div-fluxograma")
    elementos.forEach(element => {
        element.style.display = "block"
        element.style.backgroundColor = "rgb(249 3 3 / 30.2%)"
        element.style.borderColor = "rgb(249 3 3 / 30.2%)"
    })
}
function Oculta_classe(metodo) {
    const elementos = document.querySelectorAll(".div-fluxograma")
    elementos.forEach(element => {
        element.style.display = "none"
    })
}

function Oculta_div(metodo, id) {
    const elemento = document.getElementById(id)
    elemento.style.display = "none"
}

function Calculo(metodo) {
    const input_sm = Get_input_value("radio-sm")
    const input_rmr = Get_input_value("radio-rmr")
    const input_profundidade = document.getElementById("select-profundidade").value
    const input_producao = document.getElementById("select-production").value

    let resultado

    Disable(metodo, "div-rmr", "radio-rmr")
    Disable(metodo, "div-profundidade", "radio-profundidade")
    Disable(metodo, "div-production", "radio-production")
    Oculta_classe(metodo)
    if (input_sm == "maior_70") {
        resultado = "SHAFT"
        Mostra_classe_red(metodo)
        Mostra_green(metodo, "div-start")
        Mostra_green(metodo, "div-surface-material")
        Mostra_green(metodo, "div-shaft")
    } else if (input_sm == "menor_70") {
        Enable(metodo, "div-rmr", "radio-rmr")
        Mostra_green(metodo, "div-start")
        Mostra_green(metodo, "div-surface-material")

    }

    if ((input_sm == "menor_70") && (input_rmr == "V")) {
        resultado = "SHAFT"
        Mostra_classe_red(metodo)
        Mostra_green(metodo, "div-start")
        Mostra_green(metodo, "div-surface-material")
        Mostra_green(metodo, "div-rock-mass")
        Mostra_green(metodo, "div-shaft")
    } else if ((input_sm == "menor_70") && (input_rmr == "<V")) {
        Enable(metodo, "div-profundidade", "radio-profundidade")
        Mostra_green(metodo, "div-rock-mass")

    }

    if (input_sm == "menor_70" && input_rmr == "<V" && input_profundidade == "maior_1700") {
        resultado = "SHAFT"
        Mostra_classe_red(metodo)
        Mostra_green(metodo, "div-start")
        Mostra_green(metodo, "div-surface-material")
        Mostra_green(metodo, "div-rock-mass")
        Mostra_green(metodo, "div-profundidade-menor-1700")
        Mostra_green(metodo, "div-shaft")
    } else if (input_sm == "menor_70" && input_rmr == "<V" && (input_profundidade == "700_1700" || input_profundidade == "menor_700")) {
        Enable(metodo, "div-production", "radio-production")
        Mostra_green(metodo, "div-profundidade-menor-1700")
    }
    if (input_producao == "maior_7.5" && input_sm == "menor_70" && input_rmr == "<V" && (input_profundidade == "700_1700" || input_profundidade == "menor_700")) {
        resultado = "INCLINED BELT"
        Mostra_classe_red(metodo)
        Mostra_green(metodo, "div-start")
        Mostra_green(metodo, "div-surface-material")
        Mostra_green(metodo, "div-rock-mass")
        Mostra_green(metodo, "div-profundidade-menor-1700")
        Mostra_green(metodo, "div-production-75")
        Mostra_green(metodo, "div-inclined-belt")

    } else if (input_producao == "1.5_7.5" && input_sm == "menor_70" && input_rmr == "<V" && input_profundidade == "menor_700") {
        resultado = "RAMPA E CAMINHÕES"
        Mostra_classe_red(metodo)
        Mostra_green(metodo, "div-start")
        Mostra_green(metodo, "div-surface-material")
        Mostra_green(metodo, "div-rock-mass")
        Mostra_green(metodo, "div-profundidade-menor-1700")
        Mostra_green(metodo, "div-production-75")
        Mostra_green(metodo, "div-profundidade-menor-700")
        Mostra_green(metodo, "div-ramp-truck")

    } else if (input_producao == "menor_1.5" && input_sm == "menor_70" && input_rmr == "<V" && input_profundidade == "700_1700") {
        resultado = "RAMPA E CAMINHÕES"
        Mostra_classe_red(metodo)
        Mostra_green(metodo, "div-start")
        Mostra_green(metodo, "div-surface-material")
        Mostra_green(metodo, "div-rock-mass")
        Mostra_green(metodo, "div-profundidade-menor-1700")
        Mostra_green(metodo, "div-production-75")
        Mostra_green(metodo, "div-profundidade-menor-700")
        Mostra_green(metodo, "div-production-15")
        Mostra_green(metodo, "div-ramp-truck")

    } else if (input_producao == "1.5_7.5" && input_sm == "menor_70" && input_rmr == "<V" && input_profundidade == "700_1700") {
        resultado = "SHAFT"
        Mostra_classe_red(metodo)
        Mostra_green(metodo, "div-start")
        Mostra_green(metodo, "div-surface-material")
        Mostra_green(metodo, "div-rock-mass")
        Mostra_green(metodo, "div-profundidade-menor-1700")
        Mostra_green(metodo, "div-production-75")
        Mostra_green(metodo, "div-profundidade-menor-700")
        Mostra_green(metodo, "div-production-15")
        Mostra_green(metodo, "div-shaft")

    }



    const span_resultado_final = document.getElementById("span-resultado-final")
    span_resultado_final.innerText = resultado

    // console.log(resultado)
    // console.log(input_sm)
    // console.log(input_rmr)
    // console.log(input_profundidade)
    // console.log(input_producao)


}