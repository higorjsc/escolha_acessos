// OBTÉM O VALOR DOS RADIO BUTTONS
function Get_input_value(nome) {
    let radio = document.querySelector(`input[name='${nome}']:checked`)
    return radio ? radio.value : ''
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

function Mostra_green(ids = []) {
    let id = ""
    ids.forEach(element => {
        id = ("fluxograma-" + element)
        document.getElementById(id).style.backgroundColor = "rgb(0 128 0 / 19.5%)"
        document.getElementById(id).style.borderColor = "rgb(0 128 0 / 19.5%)"
    })
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
        element.style.backgroundColor = "transparent"
    })
}


function Display_img(ids = [], visibilidade) {

    ids.forEach(element => {
        element.style.display = visibilidade
    })

}

// ALTERA A ILUSTRAÇÃO DO MÉTODO CARDOZO CONFORME O RESULTADO DO FLUXOGRAMA
function Imagem_cardozo_la_vergne(resultado, valor) {

    // OCULTA OU MOSTRA AS CORREIAS
    let correia = (visibilidade) => {
        classe = document.querySelectorAll(".div-img-correia")
        classe.forEach(element => {
            element.style.display = visibilidade
        })
    }

    // OCULTA OU MOSTRA CADA IMAGEM
    let Display_img = (ids = [], visibilidade) => {
        ids.forEach(id => {
            document.getElementById(id).style.display = visibilidade
        })
    }

    // Oculta as imagens com cada change dos inputs
    Display_img(['rampa', 'truck', 'vent', 'shaft-2', 'shaft-1'], 'none')
    correia("none")

    // Mostra imagens com base no resultado
    if (resultado.includes("POÇO")) {
        Display_img(['shaft-2', 'vent'], 'block')
    } else if (resultado.includes("RAMPA")) {
        Display_img(['rampa', 'truck'], 'block')
    } else if (resultado.includes("CORREIA")) {
        Display_img(['vent'], 'block')
        correia("block")
    }
}

// ALTERA A ILUSTRAÇÃO DO MÉTODO CARDOZO CONFORME O RESULTADO DO FLUXOGRAMA
function Imagem_moser(resultado, valor) {

    // OCULTA OU MOSTRA AS CORREIAS
    let correia = (visibilidade) => {
        classe = document.querySelectorAll(".div-img-correia")
        classe.forEach(element => {
            element.style.display = visibilidade
        })
    }

    // OCULTA OU MOSTRA CADA IMAGEM
    let Display_img = (ids = [], visibilidade) => {
        ids.forEach(id => {
            document.getElementById(id).style.display = visibilidade
        })
    }
    let pit
    if (valor['logistica'] == 'sim' && valor['rock'] == 'menor' && valor['sm'] == 'menor' && valor['op'] == 'sim') {
        pit = true
    } else {
        pit = false
    }
    console.log(pit)
    // Oculta as imagens com cada change dos inputs
    Display_img(['rampa','rampa-pit', 'truck', 'vent', 'vent-pit', 'shaft', 'shaft-pit'], 'none')
    correia("none")

    if (pit) {
        Display_img(['superficie', 'usina'], 'none')
        Display_img(['superficie-pit', 'usina-pit'], 'block')
        // Mostra imagens com base no resultado
        if (resultado.includes("POÇO")) {
            Display_img(['shaft-pit', 'vent-pit'], 'block')
        } else if (resultado.includes("RAMPA")) {
            Display_img(['rampa-pit', 'vent-pit', 'truck'], 'block')
        } 
    } else {
        Display_img(['superficie', 'usina'], 'block')
        Display_img(['superficie-pit', 'usina-pit'], 'none')

         if (resultado.includes("POÇO")) {
            Display_img(['shaft', 'vent'], 'block')
        } else if (resultado.includes("RAMPA")) {
            Display_img(['rampa', 'truck'], 'block')
        } 
    }
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
    if (valor['sm'] == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "shaft"])
    } else if (valor['sm'] == "menor") {
        Enable("rock")
        Mostra_green(["start", "sm"])
    }

    // ROCK MASS
    if (valor['sm'] == "menor" && valor['rock'] == "menor") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "shaft"])
    } else if (valor['sm'] == "menor" && valor['rock'] == "maior") {
        Enable("depth")
        Mostra_green(["start", "sm", "rock"])
    }

    // PROFUNDIDADE
    if (valor['sm'] == "menor" && valor['rock'] == "maior" && valor['depth'] == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "shaft"])

    } else if (valor['sm'] == "menor" && valor['rock'] == "maior" && (valor['depth'] == "entre" || valor['depth'] == "menor")) {
        Enable("prod")
        Mostra_green(["start", "sm", "rock", "depth-1"])
    }

    // PRODUÇÃO
    if (valor['sm'] == "menor" && valor['rock'] == "maior" && (valor['depth'] == "entre" || valor['depth'] == "menor") && valor['prod'] == "maior") {
        resultado = "CORREIA TRANSPORTADORA"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "prod-1", "inclined-belt"])

    } else if (valor['sm'] == "menor" && valor['rock'] == "maior" && (valor['depth'] == "entre" || valor['depth'] == "menor") && (valor['prod'] == "menor" || valor['prod'] == "entre") && valor['depth'] == "menor") {
        resultado = "RAMPA E CAMINHÕES"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "prod-1", "depth-2", "rampa"])

    } else if (valor['sm'] == "menor" && valor['rock'] == "maior" && (valor['depth'] == "entre" || valor['depth'] == "menor") && valor['prod'] == "menor" && valor['depth'] == "entre") {
        resultado = "RAMPA E CAMINHÕES"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "prod-1", "depth-2", "prod-2", "rampa"])

    } else if (valor['sm'] == "menor" && valor['rock'] == "maior" && (valor['depth'] == "entre" || valor['depth'] == "menor") && valor['prod'] == "entre" && valor['depth'] == "entre") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["start", "sm", "rock", "depth-1", "prod-1", "depth-2", "prod-2", "shaft"])
    }

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
    if (valor['logistica'] == "nao") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["logistica", "shaft"])
    } else if (valor['logistica'] == "sim") {
        Enable("rock")
        Mostra_green(["logistica"])
    }

    // SURFACE MATERIAL
    if (valor['logistica'] == "sim" && valor['rock'] == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["logistica", "rock", "shaft"])
    } else if (valor['logistica'] == "sim" && valor['rock'] == "menor") {
        Enable("sm")
        Mostra_green(["logistica", "rock"])
    }

    // ROCK MASS
    if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor") {
        Mostra_green(["logistica", "rock", "sm"])
        Enable("open-pit")
    } else if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["logistica", "rock", "sm", "shaft"])
    }

    // OPEN PIT
    if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && (valor['op'] == "sim" || valor['op'] == "nao")) {
        Mostra_green(["logistica", "rock", "sm", "open-pit"])
        Enable("depth")
    }

    // PROFUNDIDADE OPEN PIT NÃO
    if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && valor['op'] == "nao" && (valor['depth'] == "entre" || valor['depth'] == "maior")) {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-1", "shaft"])
    } else if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && valor['op'] == "nao" && valor['depth'] == "menor") {
        Enable("prod")
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-1"])
    }

    // PRODUÇÃO OPEN PIT NÃO
    if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && valor['depth'] == "menor" && valor['prod'] == "menor") {
        resultado = "RAMPA"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-1", "prod-1", "rampa"])
    } else if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && valor['depth'] == "menor" && (valor['prod'] == "entre" || valor['prod'] == "maior")) {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-1", "prod-1", "shaft"])
    }

    // PROFUNDIDADE OPEN PIT NÃO
    if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && valor['op'] == "sim" && valor['depth'] == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-2", "shaft"])
    } else if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && valor['op'] == "sim" && (valor['depth'] == "menor" || valor['depth'] == "entre")) {
        Enable("prod")
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-2"])
    }

    // PRODUÇÃO OPEN PIT SIM
    if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && valor['op'] == "sim" && (valor['depth'] == "menor" || valor['depth'] == "entre") && (valor['prod'] == "menor" || valor['prod'] == "entre")) {
        resultado = "RAMPA"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-2", "prod-2", "rampa"])
    } else if (valor['logistica'] == "sim" && valor['rock'] == "menor" && valor['sm'] == "menor" && valor['op'] == "sim" && (valor['depth'] == "menor" || valor['depth'] == "entre") && valor['prod'] == "maior") {
        resultado = "POÇO"
        Mostra_classe_red()
        Mostra_green(["logistica", "sm", "rock", "open-pit", "depth-2", "prod-2", "shaft"])
    }

    return resultado

}

function Calculo(metodo) {
    let valor = {
        'logistica': Get_input_value("radio-logistica"),
        'sm': Get_input_value("radio-sm"),
        'rock': Get_input_value("radio-rock"),
        'op': Get_input_value("radio-open-pit"),
        'depth': document.getElementById("select-depth").value,
        'prod': document.getElementById("select-prod").value
    }
    console.log(valor)

    let resultado = ""
    if (metodo == "cardozo" || metodo == 'la_vergne') {
        resultado = Cardozo_La_vergne(valor)
        Imagem_cardozo_la_vergne(resultado, valor)

    } else if (metodo == "moser") {
        resultado = Moser(valor)
        Imagem_moser(resultado, valor)

    }
    const span_resultado_final = document.getElementById("span-resultado-final")
    span_resultado_final.innerText = resultado
}