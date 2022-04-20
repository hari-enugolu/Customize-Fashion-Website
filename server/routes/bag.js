import express from "express";
const router = express.Router();


import {
  createBag,
  getBags,
  filterBags,
  getBag,
  getBagsBySearch,
  
} from "../controllers/bag.js";

router.post("/search", getBagsBySearch);
router.post("/", createBag);
router.get("/", getBags);
router.get("/", filterBags);
router.get("/:id",getBag );
 

export default router; 