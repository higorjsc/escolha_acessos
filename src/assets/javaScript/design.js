




// OCULTA OU MOSTRA CADA IMAGEM
function Display_img(ids = [], visibilidade) {
    ids.forEach(id => {
        document.getElementById(id).style.display = visibilidade
    })
}


function Transformacoes(id) {

    let depth = document.getElementById("select-depth").value
    let orebody = document.getElementById("orebody")
    let acesso = document.getElementById(id)
    let vent = document.getElementById("vent")

    const transformations = {
        "shaft_menor": "Translate(0, 0) Rotate(0deg) Scale(1)",
        "shaft_maior": "Translate(0, 0) Rotate(0deg) Scale(1)",
        "rampa_menor": "Translate(0, 4.5px) Rotate(0deg) Scale(1)",
        "rampa_entre": "Translate(0, 3px) Rotate(0deg) Scale(1)",
        "correia_menor": "Translate(1px, -85px) Rotate(70deg) Scale(1)",
        "correia_entre": "Translate(1px, -55px) Rotate(70deg) Scale(1)"
    }

    const alturas = {
        shaft_entre: "200px",
        shaft_maior: "250px",
        rampa_menor: "180px",
        rampa_entre: "220px",
        rampa_maior: "180px",
        correia_menor: "400px",
        correia_entre: "400px",
        vent_menor: "180px",
        vent_entre: "220px",
        vent_maior: "250px",
    }

    if (depth == "menor") {
        orebody.style.transform = "Translate(0, -50%)"
        acesso.style.transform = transformations[`${acesso.id}_${depth}`]
        acesso.style.height = alturas[`${acesso.id}_${depth}`]
        vent.style.height = alturas[`${vent.id}_${depth}`]
    } else if (depth == "entre") {
        orebody.style.transform = "Translate(0, -25%)"
        acesso.style.transform = transformations[`${acesso.id}_${depth}`]
        acesso.style.height = alturas[`${acesso.id}_${depth}`]
        vent.style.height = alturas[`${vent.id}_${depth}`]
    } else if (depth == "maior") {
        orebody.style.transform = "Translate(0, 0)"
        acesso.style.transform = transformations[`${acesso.id}_${depth}`]
        acesso.style.height = alturas[`${acesso.id}_${depth}`]
        vent.style.height = alturas[`${vent.id}_${depth}`]
    }

}

// ALTERA A ILUSTRAÇÃO DO MÉTODO CARDOZO CONFORME O RESULTADO DO FLUXOGRAMA
function Imagem_cardozo_la_vergne(resultado) {
    // Oculta as imagens com cada change dos inputs
    Display_img(["rampa", "truck", "vent", "shaft", "correia"], "none")
    // Mostra imagens com base no resultado
    if (resultado.includes("shaft")) {
        Display_img(["shaft", "vent"], "block")
        Transformacoes("shaft")
    } else if (resultado.includes("rampa")) {
        Display_img(["rampa", "vent", "truck"], "block")
        Transformacoes("rampa")
    } else if (resultado.includes("correia")) {
        Display_img(["correia", "vent"], "block")
        Transformacoes("correia")
    }
}

// ALTERA A ILUSTRAÇÃO DO MÉTODO CARDOZO CONFORME O RESULTADO DO FLUXOGRAMA
function Imagem_moser(resultado, valor) {

    // Oculta as imagens com cada change dos inputs
    Display_img(["rampa", "rampa-pit", "truck", "vent", "vent-pit", "shaft", "shaft-pit"], "none")

    // VERIFICA SE OPEN PIT ESTÁ MARCADO SIM OU NÃO
    if (valor["logistica"] == "sim" && valor["rock"] == "menor" && valor["sm"] == "menor" && valor["op"] == "sim") {
        Display_img(["superficie", "usina"], "none")
        Display_img(["superficie-pit", "usina-pit"], "block")
        if (resultado.includes("shaft")) {
            Display_img(["shaft-pit", "vent-pit"], "block")
        } else if (resultado.includes("rampa")) {
            Display_img(["rampa-pit", "vent-pit", "truck"], "block")
        }
    } else {
        Display_img(["superficie", "usina"], "block")
        Display_img(["superficie-pit", "usina-pit"], "none")

        if (resultado.includes("shaft")) {
            Display_img(["shaft", "vent"], "block")
        } else if (resultado.includes("rampa")) {
            Display_img(["rampa", "truck"], "block")
        }
    }
}

function Positions(entry, messages, positions) {
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
        balao.style.transform = "translate(80px,-50px)"
    }
}

function Balao_moser(entry, idioma) {
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-logistica": "A mina utilizará caminhões?",
            "fluxograma-rock": "A classe do maciço é menor do que 5 (I-V)?",
            "fluxograma-sm": "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui<br>espessura menor que 70 m?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério<br>está a menos de 500 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor ou maior<br>que 400 mil toneladas por ano?",
            "fluxograma-open-pit": "O depósito será acessado a partir da<br>cava de uma mina a céu aberto?",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério<br>está a menos de 600 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor ou maior<br>que 600 mil toneladas por ano?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utiliiar poço",
            "label-logistica-sim": "Se não utilizar caminhões,<br>deverá utilizar poços.",
            "label-logistica-nao": "Se não utilizar caminhões,<br>deverá utilizar poços.",
            "label-rock-menor": "- Classe I-V: rocha íntegra e resistente a pobre<br>- Classe VI-VII: material inconsolidado (solo).",
            "label-rock-maior": "- Classe I-V: rocha íntegra e resistente a pobre<br>- Classe VI-VII: material inconsolidado (solo).",
            "label-sm-menor": "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui<br>espessura menor que 70 m?",
            "label-sm-maior": "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui<br>espessura menor que 70 m?",
        }
    } else {
        messages = {
            "fluxograma-logistica": "Is the mine going to utilize trucks?",
            "fluxograma-rock": "Is the rock mass classification less than 5 (I-V)?",
            "fluxograma-sm": "Is the layer of unconsolidated materials (soils, alluvial deposit, ...) over<br> the mineral deposit less than 70 m thick?",
            "fluxograma-depth-1": "Is the deepest point of the orebody<br>less than 500 m from the surface?<br>",
            "fluxograma-prod-1": "Will the mine production be less<br>than 400 thousand tons per year?",
            "fluxograma-open-pit": "Will the deposit be accessed<br>from an open pit mine?",
            "fluxograma-depth-2": "Is the deepest point of the orebody<br>less than 600 m from the surface?",
            "fluxograma-prod-2": "Will the mine production be less<br>than 600 thousand tons per yer?",
            "fluxograma-rampa": "Utilize ramps and trucks",
            "fluxograma-shaft": "Utilize shaft",
            "label-logistica-sim": "If trucks are not used,<br>shaft should be utilized",
            "label-logistica-nao": "If trucks are not used,<br>shaft should be utilized",
            "label-rock-menor": "- Class I-V: intact and resistant rock to poor rock<br>- Class VI-VII: unconsolidated material (soil).",
            "label-rock-maior": "- Class I-V: intact and resistant rock to poor rock<br>- Class VI-VII: unconsolidated material (soil).",
            "label-sm-menor": "Is the thickness of unconsolidated materials (soils, alluvial deposit, ...) over the mineral deposit greater than 70 m?",
            "label-sm-maior": "Is the thickness of unconsolidated materials (soils, alluvial deposit, ...) over the mineral deposit greater than 70 m?",
        }
    }
    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    // Mostra o balão com o texto
    Positions(entry, messages, positions)
}

function Balao_la_vergne(entry, idioma) {
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-sm": "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.) sobre o<br> depósito mineral é <strong>estreita</strong>?",
            "fluxograma-rock": "A rocha está integra <br>e possui boa qualidade/resistencia?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério<br>está a menos de 500 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor<br>que 5 mil toneladas por dia?",
            "fluxograma-inclined-belt": "Utilizar correia transportadora",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério<br>está a menos de 300 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor<br>que 2,5 mil toneladas por dia?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utilizar poço",
            "label-sm-menor":  "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.) sobre o<br> depósito mineral é <strong>estreita</strong>?",
            "label-sm-maior":  "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.) sobre o<br> depósito mineral é <strong>estreita</strong>?",
            "label-rock-menor": "A rocha está integra <br>e possui boa qualidade/resistencia?",
            "label-rock-maior": "A rocha está integra <br>e possui boa qualidade/resistencia?",
        }
    } else {
        messages = {
            "fluxograma-sm": "Is the layer of unconsolidated<br>materials (soils, alluvial deposit, ...) over the mineral deposit <strong>narrow</strong>?",
            "fluxograma-rock": "Is the rock intact <br> and of good quality/strength?",
            "fluxograma-depth-1": "Is the deepest point of the orebody<br>less than 500 m from the surface?<br>",
            "fluxograma-prod-1": "Will the mine production be less<br>than 5 thousand tons per day?",
            "fluxograma-inclined-belt": "Utilize belt conveyor",
            "fluxograma-depth-2": "Is the deepest point of the orebody<br>less than 300 m from the surface?<br>",
            "fluxograma-prod-2": "Will the mine production be less<br>than 2.5 thousand tons per day?",
            "fluxograma-ramp": "Utilize ramps and trucks",
            "fluxograma-shaft": "Utilize shaft",
            "label-sm-menor": "Is the layer of unconsolidated<br>materials (soils, alluvial deposit, ...) over the mineral deposit <strong>narrow</strong>?",
            "label-sm-maior": "Is the layer of unconsolidated<br>materials (soils, alluvial deposit, ...) over the mineral deposit <strong>narrow</strong>?",
            "label-rock-menor": "Is the rock intact <br> and of good quality/strength?",
            "label-rock-maior": "Is the rock intact <br> and of good quality/strength?"
        }
    }
    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    // Mostra o balão com o texto
    Positions(entry, messages, positions)
}

function Balao_cardozo(entry, idioma) {
    let messages
    if (idioma == "pt") {
        messages = {
            "fluxograma-sm": "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui<br>espessura menor que 70 m?",
            "fluxograma-rock": "A classe do maciço, segundo a classificação RMR<br>de Bienawski (1989), é menor do que 4 (IV)?",
            "fluxograma-depth-1": "O ponto mais profundo do corpo de minério<br>está a menos de 1700 m da superfície?",
            "fluxograma-prod-1": "A produção da mina será menor<br>que 7.5 mil toneladas por dia?",
            "fluxograma-inclined-belt": "Utilizar correia transportadora",
            "fluxograma-depth-2": "O ponto mais profundo do corpo de minério<br>está a menos de 700 m da superfície?",
            "fluxograma-prod-2": "A produção da mina será menor<br>que 1,5 mil toneladas por dia?",
            "fluxograma-rampa": "Utilizar rampa e caminhões",
            "fluxograma-shaft": "Utilizar poço",
            "label-sm-menor": "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui<br>espessura menor que 70 m?",
            "label-sm-maior": "A camada de materiais não consolidados<br>(solos, depósitos aluvionares, etc.)<br>sobre o depósito mineral possui<br>espessura maior que 70 m?",
            "label-rock-menor": "- Classe I-IV: rocha &ldquo;Muito boa&rdquo; a &ldquo;pobre&rdquo; (RMR 21-100)<br>- Classe V: material inconsolidado (solo), classe &ldquo;muito pobre&rdquo; (RMR 1-20)",
            "label-rock-maior": "- Classe I-IV: rocha &ldquo;Muito boa&rdquo; a &ldquo;pobre&rdquo; (RMR 21-100)<br>- Classe V: material inconsolidado (solo), classe &ldquo;muito pobre&rdquo; (RMR 1-20)"
        }
    } else {
        messages = {
            "fluxograma-sm": "Is the thickness of unconsolidated materials (soils, alluvial deposit, ...) over the mineral deposit greater than 70 m?",
            "fluxograma-rock": "Is the rock intact <br> and of good quality/strength?",
            "fluxograma-depth-1": "Is the deepest point of the orebody<br>less than 1700 m from the surface?<br>",
            "fluxograma-prod-1": "Will the mine production be less<br>than 7.5 thousand tons per day?",
            "fluxograma-inclined-belt": "Utilize belt conveyor",
            "fluxograma-depth-2": "Is the deepest point of the orebody<br>less than 700 m from the surface?<br>",
            "fluxograma-prod-2": "Will the mine production be less<br>than 1.5 thousand tons per day?",
            "fluxograma-ramp": "Utilize ramps and trucks",
            "fluxograma-shaft": "Utilize shaft",
            "label-sm-menor": "Is the thickness of unconsolidated materials (soils, alluvial deposit, ...) over the mineral deposit greater than 70 m?",
            "label-sm-maior": "Is the thickness of unconsolidated materials (soils, alluvial deposit, ...) over the mineral deposit lower than 70 m?",
            "label-rock-menor": "- Class I-IV: &ldquo;Very Good&rdquo; to &ldquo;Poor Rock&rdquo; rock (RMR 21-100)<br>- Class V: &ldquo;Very Poor&rdquo; unconsolidated material (RMR 1-20)",
            "label-rock-maior": "- Class I-IV: &ldquo;Very Good&rdquo; to &ldquo;Poor Rock&rdquo; rock (RMR 21-100)<br>- Class V: &ldquo;Very Poor&rdquo; unconsolidated material (RMR 1-20)"
        }
    }

    const positions = {
        // "exemplo": { x: 50, y: -40 }
    }

    // Mostra o balão com o texto
    Positions(entry, messages, positions)

}

function Balao(entry, idioma) {
    let messages
    if (idioma == "pt") {
        messages = {
            "switch-label": "Mudar para inglês"
        }
    } else {
        messages = {
            "switch-label": "Change to portuguese"
        }
    }
    const positions = {
        "switch-label": { x: 50, y: -40 }
    }

    // Mostra o balão com o texto
    Positions(entry, messages, positions)
}


//REMOVE O BALÃO DE TEXTO NO MOUSEOUT
function Balao_sai() {
    const balao = document.getElementById("balao")
    balao.style.display = "none"
}

// DECIDE QUAL CONFIGURAÇÃO DE BALÕES SERÁ CHAMADA
function Baloes(entry, metodo = "undefined") {

    const idioma = Obter_idioma()
    if (metodo == "cardozo") {
        Balao_cardozo(entry, idioma)
    } else if (metodo == "la_vergne") {
        Balao_la_vergne(entry, idioma)
    } else if (metodo == "moser") {
        Balao_moser(entry, idioma)
    } else if (metodo == "undefined") {
        Balao(entry, idioma)
    }

}