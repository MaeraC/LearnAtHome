function headerHome() {
    const headerHome            = document.querySelector(".header-home")
    
    headerHome.innerHTML = `
        <h1>Learn@Home</h1>
        <div class="container-btn">
            <button class="signup-btn"><a href="../pages/signup.html">Inscription</a></button>
            <button class="login-btn"><a href="../pages/login.html">Connexion</a></button>
        </div>
        </div>
    `
}