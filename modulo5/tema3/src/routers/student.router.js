const { Router } = require('express');
const router = Router();
const studentCtrl = require('../controller/student.controller');


router.get('/students', studentCtrl.getStudent);


router.post('/students', studentCtrl.postStudent);


router.put('/students', studentCtrl.putStudent);


router.delete('/students', studentCtrl.deleteStudent);

module.exports = router;


