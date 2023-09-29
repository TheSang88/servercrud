import express from 'express';
//import User from './module/Users';
let User =require('../module/Users');
const UserRouter =express.Router();



UserRouter.post("/createUser",(req,res)=>{
    User.create(req.body)
        .then(User=>res.json(User))
        .catch(err=> res.json(err))
})

UserRouter.get('/listuser',(req,res)=>{
    User.find({})
        .then(User => res.json(User))
        .catch(err => res.json(err))
})

UserRouter.get('/getuser/:id',(req,res)=>{
    const id = req.params.id;
    User.findById({_id:id})
    .then(User=>res.json(User))
    .catch(err=>res.json(err))
})

UserRouter.put('/edituser/:id',(req,res)=>{
    const id = req.params.id;
    User.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
        .then(User => res.json(User))
        .catch(err => res.json(err))
})
UserRouter.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    User.findByIdAndDelete({_id: id})
        .then(User => res.json(User))
        .catch(err => res.json(err))
})

module.exports = UserRouter;
