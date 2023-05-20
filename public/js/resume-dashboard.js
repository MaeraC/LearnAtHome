const resumeDashboard = document.querySelector(".resume-dashboard")

fetch('/user-info', {
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET'
})
    .then(response => response.json())
    .then(data => { 
        const studentStars = data.studentStars
        const tutoring = data.tutoring
        const jury = data.jury

        resumeDashboard.innerHTML = `
            <div class="resume-container">
                <div class="image">
                    <img src="../assets/trophee.png" alt="icone trophée" />
                </div>
                <div class="resume-infos">
                    <h4>Avis élèves</h4>
                    <p>Tu as obtenus <span>${studentStars}</span> étoiles !</p>
                </div>
            </div>
            <div class="resume-container">
                <div class="image">
                    <img src="../assets/carnet.png" alt="icone carnet" />
                </div>
                <div class="resume-infos">
                    <h4>Mentoring</h4>
                    <p>Tu as suivis <span>${tutoring}</span> tutorats !</p>
                </div>
            </div>
            <div class="resume-container">
                <div class="image">
                    <img src="../assets/note.png" alt="icone note" />
                </div>
                <div class="resume-infos">
                    <h4>Examens</h4>
                    <p>Tu as été jurys <span>${jury}</span> fois !</p>
                </div>
            </div>
        `
    })

