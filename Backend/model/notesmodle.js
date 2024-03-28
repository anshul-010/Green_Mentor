const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    title:String,
    body:String,
    priority:String,
    status:Boolean,
    userId:String,
    user:String

},{
    versionKey:false
})

const NoteModel = mongoose.model("note",noteSchema)

module.exports = {NoteModel}