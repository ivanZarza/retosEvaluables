const { Router } = require('express');
const router = Router();
const profesionalCtrl = require('../controller/profesional.controller');

router.get('/profesional', profesionalCtrl.getProfesional);

router.post('/profesional', profesionalCtrl.postProfesional);

router.put('/profesional', profesionalCtrl.putProfesional);

router.delete('/profesional', profesionalCtrl.deleteProfesional);

module.exports = router;


