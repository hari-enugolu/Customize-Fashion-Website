import React, { useEffect } from "react";
import { MDBCardText, MDBIcon } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; //to capture the id from url
import moment from "moment"; //to show date
import { getShoe } from "../../redux/features/shoeSlice";
import Singlepage from "./Singlepage";
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
    <>
      <div className="mb-3 mt-2">
        <img
          position="top"
          style={{ width: "400px", maxHeight: "600px" }}
          src={shoe.image}
          alt={shoe.title}
        />
        <div>
          <h3>{shoe.title}</h3>
          <div style={{ float: "left" }}>
            <span className="text-start">
              {shoe && shoe.tags && shoe.map((item) => `#${item} `)}
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
              {moment(shoe.createdAt).fromNow()}
            </small>
          </MDBCardText>
          <MDBCardText className="lead mb-0 text-start">
            {shoe.Price}
          </MDBCardText>
        </div>
        <Singlepage />
      </div>
    </>
  );
};
export default SingleShoe;
