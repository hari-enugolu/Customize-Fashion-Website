import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";

import bagRouter from "./routes/bag.js";
import shoeRouter from "./routes/shoes.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true })); 
app.use(cors());

app.use("/bag",bagRouter);
app.use("/shoe",shoeRouter);
app.use("/user",userRouter);


const MONGODB_URL = "mongodb+srv://SaiKiran:SaiKiran@cluster0.hlzt5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = 8081;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));