//obtener las rutas

const express = require('express');
const {obtenerTodasLasInserciones, insertarInsercion} = require('../controllers/Insercion.controller');
const router = express.Router();

router.get('/', obtenerTodasLasInserciones);
router.post('/', insertarInsercion);
module.exports = router;
