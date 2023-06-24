function Balao_moser(entry) {
    let idioma = Obter_idioma()
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-logistica": "A mina utilizará caminhões?",
            "fluxograma-rock": "A classe do maciço é menor do que 5 (I-V)?",
            "fluxograma-sm": "A camada de materiais não consolidados\n (solos) sobre o deposótio mineral possui\n espessura menor que 70 m?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério\nestá a menos de 500 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor ou maior\n que 400 mil toneladas por ano?",
            "fluxograma-open-pit": "O depósito será acessado a partir da\n cava de uma mina a céu aberto?",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério\nestá a menos de 600 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor ou maior\n que 600 mil toneladas por ano?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utiliiar poço e elevador",
            "label-sm-menor": "oi",
            "label-sm-maior": "oi",
            "label-rock-menor": "oi",
            "label-rock-maior": "oi",
            "label-open-pit-sim": "oi",
            "label-open-pit-nao": "oi",
            "select-depth": "oi",
            "select-prod": "oi"

        }
    } else {
        messages = {
            "fluxograma-logistica": "oi",
            "fluxograma-rock": "A classe do maciço é menor do que 5 (I-V)?",
            "fluxograma-sm": "A camada de materiais não consolidados\n (solos) sobre o deposótio mineral possui\n espessura menor que 70 m?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério\nestá a menos de 1700 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor\n que 400 mil toneladas por ano?",
            "fluxograma-open-pit": "O depósito será acessado a partir da\n cava de uma mina a céu aberto?",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério\nestá a menos de 700 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor\n que 1,5 mil toneladas por dia?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utilizar poço e elevador",
            "label-sm-menor": "oi",
            "label-sm-maior": "oi",
            "label-rock-menor": "oi",
            "label-rock-maior": "oi",
            "label-open-pit-sim": "oi",
            "label-open-pit-nao": "oi",
            "select-depth": "oi",
            "select-prod": "oi"
        }
    }

    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerText = messages[entry]
        balao.style.display = "block"
    }


    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(100px,-20px)"
    }
}

function Balao_la_vergne(entry) {
    let idioma = Obter_idioma()
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-start": "",
            "fluxograma-sm": "Existe uma camada espessa de materiais\nnão consolidados (solos) sobre\no deposótio mineral?",
            "fluxograma-rock": "A rocha está integra (sem juntas/fraturas)\ne possui boa qualidade/resistencia?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério\nestá a menos de 500 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor\n que 5 mil toneladas por dia?",
            "fluxograma-inclined-belt": "Utilizar correia transportadora",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério\nestá a menos de 300 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor\n que 2,5 mil toneladas por dia?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utilizar poço e elevador",
            "label-sm-menor": "oi",
            "label-sm-maior": "oi",
            "label-rock-menor": "oi",
            "label-rock-maior": "oi",
            "select-depth": "oi",
            "select-prod": "oi"
        }
    } else {
        messages = {
            "fluxograma-start": "oi",
            "fluxograma-sm": "oi",
            "fluxograma-rock": "oi",
            "fluxograma-depth-1": "oi",
            "fluxograma-prod-1": "oi",
            "fluxograma-inclined-belt": "oi",
            "fluxograma-depth-2": "oi",
            "fluxograma-prod-2": "oi",
            "fluxograma-ramp": "oi",
            "fluxograma-shaft": "oi",
            "label-sm-menor": "oi",
            "label-sm-maior": "oi",
            "label-rock-menor": "oi",
            "label-rock-maior": "oi",
            "select-depth": "oi",
            "select-prod": "oi"
        }
    }

    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerText = messages[entry]
        balao.style.display = "block"
    }

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(100px,-20px)"
    }
}
function Balao_cardozo(entry) {
    let idioma = Obter_idioma()
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-start": "",
            "fluxograma-sm": "A camada de materiais não consolidados\n (solos) sobre o deposótio mineral possui\n espessura menor que 70 m?",
            "fluxograma-rock": "A classe do maciço, segundo a classificação RMR\n de Bienawski (1989), é menor do que 4 (IV)?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério\nestá a menos de 1700 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor\n que 7.5 mil toneladas por dia?",
            "fluxograma-inclined-belt": "Utilizar correia transportadora",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério\nestá a menos de 700 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor\n que 1,5 mil toneladas por dia?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utilizar poço e elevador",
            "label-sm-menor": "oi",
            "label-sm-maior": "oi",
            "label-rock-menor": "oi",
            "label-rock-maior": "oi",
            "select-depth": "oi",
            "select-prod": "oi"
        }
    } else {
        messages = {
            "fluxograma-start": "oi",
            "fluxograma-sm": "oi",
            "fluxograma-rock": "oi",
            "fluxograma-depth-1": "oi",
            "fluxograma-prod-1": "oi",
            "fluxograma-inclined-belt": "oi",
            "fluxograma-depth-2": "oi",
            "fluxograma-prod-2": "oi",
            "fluxograma-ramp": "oi",
            "fluxograma-shaft": "oi",
            "label-sm-menor": "oi",
            "label-sm-maior": "oi",
            "label-rock-menor": "oi",
            "label-rock-maior": "oi",
            "select-depth": "oi",
            "select-prod": "oi"
        }
    }

    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerText = messages[entry]
        balao.style.display = "block"
    }

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(100px,-20px)"
    }
}

function Balao(entry) {
    let idioma = Obter_idioma()
    let messages
    if (idioma == "pt") {
        messages = {
            "switch-language": "Mudar para inglês"
        }
    } else {
        messages = {
            "switch-language": "Change to portuguese"
        }
    }

    const positions = {
        "switch-language": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerText = messages[entry]
        balao.style.display = "block"
    }

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(80px,-50px)"
    }
}


//REMOVE O BALÃO DE TEXTO NO MOUSEOUT
function Balao_sai() {
    const balao = document.getElementById("balao")
    balao.style.display = "none"
}

// DECIDE QUAL CONFIGURAÇÃO DE BALÕES SERÁ CHAMADA
function Baloes(entry, metodo = "undefined") {
    if (metodo == "cardozo") {
        Balao_cardozo(entry)
    } else if (metodo == "la_vergne") {
        Balao_la_vergne(entry)
    } else if (metodo == "moser") {
        Balao_moser(entry)
    } else if (metodo == "undefined") {
        Balao(entry)
    }
}