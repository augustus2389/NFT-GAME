import React, { useState } from "react";
import styled from "styled-components";
import FilterType from "../../Wishlist/Filter/FilterGenre";
import search from "../../../asset/image/search.svg";
import ListProduct from "./List/List";

const Input = styled.input`
  background-color: rgb(32, 32, 32);
  color: gray;
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 30px;
  border-radius: 4px;
`;
const FilterItem = styled.div`
  position: relative;
  margin: 20px 0;
`;
const IconSearch = styled.img`
  width: 15px;
  position: absolute;
  top: 35%;
  left: 3%;
`;
function Explore() {
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <ListProduct input={inputText} />
        </div>
        <div className="col-lg-3 ">
          <FilterItem>
            <Input type="text" placeholder="Keywords" onChange={inputHandler} />
            <IconSearch src={search} alt="" />
          </FilterItem>
          <FilterType />
        </div>
      </div>
    </>
  );
}

export default Explore;
