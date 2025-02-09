const { Router } = require('express');
const router = Router();
const coleccionesCtrl = require('../controller/colecciones.controller');


router.get('/colecciones', coleccionesCtrl.getColecciones);

module.exports = router;