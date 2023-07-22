const changeSize = {
    input: document.querySelector("#font-size-control"),
    text: document.querySelector("#text")
}

changeSize.input.addEventListener('input', sizeSlider);

function sizeSlider(evt) {
    changeSize.text.style.fontSize = `${evt.currentTarget.value}px`
}