import mongoose from "mongoose";

const bagSchema = mongoose.Schema({
  title: String,
  Price: String,
  Gender: String,
  Description:String,
  UserDescription:String,
  Brand:String,

  Type:String,
  name: String,
  creator: String,    
  image: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  
});

const BagModal = mongoose.model("Bag", bagSchema);

export default BagModal;