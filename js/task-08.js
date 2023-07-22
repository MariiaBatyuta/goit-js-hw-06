const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', registration);

function registration(evt) {
    evt.preventDefault();

    const registrarionForm = evt.currentTarget.elements;
    const email = registrarionForm.email.value;
    const password = registrarionForm.password.value;

    let result = {};

    if ((email.trim() !== '') && (password.trim() !== '')) {
        result.email = email;
        result.password = password;
        loginForm.reset();
        return console.log(result)
    } else {
        alert("Усі поля повинні бути заповненні")
    }
}