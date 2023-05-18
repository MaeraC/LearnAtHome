function presentation() {
    const presentationSection = document.querySelector(".presentation")

    presentationSection.innerHTML= `
        <div class="presentation-container">
            <p>Ensemble, vers la réussite scolaire<br>Donnons à chaque enfant les clés de la réussite !</p>
        </div>
        <p class="presentation-text">Nous sommes une association à but non lucratif dont la mission est d'accompagner les élèves en difficulté scolaire pour les aider à réussir. Nous croyons que chaque élève a le potentiel de réussir et nous travaillons avec eux pour les aider à atteindre leurs objectifs.<br></br> Grâce à Learn@Home, nous permettons à tout élève, où qu'il soit, d'avoir accès à un soutien scolaire à distance en mettant en relation les enfants en difficulté scolaire avec des tuteurs bénévoles. <br></br>Rejoignez notre association pour la réussite scolaire dès maintenant et donnez à votre enfant les outils dont il a besoin pour réussir à l'école !</p>
        <div class="slogan">
            <p>Êtes-vous préoccupé par les difficultés scolaires de votre enfant ? </br>Vous cherchez une solution pour l'aider à réussir à l'école ? </br>Ne cherchez plus ! L'association pour la réussite scolaire est là pour vous aider !</p>
        </div>
        <div class="avantages-presentation row-reverse">
            <img src="../public/assets/banner.jpg" alt="Professeur avec son élève" />
            <article>
                <h2>Accès à un soutien personnalisé</h2>
                <p>Notre approche est personnalisée et adaptée aux besoins de chaque élève. Nous offrons des séances de tutorat individuelles et en groupe pour aider les élèves à combler leurs lacunes et à améliorer leurs compétences académiques.</p>
            </article>
        </div>
        <div class="avantages-presentation">
            <img src="../public/assets/presentation7.jpg" alt="Elève qui lève la main" />
            <article>
                <h2>Développement de la confiance en soi</h2>
                <p>Nous offrons également des programmes de mentorat pour aider les élèves à développer leur confiance en eux et à se sentir plus à l'aise à l'école. Nous croyons que la confiance en soi est essentielle pour une réussite scolaire durable.</p>
            </article>
        </div>
        <div class="avantages-presentation row-reverse">
            <img src="../public/assets/presentation3.jpg" alt="Professeur avec son élève" />
            <article>
                <h2>Amélioration des résultats scolaires</h2>
                <p>Les parents veulent que leur enfant réussisse à l'école et notre association peut les aider à atteindre cet objectif. Nous offrons des séances de tutorat individuelles et en groupe pour aider les élèves à améliorer leurs compétences académiques et à obtenir de meilleurs résultats scolaires.</p>
            </article>
        </div>
    `
}