function formSignup() {
    // Sélection des éléments du formulaire
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
    const question2Error = document.querySelector('.question2-error');
    const question1Input = document.querySelector('.question1 textarea');
    const question2Input = document.querySelector('.question2 textarea');
    const submitBtn = document.querySelector(".submit-input")
    const loginLink = document.querySelector(".login-link")
    const homeLink = document.querySelector(".home-link")

    // Fonction de validation de l'adresse e-mail
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Fonction de validation du formulaire
    function validateForm(e) {
        e.preventDefault(); // Empêche la soumission du formulaire

        if (!validateEmail(emailInput.value)) {
            emailError.style.display = "block"
            return false
        }
        else {
            emailError.style.display = "none"
        }

        if (nameInput.value.trim() === '') {
            nameError.style.display = "block"
            return false
        }
        else {
            nameError.style.display = "none"
        }

        if (passwordInput.value.trim() === '') {
            passwordError.style.display = "block"
            return false
        }
        else {
            passwordError.style.display = "none"
        }

        if (passwordConfirmInput.value.trim() === '') {
            passwordConfirmError.style.display = "block"
            return false
        } else if (passwordConfirmInput.value !== passwordInput.value) {
            passwordConfirmError.style.display = "none"
            passwordConfirmError2.style.display = "block"
            return false
        }
        else {
            passwordConfirmError.style.display = "none"
            passwordConfirmError2.style.display = "none"
        }

        // Validation de la réponse à la question 1
        if (question1Input.value.trim() === '') {
            question1Error.style.display = "block"
            return false
        }
        else {
            question1Error.style.display = "none"
        }

        // Validation de la réponse à la question 2
        if (question2Input.value.trim() === '') {
            question2Error.style.display = "block"
            return false
        }
        else {
            question2Error.style.display = "none"
        }

        // Vérification des champs de texte
        if (question1Input.value.trim() !== '' && question2Input.value.trim() !== '') {
            submitBtn.style.display = 'none';
            loginLink.style.display = "none";
            homeLink.style.display = "flex"

            const thanksParagraph = document.querySelector('.thanks');
            thanksParagraph.style.display = 'block';
        }

        
    }

    // Écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', validateForm);
}

formSignup()