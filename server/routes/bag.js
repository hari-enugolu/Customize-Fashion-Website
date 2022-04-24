import express from "express";
const router = express.Router();


import { 
  createBag,
  getBags,  
  getBag,
  getBagsBySearch,
  
} from "../controllers/bag.js";

router.get("/search", getBagsBySearch);
router.post("/", createBag);
router.get("/", getBags);

router.get("/:id",getBag );

 
 
export default router; 