const express = require('express');
const router = express.Router();
const CreacionUsuario = require('../controllers/creacion-usuario');
const listarUsuarios = require('../controllers/getall-usuario');
const UsuarioId = require('../controllers/getid-usuario');
const ActualizacionUsuario = require('../controllers/actualizacion-usuario');
const EliminacionUsuario = require('../controllers/eliminacion-usuario');

//ver todos los usuarios
router.get('/', listarUsuarios);

//buscar un usuario por su id
router.get('/:id', UsuarioId);

//crear un nuevo usuario
router.post('/creacion-usuario', CreacionUsuario);

//actualizar un usuario
router.put('/:id', ActualizacionUsuario);

//eliminar un usuario
router.delete('/:id', EliminacionUsuario);

module.exports = router;