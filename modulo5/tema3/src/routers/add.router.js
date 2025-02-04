const { Router } = require('express');
const router = Router();
const addCtrl = require('../controller/add.controller');

router.get('/media', addCtrl.getMedia);

router.get('/apuntadas', addCtrl.getApuntadas);

module.exports = router;