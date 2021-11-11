const mentor = require('../services/mentor.service');

const router = require('express').Router();


router.post('/createMentor', mentor.createMentor);

router.get('/getMentor', mentor.getMentor);

module.exports = router;