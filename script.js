const submit = document.getElementById ('submit')
const email = document.getElementById ('email')
const textError = document.getElementById ('msg__error')
const form = document.getElementById ('form')

submit.addEventListener ('click', (e) => {
    
    if (email.validity.typeMismatch) {
        e.preventDefault();
        textError.style.display = "block"
        email.classList.add("error")
    } else {
        textError.style.display = "none"
        email.classList.remove = "error"
    }
})