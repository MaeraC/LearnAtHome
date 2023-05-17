function footer() {
    const footer = document.querySelector(".footer")

    footer.innerHTML = `
        <ul>
            <li>télécharger notre application</li>
            <li>Devenir bénévole</li>
            <li>Devenir notre élève</li>
        </ul>
        <ul class="social">
            <li><img src="../assets/fb.png" alt="Icône Facebook" /></li>
            <li><img src="../assets/ig.png" alt="Icône Instagram" /></li>
            <li><img src="../assets/ytb.png" alt="Icône Youtube" /></li>
        </ul>
        <ul>
            <li><button>Nous contacter</button></li>
            <li>Aide</li>
        </ul>
        <span>2020 - ©️Tous droits réservés - Learn@Home.
    `
}

footer()