var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var NoteSchema = new Schema(
    {
    
            _id : {
                type: Schema.Types.ObjectId
            },

            noteIndex: {
                type: Number
            },

            noteAuthor: {
                type: String
            },

            title: {
                type: String
            },

            content: {
                type: String
            }
     });

var Note = mongoose.model('Note',NoteSchema);
module.exports = Note;