const student = require('../services/student.service');

const router = require('express').Router();



router.post('/createStudent', student.createStudent);

router.get('/getStudent', student.getStudent);

router.get('/getMentorStudent/:id', student.getStudentMentor);



module.exports = router;