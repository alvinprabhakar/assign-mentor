const mongo = require('../shared/mongo');


const student = {

    async createStudent(req,res){

        try{
        console.log("create Student called");
        console.log(req.body);
        const data = await mongo.db.collection("student").insertOne(req.body);
        console.log(data);
        res.send({...req.body , _id: data.insertedId});
        }
        catch(err){
            console.log("Error create Student Mentod" , err);
            res.sendStatus(500);
        }
    },

    async getStudent(req,res){

        try{
        console.log("Get Student called");
        const data = await mongo.db.collection("student").find().toArray();
        res.send(data);
        }
        catch(err){
            console.log("Error get Student Mentod" , err);
            res.sendStatus(500);
        }
    },

    async getStudentMentor(req,res){

        try{
            console.log("Get Student called");
            const data = await mongo.db.collection("student").find({ mentorAssigned: req.params.id}).toArray();
            res.send(data);
            }
        catch(err){
                console.log("Error get Student Mentor Mentod" , err);
                res.sendStatus(500);
            }


    }


}

module.exports = student;