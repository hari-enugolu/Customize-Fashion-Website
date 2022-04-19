import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createBag } from "../../redux/features/bagSlice.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./AddBag.css";

//to define the state for the form field(initialing the state)
const initialState = {
  title: "",
  Price: "",
  Gender: "",
};
const options=["Male","Female"];
const AddEditBag = () => {
  const [bagData, setBagData] = useState(initialState);
  //destructure intialvalue for foodData
  const { title, Price, Gender } = bagData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && Price && Gender) {
      dispatch(createBag({ bagData, navigate, toast }));
    } else {
      handleClear();
    }
  };
  //to get inputdata
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setBagData({ ...bagData, [name]: value });
  };
  const onCategoryChange=(e)=>{
    setBagData({...bagData,Gender:e.target.value });
  }
  //to cleare out the inputfield
  const handleClear = () => {
    setBagData({ title: "", Price: "", Gender: "" });
  };
  return (
    <div className="back">
      <div
        style={{
          
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
          color: "grey",
        }}
        className="container"
      >
        <MDBCard alignment="center">
          <h5>Add bag</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              className="row g-3"
              noValidate
            >
              <div className="col-md-12">
                <span className="lname">Brand Name </span>
                <MDBInput
                  placeholder="Enter Name"
                  type="text"
                  value={title}
                  name="title"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide Name"
                />
              </div>
              <div className="cel-md-43">
                <span className="squality">price</span>
                <MDBInput
                  placeholder="Enter Price"
                  type="text"
                  value={Price}
                  name="Price"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid
                  validation="Please provide Price"
                />
              </div>

              <div className="cal-md-23">
                <span className="Address">gender</span>
                <select classname="selaection" onChange={onCategoryChange}>
                  <option>Gender Selection</option>
                  {options.map((option,index)=>(
                    <option value={option||""} key={index}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="d-flex justify-content-start">
                <FileBase
                  type="file"
                  multiple={false}
                  //method and it will convert convert file into the base64
                  onDone={({ base64 }) =>
                    //spredout fooddata
                    setBagData({ ...bagData, image: base64 })
                  }
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: "100%" }}>Submit</MDBBtn>
                <MDBBtn
                  style={{ width: "100%" }}
                  className="mt-2"
                  color="danger"
                  onClick={handleClear}
                >
                  Clear
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default AddEditBag;
