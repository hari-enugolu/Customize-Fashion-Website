import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //to capture the id from url
import moment from "moment"; //to show date
import "./SingleBag.css";
import SinglePage from "../singlePage/SinglePage";
import { getBag } from "../../redux/features/bagSlice";

const SingleBag = () => {
  
  const dispatch = useDispatch();
  const { bag } = useSelector((state) => ({ ...state.bag }));
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getBag(id));
    }
  }, [id]);
   
  const addToCartHand=(item)=>{
      console.log(item); 
  }
  
  
  return (
    <div className="app">
      <div className="details">
        
          
          <div className="big-img">
              <img className="image" src={bag.image} alt={bag.title} />
            </div>
          
        
            <div className="box">
        <div className="row">
          <div style={{ float: "left" }}>
            <span className="text-start">
              {bag && bag.tags && bag.map((item) => `#${item} `)}
            </span>
          </div>
          <br />
          <div className="text-start mt-2">
            
            <small className="text-muted">
              {moment(bag.createdAt).fromNow()}
            </small>
          </div>
          <div className="box">
            <div className="row">
              <h2>{bag.title}</h2>
              <span>${bag.Price}</span>
            </div>
            <div>
            <p>{bag.UserDescription}</p>
            
            </div>
            
            
            
            <button className="cart" onClick={addToCartHand}>Add to cart</button>
          </div>
          </div>
        </div>
        <SinglePage/>
      </div>
    </div>
  );
};
export default SingleBag;
