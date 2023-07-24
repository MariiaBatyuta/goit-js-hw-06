const inputFiled = document.querySelector('#validation-input')

inputFiled.addEventListener('blur', validation)


function validation(evt) {
    const input = evt.currentTarget;
    const valueTrim = input.value.trim().length;
    const number = Number(inputFiled.dataset.length);
    if (valueTrim === number) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}