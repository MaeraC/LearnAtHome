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

        // Envoie des données du formulaire au serveur via une requête post
        fetch('/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: emailInput.value,
              password: passwordInput.value
            })
        })
        .then(response => {
            if (response.redirected) {
              window.location.href = response.url; // Redirige vers la page de destination après la connexion réussie
            } else {
              // Gérer l'échec de la connexion, afficher un message d'erreur, etc.
              console.log("Le formulaire n'est pas valide")
            }
        })
        .catch(error => {
            console.error('Erreur lors de la requête POST :', error);
        });
          
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