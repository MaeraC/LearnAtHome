const express               = require('express');
const bodyParser            = require('body-parser');
const app                   = express();
const port                  = 3000;
const path                  = require('path')
const mongoose = require('mongoose') ;

app.use(bodyParser.json()); // Middleware qui analyse les corps de requête JSON
app.use(express.static(path.join(__dirname, 'public'))); // Définit le dossier public comme répertoire statique

// Vérifie si MongoDB est bien connecté au serveur 
mongoose.connect('mongodb+srv://contaretlearnathome:Mae1996Mae1@cluster0.ffhxsk6.mongodb.net/myDatabase',
    {useNewUrlParser: true,
    useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

// Autorise les utilisateurs déjà dans la base de données à se connecter
app.post('/login', (req, res) => {
  
    const { email, password } = req.body // Récupére les informations entrées dans le formulaire
    const collection = mongoose.connection.collection('users') // Récupère la collection users de la base de données 
  
    collection.findOne({ email: email, password: password }, (err, user) => { // Vérifie que les informations sont bien dans les données de users 
        if (err) {
            console.error("Erreur lors de la recherche de l'utilisateur:", err)
            res.status(500).json({ error: "Erreur lors de la connexion" })
        } 
        else if (user) {
            res.redirect('/pages/dashboard.html'); // Utilisateur trouvé redirigé vers le dashboard
        } 
        else {
            res.status(401).json({ error: "Cet utilisateur n'a pas été trouvé dans la base de données" }); // Informations d'identification invalides
        }
    })
})

// Ajoute un utilisateur dans la base de données si non existant 
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
   
    const collection = mongoose.connection.collection('users') // Récupère la collection users de la base de données 

    collection.findOne({ email: email }, (err, user) => { // Vérifie si l'utilisateur est déjà dans la base de données
        if (err) {
            console.error("Erreur lors de la recherche de l'utilisateur:", err)
            res.status(500).json({ error: "Erreur lors de la connexion" })
        } 
        
        if (user) { // Si l'utilisateur est déjà présent dans la base de données
            return res.status(500).json({ error: "Utilisateur déjà enregistré dans la base de données, veuillez vous connecter" });
        }

        collection.insertOne({ email: email, password: password, role: req.body.role, name: req.body.name }, (err, result) => { // enregistre l'email et le mot de passe dans la base de données
            if (err) {
                console.error("Erreur lors de l'enregistrement de l'utilisateur :", err);
                return res.status(500).json({ error: "Erreur lors de l'inscription" });
            }
            return res.status(200).json({ message: "Inscription réussie ! Cet utilisateur est désormais enregistré dans la base de données." });
      });
    })
})


// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`)
})




    /*
    if (!email || !name || !password || !confirmPassword || !question1, !studentRadio, !teacherRadio) {
        console.log('Veuillez remplir tous les champs obligatoires.')
        return res.status(400).json({ error: 'Veuillez remplir tous les champs obligatoires.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Veuillez entrer une adresse e-mail valide.' })
    }

    if (password.length < 6) {
        return res.status(400).json({ error: 'Le mot de passe doit contenir au moins 6 caractères.' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Les mots de passe ne correspondent pas.' })
    }

    if (
        !confirmPassword.trim() ||
        !password.trim() ||
        !name.trim() ||
        !validateEmail(email) ||
        !question1.trim() ||
        (studentRadio.checked && teacherRadio.checked)
    ) 
    {
        return res.status(400).json({ error: 'Veuillez remplir correctement tous les champs.' });
    }*/
 