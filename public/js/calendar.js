function calendar() {
    const calendarSection = document.createElement("section")
    const calendarProfile = document.createElement("div")
    const calendarContent = document.createElement("div")

    function profileCal() {
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
                
                calendarProfile.innerHTML = `
                    <p class="date-time">${currentDate}</p>
                    <h1>Calendrier</h1>
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
    
    function contentCal() {
        calendarContent.innerHTML = `
            <div class="calendar">
                <div class="header">
                    <button id="prevMonthBtn">&lt;</button>
                    <h2 id="monthYear"></h2>
                <button id="nextMonthBtn">&gt;</button>
                </div>
                <ul class="weekdays">
                    <li>Dimanche</li>
                    <li>Lundi</li>
                    <li>Mardi</li>
                    <li>Mercredi</li>
                    <li>Jeudi</li>
                    <li>Vendredi</li>
                    <li>Samedi</li>
                </ul>
                <ul class="days" id="calendarDays"></ul>
            </div>

        `
        const calendarDays = document.getElementById('calendarDays');
        const monthYear = document.getElementById('monthYear');
        const prevMonthBtn = document.getElementById('prevMonthBtn');
        const nextMonthBtn = document.getElementById('nextMonthBtn');

        let actualDate = new Date();

        // Génère les jours du mois dans le calendrier
        function generateCalendar() {
            calendarDays.innerHTML = '';

            const month = actualDate.getMonth();
            const year = actualDate.getFullYear();

            // Mis à jour de l'en-tête du calendrier
            monthYear.textContent = `${getMonthName(month)} ${year}`;

            const firstDay = new Date(year, month, 1); // 1er jour du mois
            const daysInMonth = new Date(year, month + 1, 0).getDate(); // Nb de jours dans le mois 

            // Génére les cases pour chaque jour du mois
            for (let i = 0; i < daysInMonth; i++) {
                const day = i + 1;
                const date = new Date(year, month, day);
                const listItem = document.createElement('li');
                listItem.textContent = day;

                // Ajoute des classes pour le jour actuel et les jours du week-end
                if (date.toDateString() === new Date().toDateString()) {
                listItem.classList.add('today');
                }

                if (date.getDay() === 0 || date.getDay() === 6) {
                listItem.classList.add('weekend');
                }

                // Sélectionne les dates au clic
                listItem.addEventListener('click', function() {
                    // Réinitialise la sélection précédente
                    const selected = document.querySelector('.selected');
                    if (selected) {
                    selected.classList.remove('selected');
                    }
                    
                    // Sélectionne la date cliquée
                    listItem.classList.add('selected');
                    
                    // Faire quelque chose avec la date sélectionnée
                    // Par exemple, afficher les détails de l'événement pour cette date
                    
                    // ...
                });
            
                // Ajoute le jour au calendrier
                calendarDays.appendChild(listItem);
            }
        }
        
        function prevMonth() { // Passe au mois précédent
            actualDate.setMonth(actualDate.getMonth() - 1);
            generateCalendar();
        }
        
        function nextMonth() { // Passe au mois suivant
            actualDate.setMonth(actualDate.getMonth() + 1);
            generateCalendar();
        }

        function getMonthName(month) {
            const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
            return months[month];
        }
        
        prevMonthBtn.addEventListener('click', prevMonth);
        nextMonthBtn.addEventListener('click', nextMonth);
        
        generateCalendar();
    }
    
    calendarSection.classList.add("calendar-section")
    calendarContent.classList.add("calendar-content")
    calendarProfile.classList.add("calendar-profile")

    contentDash.appendChild(calendarSection)
    calendarSection.appendChild(calendarProfile)
    calendarSection.appendChild(calendarContent)

    profileCal()
    contentCal()
}