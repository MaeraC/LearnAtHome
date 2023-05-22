function tasks() {
    const tasksSection = document.createElement("section")
    const tasksProfile = document.createElement("div")
    const tasksContent = document.createElement("div")

    function profileTask() {
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
                
                tasksProfile.innerHTML = `
                    <p class="date-time">${currentDate}</p>
                    <h1>Gestionnaire de tâches</h1>
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

    function contentTask() {
        tasksContent.innerHTML = `
            <div class="task-epingle">
                <h4>Tâche épinglée</h4>
                <div class="taches-container">
                    <div class="task-title">
                        <img src="../assets/epingle-full.png" alt="icone épingle" />
                        <h4>Tâche épinglée</h4>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Finir les corrigés</label>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Prévoir RDV avec Stella Sanchez</label>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Prévoir exercices pour Enzo</label>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div class="new-tache">
                        <input type="checkbox" />
                        <label>Ajouter une nouvelle tâche</label>
                    </div>
                </div>
            </div>
            <div class="all-tasks">
                <h4>Mes tâches</h4>
                <div class="taches-container">
                    <div class="task-title">
                        <img src="../assets/epingle-empty.png" alt="icone épingle" />
                        <h4>Mes tâches</h4>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Prévoir des exos en + pour Léa</label>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Préparer l'examen d'Emilie</label>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div>
                        <input type="checkbox" />
                        <label>Prendre RDV avec Loic</label>
                        <i class="fas fa-trash"></i>
                    </div>
                    <div class="new-tache">
                        <input type="checkbox" />
                        <label>Ajouter une nouvelle tâche</label>
                    </div>
                </div>
            </div>

            <button class="task-btn"><i class="fas fa-plus"></i></button>
            <button class="task-student">Voir les tâches de mes élèves</button>
        `
    }

    tasksSection.classList.add("tasks-section")
    tasksContent.classList.add("tasks-content")
    tasksProfile.classList.add("tasks-profile")

    contentDash.appendChild(tasksSection)
    tasksSection.appendChild(tasksProfile)
    tasksSection.appendChild(tasksContent)

    profileTask()
    contentTask()
}