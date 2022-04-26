import React, { useEffect } from "react";
import { MDBCardText, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //to capture the id from url
import moment from "moment"; //to show date
import "./SingleBag.css";
import { getBag } from "../../redux/features/bagSlice";
import TextEditor from "./TextEditor";

const SingleBag = () => {
  const dispatch = useDispatch();
  const { bag } = useSelector((state) => ({ ...state.bag }));
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getBag(id));
    }
  }, [id]);
  return (
    <div className="app">
      <div className="small-container">
        <div className="row">
          <div className="col-2">
            <img className="image" src={bag.image} alt={bag.title} />
          </div>
        </div>
      </div>
      <div className="mb-3 mt-2">
        {/* <img
          position="top"
          style={{ width: "400px", maxHeight: "600px" }}
          src={bag.image}
          alt={bag.title}
        /> */}
        <div>
          <div style={{ float: "left" }}>
            <span className="text-start">
              {bag && bag.tags && bag.map((item) => `#${item} `)}
            </span>
          </div>
          <br />
          <MDBCardText className="text-start mt-2">
            <MDBIcon
              style={{ float: "left", margin: "5px" }}
              far
              icon="calendar-alt"
              size="lg"
            />
            <small className="text-muted">
              {moment(bag.createdAt).fromNow()}
            </small>
          </MDBCardText>
          <div className="box">
            <div className="row">
              <h2>{bag.title}</h2>
              <span>${bag.Price}</span>
            </div>

            <p>{bag.UserDescription}</p>

            {/* <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} /> */}
            <button className="cart">Add to cart</button>
          </div>
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

export default SingleBag;
