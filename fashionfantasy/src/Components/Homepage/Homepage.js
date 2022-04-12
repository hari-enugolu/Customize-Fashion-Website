import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="container">
      <div className="card">
        <div className="imgBx">
          <img
            src="https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png"
            alt=""
            style={{ width: "300px" }}
          />
        </div>
        <div className="contentBx">
          <h2>Nike Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href=""> Customize</a>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ThsD_nRnv0sI0yY9dbxdbgHaKR%26pid%3DApi&f=1"
            alt=""
            style={{ width: "200px" }}
          />
        </div>
        <div className="contentBx">
          <h2>Nike Shoes</h2>
          <div className="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div className="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a href=""> Customize</a>
        </div>
      </div>
    </div>
  );
}
