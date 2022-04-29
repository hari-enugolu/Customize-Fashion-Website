import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //to capture the id from url
import moment from "moment"; //to show date
import "./SingleBag.css";

import { getShoe } from "../../redux/features/shoeSlice";
const SingleShoe = () => {
  const dispatch = useDispatch();
  const { shoe } = useSelector((state) => ({ ...state.shoe }));
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getShoe(id));
    }
  }, [id]);
  
  
  
  
  return (
    <div className="app">
      <div className="details">
        
          
          <div className="big-img">
              <img className="image" src={shoe.image} alt={shoe.title} />
            </div>
          
        
            <div className="box">
        <div className="row">
          <div style={{ float: "left" }}>
            <span className="text-start">
              {shoe && shoe.tags && shoe.map((item) => `#${item} `)}
            </span>
          </div>
          <br />
          <div className="text-start mt-2">
            
            <small className="text-muted">
              {moment(shoe.createdAt).fromNow()}
            </small>
          </div>
          <div className="box">
            <div className="row">
              <h2>{shoe.title}</h2>
              <span>${shoe.Price}</span>
            </div>
            <div>
            <p>{shoe.UserDescription}</p>
            
            </div>


          

            {/* <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} /> */}
            <button className="cart">Add to cart</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleShoe;
