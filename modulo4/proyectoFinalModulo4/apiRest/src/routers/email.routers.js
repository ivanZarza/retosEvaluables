const { Router } = require('express');
const router = Router();
const emailCtrl = require('../controller/email.controller');

router.get('/mail', emailCtrl.getEmails);

router.post('/mail', emailCtrl.postEmail);

module.exports = router;