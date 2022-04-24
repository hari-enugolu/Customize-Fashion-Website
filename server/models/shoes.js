import mongoose from "mongoose";

const shoeSchema = mongoose.Schema({
  title: String,
  Price: String,
  Gender: String,
  Description:String,
  Type:String,
  name: String,
  creator: String,    
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
});

const ShoeModal = mongoose.model("Shoe", shoeSchema);

export default ShoeModal;