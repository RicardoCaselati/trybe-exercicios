const cleanerButton = document.getElementById("cleaner-button");
const submmitButton = document.getElementById("submmit-button");

function getSubmmittiesValues(event) {
    const inputName = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const radioButtons = document.querySelectorAll('input[name="fav_places"]');
    const textArea = document.getElementById("textResposta").value;
    const date = document.getElementById("date").value;
    const oportunities = document.getElementById("oportunidades");
    const image = document.getElementById("liberacaoImg");
    let selected;
    // esta ideia peguei no seguinte site - https://www.javascripttutorial.net/javascript-dom/javascript-radio-button/
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selected = radioButton.value;
            break;
        }
    }

    event.preventDefault();

    let answers = {
        nome: inputName,
        email: email,
        local: selected,
        resposta: textArea,
        dataViagem: date,
        opostunidadesTrybe: oportunities.checked, // ideia vinda do site https://www.javascripttutorial.net/javascript-dom/javascript-checkbox/
        usoDeImagem: image.checked,
    }
    if (image.checked === false) {
        alert("A TrybeTrip precisa muito da autorização do uso de imagem para divulgar seus concursos!")
    } else if (10 > inputName.length > 40 || 10 > email.length > 50 || textArea.length > 500){
        alert("Dados Inválidos")
    } else {
        console.log(answers)
        alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.")
    }

}
submmitButton.addEventListener("click", getSubmmittiesValues)