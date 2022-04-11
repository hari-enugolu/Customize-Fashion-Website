import React from "react";
import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          className="header_logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PJrK05phIOe_1pJEcVNIxgHaHj%26pid%3DApi&f=1"
          alt="logo"
        />
      </Link>

      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="search"
        />
        {/* <SearchIcon className="header_searchIcon" /> */}
      </div>

      <Link to="cart" style={{ textDecoration: "none" }}>
        <div className="header_option">
          <span className="header_optionLineOne">Cart </span>
        </div>
      </Link>

      <Link to="wishlist" style={{ textDecoration: "none" }}>
        <div className="header_option">
          <span className="header_optionLineOne">Wishlist </span>
        </div>
      </Link>

      <Link to="profile" style={{ textDecoration: "none" }}>
        <div className="header_option">
          <span className="header_optionLineOne">Profile</span>
        </div>
      </Link>
    </div>
  );
}
