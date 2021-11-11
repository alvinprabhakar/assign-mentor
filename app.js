let express = require('express');
const mongo = require('./shared/mongo');

const mentorRoutes = require('./routes/mentor.routes');
const studentRoutes = require('./routes/student.routes');
const assignRoutes = require('./routes/assignmentor.routes');

const app = express();
const port = 3001;

(async () => {

    try{
        await mongo.connect();

        app.use(express.json());

        app.use((req,res,next) => {
            console.log("Middleware Api called!!!!!!");
            res.send("Mentor Student Api")
            next();
        })

        app.use('/mentor' , mentorRoutes);
        app.use('/student', studentRoutes);
        app.use('/assign',assignRoutes);

        app.listen(process.env.PORT || port);

    }catch(err){
        console.log(err);
    }
    


})();




