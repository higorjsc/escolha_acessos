function Balao_moser(entry) {
    let idioma = Obter_idioma()
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-logistica": "A mina utilizará caminhões?",
            "fluxograma-rock": "A classe do maciço é menor do que 5 (I-V)?",
            "fluxograma-sm": "A camada de materiais não consolidados<br>(solos) sobre o deposótio mineral possui<br>espessura menor que 70 m?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério<br>está a menos de 500 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor ou maior<br>que 400 mil toneladas por ano?",
            "fluxograma-open-pit": "O depósito será acessado a partir da<br>cava de uma mina a céu aberto?",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério<br>está a menos de 600 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor ou maior<br>que 600 mil toneladas por ano?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utiliiar poço e elevador",
            "label-logistica-sim": "Se não utilizar caminhões,<br>deverá utilizar poço e elevadores.",
            "label-logistica-nao": "Se não utilizar caminhões,<br>deverá utilizar poço e elevadores.",
            "label-rock-menor": "- Classe I: rocha íntegra e resistente<br>- Classe VII: material inconsolidado (solo).",
            "label-rock-maior": "- Classe I: rocha íntegra e resistente<br>- Classe VII: material inconsolidado (solo).",
        }
    } else {
        messages = {
            "fluxograma-logistica": "Is the mine going to utilize trucks?",
            "fluxograma-rock": "Is the rock mass classification less than 5 (I-V)?",
            "fluxograma-sm": "Is the layer of unconsolidated materials (soils)<br>over the mineral deposit less than 70 m thick?",
            "fluxograma-depth-1": "Is the deepest point of the orebody<br>less than 500 m from the surface?<br>",
            "fluxograma-prod-1": "Will the mine production be less<br>than 400 thousand tons per year?",
            "fluxograma-open-pit": "Will the deposit be accessed<br>from an open pit mine?",
            "fluxograma-depth-2": "Is the deepest point of the orebody<br>less than 600 m from the surface?",
            "fluxograma-prod-2": "Will the mine production be less<br>than 600 thousand tons per yer?",
            "fluxograma-rampa": "Utilize ramps and trucks",
            "fluxograma-shaft": "Utilize a shaft and elevators",
            "label-logistica-sim": "If trucks are not used,<br>shaft and elevators should be utilized",
            "label-logistica-nao": "If trucks are not used,<br>shaft and elevators should be utilized",
            "label-rock-menor": "- Class I: intact and resistant rock<br>- Class VII: unconsolidated material (soil).",
            "label-rock-maior": "- Class I: intact and resistant rock<br>- Class VII: unconsolidated material (soil).",
        }
    }

    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerHTML = messages[entry]
        balao.style.display = "block"
    }


    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(80px,-20px)"
    }
}

function Balao_la_vergne(entry) {
    let idioma = Obter_idioma()
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-sm": "Existe uma camada espessa de materiais<br>não consolidados (solos) sobre<br>o deposótio mineral?",
            "fluxograma-rock": "A rocha está integra (sem juntas/fraturas)<br>e possui boa qualidade/resistencia?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério<br>está a menos de 500 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor<br>que 5 mil toneladas por dia?",
            "fluxograma-inclined-belt": "Utilizar correia transportadora",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério<br>está a menos de 300 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor<br>que 2,5 mil toneladas por dia?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utilizar poço e elevador",
            "label-sm-menor": "Existe uma camada espessa de materiais<br>não consolidados (solos) sobre<br>o deposótio mineral?",
            "label-sm-maior": "Existe uma camada espessa de materiais<br>não consolidados (solos) sobre<br>o deposótio mineral?",
            "label-rock-menor": "A rocha está integra (sem juntas/fraturas)<br>e possui boa qualidade/resistencia?",
            "label-rock-maior": "A rocha está integra (sem juntas/fraturas)<br>e possui boa qualidade/resistencia?",
        }
    } else {
        messages = {
            "fluxograma-sm": "Is there a thick layer of unconsolidated<br>materials (soils) over the mineral deposit?",
            "fluxograma-rock": "Is the rock intact (without joints/fractures)<br> and of good quality/strength?",
            "fluxograma-depth-1": "Is the deepest point of the orebody<br>less than 500 m from the surface?<br>",
            "fluxograma-prod-1": "Will the mine production be less<br>than 5 thousand tons per day?",
            "fluxograma-inclined-belt": "Utilize belt conveyor",
            "fluxograma-depth-2": "Is the deepest point of the orebody<br>less than 300 m from the surface?<br>",
            "fluxograma-prod-2": "Will the mine production be less<br>than 2.5 thousand tons per day?",
            "fluxograma-ramp": "Utilize ramps and trucks",
            "fluxograma-shaft": "Utilize a shaft and elevators",
            "label-sm-menor": "Is there a thick layer of unconsolidated<br>materials (soils) over the mineral deposit?",
            "label-sm-maior": "Is there a thick layer of unconsolidated<br>materials (soils) over the mineral deposit?",
            "label-rock-menor": "Is the rock intact (without joints/fractures)<br> and of good quality/strength?",
            "label-rock-maior": "Is the rock intact (without joints/fractures)<br> and of good quality/strength?"
        }
    }

    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerHTML = messages[entry]
        balao.style.display = "block"
    }

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(80px,-20px)"
    }
}

function Balao_cardozo(entry) {
    let idioma = Obter_idioma()
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-sm": "A camada de materiais não consolidados<br>(solos) sobre o deposótio mineral possui<br>espessura menor que 70 m?",
            "fluxograma-rock": "A classe do maciço, segundo a classificação RMR<br>de Bienawski (1989), é menor do que 4 (IV)?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério<br>está a menos de 1700 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor<br>que 7.5 mil toneladas por dia?",
            "fluxograma-inclined-belt": "Utilizar correia transportadora",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério<br>está a menos de 700 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor<br>que 1,5 mil toneladas por dia?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utilizar poço e elevador",
            "label-sm-menor": "A camada de materiais não consolidados<br>(solos) sobre o deposótio mineral possui<br>espessura menor que 70 m?",
            "label-sm-maior": "A camada de materiais não consolidados<br>(solos) sobre o deposótio mineral possui<br>espessura menor que 70 m?",
            "label-rock-menor": "- Classe I-IV: rocha &ldquo;Muito boa&rdquo; a &ldquo;pobre&rdquo; (RMR 21-100)<br>- Classe V: material inconsolidado (solo), classe &ldquo;muito pobre&rdquo; (RMR 1-20)",
            "label-rock-maior": "- Classe I-IV: rocha &ldquo;Muito boa&rdquo; a &ldquo;pobre&rdquo; (RMR 21-100)<br>- Classe V: material inconsolidado (solo), classe &ldquo;muito pobre&rdquo; (RMR 1-20)"
        }
    } else {
        messages = {
            "fluxograma-sm": "Is the thickness of unconsolidated materials (soils) over the mineral deposit greater than 70 m?",
            "fluxograma-rock": "Is the rock intact (without joints/fractures)<br> and of good quality/strength?",
            "fluxograma-depth-1": "Is the deepest point of the orebody<br>less than 1700 m from the surface?<br>",
            "fluxograma-prod-1": "Will the mine production be less<br>than 7.5 thousand tons per day?",
            "fluxograma-inclined-belt": "Utilize belt conveyor",
            "fluxograma-depth-2": "Is the deepest point of the orebody<br>less than 700 m from the surface?<br>",
            "fluxograma-prod-2": "Will the mine production be less<br>than 1.5 thousand tons per day?",
            "fluxograma-ramp": "Utilize ramps and trucks",
            "fluxograma-shaft": "Utilize a shaft and elevators",
            "label-sm-menor": "Is the thickness of unconsolidated materials (soils) over the mineral deposit greater than 70 m?",
            "label-sm-maior": "Is the thickness of unconsolidated materials (soils) over the mineral deposit greater than 70 m?",
            "label-rock-menor": "- Class I-IV: &ldquo;Very Good&rdquo; to &ldquo;Poor Rock&rdquo; rock (RMR 21-100)<br>- Class V: &ldquo;Very Poor&rdquo; unconsolidated material (RMR 1-20)",
            "label-rock-maior": "- Class I-IV: &ldquo;Very Good&rdquo; to &ldquo;Poor Rock&rdquo; rock (RMR 21-100)<br>- Class V: &ldquo;Very Poor&rdquo; unconsolidated material (RMR 1-20)"
        }
    }

    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    //Mostra o balão de texto
    const balao = document.getElementById("balao")
    if (messages[entry]) {
        balao.innerHTML = messages[entry]
        balao.style.display = "block"
    }

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(80px,-20px)"
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