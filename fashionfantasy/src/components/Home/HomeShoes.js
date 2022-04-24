import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShoes } from "../../redux/features/shoeSlice";

import CardShoe from "../CardShoe";

const Homes = () => {
  const { shoes, loading } = useSelector((state) => ({ ...state.shoe }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoes());
  }, []);

  if (loading) {
    return <h2>Loading..</h2>;
  }
  return (
    <div className="pahe">
      <div className="container-fluid mx-2">
        <div className="col-md-10">
          <div className="row">
            {shoes &&
              shoes.map((item, index) => <CardShoe key={index} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homes;
