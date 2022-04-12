import React from "react";
import { Link } from "react-router-dom";
import "./Filterbar.css";

export default function Filterbar() {
  return (
    <div>
      <h2>
        <Link to="shoespage">
          <span className="shoe">Shoes</span>
        </Link>
        <Link to="bagspage">
          <span className="Bag">Bags</span>
        </Link>
      </h2>
      <hr />
    </div>
  );
}
