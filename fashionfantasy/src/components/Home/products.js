import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBags } from "../../redux/features/bagSlice";
import { getShoes } from "../../redux/features/shoeSlice";

import CardBag from "../CardBag";
import CardShoe from "../CardShoe";
import "./Home.css";

const Product = () => {
  const { bags, loading: bagLoading } = useSelector((state) => ({
    ...state.bag,
  }));
  const { shoes, loading: shoeLoading } = useSelector((state) => ({
    ...state.shoe,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBags());
    dispatch(getShoes());
  }, []);

  if (bagLoading || shoeLoading) {
    return <h2>Loading..</h2>;
  }

  return (
    <div className="pahe">
      <div></div>
      <div className="container-fluid mx-2">
        <div className="col-md-10">
          <div className="row">
            {bags &&
              bags.map((item, index) => <CardBag key={index} {...item} />)}
            {shoes &&
              shoes.map((item, index) => <CardShoe key={index} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
