import express from "express";
const router = express.Router();


import {
    userSignUp, userLogin

  
} from "../controllers/user.js";


router.post('/signup', userSignUp);
router.post('/login', userLogin);

export default router; 