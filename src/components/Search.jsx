import React, { useState } from "react";
import { FormStyle } from "../custom-styled";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const searchHandler = (event) => {
    event.preventDefault();

    navigate('searched/' + searchInput);
    console.log("searching...");
  };

  return (
    <div>
      <FormStyle onSubmit={searchHandler}>
        <div>
          <FaSearch />
          <input
            type='text'
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
          />
        </div>
      </FormStyle>
    </div>
  );
}
