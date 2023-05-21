function headerDashboard() {
    const headerDash = document.querySelector(".header-dashboard")

    headerDash.innerHTML = `
        <h1 class="logo">Learn@Home</h1>
        <nav class="nav-dash">
            <div id="dashboard-link">
                <img src="../assets/tableau.png" alt="Icône tableau de bord" />
                <span>Tableau de bord</span>
            </div>
            <div id="calendar-link">
                <img src="../assets/calendrier.png" alt="Icône calendrier" />
                <span>Calendrier</span>
            </div>
            <div id="tasks-link">
                <img src="../assets/taches.png" alt="Icône tâches" />
                <span>Tâches</span>
            </div>
            <div id="messages-link">
                <img src="../assets/Messagerie.png" alt="Icône messages" />
                <span>Messages</span>
            </div>
        </nav>
        <div class="log-out">
            <img src="../assets/logout.png" alt="icône déconnexion" />
            <span>Déconnexion</span>
        </div>
    `
}

headerDashboard()