function formSignup() {
    const form = document.querySelector('.form-inscription');
    const emailInput = form.querySelector('.email-input');
    const nameInput = form.querySelector('.name-input');
    const passwordInput = form.querySelector('.password-input');
    const passwordConfirmInput = form.querySelector('.password-confirm-input');
    const emailError = form.querySelector('.email-error');
    const nameError = form.querySelector('.name-error');
    const passwordError = form.querySelector('.password-error');
    const passwordConfirmError = form.querySelector('.password-confirm-error');
    const passwordConfirmError2 = form.querySelector('.password-confirm-error2');
    const question1Error = document.querySelector('.question1-error');
    const question1Input = document.querySelector('.question1 textarea');
    const submitBtn = document.querySelector(".submit-input")
    const loginLink = document.querySelector(".login-link")
    const homeLink = document.querySelector(".home-link")
    const studentRadio = document.querySelector(".student-radio")
    const teacherRadio = document.querySelector(".teacher-radio")
    const errorExisting = document.querySelector(".error-existing")
    const radioError = document.querySelector(".radio-error")

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateSignupForm(e) {
        e.preventDefault()
        
        if (!validateEmail(emailInput.value)) {
            emailError.style.display = "block"
        }
        else {
            emailError.style.display = "none"
        }

        if (nameInput.value.trim() === '') {
            nameError.style.display = "block"
        }
        else {
            nameError.style.display = "none"
        }

        if (passwordInput.value.trim() === '') {
            passwordError.style.display = "block"
        }
        else {
            passwordError.style.display = "none"
        }

        if (passwordConfirmInput.value.trim() === '') {
            passwordConfirmError.style.display = "block"
        } else if (passwordConfirmInput.value !== passwordInput.value) {
            passwordConfirmError.style.display = "none"
            passwordConfirmError2.style.display = "block"
        }
        else {
            passwordConfirmError.style.display = "none"
            passwordConfirmError2.style.display = "none"
        }
        
        if (question1Input.value.trim() === '') {
            question1Error.style.display = "block"
        }
        else {
            question1Error.style.display = "none"
        }

        if (!studentRadio.checked && !teacherRadio.checked) {
            radioError.style.display = "block"
        }
        else {
            radioError.style.display = "none"
        }

        if (!passwordConfirmInput.value.trim() !== '' && !passwordInput.value.trim() !== '' && !nameInput.value.trim() !== '' && validateEmail(emailInput.value) && question1Input.value.trim() !== '' && (studentRadio.checked || teacherRadio.checked)) {
            const userRole = studentRadio.checked ? "student" : "teacher"
            const userName = nameInput.value.trim()

            fetch('/signup', { // Envoie des données du formulaire au serveur via une requête post
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailInput.value,
                    password: passwordInput.value,
                    role: userRole,
                    name: userName
                })
            })
            .then(response => {
                if (response.ok) {
                    const thanksParagraph = document.querySelector('.thanks')
                    submitBtn.style.display = 'none'
                    loginLink.style.display = "none"
                    homeLink.style.display = "flex"
                    thanksParagraph.style.display = 'block'
                    return response.text()
                }
                else {
                    submitBtn.style.display = 'none'
                    errorExisting.style.display = "block"
                    throw new Error("Erreur lors de l'inscription")
                }
            })
            .then(data => {
                console.log(data); // Affiche le message renvoyé par la requête post 
            })
            .catch(error => {
                console.error(error);
                console.log(error)
            });
        }

       
    }

    form.addEventListener("submit", validateSignupForm)
}

formSignup()