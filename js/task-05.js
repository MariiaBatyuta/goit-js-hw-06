const input = {
    inputName: document.querySelector("#name-input"),
    outputName: document.querySelector("#name-output")
}

input.inputName.addEventListener("input", enterText);

function enterText(evt) {
    evt.currentTarget.value.trim() < 1 ? (input.outputName.textContent = "Anonymous") : (input.outputName.textContent = evt.currentTarget.value);
}