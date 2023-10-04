function generateNumber() {

    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)


    if (min >= max) {
        alert("O valor mínimo deve ser MENOR que o valor Máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1) + min);
        alert(result)
    }   
}

const apereceresult = document.querySelector(".main-button")

function resultado() {
    alert("result")
}

function id() {
    const p = document.querySelector(".Abufela")
    p.innerHTML = apareceresult.value
}