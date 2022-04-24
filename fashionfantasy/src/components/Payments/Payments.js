import "./Payment.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  // const [orders, setOrders] = useState([]);

  //fetching orders by connecting to backend
  // async function fetchOrders() {
  //   const { data } = await axios.get("/list-orders");
  //   setOrders(data);
  // }

  // to show orders list in frontend
  // useEffect(() => {
  //   fetchOrders();
  // }, []);

  //to send Email to users after donating using EmailJs

  //
  function loadRazorpay() {
    const script = document.createElement("script"); //creating script element
    script.src = "https://checkout.razorpay.com/v1/checkout.js"; //source coming from razorpay
    script.onerror = () => {
      alert("Razorpay SDK failed to load. Are you online?"); //show error if not loaded or any trouble in loading script
    };
    script.onload = async () => {
      try {
        setLoading(true); //loading is true then only ceates
        const result = await axios.post("/create-order", {
          //creating order which passes amount to api coming from frontend
          amount: orderAmount,
        });
        const { amount, id: order_id, currency } = result.data;
        const {
          data: { key: razorpayKey },
        } = await axios.get("/get-razorpay-key");

        const options = {
          key: razorpayKey,
          amount: amount.toString(),
          currency: currency,
          name: "example name",
          description: "example transaction",
          order_id: order_id,
          handler: async function (response) {
            //when the payment is successful passes the data to api
            const result = await axios.post("/pay-order", {
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });
            alert(result.data.msg); //alert to user that payment is successful
            // fetchOrders();                //to show new payments in the frontend
          },
          prefill: {
            //prefill section to set dummy details in razorpay window
            name: "yourname",
            email: "yourmail@gmail.com",
            contact: "1111111111",
          },
          notes: {
            address: "your address",
          },
          theme: {
            color: "white",
          },
        };

        setLoading(false);
        const paymentObject = new window.Razorpay(options); //goes to new window of razorpay
        paymentObject.open(); // and opens
      } catch (err) {
        alert(err);
        setLoading(false);
      }
    };
    document.body.appendChild(script); // adding script after onload
  }

  return (
    <div className="Header">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <Header />
      <hr />
      <div className="image">
        <div className="App">
          <div>
            <div id="form-view" className="donate-heading">
              <form className="form">
                <div className="form">Amount</div>
                <div>
                  <input
                    placeholder="INR"
                    type="number"
                    value={orderAmount}
                    onChange={(e) => setOrderAmount(e.target.value)}
                  ></input>
                </div>
              </form>

              <button
                style={{ backgroundColor: "skyblue", color: "black" }}
                disabled={loading}
                onClick={loadRazorpay}
              >
                Pay
              </button>
              {loading && <div>Loading...</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
