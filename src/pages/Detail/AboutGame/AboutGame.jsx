import React from "react";
import styled from "styled-components";
import success from "../../../asset/image/success.svg";

const Title = styled.h2`
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  line-height: 0;
  padding: 50px 10px 0 10px;
  text-transform: uppercase;
  color: black;
`;
const Description = styled.p`
  color: black;
`;
const Language = styled.table`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin: 40px 0;
`;
const List = styled.td`
  color: #8f98a0;
  font-weight: 700;
  list-style-type: none;
  padding: 5px 15px;
  border-bottom: 1px solid #8f98a0;
`;
const LisTh = styled.th`
  border-bottom: 1px solid #8f98a0;
  text-align: left;
  white-space: nowrap;
  padding: 8px 17px 0 16px;
`;

const Success = styled.img`
  width: 20px;
`;
const CheckCol = styled.th`
  color: #1199fa;
  padding: 10px 0 0 20px;
`;
const Tag = styled.span`
  font-weight: 700;
  padding: 10px 0;
`;
const System = styled.ul`
  list-style-type: none;
  padding: 0;
`;
function AboutGame({ detail }) {
  return (
    <section className="about-game">
      <div className="row">
        <div className="col-lg-8">
          <div className="about-this-game">
            <div className="title">
              <Title>About this game</Title>
              <img
                src="https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png"
                alt="line"
              />
            </div>
            <div className="review">
              <Tag>LAND, LOOT, SURVIVE!</Tag>
              <Description>{detail?.about}</Description>
            </div>
          </div>
          <div className="requirements">
            <div className="title">
              <Title>SYSTEM REQUIREMENTS</Title>
              <img
                src="https://store.cloudflare.steamstatic.com/public/images/v6/maincol_gradient_rule.png"
                alt="line"
              />
              <div className="info">
                <Tag>RECOMMENDED:</Tag>

                <System>
                  <li>Requires a 64-bit processor and operating system</li>
                  <li>
                    <strong>OS: </strong>
                    64-bit Windows 7, Windows 8.1, Windows 10
                  </li>
                  <li>
                    <strong>Processor: </strong>
                    Intel Core i5-6600K / AMD Ryzen 5 1600
                  </li>
                  <li>
                    <strong>Memory: </strong>
                    16 GB RAM
                  </li>
                  <li>
                    <strong>Graphics: </strong>
                    NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB
                  </li>
                  <li>
                    <strong>DirectX: </strong>
                    Version 11
                  </li>
                  <li>
                    <strong>Network: </strong>
                    Broadband Internet connection
                  </li>
                  <li>
                    <strong>Storage: </strong>
                    50 GB available space
                  </li>
                </System>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <Language>
            <tbody>
              <tr>
                <CheckCol>Language:</CheckCol>
              </tr>
              <tr>
                <LisTh></LisTh>
                <LisTh>Full Audio</LisTh>
                <LisTh>Subtitles</LisTh>
                <LisTh>Subtitles</LisTh>
              </tr>
              <tr>
                <List>English</List>
                <List>
                  <Success src={success} />
                </List>
                <List></List>
                <List></List>
              </tr>
              <tr>
                <List>Korean</List>
                <List>
                  <Success src={success} />
                </List>
                <List></List>
                <List></List>
              </tr>
              <tr>
                <List>French</List>
                <List>
                  <Success src={success} />
                </List>
                <List></List>
                <List></List>
              </tr>
              <tr>
                <List>German</List>
                <List>
                  <Success src={success} />
                </List>
                <List></List>
                <List></List>
              </tr>
              <tr>
                <List>Chinese</List>
                <List>
                  <Success src={success} />
                </List>
                <List></List>
                <List></List>
              </tr>
            </tbody>
          </Language>
          <Language>
            <tbody>
              <tr>
                <List>TITLE: </List>
                <List>PUBG: BATTLEGROUNDS</List>
              </tr>
              <tr>
                <List>GENRE: </List>
                <List>
                  Action, Adventure, Free to Play, Massively Multiplayer
                </List>
              </tr>
              <tr>
                <List>DEVELOPER: </List>
                <List>KRAFTON, Inc.</List>
              </tr>
              <tr>
                <List>PUBLISHER: </List>
                <List>KRAFTON, Inc.</List>
              </tr>
              <tr>
                <List>RELEASE DATE: </List>
                <List>21 Dec, 2017</List>
              </tr>
            </tbody>
          </Language>
        </div>
      </div>
    </section>
  );
}

export default AboutGame;
