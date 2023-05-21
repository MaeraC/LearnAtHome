function dashboard() {
    const dashboardContainer = document.createElement("section")
    const profileDashboard = document.createElement("div")
    const resumeDashboard = document.createElement("div")
    const contentDashboard = document.createElement("div")
    
    function profileDash() {
        let date = new Date()
        let daysWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "vendredi", "Samedi", "Dimanche"]
        let months = ["janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
        let currentDayWeek = daysWeek[date.getDay()]
        let currentDay = date.getDate()
        let currentMonth = months[date.getMonth()]
        let currentDate = currentDayWeek + " " + currentDay + " " + currentMonth

        fetch('/user-info', {
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => { 
                const name = data.name
                
                profileDashboard.innerHTML = `
                    <p class="date-time">${currentDate}</p>
                    <h1>Tableau de bord</h1>
                    <div class="profile">
                        <div class="profile-details">
                            <h4>Bonjour ${name}</h4>
                            <p>Dernière connexion le 19/05/2023</p>
                        </div>
                        <div class="profile-img"><img src="../assets/bruno.png" alt="photo de bruno" /></div>
                    </div>
                `
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des informations de l\'utilisateur:', error);
            });  
    
    } 

    function resumeDash() {
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
    }

    function contentsDash() {
        contentDashboard.innerHTML = `
        <div class="content-container planning">
            <h4>Planning</h4>
            <div class="planning-container">
                <div>
                    <p class="rdv">RDV Emilie Dupont</p>
                    <p class="time">16H30 - 17h30</p>
                </div>
                <div>
                    <p class="rdv">RDV Enzo Pallo</p>
                    <p class="time">18H00 - 19H00</p>
                </div>
                <div>
                    <p class="rdv">RDV Gaelle garcia</p>
                    <p class="time">19H30 - 20H00</p>
                </div>
            </div>
        </div>
        <div class="content-container taches">
            <h4>Tâches</h4>
            <div class="taches-container">
                <div>
                    <input type="checkbox" />
                    <label>Finir les corrigés</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Prévoir RDV avec Stella Sanchez</label>
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Prévoir exercices pour Enzo</label>
                </div>
                <div class="new-tache">
                    <input type="checkbox" />
                    <label>Ajouter une nouvelle tâche</label>
                </div>
            </div>
        </div>
        <div class="content-container messages">
            <h4>Nouveaux messages</h4>
            <div class="messages-container">
                <div class="image">
                    <img src="../assets/emilie.png" alt="Photo de Emilie Dupont"/>
                </div>
                <div class="content-messages">
                    <p class="name">Emilie Dupont</p>
                    <p class="msg">Hello Bruno ! Oui, j'ai presque terminé les exercices, mais j'ai besoin d'aide, est-ce qu'on peut prévoir une séance ensemble ?</p>
                </div>
            </div>
            <div class="messages-container">
                <div class="image">
                    <img src="../assets/sarah.png" alt="Photo de Emilie Dupont"/>
                </div>
                <div class="content-messages">
                    <p class="name">sarah zaoui</p>
                    <p class="msg">Bonjour, tu es disponible demain pour un visio ?</p>
                </div>
            </div>
        </div>
    `
    }

    dashboardContainer.classList.add("dashboard")
    contentDashboard.classList.add("content-dashboard")
    resumeDashboard.classList.add("resume-dashboard")
    profileDashboard.classList.add("profile-dashboard")
    
    contentDash.appendChild(dashboardContainer)
    dashboardContainer.appendChild(profileDashboard)
    dashboardContainer.appendChild(resumeDashboard)
    dashboardContainer.appendChild(contentDashboard)

    profileDash()
    resumeDash()
    contentsDash()
}
