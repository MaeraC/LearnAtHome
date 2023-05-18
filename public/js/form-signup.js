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
   

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateTelInput(tel) {
        var regex = /^\d{10}$/ // 10 chiffres
        return regex.test(tel)
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
        if (!passwordConfirmInput.value.trim() !== '' && !passwordInput.value.trim() !== '' && !nameInput.value.trim() !== '' && validateEmail(emailInput.value) && question1Input.value.trim() !== '' && (!studentRadio.checked || !teacherRadio.checked)) {
            submitBtn.style.display = 'none';
            loginLink.style.display = "none";
            homeLink.style.display = "flex"

            const thanksParagraph = document.querySelector('.thanks');
            thanksParagraph.style.display = 'block';
        }

       
    }

    form.addEventListener("submit", validateSignupForm)
   
}

formSignup()