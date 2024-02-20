const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    nombre: String,
    edad: String,
    email: String,
    password: String,
}, { 
    timestamps: true,
    versionKey: false
});

const Usuario = mongoose.model('Usuario', userSchema);
module.exports = Usuario;