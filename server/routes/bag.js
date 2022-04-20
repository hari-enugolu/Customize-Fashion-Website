import express from "express";
const router = express.Router();


import {
  createBag,
  getBags,
  filterBags
  
} from "../controllers/bag.js";

router.post("/", createBag);
router.get("/", getBags);
router.get("/", filterBags);
 

export default router; 