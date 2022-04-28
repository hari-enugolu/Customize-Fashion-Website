const express = require("express");
const router = express.Router();
const { sampleOrder, createOrder, payOrder } = require("./controllers/payment");

router.route("/get-razorpay-key").get(sampleOrder);
router.route("/create-order").post(createOrder);
router.route("/pay-order").post(payOrder);

module.exports = router;
