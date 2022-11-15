import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../../../asset/image/search.svg";
import Cart from "../Cart/Cart";
import SearchProduct, { ListSearch } from "./SearchProduct/SearchProduct";
const Search = styled.div`
  display: flex;
  height: 40px;
  margin: 8px 0;
  min-width: 230px;
  width: 230px;
  position: relative;
`;
const Input = styled.input`
  border: none;
  background: rgb(32, 32, 32);
  outline: none;
  padding: 10px 40px;
  border-radius: 10px;
  color: rgb(245, 245, 245);
  width: 100%;
  ::placeholder {
    padding: 10px 20px;
  }
`;
const SearchItem = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
`;
const SearchIcon = styled.img`
  max-width: 18px;
`;
const SubMenu = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  z-index: 2;
  background-color: rgb(18, 18, 18);
  width: 100%;
`;
const Menu = styled.ul`
  display: flex;
  gap: 40px;
  height: 100%;
  justify-content: center;
  align-items: center;
  a.active {
    color: #fff;
    text-decoration: underline;
  }
  a.inactive {
    font-style: italic;
  }
`;
const List = styled(NavLink)`
  color: gray !important;
  cursor: pointer;
  &:hover {
    color: white !important;
  }
`;
const SubHeader = styled.div`
  max-width: 1024px;
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  /* &:hover {
    ${ListSearch} {
      display: block;
    }
  } */
`;

function SecondarybHeader() {
  const [showProductList, setShowProductList] = useState(false);
  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    if (lowerCase === "") {
      setShowProductList(false);
    } else {
      setShowProductList(true);
    }
  };
  return (
    <>
      <SubMenu>
        <SubHeader>
          <div className="d-flex">
            <Search>
              <SearchItem>
                <SearchIcon src={searchIcon} alt="" />
              </SearchItem>
              {showProductList && <SearchProduct input={inputText} />}
              <Input
                type="text"
                placeholder="Search item"
                onChange={inputHandler}
              />
            </Search>
            <Menu>
              <List
                to="/"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Discover
              </List>
              <List
                to="/store"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Browse
              </List>
              <List
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                News
              </List>
            </Menu>
          </div>
          <Cart />
        </SubHeader>
      </SubMenu>
    </>
  );
}
export default SecondarybHeader;
