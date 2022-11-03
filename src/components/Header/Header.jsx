import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asset/image/logo.png";
import "./style.css";
import user from "../../asset/image/user.svg";
import styled from "styled-components";

const User = styled.img`
  width: 30px;
  height: auto;
`;
function Header() {
  const navigate = useNavigate();

  const handleClickNav = () => {
    navigate("/Store");
  };
  return (
    <>
      <section id="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="slogan d-flex justify-content-around align-items-center">
                <div className="logo ">
                  <Link to="/">
                    <img src={logo} alt="Logo NFT" />
                  </Link>
                </div>
                <Link to="/">
                  <p>NFT</p>
                </Link>

                <div className="search d-flex align-items-center">
                  {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
                  <input type="text" placeholder="Find something..." />
                </div>
              </div>
            </div>
            <div className="col-lg-7 ">
              <div className="action d-flex">
                <nav className="menu navbar navbar-expand-lg">
                  <div className="container-fluid">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse menu"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <button
                            className="nav-link "
                            onClick={handleClickNav}
                          >
                            Store
                          </button>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link button-29" to="/">
                            Community
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/blog">
                            Blog
                          </Link>
                        </li>
                        <li className="nav-item ">
                          <Link className="nav-link">About</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div className="login-form d-flex justify-content-center align-items-center">
                  <Link to="/login">
                    <User src={user} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
