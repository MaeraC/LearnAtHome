const dashboardLink = document.getElementById("dashboard-link");
const calendarLink = document.getElementById("calendar-link");
const tasksLink = document.getElementById("tasks-link");
const messagesLink = document.getElementById("messages-link");
const contentDash = document.querySelector(".content-dash");

dashboardLink.addEventListener("click", () => {
    // Mettez à jour le contenu pour afficher le tableau de bord
    
    updateContent("dashboard");
});

calendarLink.addEventListener("click", () => {
    // Mettez à jour le contenu pour afficher le calendrier
    updateContent("calendar");
});

tasksLink.addEventListener("click", () => {
    // Mettez à jour le contenu pour afficher les tâches
    updateContent("tasks");
});

messagesLink.addEventListener("click", () => {
    // Mettez à jour le contenu pour afficher les messages
    updateContent("messages");
});

function updateContent(page) {
    // Effacez le contenu existant
    contentDash.innerHTML = "";

    // Ajoutez le contenu correspondant à la page sélectionnée
    if (page === "dashboard") {
        dashboard()
    } 
    else if (page === "calendar") {
        calendar()
    } 
    else if (page === "tasks") {
        // Ajoutez le contenu des tâches
        const tasksContent = document.createElement("div");
        tasksContent.textContent = "Contenu des tâches";
        contentDash.appendChild(tasksContent);
    } 
    else if (page === "messages") {
        // Ajoutez le contenu des messages
        const messagesContent = document.createElement("div");
        messagesContent.textContent = "Contenu des messages";
        contentDash.appendChild(messagesContent);
    }
}
