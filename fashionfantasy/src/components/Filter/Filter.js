import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchBags } from "../../redux/features/bagSlice";

const Filter = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);

    if (search) {
      dispatch(searchBags(search));
      navigate(`/bags/search?searchQuery=${search}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        <form className="find" onSubmit={handleSubmit}>
          <input
            className="header_searchInput"
            type="text"
            value={search}
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <button>Men</button>
      </div>
    </div>
  );
};
export default Filter;
