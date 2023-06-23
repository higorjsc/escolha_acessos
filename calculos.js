// OBTÉM O VALOR DOS RADIO BUTTONS
function Get_input_value(nome) {
    let radio = document.querySelector(`input[name='${nome}']:checked`)
    return radio ? radio.value : null
}

// AUMENTA A OPACIDADE DAS DIVS DE INPUTS E DESABILITA OS RADIO BUTTONS
function Disable(div, classe) {

    const container = document.querySelector(`#${div}`)
    container.style.opacity = "0.5"

    const elementos = document.querySelectorAll(`.${classe}`)
    elementos.forEach(element => {
        element.disabled = true
    })
}

// REMOVE A OPACIDADE DAS DIVS DE INPUTS E HABILITA OS RADIO BUTTONS
function Enable(div, classe) {

    const container = document.querySelector(`#${div}`)
    container.style.opacity = "1"

    const elementos = document.querySelectorAll(`.${classe}`)
    elementos.forEach(element => {
        element.disabled = false
    })
}

// MOSTRA UMA DIV SOBRE O FLUXOGRAMA NA COR VERDE
function Mostra_green(id) {
    const elemento = document.getElementById(id)
    elemento.style.display = "block"
    elemento.style.backgroundColor = "rgb(0 128 0 / 19.5%)"
    elemento.style.borderColor = "rgb(0 128 0 / 19.5%)"
}

// MOSTRA TODAS AS DIVS COLORIDAS SOBRE OS FLUXOGRAMAS NA COR VERMELHA
function Mostra_classe_red() {
    const elementos = document.querySelectorAll(".div-fluxograma")
    elementos.forEach(element => {
        element.style.display = "block"
        element.style.backgroundColor = "rgb(249 3 3 / 30.2%)"
        element.style.borderColor = "rgb(249 3 3 / 30.2%)"
    })
}

function Oculta_classe(classe) {
    const elementos = document.querySelectorAll(`.${classe}`)
    elementos.forEach(element => {
        element.style.display = "none"
    })
}

// ALTERA A ILUSTRAÇÃO DO MÉTODO CARDOZO CONFORME O RESULTADO DO FLUXOGRAMA
function Imagem_cardozo_la_vergne(resultado) {
    const rampa = document.getElementById("rampa")
    // const shaft = document.getElementById("shaft-1")
    const truck = document.getElementById("truck")
    const vent = document.getElementById("vent")
    const shaft = document.getElementById("shaft-2")

    let correia = (visibilidade) => {
        classe = document.querySelectorAll(".div-img-correia")
        classe.forEach(element => {
            element.style.display = visibilidade
        })
    }

    rampa.style.display = "none"
    rampa.style.display = "none"
    shaft.style.display = "none"
    truck.style.display = "none"
    vent.style.display = "none"
    correia("none")

    if (resultado.includes("POÇO")) {
        shaft.style.display = "block"
        vent.style.display = "block"
    } else if (resultado.includes("RAMPA")) {
        rampa.style.display = "block"
        truck.style.display = "block"
    } else if (resultado.includes("CORREIA")) {
        vent.style.display = "block"
        correia("block")
    }
}


// LOGICA DO FLUXOGRAMA, ILUSTRAÇÕES E INPUTS DO MÉTODO CARDOZO E LA VERGNE
function Cardozo_La_vergne() {
    const input_sm = Get_input_value("radio-sm")
    const input_rmr = Get_input_value("radio-rock-mass")
    const input_profundidade = document.getElementById("select-profundidade").value
    const input_producao = document.getElementById("select-production").value

    let resultado = ""
    let brench

    // DESABILITA TODOS OS INPUTS ON CHANGE DOS SELECTS OU RADIOS
    Disable("div-rock", "input-rock-mass")
    Disable("div-profundidade", "input-profundidade")
    Disable("div-production", "input-production")

    // OCULTA TODAS AS DIVS COLORIDAS DO FLUXOGRAMA
    Oculta_classe("div-fluxograma")

    // SURFACE MATERIAL
    if (input_sm == "maior_70" || input_sm == "sim") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-shaft")
    } else if (input_sm == "menor_70" || input_sm == "nao") {
        Enable("div-rock", "input-rock-mass")
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        brench = 1
    }

    // ROCK MASS
    if (brench == 1 && (input_rmr == "V" || input_rmr == "nao")) {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-shaft")
    } else if (brench == 1 && (input_rmr == "<V" || input_rmr == "sim")) {
        Enable("div-profundidade", "input-profundidade")
        Mostra_green("div-rock-mass")
        brench = 2
    }

    // PROFUNDIDADE
    if (brench == 2 && input_profundidade == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-1")
        Mostra_green("div-shaft")
    } else if (brench == 2 && (input_profundidade == "entre" || input_profundidade == "menor")) {
        Enable("div-production", "input-production")
        Mostra_green("div-profundidade-1")
        brench = 3
    }

    // PRODUÇÃO
    if (brench == 3 && input_producao == "maior") {
        resultado = "CORREIA TRANSPORTADORA"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-1")
        Mostra_green("div-production-1")
        Mostra_green("div-inclined-belt")
    } else if (brench == 3 && (input_producao == "menor" || input_producao == "entre") && input_profundidade == "menor") {
        resultado = "RAMPA E CAMINHÕES"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-1")
        Mostra_green("div-production-1")
        Mostra_green("div-profundidade-2")
        Mostra_green("div-ramp-truck")
    } else if (brench == 3 && input_producao == "menor" && input_profundidade == "entre") {
        resultado = "RAMPA E CAMINHÕES"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-1")
        Mostra_green("div-production-1")
        Mostra_green("div-profundidade-2")
        Mostra_green("div-production-2")
        Mostra_green("div-ramp-truck")
    } else if (brench == 3 && input_producao == "entre" && input_profundidade == "entre") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("div-start")
        Mostra_green("div-surface-material")
        Mostra_green("div-rock-mass")
        Mostra_green("div-profundidade-1")
        Mostra_green("div-production-1")
        Mostra_green("div-profundidade-2")
        Mostra_green("div-production-2")
        Mostra_green("div-shaft")
    }

    Imagem_cardozo_la_vergne(resultado)

    const span_resultado_final = document.getElementById("span-resultado-final")
    span_resultado_final.innerText = resultado



}

// LOGICA DO FLUXOGRAMA, ILUSTRAÇÕES E INPUTS DO MÉTODO MOSER
function Moser() {
    const input_sm = Get_input_value("radio-sm")
    const input_rock = Get_input_value("radio-rock-mass")
    const input_op = Get_input_value("radio-op")
    const input_profundidade = document.getElementById("select-profundidade").value
    const input_producao = document.getElementById("select-production").value

    console.log(input_profundidade)
    let resultado = ""
    let brench = 0

    // DESABILITA TODOS OS INPUTS ON CHANGE DOS SELECTS OU RADIOS
    Disable("div-sm", "input-sm")
    Disable("div-profundidade", "input-profundidade")
    Disable("div-production", "input-production")
    Disable("div-op", "input-op")

    // OCULTA TODAS AS DIVS COLORIDAS DO FLUXOGRAMA
    Oculta_classe("div-fluxograma")

    // SURFACE MATERIAL
    if (input_rock == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-shaft")
    } else if (input_rock == "menor") {
        Enable("div-sm", "input-sm")
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-rock-mass")
    }

    // ROCK MASS
    if (input_rock == "menor" && input_sm == "menor") {
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-surface-material")
        Enable("div-op", "input-op")
    } else if (input_rock == "menor" && input_sm == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-surface-material")
        Mostra_green("fluxograma-shaft")
    }

    if (input_rock == "menor" && input_sm == "menor" && (input_op == "sim" || input_op == "nao")) {
        Mostra_green("fluxograma-open-pit")
        Enable("div-profundidade", "input-profundidade")
    }

    // PROFUNDIDADE OPEN PIT NÃO
    if (input_rock == "menor" && input_sm == "menor" && input_op == "nao" && (input_profundidade == "entre" || input_profundidade == "maior")) {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-surface-material")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-open-pit")
        Mostra_green("fluxograma-profundidade-1")
        Mostra_green("fluxograma-shaft")

    } else if (input_rock == "menor" && input_sm == "menor" && input_op == "nao" && input_profundidade == "menor") {
        Enable("div-production", "input-production")
        Mostra_green("fluxograma-profundidade-1")
    }

    // PRODUÇÃO OPEN PIT NÃO
    if (input_rock == "menor" && input_sm == "menor" && input_profundidade == "menor" && input_producao == "menor") {
        resultado = "RAMPA"
        Mostra_classe_red()
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-surface-material")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-open-pit")
        Mostra_green("fluxograma-profundidade-1")
        Mostra_green("fluxograma-production-1")
        Mostra_green("fluxograma-rampa")
    } else if (input_rock == "menor" && input_sm == "menor" && input_profundidade == "menor" && (input_producao == "entre" || input_producao == "maior")) {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-surface-material")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-open-pit")
        Mostra_green("fluxograma-profundidade-1")
        Mostra_green("fluxograma-production-1")
        Mostra_green("fluxograma-shaft")
    }

    // PROFUNDIDADE OPEN PIT NÃO
    if (input_rock == "menor" && input_sm == "menor" && input_op == "sim" && input_profundidade == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-surface-material")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-open-pit")
        Mostra_green("fluxograma-profundidade-2")
        Mostra_green("fluxograma-shaft")

    } else if (input_rock == "menor" && input_sm == "menor" && input_op == "sim" && (input_profundidade == "menor" || input_profundidade == "entre")) {
        Enable("div-production", "input-production")
        Mostra_green("fluxograma-profundidade-2")
    }

    // PRODUÇÃO OPEN PIT SIM
    if (input_rock == "menor" && input_sm == "menor" && input_op == "sim" && (input_profundidade == "menor" || input_profundidade == "entre") && (input_producao == "menor" || input_producao == "entre")) {
        resultado = "RAMPA"
        Mostra_classe_red()
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-surface-material")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-open-pit")
        Mostra_green("fluxograma-profundidade-2")
        Mostra_green("fluxograma-production-2")
        Mostra_green("fluxograma-rampa")
    } else if (input_rock == "menor" && input_sm == "menor" && input_op == "sim" && (input_profundidade == "menor" || input_profundidade == "entre") && input_producao == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green("fluxograma-trucks")
        Mostra_green("fluxograma-surface-material")
        Mostra_green("fluxograma-rock-mass")
        Mostra_green("fluxograma-open-pit")
        Mostra_green("fluxograma-profundidade-2")
        Mostra_green("fluxograma-production-2")
        Mostra_green("fluxograma-shaft")
    }




    Imagem_cardozo_la_vergne(resultado)

    const span_resultado_final = document.getElementById("span-resultado-final")
    span_resultado_final.innerText = resultado
}

function Calculo(metodo) {
    if (metodo == "cardozo") {
        Cardozo_La_vergne()
    } else if (metodo == "la_vergne") {
        Cardozo_La_vergne()
    } else if (metodo == "moser") {
        Moser()
    }
}