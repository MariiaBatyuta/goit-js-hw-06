const backgroundChange = {
  button: document.querySelector("button.change-color"),
  nameColor: document.querySelector(".color"),
  body: document.querySelector('body')
}

backgroundChange.button.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  backgroundChange.body.style.backgroundColor = color;
  backgroundChange.nameColor = color;
}