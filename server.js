const express               = require('express');
const bodyParser            = require('body-parser');
const session               = require('express-session')
const app                   = express();
const port                  = 3000;
const path                  = require('path')
const mongoose              = require('mongoose') ;

const { loginHandler }      = require('./backend/loginHandler')
const { signupHandler }     = require('./backend/signupHandler');
const { getUserInfos }      = require('./backend/getUserInfos');

app.use(bodyParser.json()); // Middleware qui analyse les corps de requête JSON
app.use(express.static(path.join(__dirname, 'public'))); // Définit le dossier public comme répertoire statique

// Connexion à MongoDB
mongoose.connect('process.env.MONGODB_URI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// Configuration du middleware de session
app.use(session({ // gère les sessions et stocke les informations de session de chaque utilisateur 
    secret: '1A2Z3E',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 
    } // Duréé de validité d'un jour 
}))

// Vérification de l'authentifcation de l'utilisateur 
const isauthenticated = (req, res, next) => {
    if (req.session.user)  {
        next() 
    }
    else {
        res.status(401).json({ error: "Utilisateur non connecté" })
    }
}

// Page de connexion
app.post('/login', loginHandler)

// Page d'inscription
app.post('/signup', signupHandler)

// Récupération des informations de l'utilisateur
app.get("/user-info", isauthenticated, getUserInfos)


// Démarre le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`)
})
