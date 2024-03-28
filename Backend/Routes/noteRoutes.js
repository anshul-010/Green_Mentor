const express = require("express")
const { NoteModel } = require("../model/notesmodle")
const { auth } = require("../middleware/authMiddleware")

const noteRouter = express.Router()
noteRouter.use(auth)

// creating a new note
noteRouter.post("/create",async(req,res)=>{
    try {
        // console.log("create................................................................")
        const note = new NoteModel(req.body)
        await note.save()
        // await NoteModel.insertMany(req.body)
        res.status(200).send({"msg":"new Note has been added"})
    } catch (error) {
        res.send({"msg":error})
    }
})

// reading all notes
noteRouter.get("/",async(req,res)=>{
    try {
        const q = req.query
        const notes = await NoteModel.find({userId:req.body.userId})
        res.status(200).send({data:notes})
    } catch (error) {
        res.send(error)
    }
})


// updating notes
noteRouter.patch("/update/:noteID",async(req,res)=>{
    const {noteID} = req.params
    const note = await NoteModel.findOne({_id:noteID})
    try {
        if(req.body.userId!==note.userId){
            res.send({"msg":"you are not authorize to do this task"})
        }else{
            await NoteModel.findByIdAndUpdate({_id:noteID},req.body)
            res.send({"msg":"your note has been updates"})
        }
    } catch (error) {
        res.send(error)
    }
})


//deleting note
noteRouter.delete("/delete/:noteID",async(req,res)=>{
    const {noteID} = req.params
    const note = await NoteModel.findOne({_id:noteID})
    try {
        if(req.body.userId!==note.userId){
            res.send({"msg":"you are not authorize to do this task"})
        }else{
            await NoteModel.findByIdAndDelete({_id:noteID})
            res.send({"msg":"your note has been deleted"})
        }
    } catch (error) {
        res.send(error)
    }
})

module.exports = {noteRouter}