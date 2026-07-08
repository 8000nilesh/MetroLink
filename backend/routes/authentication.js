const express = require('express');
const router=express.Router();
const user=require('../models/UserSchema');
const {generateToken}=require('../auth/jwt');

router.post('/login',async(req,res)=>{
    try{
        let {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({msg:"please enter all feilds"});
        }
        let exists= await user.findOne({email});
        if(!exists){
            return res.status(404).json({msg:"user not found"});
        }
        if(exists.password!==password){
            return res.status(400).json({msg:"invalid credentials"});
        }
        const token=generateToken(exists);
        res.status(200).json({
            msg:"Login succesfull",
            token
        })
    }catch(err){
        res.status(500).json({msg:err.message});
    }
})

router.post('/register',async (req,res)=>{
    try{
        let {name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(400).json({msg:"please enter all feilds"});
        }
        name = name.trim();
        password = password.trim();
        const exists=await user.findOne({email:email});
        if(exists){
            return res.status(400).json({msg:"user already exists"});
        }
        const newuser=new user({
            name,
            email,
            password
        })
        await newuser.save();
        res.status(201).json({msg:"user registered successfully"}); 
    }catch(err){
        //console.log(err);
        return res.status(500).json({msg:err.message}); 
    }
})

module.exports=router;