import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Header.scss";
import { IconContext } from "react-icons";
import logo from "../../asset/image/logo.png";
import styled from "styled-components";
import user from "../../asset/image/user.svg";
import SecondarybHeader from "./SubHeader/SubHeader";
import { userApi } from "../../api/userApi";
import { useSelector } from "react-redux";

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
`;
const User = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
`;
const LogoUser = styled.img`
  width: 25px;
  margin: 0 10px;
`;
function Navbar() {
  const { auths } = useSelector((state) => state.auth);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <section id="header">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <Logo>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </Logo>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <User>
            <Link to="/signin" className="d-flex">
              <LogoUser src={user} alt="" />
              <p>Sign In</p>
            </Link>
          </User>
        </nav>
      </IconContext.Provider>
      <SecondarybHeader />
    </section>
  );
}

export default Navbar;
