// OBTÉM O VALOR DOS RADIO BUTTONS
function Get_input_value(nome) {
    let radio = document.querySelector(`input[name='${nome}']:checked`)
    return radio ? radio.value : ""
}

// AUMENTA A OPACIDADE DAS DIVS DE INPUTS E DESABILITA OS RADIO BUTTONS
function Disable(id) {
    const container = "#" + "div-" + id
    document.querySelector(container).style.opacity = "0.5"

    const classe = "." + "input-" + id
    const elementos = document.querySelectorAll(classe)
    elementos.forEach(element => {
        element.disabled = true
    })
}

// REMOVE A OPACIDADE DAS DIVS DE INPUTS E HABILITA OS RADIO BUTTONS
function Enable(id) {
    const container = "#" + "div-" + id
    document.querySelector(container).style.opacity = "1"

    const classe = "." + "input-" + id
    const elementos = document.querySelectorAll(classe)
    elementos.forEach(element => {
        element.disabled = false
    })
}

// MUUDA A COR DA DIV DO FLUXOGRAMA DE TRANSPARENTE PARA VERDE
function Mostra_green(ids = []) {
    let id = ""
    ids.forEach(element => {
        id = ("fluxograma-" + element)
        document.getElementById(id).style.backgroundColor = "rgb(0 128 0 / 19.5%)"
    })
}

// MOSTRA TODAS AS DIVS COLORIDAS SOBRE OS FLUXOGRAMAS NA COR VERMELHA
function Mostra_classe_red() {
    const elementos = document.querySelectorAll(".div-fluxograma")
    elementos.forEach(element => {
        element.style.backgroundColor = "rgb(249 3 3 / 30.2%)"
    })
}

// OCULTA AS DIVS DO FLUXOGRAMA MUDANDO A COR DE FUNDO PARA TRANSPARENTE
function Oculta_classe(classe) {
    const elementos = document.querySelectorAll(`.${classe}`)
    elementos.forEach(element => {
        element.style.backgroundColor = "transparent"
    })
}



// LOGICA DO FLUXOGRAMA, ILUSTRAÇÕES E INPUTS DO MÉTODO CARDOZO E LA VERGNE
function Cardozo_La_vergne(valor) {

    let resultado = ""

    // DESABILITA TODOS OS INPUTS ON CHANGE DOS SELECTS OU RADIOS
    Disable("rock")
    Disable("depth")
    Disable("prod")

    // OCULTA TODAS AS DIVS COLORIDAS DO FLUXOGRAMA
    Oculta_classe("div-fluxograma")

    // SURFACE MATERIAL
    if (valor["sm"] == "maior") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "shaft"])
    } else if (valor["sm"] == "menor") {
        Enable("rock")
        Mostra_green(["start", "sm"])
    }

    // ROCK MASS
    if (valor["sm"] == "menor" && valor["rock"] == "maior") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "shaft"])
    } else if (valor["sm"] == "menor" && valor["rock"] == "menor") {
        Enable("depth")
        Mostra_green(["start", "sm", "rock"])
    }

    // PROFUNDIDADE
    if (valor["sm"] == "menor" && valor["rock"] == "menor" && valor["depth"] == "maior") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "shaft"])

    } else if (valor["sm"] == "menor" && valor["rock"] == "menor" && (valor["depth"] == "entre" || valor["depth"] == "menor")) {
        Enable("prod")
        Mostra_green(["start", "sm", "rock", "depth-1"])
    }

    // PRODUÇÃO
    if (valor["sm"] == "menor" && valor["rock"] == "menor" && (valor["depth"] == "entre" || valor["depth"] == "menor") && valor["prod"] == "maior") {
        resultado = "correia"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "prod-1", "inclined-belt"])

    } else if (valor["sm"] == "menor" && valor["rock"] == "menor" && (valor["depth"] == "entre" || valor["depth"] == "menor") && (valor["prod"] == "menor" || valor["prod"] == "entre") && valor["depth"] == "menor") {
        resultado = "rampa"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "prod-1", "depth-2", "rampa"])

    } else if (valor["sm"] == "menor" && valor["rock"] == "menor" && (valor["depth"] == "entre" || valor["depth"] == "menor") && valor["prod"] == "menor" && valor["depth"] == "entre") {
        resultado = "rampa"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "prod-1", "depth-2", "prod-2", "rampa"])

    } else if (valor["sm"] == "menor" && valor["rock"] == "menor" && (valor["depth"] == "entre" || valor["depth"] == "menor") && valor["prod"] == "entre" && valor["depth"] == "entre") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "prod-1", "depth-2", "prod-2", "shaft"])
    }

    // RETORNA O RESULTADO PARA A FUNÇÃO CÁLCULO
    return resultado

}

// LOGICA DO FLUXOGRAMA, ILUSTRAÇÕES E INPUTS DO MÉTODO MOSER
function Moser(valor) {

    let resultado = ""

    // DESABILITA TODOS OS INPUTS ON CHANGE DOS SELECTS OU RADIOS
    Disable("rock")
    Disable("sm")
    Disable("depth")
    Disable("prod")
    Disable("open-pit")

    // OCULTA TODAS AS DIVS COLORIDAS DO FLUXOGRAMA
    Oculta_classe("div-fluxograma")

    // SURFACE MATERIAL
    if (valor["logistica"] == "nao") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["logistica", "shaft"])
    } else if (valor["logistica"] == "sim") {
        Enable("rock")
        Mostra_green(["logistica"])
    }

    // SURFACE MATERIAL
    if (valor["logistica"] == "sim" && valor["rock"] == "maior") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["logistica", "rock", "shaft"])
    } else if (valor["logistica"] == "sim" && valor["rock"] == "menor") {
        Enable("sm")
        Mostra_green(["logistica", "rock"])
    }

    // ROCK MASS
    if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor") {
        Mostra_green(["logistica", "rock", "sm"])
        Enable("open-pit")
    } else if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "maior") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["logistica", "rock", "sm", "shaft"])
    }

    // OPEN PIT
    if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && (valor["op"] == "sim" || valor["op"] == "nao")) {
        Mostra_green(["logistica", "rock", "sm", "open-pit"])
        Enable("depth")
    }

    // PROFUNDIDADE OPEN PIT NÃO
    if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["op"] == "nao" && (valor["depth"] == "entre" || valor["depth"] == "maior")) {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-1", "shaft"])
    } else if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["op"] == "nao" && valor["depth"] == "menor") {
        Enable("prod")
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-1"])
    }

    // PRODUÇÃO OPEN PIT NÃO
    if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["depth"] == "menor" && valor["prod"] == "menor") {
        resultado = "rampa"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-1", "prod-1", "rampa"])
    } else if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["depth"] == "menor" && (valor["prod"] == "entre" || valor["prod"] == "maior")) {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-1", "prod-1", "shaft"])
    }

    // PROFUNDIDADE OPEN PIT NÃO
    if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["op"] == "sim" && valor["depth"] == "maior") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-2", "shaft"])
    } else if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["op"] == "sim" && (valor["depth"] == "menor" || valor["depth"] == "entre")) {
        Enable("prod")
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-2"])
    }

    // PRODUÇÃO OPEN PIT SIM
    if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["op"] == "sim" && (valor["depth"] == "menor" || valor["depth"] == "entre") && (valor["prod"] == "menor" || valor["prod"] == "entre")) {
        resultado = "rampa"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-2", "prod-2", "rampa"])
    } else if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["op"] == "sim" && (valor["depth"] == "menor" || valor["depth"] == "entre") && valor["prod"] == "maior") {
        resultado = "shaft"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-2", "prod-2", "shaft"])
    }


    // RETORNA O RESULTADO PARA A FUNÇÃO CÁLCULO
    return resultado
}

// ESCREVE O RESULTADO NA DIV DA SEÇÃO 3
function Escrever_resultado(resultado) {

    let resultados_en = {
        "shaft": "VERTICAL SHAFT HOISTING",
        "rampa": "RAMP HAULAGE BY TRUCK",
        "correia": "INCLINED BELT CONVEYOR",
    }
    let resultados_pt = {
        "shaft": "POÇO",
        "rampa": "RAMPA E CAMINHÕES",
        "correia": "CORREIA TRANSPORTADORA",
    }

    // Define o reusltado conforme o idioma da janela
    resultado = Obter_idioma() == "pt" ? resultados_pt[resultado] : resultados_en[resultado]

    // Se resultado for "undefined", nada será exibido
    const span_resultado_final = document.getElementById("span-resultado-final")
    resultado ? span_resultado_final.innerText = resultado : span_resultado_final.innerText = ""

}

function Calculo(metodo) {
    let valor = {
        "logistica": Get_input_value("radio-logistica"),
        "sm": Get_input_value("radio-sm"),
        "rock": Get_input_value("radio-rock"),
        "op": Get_input_value("radio-open-pit"),
        "depth": document.getElementById("select-depth").value,
        "prod": document.getElementById("select-prod").value
    }

    let resultado = ""
    if (metodo == "cardozo" || metodo == "la_vergne") {
        resultado = Cardozo_La_vergne(valor)
        Imagem_cardozo_la_vergne(resultado)

    } else if (metodo == "moser") {
        resultado = Moser(valor)
        Imagem_moser(resultado, valor)

    }
    Escrever_resultado(resultado)

}