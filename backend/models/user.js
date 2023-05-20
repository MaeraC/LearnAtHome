const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    studentStars: {
        type: Number,
        required: true
    },
    tutoring: {
        type: Number,
        required: true
    },
    jury: {
        type: Number,
        required: true
    }
    // Ajoutez d'autres champs de données selon vos besoins
});
  
const User = mongoose.model('User', userSchema)

module.exports = User