function messages() {
    const messagesSection       = document.createElement("section")
    const messagesProfile       = document.createElement("div")
    const messagesContent       = document.createElement("div")

    function profileMessage() {
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
                
                messagesProfile.innerHTML = `
                    <p class="date-time">${currentDate}</p>
                    <h1>Messagerie</h1>
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
    
    function contentMessage() {
        messagesContent.innerHTML = `
            <div class="messages">
                <div class="message non-lu">
                    <div class="image-message">
                        <img src="../assets/emilie.png" alt="Photo de Emilie" />
                    </div>
                    <div class="text-message">
                        <p class="bold">Emilie Dupont</p>
                        <p>Hello Bruno ! Oui, j'ai effectivement bien terminé les exercices, mais pour le dernier j'ai du mal... </p>
                    </div>
                    <span>Non lu</span>
                </div>
                <div class="message non-lu">
                    <div class="image-message">
                        <img src="../assets/sarah.png" alt="Photo de Sarah" />
                    </div>
                    <div class="text-message">
                        <p class="bold">sarah Zaoui</p>
                        <p>On révise ensemble ?</p>
                    </div>
                    <span>Non lu</span>
                </div>
                <div class="message">
                    <div class="image-message">
                        <img src="../assets/maria.png" alt="Photo de Maria" />
                    </div>
                    <div class="text-message">
                        <p class="bold">Maria Crùz</p>
                        <p>Oui, complètement !!</p>
                    </div>
                </div>
                <div class="message">
                    <div class="image-message">
                        <img src="../assets/louise.png" alt="Photo de louise" />
                    </div>
                    <div class="text-message">
                        <p class="bold">Louise Gérard</p>
                        <p>Ca marche, à toute ! Et n'oublies pas ton livre de géo.</p>
                    </div>
                </div>
                <div class="message">
                    <div class="image-message">
                        <img src="../assets/nassim.png" alt="Photo de Nassim" />
                    </div>
                    <div class="text-message">
                        <p class="bold">Nassim Bakar</p>
                        <p>Dès que j'ai fini je t'envoie le DM de français ;)</p>
                    </div>
                </div>
                <div class="message">
                    <div class="image-message">
                        <img src="../assets/joseph.png" alt="Photo de Joseph" />
                    </div>
                    <div class="text-message">
                        <p class="bold">Joseph Doe</p>
                        <p>D'accord, merci.</p>
                    </div>
                </div>
            </div>
            <button class="message-btn"><i class="fas fa-plus"></i></button>
        `
    }

    messagesSection.classList.add("messages-section")
    messagesContent.classList.add("messages-content")
    messagesProfile.classList.add("messages-profile")

    contentDash.appendChild(messagesSection)
    messagesSection.appendChild(messagesProfile)
    messagesSection.appendChild(messagesContent)

    profileMessage()
    contentMessage()
}