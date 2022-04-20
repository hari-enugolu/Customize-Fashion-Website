import ShoeModal from "../models/shoes.js";


export const createShoe = async (req, res) => {
  const shoe = req.body;
  const newShoe = new ShoeModal({
    ...shoe,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newShoe.save();
    res.status(201).json(newShoe);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  } 
}; 

export const getShoes = async (req, res) => {
  try {
    const shoes = await shoeModal.find();
    res.status(200).json(shoes);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getShoe = async (req, res) => {
  const { id } = req.params;
  try {
    const shoe = await ShoeModal.findById(id);
    res.status(200).json(shoe);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};



