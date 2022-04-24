import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Headera/Header";
import Home from "./components/Home/Home";
import HomeShoes from "./components/Home/HomeShoes";
import { ToastContainer } from "react-toastify";
import Filterbar from "./components/Homepagess/Filterbar";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./components/Homepagess/Homepage.js";
import SingleBag from "./components/singlePage/SingleBag.js";
import SingleShoe from "./components/singlePage/SingleShoe";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <ToastContainer />
        <Routes>
          <Route path="/" element={[<Filterbar />, <Homepage />]} />
          <Route path="/Home" element={<Home />} />
          <Route path="/bags/search" element={<Home />} />
          <Route path="/HomeShoes" element={<HomeShoes />} />

          <Route path="/bag/:id" element={<SingleBag />} />
          <Route path="/shoe/:id" element={<SingleShoe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
