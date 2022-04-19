const express = require("express");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const dotenv = require("dotenv");
dotenv.config();

//connecting to mongodb
const app = express();
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("mongodb connected");
});

//middleware
app.use(express.json()); //to read the content in the apis or backend

//Schema
const OrderSchema = mongoose.Schema({
  isPaid: Boolean,
  amount: Number,
  razorpay: {
    orderId: String,
    paymentId: String,
    signature: String,
  },
});

//model
const Order = mongoose.model("Order", OrderSchema);

//get route to read razorpay id
app.get("/get-razorpay-key", (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
});

//creating an order in the razorpay using post route
app.post("/create-order", async (req, res) => {
  try {
    const instance = new Razorpay({
      //creating an instance from razorpay
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    const options = {
      //options which paramaters we want
      amount: req.body.amount,
      currency: "INR",
    };
    const order = await instance.orders.create(options); //connects to razorpay and create order
    if (!order) return res.status(500).send("Some error occured"); //if order is null
    res.send(order); //if not error go to frontend
  } catch (error) {
    //if there is any errors in frontend returns error
    res.status(500).send(error);
  }
});

//pay order to read all the deatils using post route
app.post("/pay-order", async (req, res) => {
  try {
    const { amount, razorpayPaymentId, razorpayOrderId, razorpaySignature } =
      req.body;
    const newOrder = Order({
      //then creates a new order in database
      isPaid: true,
      amount: amount,
      razorpay: {
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
        signature: razorpaySignature,
      },
    });
    await newOrder.save(); //save the order data
    res.send({
      msg: "Payment was successfull", // if it is succssfull sends successful message
    });
  } catch (error) {
    //else sends error
    console.log(error);
    res.status(500).send(error);
  }
});

// to show orders to the user
// app.get("/list-orders", async (req, res) => {
//   const orders = await Order.find();
//   res.send(orders);
// });

const port = process.env.PORT || 5000; //giving port number from .env else take 5000

app.listen(port, () =>
  console.log(`server started on http://localhost:${port}`)
);
