const mongo = require('../shared/mongo');

var ObjectId = require('mongodb').ObjectID;

const assign = {


    async assignMentor(req,res){
        console.log("assign Mentor method called");
        const mentorData = await mongo.db.collection("mentor")
                           .findOneAndUpdate({ _id: ObjectId(req.params.id)}, {$push: {...req.body}});
        console.log(mentorData); 
        res.send(mentorData);
        //console.log(req.body.studentsArray);

        const studentData = await mongo.db.collection("student")
                           .findOneAndUpdate({ _id: ObjectId(req.body.studentsAssigned)}, {$set: {"mentorAssigned": req.params.id}});
        console.log(studentData); 
        res.send(studentData);

        

    },

    async modifyMentor(req,res){
        console.log("Modify Mentor method called");
        const studentData = await mongo.db.collection("student")
                           .findOneAndUpdate({ _id: ObjectId(req.params.id)}, {$set: {...req.body}});
        console.log(studentData); 
        res.send(studentData);
        //console.log(req.body.studentsArray);

      

        

    }


}

module.exports = assign;