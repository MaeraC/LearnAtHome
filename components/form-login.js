function formLogin() {
    // Sélection des éléments du formulaire
    const form = document.querySelector('.form-connexion');
    const emailInput = form.querySelector('.email-input');
    const passwordInput = form.querySelector('.password-input');
    const emailError = form.querySelector('.email-error');
    const passwordError = form.querySelector('.password-error');
    const modalResetPassword = document.querySelector(".modal-reset-password")
    const mdpForget = document.querySelector(".mdp-forget")
    const resetBtn = modalResetPassword.querySelector("button")

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

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

    form.addEventListener('submit', validateForm);

    mdpForget.addEventListener('click', () => {
        modalResetPassword.style.display = "flex"
    })

    resetBtn.addEventListener("click", () => {
        modalResetPassword.style.display = "none"
    })

}

formLogin()