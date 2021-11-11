const mongo = require('../shared/mongo');



const mentor = {

    async createMentor(req,res){

        try{
        console.log("create Mentor called");
        console.log(req.body);
        const data = await mongo.db.collection("mentor").insertOne(req.body);
        console.log(data);
        res.send({...req.body , _id: data.insertedId});
        }
        catch(err){
            console.log("Error create Mentor Mentod" , err);
            res.sendStatus(500);
        }
    },

    async getMentor(req,res){

        try{
        console.log("Get Mentor called");
        const data = await mongo.db.collection("mentor").find().toArray();
        res.send(data);
        }
        catch(err){
            console.log("Error get Mentor Mentod" , err);
            res.sendStatus(500);
        }
    }


}

module.exports = mentor;