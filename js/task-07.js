const changeSize = {
    input: document.querySelector("#font-size-control"),
    text: document.querySelector("#text")
}

changeSize.input.addEventListener('input', sizeSlider);

function sizeSlider() {
    changeSize.text.style.fontSize = `${changeSize.input.value}px`
}
sizeSlider();