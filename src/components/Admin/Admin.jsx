import React from "react";
import { Outlet } from "react-router-dom";
import MenuAdmin from "./MenuAdmin/MenuAdmin";

function Admin() {
  return (
    <div className="container-fluid" id="admin">
      <div className="row">
        <div className="col-md-2  min-height-100vh">
          <MenuAdmin />
        </div>
        <div className="col-md-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Admin;
