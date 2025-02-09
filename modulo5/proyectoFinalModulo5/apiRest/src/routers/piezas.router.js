const { Router } = require('express');
const router = Router();
const piezasCtrl = require('../controller/piezas.controller');


router.get('/piezas', piezasCtrl.getPiezas);


router.post('/piezas', piezasCtrl.postPiezas);


router.put('/piezas', piezasCtrl.putPiezas);


router.delete('/piezas', piezasCtrl.deletePiezas);

module.exports = router;


