const profileDashboard = document.querySelector(".profile-dashboard")

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

