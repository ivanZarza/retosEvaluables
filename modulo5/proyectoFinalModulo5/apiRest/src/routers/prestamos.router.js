const { Router } = require('express');
const router = Router();
const prestamosCtrl = require('../controller/prestamos.controller');

router.get('/prestamos', prestamosCtrl.getPrestamos);

module.exports = router;