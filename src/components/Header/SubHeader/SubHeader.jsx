import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import searchIcon from "../../../asset/image/IconSearch.svg";
import Cart from "../Cart/Cart";
const Search = styled.div`
  display: flex;
  height: 40px;
  margin: 8px 0;
  min-width: 230px;
  width: 230px;
  position: relative;
`;
const Input = styled.input`
  background-color: transparent;
  outline: none;
  padding: 10px 40px;
  border: 1px solid gray;
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
  max-width: 25px;
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
`;

function SecondarybHeader() {
  return (
    <>
      <SubMenu>
        <SubHeader>
          <div className="d-flex">
            <Search>
              <SearchItem>
                <SearchIcon src={searchIcon} alt="" />
              </SearchItem>
              <Input type="text" placeholder="Search item" />
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
