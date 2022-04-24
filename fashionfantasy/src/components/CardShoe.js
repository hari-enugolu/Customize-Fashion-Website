import React from "react";

import "./card.css";
import { Link } from "react-router-dom";

const CardShoe = ({ _id, image, title, Price }) => {
  return (
    <div className="col-md-3 mb-5 ">
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={image} alt="" style={{ width: "300px" }} />
          </div>
          <div className="contentBx">
            <h2 className="title">{title}</h2>
            <div className="size">
              <p>{Price}</p>
            </div>
            <Link to={`/shoe/${_id}`}>
              <button> Customize</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShoe;
