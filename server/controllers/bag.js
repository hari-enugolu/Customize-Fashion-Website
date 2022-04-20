import BagModal from "../models/bag.js";


export const createBag = async (req, res) => {
  const bag = req.body;
  const newBag = new BagModal({
    ...bag,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newBag.save();
    res.status(201).json(newBag);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  } 
}; 

export const getBags = async (req, res) => {
  try {
    const bags = await BagModal.find();
    res.status(200).json(bags);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
export const filterBags = async (req, res) => {  
  dispatchEvent({type:'GET_BAGS_REQUEST'})
  try {
    const bags = await BagModal.find.filter({Gender:"Male"});
    res.status(200).json(bags);
  } catch (error) { 
    res.status(404).json({ message: "Something gone wrong" });
  }
};

export const getBag = async (req, res) => {
  const { id } = req.params;
  try {
    const bag = await BagModal.findById(id);
    res.status(200).json(bag);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
export const getBagsBySearch = async (req, res) => {
  const { searchQuery } = req.params;
  try {
    const title = new RegExp(searchQuery,"i");
    const bags=await BagModal.find({title});
    res.json(bags);
    
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};



