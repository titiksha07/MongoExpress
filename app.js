const express = require('express');
const routes = require('./routes');
const server = express();
const bodyparser = require('body-parser');
var mongoose = require('mongoose');
var Note = require('./models/Note');
var url = 'mongodb://localhost:27017/NoteApp';
const port = 3031;

server.use(routes);

mongoose.connect(url,(err,res)=>{
    if(err){
        console.log('Error Connecting to Database');

    }
    else {
             var NoteDoc = {
                        _id: new mongoose.Types.ObjectId(),
                         noteIndex: 2,
                         noteAuthor: "Rikisiki",
                         title: "Ps4",
                         content: "I am always on PS4"

                   
                };

                Note.create(NoteDoc,(err,res)=>{
                    if(!err){
                        console.log("Note Created");
                       // res.send("Note Created");
                    }
                });
        
                
        
        console.log('Connected to server');
    }
});

server.use(bodyparser.json);
server.use((req,res,next)=>{
    console.log(`Incoming parameters are ${req.params}`);
    next();
});

server.use(routes);

server.use((req,res)=>{
    res.status(404).send("No Endpoints found");
});

server.listen(port,()=>{
    console.log(`Server listening on ${port}`);

});