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
            console.error("Erreur lors de la recherche de l'utilisateur:", err);
            res.status(500).json({ error: "Erreur lors de la connexion" });
        } 
        else if (user) {
            res.redirect('/pages/dashboard.html'); // Utilisateur trouvé redirigé vers le dashboard
        } 
        else {
            res.status(401).json({ error: "Cet utilisateur n'a pas été trouvé dans la base de données" }); // Informations d'identification invalides
        }
    })
})

/*
// Endpoint pour la route d'inscription
app.post('/signup', (req, res) => {
    const { email, password } = req.body; // Récupére les informations entrées dans le formulaire
  
    // Effectuer la validation des données d'inscription (par exemple, vérifier si l'utilisateur existe déjà dans la base de données)
    const collection = mongoose.connection.collection('users');
  
    collection.findOne({ email: email }, (err, existingUser) => {
        if (err) {
            console.error('Erreur lors de la recherche de l\'utilisateur :', err);
            res.status(500).json({ error: 'Erreur lors de l\'inscription' });
        } 
        else if (existingUser) {
            res.status(409).json({ error: 'Cet utilisateur existe déjà' }); // Utilisateur existant, renvoyer une réponse d'erreur
        } 
        else {
            // Créer un nouvel utilisateur dans la base de données
            collection.insertOne({ email: email, password: password }, (err, result) => {
                if (err) {
                    console.error('Erreur lors de la création de l\'utilisateur :', err);
                    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
                } else {
                    res.status(201).json({ message: 'Inscription réussie' }); // Inscription réussie, renvoyer une réponse de réussite
                }
            });
        }
    });
});
  */
  // ...
  

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
