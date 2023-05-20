const getUserInfos = (req, res) => {
    const user = req.session.user
    console.log(user)

    if (user) {
        const name = user.name
        const email = user.email
        const role = user.role
        const studentStars = user.studentStars
        const tutoring = user.tutoring
        const jury = user.jury
       
        res.status(200).json({ name: name, email: email, role: role, studentStars: studentStars, tutoring: tutoring, jury: jury });
    } else {
        res.status(401).json({ error: "Utilisateur non connecté" });
    }
}

module.exports = { getUserInfos }