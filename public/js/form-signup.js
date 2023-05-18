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
    const studentRadio = document.querySelector(".student-radio")
    const teacherRadio = document.querySelector(".teacher-radio")
    const profileType = document.querySelector(".profile-type")
    const profileBtn = document.querySelector(".profile-btn")
    const formInformations = document.querySelector(".form-informations")
    const formTeacher = document.querySelector(".form-teacher")
    const question3Input = document.querySelector(".question3 textarea")
    const question3Error = document.querySelector('.question3-error');
    const yesRadioBtn = document.querySelector(".yes-radio")
    const noRadioBtn = document.querySelector(".no-radio")
    const telInput = document.querySelector(".tel-input")
    const yesNoError = document.querySelector(".yes-no-error")
    const telerror2 = document.querySelector(".tel-error2")

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateTelInput(tel) {
        var regex = /^\d{10}$/ // 10 chiffres
        return regex.test(tel)
    }

    function validateFormStudent(e) {
        e.preventDefault(); 

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

        if (question2Input.value.trim() === '') {
            question2Error.style.display = "block"
        }
        else {
            question2Error.style.display = "none"
        }

        if (question1Input.value.trim() !== '' && question2Input.value.trim() !== '') {
            submitBtn.style.display = 'none';
            loginLink.style.display = "none";
            homeLink.style.display = "flex"

            const thanksParagraph = document.querySelector('.thanks');
            thanksParagraph.style.display = 'block';
        }
    }

    
    function validateFormTeacher(e) {
        e.preventDefault();

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

        if (question3Input.value.trim() === '') {
            question3Error.style.display = "block"
        }
        else {
            question3Error.style.display = "none"
        }

        if (yesRadioBtn.checked) {
            if (telInput.value.trim() === '') {
                telerror2.style.display = "block"
            }
            else {
                telerror2.style.display = "none"
            }
        }

        if (yesRadioBtn.checked == false && noRadioBtn.checked == false) {
            yesNoError.style.display = "block"
        }
        else {
            yesNoError.style.display = "none"
        }

        if (!validateTelInput(telInput.value)) {
            telerror2.style.display = "block"
        }
        else {
            telerror2.style.display = "none"
        }
    }

    profileBtn.addEventListener("click", () => {
        if (studentRadio.checked) {
            profileType.style.display = "none"
            formInformations.style.display = "block"
            form.addEventListener('submit', validateFormStudent);

        }
        if (teacherRadio.checked) {
            profileType.style.display = "none"
            formTeacher.style.display = "block"
            form.addEventListener('submit', validateFormTeacher);
        }
    })

}

formSignup()