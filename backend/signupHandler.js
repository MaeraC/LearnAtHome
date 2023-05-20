const User = require('./models/user')

// Ajoute un utilisateur dans la base de données si non existant 
const signupHandler = async (req, res) => {
    const { email, password, role, name } = req.body;
  
    try {
        const existingUser = await User.findOne({ email });
    
        if (existingUser) {
            return res.status(409).json({ error: "Cet utilisateur existe déjà, veuillez vous connecter" });
        }
  
        const newUser = new User({ email, password, role, name });
        await newUser.save();

        req.session.user = newUser
    
        res.status(200).json({ message: "Inscription réussie ! Cet utilisateur est désormais enregistré dans la base de données." });
    } 
    catch (error) {
        console.error("Erreur lors de l'enregistrement de l'utilisateur :", error);
        res.status(500).json({ error: "Erreur lors de l'inscription" });
    }
};

module.exports = { signupHandler }