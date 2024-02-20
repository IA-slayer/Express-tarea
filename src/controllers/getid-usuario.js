const Usuario = require('../models/modelo-usuario');

const UsuarioId = async (req, res) => {
    const id = req.params.id;
    const respuesta = await Usuario.findById(id);
    res.send(respuesta); 
};

module.exports = UsuarioId;