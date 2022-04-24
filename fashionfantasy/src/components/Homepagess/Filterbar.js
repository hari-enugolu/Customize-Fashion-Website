import React from "react";
import { Link } from "react-router-dom";
import "./Filterbar.css";

export default function Filterbar() {
  return (
    <div>
      <h2>
        <Link to="HomeShoes" style={{ textDecoration: "none" }}>
          <span className="shoe">Shoes</span>
        </Link>
        <Link to="Home" style={{ textDecoration: "none" }}>
          <span className="Bag">Bags</span>
        </Link>
      </h2>
    </div>
  );
}
