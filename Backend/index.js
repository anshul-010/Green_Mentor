const express = require('express');
const { connection } = require('./db');
const { userRouter } = require('./Routes/UserRoute');
const cors  = require('cors');
const { noteRouter } = require('./Routes/noteRoutes');

const app  = express();
app.use(express.json())
app.use(cors())
app.use("/user",userRouter)
app.use("/note",noteRouter)

app.get("/", (req, res) => {
    res.send("Welcome to the Home page!")
})

app.listen("8080",async()=>{
    try {
        await connection
        console.log("Connected to server")
        console.log("Server is running on port 8080")
    } catch (error) {
        console.log(error)
    }
})