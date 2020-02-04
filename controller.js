
var Note = require('./models/Note');
module.exports.createNote=(req,res)=>{
var query = Note.find({})
query.exec((err,res)=>{
    if(!err){
        res.send(res);
    }
});
}

module.exports.getNote = (req,res)=>{

    var query = Note.find({});
    query.exec((err,doc)=>{
      if(!err){
         res.status(201).send(doc);
       }
    });

}

const util = require('util')


module.exports.getNoteById = (req,res)=>{
//    console.log("Request Console"+req.toString());
// console.log(util.inspect(req, false, null, true /* enable colors */))
// console.log(util.inspect(req, {showHidden: false, depth: null}))
var query = Note.findById({'_id':req.params._id});
query.exec((err,result)=>{
        res.send(result);
    }
);
}



module.exports.updateNote= (req,res)=>{

}

module.exports.deleteNote = (req,res)=>{

}