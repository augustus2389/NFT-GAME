import React from "react";
import "./style.css";
function ProductSearch() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="sort d-flex"></div>
        </div>
        <div className="col-lg-6">
          <form action="" className="d-flex justify-content-around">
            <label htmlFor="">
              <input type="radio" />
              BATTLE ROYAL
            </label>
            <label htmlFor="">
              <input type="radio" />
              ROMANTIC
            </label>
            <label htmlFor="">
              <input type="radio" />
              SPORT
            </label>
            <label htmlFor="">
              <input type="radio" />
              RPG
            </label>
            <label htmlFor="">
              <input type="radio" />
              RACING
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductSearch;
