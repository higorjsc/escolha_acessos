function Balao_moser(entry) {
    let idioma = Obter_idioma()
    let messages
    if (idioma == "en") {
        messages = {
            'fluxograma-logistica': "oi",
            'fluxograma-rock': "oi",
            'fluxograma-sm': "oi",
            'fluxograma-open-pit': "oi",
            'fluxograma-depth-1': "oi",
            'fluxograma-prod-1': "oi",
            'fluxograma-depth-2': "oi",
            'fluxograma-prod-2': "oi",
            'fluxograma-rampa': "oi",
            'fluxograma-shaft': "oi",
        }
    } else {
        messages = {
            'fluxograma-logistica': "oi",
            'fluxograma-rock': "oi",
            'fluxograma-sm': "oi",
            'fluxograma-open-pit': "oi",
            'fluxograma-depth-1': "oi",
            'fluxograma-prod-1': "oi",
            'fluxograma-depth-2': "oi",
            'fluxograma-prod-2': "oi",
            'fluxograma-rampa': "oi",
            'fluxograma-shaft': "oi",
        }
    }

    const positions = {
        "switch-language": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById('balao')
    balao.innerText = messages[entry]
    balao.style.display = "block"

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
    if (idioma == "en") {
        messages = {
            'fluxograma-start': "oi",
            'fluxograma-sm': "oi",
            'fluxograma-rock': "oi",
            'fluxograma-depth-1': "oi",
            'fluxograma-prod-1': "oi",
            'fluxograma-inclined-belt': "oi",
            'fluxograma-depth-2': "oi",
            'fluxograma-prod-2': "oi",
            'fluxograma-ramp': "oi",
            'fluxograma-shaft': "oi",
        }
    } else {
        messages = {
            'fluxograma-start': "oi",
            'fluxograma-sm': "oi",
            'fluxograma-rock': "oi",
            'fluxograma-depth-1': "oi",
            'fluxograma-prod-1': "oi",
            'fluxograma-inclined-belt': "oi",
            'fluxograma-depth-2': "oi",
            'fluxograma-prod-2': "oi",
            'fluxograma-ramp': "oi",
            'fluxograma-shaft': "oi",
        }
    }

    const positions = {
        "switch-language": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById('balao')
    balao.innerText = messages[entry]
    balao.style.display = "block"

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
    if (idioma == "en") {
        messages = {
            "switch-language": "Change to portuguese"
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
    const balao = document.getElementById('balao')
    balao.innerText = messages[entry]
    balao.style.display = "block"

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
function Baloes(entry, metodo = 'undefined') {
    console.log(entry, metodo)
    if (metodo == "cardozo") {
        Balao_cardozo(entry)
    } else if (metodo == 'la_vergne') {
        // Balao_cardozo(entry)
    } else if (metodo == "moser") {
        Balao_moser(entry)
    } else {
        Balao(entry)
    }
}