const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UserModel } = require('../model/UserModel');

const userRouter = express.Router();


// Register routes
userRouter.post("/register", async function(req, res){
    const{name,mobile,email,password} = req.body
    try {
        const isUser = await UserModel.findOne({email})
        if(isUser){
            return res.status(200).send({msg:"user already registered"})
        }

        bcrypt.hash(password, 5, async function(err, hash) {
            if(err){
                return res.status(500).send({msg:err.message});
            }
            else{
                const newUser = new UserModel({name,email,mobile,password:hash});
                await newUser.save()
                res.status(200).send({"msg":"New user has been registered"})
            }
        });
    } catch (error) {
        res.status(400).send(`error ${error}`)
    }
})



// Login routes
userRouter.post('/login',async function(req,res) {
    const {email,password} = req.body;
    try {
        const user = await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(result){
                    const token = jwt.sign({userId:user._id,user:user.name}, 'secret_key', { expiresIn: '1h' });
                    res.status(200).send({"msg":"login Successful",token})
                }
                else{
                    res.status(500).send({msg:err.message});
                }
            });
        }
    } catch (error) {
        
    }
})
module.exports = {userRouter};