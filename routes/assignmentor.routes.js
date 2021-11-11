const assign = require('../services/assignmentor.service');

const router = require('express').Router();



router.post('/mentor/:id', assign.assignMentor);

router.post('/student/:id', assign.modifyMentor);



module.exports = router;