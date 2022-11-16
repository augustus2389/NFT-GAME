import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Header.scss";
import { IconContext } from "react-icons";
import logo from "../../asset/image/logo.png";
import styled from "styled-components";
import SecondarybHeader from "./SubHeader/SubHeader";
import HeaderAccount from "./HeaderAccount/HeaderAccount";

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
`;
const Download = styled(Link)`
  background-color: #0078f2;
  color: white;
  font-size: 12px;
  padding: 20px 40px;
`;
function Navbar() {
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
          <div className="d-flex  ">
            <HeaderAccount />

            <Download
              role="menuitem"
              tabIndex="0"
              to="https://launcher-public-service-prod06.ol.epicgames.com/launcher/api/installer/download/EpicGamesLauncher.dmg?trackingId=b1557f5a2e1644ffb1f7a2dd63d06b65"
              className="focusable accent-bg-color accent-bg-color-hover"
            >
              <span className="accent-text-color accent-text-color-hover fw-bold">
                Download
              </span>
            </Download>
          </div>
        </nav>
      </IconContext.Provider>
      <SecondarybHeader />
    </section>
  );
}

export default Navbar;
