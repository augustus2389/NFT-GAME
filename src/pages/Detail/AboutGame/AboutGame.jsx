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
      </div>
    </section>
  );
}

export default AboutGame;
