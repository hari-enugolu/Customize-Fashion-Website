import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";




export default function Header() {
 
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NeO4RvIHyBCcvFMsVuxLuQHaFP%26pid%3DApi&f=1"
        alt="logo"
      />
      <Link to="/" style={{ textDecoration: "none" }}>
      <div className="header_option">
        <span className="header_optionLineOne">Home </span>
      </div>
      </Link>
      <Link to="addEditBag" style={{ textDecoration: "none" }}>
      <div className="header_option">
        <span className="header_optionLineOne">AddBag </span>
      </div>
      </Link>
      <Link to="AddShoe" style={{ textDecoration: "none" }}>
      <div className="header_option">
        <span className="header_optionLineOne">AddShoe </span>
      </div>
      </Link>

      

      
      <Link to="Orders" style={{textDecoration:"none"}}>
      <div className="header_option">
        <span className="header_optionLineOne">Orders </span>
      </div>
      </Link>
      <div className="header_option">
        <span className="header_optionLineOne">Logout </span>
      </div>
    </div>
  );
}
