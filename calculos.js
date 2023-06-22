
function Get_input_value(nome) {
    let radio = document.querySelector(`input[name='${nome}']:checked`)
    return radio ? radio.value : null
}

function Disable(div, classe) {

    const container = document.querySelector(`#${div}`)
    container.style.opacity = "0.5"

    const elementos = document.querySelectorAll(`.${classe}`)
    elementos.forEach(element => {
        element.disabled = true
    })
}

function Enable(div, classe) {

    const container = document.querySelector(`#${div}`)
    container.style.opacity = "1"

    const elementos = document.querySelectorAll(`.${classe}`)
    elementos.forEach(element => {
        element.disabled = false
    })
}
function Mostra_green(id) {
    const elemento = document.getElementById(id)
    elemento.style.display = "block"
    elemento.style.backgroundColor = "rgb(0 128 0 / 19.5%)"
    elemento.style.borderColor = "rgb(0 128 0 / 19.5%)"
}

function Mostra_red(id) {
    const elemento = document.getElementById(id)
    elemento.style.display = "block"
    elemento.style.backgroundColor = "rgb(249 3 3 / 30.2%)"
    elemento.style.borderColor = "rgb(249 3 3 / 30.2%)"
}

function Mostra_classe_red() {
    const elementos = document.querySelectorAll(".div-fluxograma")
    elementos.forEach(element => {
        element.style.display = "block"
        element.style.backgroundColor = "rgb(249 3 3 / 30.2%)"
        element.style.borderColor = "rgb(249 3 3 / 30.2%)"
    })
}
function Oculta_classe() {
    const elementos = document.querySelectorAll(".div-fluxograma")
    elementos.forEach(element => {
        element.style.display = "none"
    })
}

function Oculta_div(id) {
    const elemento = document.getElementById(id)
    elemento.style.display = "none"
}

function Imagem(resultado) {
    const rampa = document.getElementById("rampa")
    const shaft = document.getElementById("shaft")

    rampa.style.display = "none"
    rampa.style.display = "none"
    shaft.style.display = "none"

    if (resultado.includes("POÇO")) {
        shaft.style.display = "block"
    } else if (resultado.includes("RAMPA")) {
        rampa.style.display = "block"
    } else if (resultado.includes("CORREIA")) {
        rampa.style.display = "block"
    } 
}

function Calculo() {
    const input_sm = Get_input_value("radio-sm")
    const input_rmr = Get_input_value("radio-rmr")
    const input_profundidade = document.getElementById("select-profundidade").value
    const input_producao = document.getElementById("select-production").value

    let resultado = ""

    Disable("div-rmr", "input-rmr")
    Disable("div-profundidade", "input-profundidade")
    Disable("div-production", "input-production")

    Oculta_classe()

    if (input_sm == "maior_70") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-shaft")
    } else if (input_sm == "menor_70") {
        Enable("div-rmr", "input-rmr")
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
    }

    if ((input_sm == "menor_70") && (input_rmr == "V")) {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-shaft")
    } else if ((input_sm == "menor_70") && (input_rmr == "<V")) {
        Enable("div-profundidade", "input-profundidade")
        Mostra_green("div-rock-mass")

    }

    if (input_sm == "menor_70" && input_rmr == "<V" && input_profundidade == "maior_1700") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-menor-1700")
        Mostra_green("div-shaft")
    } else if (input_sm == "menor_70" && input_rmr == "<V" && (input_profundidade == "700_1700" || input_profundidade == "menor_700")) {
        Enable("div-production", "input-production")
        Mostra_green("div-profundidade-menor-1700")
    }

    if (input_producao == "maior_7.5" && input_sm == "menor_70" && input_rmr == "<V" && (input_profundidade == "700_1700" || input_profundidade == "menor_700")) {
        resultado = "CORREIA TRANSPORTADORA"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-menor-1700")
        Mostra_green("div-production-75")
        Mostra_green("div-inclined-belt")

    } else if ((input_producao == "menor_1.5" || input_producao == "1.5_7.5") && input_sm == "menor_70" && input_rmr == "<V" && input_profundidade == "menor_700") {
        resultado = "RAMPA E CAMINHÕES"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-menor-1700")
        Mostra_green("div-production-75")
        Mostra_green("div-profundidade-menor-700")
        Mostra_green("div-ramp-truck")

    } else if (input_producao == "menor_1.5" && input_sm == "menor_70" && input_rmr == "<V" && input_profundidade == "700_1700") {
        resultado = "RAMPA E CAMINHÕES"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-menor-1700")
        Mostra_green("div-production-75")
        Mostra_green("div-profundidade-menor-700")
        Mostra_green("div-production-15")
        Mostra_green("div-ramp-truck")

    } else if (input_producao == "1.5_7.5" && input_sm == "menor_70" && input_rmr == "<V" && input_profundidade == "700_1700") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-menor-1700")
        Mostra_green("div-production-75")
        Mostra_green("div-profundidade-menor-700")
        Mostra_green("div-production-15")
        Mostra_green("div-shaft")

    }

    Imagem(resultado)

    const span_resultado_final = document.getElementById("span-resultado-final")
    span_resultado_final.innerText = resultado

    // console.log(resultado)
    // console.log(input_sm)
    // console.log(input_rmr)
    // console.log(input_profundidade)
    // console.log(input_producao)


}