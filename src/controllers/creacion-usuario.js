const Usuario = require('../models/modelo-usuario');

const CreacionUsuario = async (req, res) => {
    const body = req.body;
    await Usuario.create(body);
    res.status(200).send("Usuario creado");
};

module.exports = CreacionUsuario;