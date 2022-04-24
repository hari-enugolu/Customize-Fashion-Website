import express from "express";
const router = express.Router();


import {
  createShoe,
  getShoes,
  getShoe,
  
} from "../controllers/shoes.js";

router.post("/", createShoe);
router.get("/", getShoes);
router.get("/:id",getShoe );
 

export default router; 