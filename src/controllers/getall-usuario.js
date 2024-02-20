const Usuario = require('../models/modelo-usuario');

const listarUsuarios = async (req, res) => {
    const respuesta = await Usuario.find({});
    res.send(respuesta); 
}
module.exports = listarUsuarios;