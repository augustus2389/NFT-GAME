import React from "react";
import { Overlay } from "react-bootstrap";
import styled from "styled-components";

const ImageNews = styled.div`
  position: relative;
`;
const Image = styled.img`
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;
const OverLay = styled.div`
  background-color: white;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;
const Text = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 32px;
`;
const TitleNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Day = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;
const More = styled.div``;
const Span = styled.span`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.5s ease 0s;
  color: white;
`;
const LatestArticle = styled.div`
  cursor: pointer;
  margin: 30px 0 20px 0;
  &:hover {
    ${ImageNews} > ${Image} {
      opacity: 0.3;
    }
  }
  &:hover {
    ${ImageNews} > ${Overlay} {
      opacity: 1;
    }
  }
  &:hover {
    ${TitleNews} > ${More} > ${Span} {
      border-bottom: 1px solid white;
    }
  }
`;
function Main() {
  return (
    <>
      <div className="col-lg-6">
        <LatestArticle>
          <ImageNews>
            <Image
              src="https://cdn2.unrealengine.com/nikefanclash-16x9-1920x1079-fc4f2f767062.jpg?h=480&resize=1&w=854"
              alt=""
              className="image"
            />
            <OverLay className="middle">
              <Text>View</Text>
            </OverLay>
          </ImageNews>
          <TitleNews>
            <Day>2D ago</Day>
            <p>Rocket League Ignites the Pitch with Nike FC Cup</p>
            <More>
              <Span to="/">Read More</Span>
            </More>
          </TitleNews>
        </LatestArticle>
      </div>
      <div className="col-lg-6">
        <LatestArticle>
          <ImageNews>
            <Image
              src="https://cdn2.unrealengine.com/be-the-goat-goat-simulator-3-is-out-now-exclusively-on-epic-games-store-1920x1080-7046247a9f55.jpg?h=480&resize=1&w=854"
              alt=""
              className="image"
            />
            <OverLay>
              <Text>View</Text>
            </OverLay>
          </ImageNews>
          <TitleNews>
            <Day>2D ago</Day>
            <p>
              Be the goat. Goat Simulator 3 is out now, exclusively on Epic
              Games Store
            </p>
            <More>
              <Span to="/">Read More</Span>
            </More>
          </TitleNews>
        </LatestArticle>
      </div>
    </>
  );
}

export default Main;
