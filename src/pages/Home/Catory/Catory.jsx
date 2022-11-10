import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import productApi from "../../../api/productApi";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
const TopSeller = styled.div`
  border-right: 1px solid gray;
`;
const Seller = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;
const TagSeller = styled.div`
  width: 60px;
  border-radius: 4px;
`;
const Image = styled.img`
  aspect-ratio: 5/6;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;
const HeaderCatory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Heading = styled.h3`
  color: white;
  font-size: 18px;
`;
const ButtonMore = styled.button`
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
const TagInfo = styled.div``;
function Catory() {
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
  return (
    <section id="catory">
      <div className="container">
        <Container>
          <div className="row">
            <div className="col-lg-4">
              <TopSeller>
                <HeaderCatory>
                  <Heading>Top Seller</Heading>
                  <ButtonMore>View more</ButtonMore>
                </HeaderCatory>
                {gameTop.map((top) => (
                  <Link to={`/detail/${decodeURI(top.title)}-${top.id}`}>
                    <Seller key={top.id}>
                      <TagSeller>
                        <Image src={top.avatar} alt="" />
                      </TagSeller>
                      <TagInfo>
                        <p>{top.title}</p>
                        <p>{top.price}</p>
                      </TagInfo>
                    </Seller>
                  </Link>
                ))}
              </TopSeller>
            </div>
            <div className="col-lg-4">
              <TopSeller>
                <HeaderCatory>
                  <Heading>Most Played</Heading>
                  <ButtonMore>View more</ButtonMore>
                </HeaderCatory>
                {gameMost.map((most) => (
                  <Link to={`/detail/${decodeURI(most.title)}-${most.id}`}>
                    <Seller key={most.id}>
                      <TagSeller>
                        <Image src={most.avatar} alt="" />
                      </TagSeller>
                      <TagInfo>
                        <p>{most.title}</p>
                        <p>{most.price}</p>
                      </TagInfo>
                    </Seller>
                  </Link>
                ))}
              </TopSeller>
            </div>
            <div className="col-lg-4">
              <TopSeller>
                <HeaderCatory>
                  <Heading>New Gaming</Heading>
                  <ButtonMore>View more</ButtonMore>
                </HeaderCatory>
                {gameNew.map((game) => (
                  <Link to={`/detail/${decodeURI(game.title)}-${game.id}`}>
                    <Seller key={game.id}>
                      <TagSeller>
                        <Image src={game.avatar} alt="" />
                      </TagSeller>
                      <TagInfo>
                        <p>{game.title}</p>
                        <p>{game.price}</p>
                      </TagInfo>
                    </Seller>
                  </Link>
                ))}
              </TopSeller>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Catory;
