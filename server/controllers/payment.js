import Order from "../models/payment";
const Razorpay = require("razorpay");

const sampleOrder = async (req, res) => {
  res.send({ key: process.env.RAZORPAY_KEY_ID });
};

const createOrder = async (req, res) => {
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
};

const payOrder = async (req, res) => {
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
};

module.exports = { sampleOrder, createOrder, payOrder };
