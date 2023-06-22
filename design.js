function Balao_entra(metodo, entry) {
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
        "switch-language": { x: 30, y: -40 }
    }

    //Mostra o balão de texto
    balao.innerText = messages[entry]
    balao.style.display = "block"

    //Posiciona o balão conforme o dicionário de posições
    if (positions[entry]) {
        const { x, y } = positions[entry]
        balao.style.transform = `translate(${x}px, ${y}px)`
    } else {
        balao.style.transform = "translate(100px,-100px)"
    }

}

//REMOVE O BALÃO DE TEXTO NO MOUSEOUT
function Balao_sai() {
    const balao = document.getElementById("balao")
    balao.style.display = "none"
}
