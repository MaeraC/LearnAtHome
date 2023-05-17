function formLogin() {
    // Sélection des éléments du formulaire
    const form = document.querySelector('.form-connexion');
    const emailInput = form.querySelector('.email-input');
    const passwordInput = form.querySelector('.password-input');
    const emailError = form.querySelector('.email-error');
    const passwordError = form.querySelector('.password-error');
    const submitBtn = document.querySelector(".submit-input-login")

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

        if (passwordInput.value.trim() === '') {
            passwordError.style.display = "block"
            return false
        }
        else {
            passwordError.style.display = "none"
        }

        window.location.href = "../index.html"
    }

    // Écouteur d'événement pour la soumission du formulaire
    form.addEventListener('submit', validateForm);
}

formLogin()