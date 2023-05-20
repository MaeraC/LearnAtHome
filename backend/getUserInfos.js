const getUserInfos = (req, res) => {
    const user = req.session.user
    console.log(user)

    if (user) {
        const name = user.name
        const email = user.email
        const role = user.role
       
        res.status(200).json({ name: name, email: email, role: role });
    } else {
        res.status(401).json({ error: "Utilisateur non connecté" });
    }
}

module.exports = { getUserInfos }