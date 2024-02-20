const Usuario = require('../models/modelo-usuario')

const ActualizacionUsuario = async (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await Usuario.findOneAndUpdate({_id: id}, body);
    res.send(respuesta);
};

module.exports = ActualizacionUsuario;