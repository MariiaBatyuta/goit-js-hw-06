const buttons = {
    value: document.querySelector("#value"),
    decrementBtn: document.querySelector("button[data-action='decrement']"),
    incrementBtn: document.querySelector("button[data-action='increment']")
}

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    buttons.value.textContent = counterValue;
}

const increment = () => {
    counterValue += 1;
    buttons.value.textContent = counterValue;
}

buttons.decrementBtn.addEventListener("click", decrement);
buttons.incrementBtn.addEventListener("click", increment);