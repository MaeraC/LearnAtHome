const contentDashboard = document.querySelector(".content-dashboard")

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