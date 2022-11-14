import React from "react";
import styled from "styled-components";
import useScrollPosition from "../../hooks/useScrollPosition";
import Explore from "./Explore/Explore";
import Trend from "./Trend/Trend";
const TopTrendTitle = styled.h2`
  font-size: 20px;
  margin-top: 130px;
  color: white;
  font-weight: 700;
`;

function Store() {
  // const position = useScrollPosition();
  // console.log(position);
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
