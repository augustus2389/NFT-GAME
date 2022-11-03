import React from "react";
import Filter from "./Filter/Filter";
import List from "./List/List";

function Explore() {
  return (
    <>
      <div className="row">
        <div className="col-lg-3 ">
          <Filter />
        </div>
        <div className="col-lg-9">
          <List />
        </div>
      </div>
    </>
  );
}

export default Explore;
