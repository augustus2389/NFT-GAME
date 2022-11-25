import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import productApi from "../../../api/productApi";
import TopSellerList from "./TopSeller/TopSeller";

export const TagInfo = styled.div``;
export const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
export const TopSeller = styled.div`
  border-right: 1px solid gray;
`;
export const Seller = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;
export const IconWishList = styled.img`
  width: 15px !important;
`;
export const TagSeller = styled.div`
  width: 60px;
  position: relative;
  border-radius: 4px;
`;
export const Image = styled.img`
  aspect-ratio: 5/6;
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 4px;
`;
export const HeaderCatory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Heading = styled.h3`
  color: white;
  font-size: 18px;
`;
export const ButtonMore = styled.button`
  margin: 0 10px;
  background-color: transparent;
  outline: none;
  transition: all 0.5s linear;
  color: white;
  border-radius: 4px;
  padding: 5px 20px;
  border: 1px solid gray;
  &:hover {
    background-color: gray;
  }
`;
export const ActionWish = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;
export const CatgoryItem = styled.div`
  position: relative;
  &:hover {
    ${Seller} > ${TagSeller} > ${ActionWish} {
      display: block;
    }
  }
`;
export const LinkPerfect = styled(Link)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

function Category() {
  const [gameTop, setTop] = useState([]);
  const [gameMost, setMost] = useState([]);
  const [gameNew, setNew] = useState([]);
  useEffect(() => {
    productApi.getProductBySeller().then((data) => setTop(data));
  }, []);
  useEffect(() => {
    productApi.getProductByMost().then((data) => setMost(data));
  }, []);
  useEffect(() => {
    productApi.getProductByNew().then((data) => setNew(data));
  }, []);
  console.log(gameTop);
  const eventgame = gameTop.filter((a) => a.id < 14);
  return (
    <section id="catory">
      <div className="container">
        <Container>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 ">
              <TopSellerList eventgame={eventgame} />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
              {/* <TopSellerList gameMost={gameMost} /> */}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 ">
              {/* <TopSellerList gameNew={gameNew} /> */}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Category;
