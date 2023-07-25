const variables = {
  controls: document.querySelector("#controls"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  input: document.querySelector('[type="number"]')
}

variables.input.addEventListener('input', amount);
variables.createBtn.addEventListener('click', create);
variables.destroyBtn.addEventListener('click', destroy);

function amount (evt) {
  variables.input.setAttribute("amount", Number(evt.currentTarget.value));
}

let basebox = 30;

function create() {
  
  let amountBox = Number(variables.input.getAttribute("amount"));

  let min = Number(variables.input.min);
  let max = Number(variables.input.max);
  let step = Number(variables.input.step);

  if (amountBox >= min && amountBox <= max) {
    for (let i = 0; i < amountBox; i += step) {
      basebox += 10;

      const newBox = document.createElement("div");
      newBox.style.background = getRandomHexColor();
      newBox.style.width = basebox + "px";
      newBox.style.height = basebox + "px";
      newBox.style.margin = "10px";
      variables.controls.append(newBox);
    }
  } else {
    alert(`Enter a valid number: from ${min} to ${max}`)
  }  
}

function destroy() {
  variables.controls.innerHTML = '';
  variables.input = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}