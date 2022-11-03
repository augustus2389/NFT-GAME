import React from "react";
import styled from "styled-components";
import Explore from "./Explore/Explore";
import Trend from "./Trend/Trend";
const TopTrendTitle = styled.h2`
  font-size: 20px;
  margin-top: 130px;
  font-weight: 700;
`;

function Store() {
  return (
    <section id="store">
      <div className="top-trend">
        <div className="container">
          <TopTrendTitle>Top Trend</TopTrendTitle>
          <Trend />
          <hr />
          <Explore />
        </div>
      </div>
    </section>
  );
}

export default Store;
