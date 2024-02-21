const Usuario = require('../models/modelo-usuario');

const EliminacionUsuario = async (req, res) => {
    const id = req.params.id;
    const respuesta = await Usuario.deleteOne({_id: id});
    res.send(respuesta);
};

module.exports = EliminacionUsuario