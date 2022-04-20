import express from "express";
const router = express.Router();


import {
  createShoe,
  getShoes,
  
} from "../controllers/shoes.js";

router.post("/", createShoe);
router.get("/", getShoes);
 

export default router; 