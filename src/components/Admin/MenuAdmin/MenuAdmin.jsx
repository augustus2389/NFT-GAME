import React from "react";
import { NavLink } from "react-router-dom";

function MenuAdmin() {
  return (
    <>
      <h2 className="my-3 text-white text-center">Application</h2>
      <div className="pt-3">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white fw-bold" end>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/usersList"
              className="nav-link text-white fw-bold"
            >
              User
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/productList"
              className="nav-link text-white fw-bold"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuAdmin;
