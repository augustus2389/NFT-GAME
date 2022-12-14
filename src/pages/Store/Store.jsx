import React from "react";
import styled from "styled-components";
import Explore from "./Explore/Explore";
import Trend from "./Trend/Trend";
const TopTrendTitle = styled.h2`
  font-size: 20px;
  margin-top: 30px;
  color: white;
  font-weight: 700;
`;

function Store() {
  return (
    <section id="store">
      <div className="top-trend">
        <div className="container">
          <TopTrendTitle>Popular Genres</TopTrendTitle>
          <Trend />
          <hr />
          <Explore />
        </div>
      </div>
    </section>
  );
}

export default Store;
