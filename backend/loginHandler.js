const User = require('./models/user')

// Autorise les utilisateurs déjà dans la base de données à se connecter
const loginHandler = async (req, res) => {
    const { email, password } = req.body // Récupére les informations entrées dans le formulaire
    
    try {
        const user = await User.findOne({ email, password })

        if (user) {
            req.session.user = user; // Stocke les informations de l'utilisateur dans la session
            res.redirect('/pages/dashboard.html')
        }
        else {
            res.status(401).json({ error: "Cet utilisateur n'a pas été trouvé dans la base de données" });
        }
    }
    catch (error) {
        console.error("Erreur lors de la recherche de l'utilisateur:", error);
        res.status(500).json({ error: "Erreur lors de la connexion" });
    }
}

module.exports = { loginHandler }