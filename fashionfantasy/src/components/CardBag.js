import React from "react";

import "./card.css";

const CardBag = ({ image, title, Price }) => {

  return (
    
    <div className="col-md-3 mb-5 ">
      <div className="card">
        <img className="card-img-top" src={image} />
        <div className="body">
          <h5 className="title">{title}</h5>
          <p className="text">{Price}</p>
          <a className="btn btn-primary">click</a>
        </div>
      </div>
    </div>
  );
};

export default CardBag;
