
function Enviar_formulario(event){
    let campos_preenchidos = true;

    // Verificar se todos os campos obrigatórios foram preenchidos
    const inputs = document.querySelectorAll('input')
    inputs.forEach((element) => {
        if (element.value.trim() === "") {
            element.style.border = "1pt solid red"
            campos_preenchidos = false
        } else {
            element.style.border = "1pt solid black"
        }
    })
    
    const text_area = document.querySelector('textarea')
    if(text_area.value.trim() === ""){
        text_area.style.border = "1pt solid red"
        campos_preenchidos = false
    }else{
        text_area.style.border = "1pt solid black"
    }   

    // Se algum campo obrigatório não foi preenchido, impedir o envio do formulário
    if (!campos_preenchidos) {
        event.preventDefault()
    }
}

