import User from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';



export const userSignUp = async (req,res) => {




    let {emailId,firstName,lastName,password,role} = req.body;
    if(!emailId)
    return res.status(400).json({ message: "emailId is required" });

if(!password)
    return res.status(400).json({ message: "password is required" });

if(!firstName)
    return res.status(400).json({ message: "firstName is required" });

    if(!role)
    return res.status(400).json({ message: "role is required" });

    try {
        let user = await User.findOne({emailId});
        if(!user) {
            let hash = bcrypt.hashSync(password, 10);
            let newUser = new User({emailId,firstName,lastName, password:hash,role});
            await newUser.save();
            const token = jwt.sign({userId:user._id,role:user.role}, process.env.SECRET, {expiresIn:"1h"});
            return res.status(201).json({
                 msg:'User signed up successfully. Proceed to LogIn route',
                 token:token
             })
            return res.status(201).json({
                msg:'User signed up successfully. Proceed to LogIn route'
            });
        } 
        else {
           return res.status(409).json({msg:'User already exists. Please Login'});
        }
    } 
    catch(e) {
        console.log(e);
       return  res.status(500).json({msg:"Sign Up failed"});
    }
}

export const userLogin = async (req,res) => {
    try {
        let {emailId,password} = req.body;
        let user = await User.findOne({emailId});
        if(!user) return  res.status(404).json({msg:'User doesn\'t exist or Invalid username'});
        else {
            let result = bcrypt.compareSync(password, user.password);
           if(result==true) {     
               const token = jwt.sign({userId:user._id,role:user.role}, process.env.SECRET, {expiresIn:"1h"});
               return res.status(200).json({
                    msg:'Authentication successful. Add token to Authroization header with bearer for further requests',
                    token:token
                })
            }
            else {
                return res.status(401).json({msg:'Invalid password'})
            }
        }
    }
    catch(e) {
        return res.status(500).json({msg:"Login In failed"});
    }
}
