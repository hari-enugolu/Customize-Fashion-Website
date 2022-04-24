import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBags } from "../../redux/features/bagSlice";
import Filter from "../Filter/Filter";
import CardBag from "../CardBag";

import "./Home.css";

const Home = () => {
  const { bags, loading } = useSelector((state) => ({ ...state.bag }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBags());
  }, []);

  if (loading) {
    return <h2>Loading..</h2>;
  }
  return (
    <div className="pahe">
      <div>
        <Filter />
      </div>
      <div className="container-fluid mx-2">
        <div className="col-md-10">
          <div className="row">
            {bags &&
              bags.map((item, index) => <CardBag key={index} {...item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
