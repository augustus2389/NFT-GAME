import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import backHome from "../../../asset/image/back.svg";
import tick from "../../../asset/image/tick.svg";
import warnning from "../../../asset/image/16.svg";

const Description = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 22px;
`;
const Back = styled.a`
  color: rgb(17, 153, 250);
  text-align: left;
  display: flex;
  align-items: center;
`;
const IconBack = styled.img`
  width: 5px;
  height: 10px;
  margin-right: 10px;
`;
const Tick = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 0;
  left: 40px;
`;
const IconCreator = styled.img`
  width: 60px;
  margin-right: 10px;
  height: 60px;
  border-radius: 50%;
`;
const TextInfo = styled.p`
  color: #626973;
  line-height: 21px;
  font-size: 14px;
`;
const NameCreate = styled.p`
  color: black;
  line-height: 40px;
  font-size: 14px;
  margin-right: 40px;
`;
const Creator = styled.div`
  display: flex;
  margin-top: 20px;
`;
const CreatorInfo = styled.div`
  margin-right: 25px;
`;
const Button = styled.button`
  margin: 0px;
  border: none;
  padding: 0px 24px;
  outline: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3em;
  text-decoration: none;
  background: linear-gradient(
    90deg,
    rgb(17, 153, 250) 0%,
    rgb(17, 208, 250) 100%
  );
  color: rgb(255, 255, 255);
  border-radius: 4px;
  height: 48px;
  min-width: 128px;
  text-transform: uppercase;
`;
const ButtonOffer = styled.button`
  margin: 0px;
  border: none;
  padding: 0px 24px;
  outline: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3em;
  text-decoration: none;
  border-radius: 4px;
  height: 48px;
  min-width: 128px;
  text-transform: uppercase;
  background: white;
  border: 1px solid rgb(17, 153, 250);
  color: rgb(17, 153, 250);
`;
const Action = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 40px;
`;
const Represent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Tag = styled.div`
  display: flex;
  gap: 20px;
`;
const LinkTag = styled.p`
  border: 1px solid #1199fa;
  border-radius: 4px;
  color: #1199fa;
  padding: 10px 5px;
  background-color: white;
  cursor: pointer;
  text-transform: capitalize; ;
`;
const Name = styled.div`
  margin: 10px 0 0;
  display: flex;
`;
const IconAgeLimit = styled.img`
  width: 20px;
  height: 20px;
  margin: 2px 20px;
  line-height: 10px;
`;
const NameText = styled.p`
  margin: 0;
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

function InfoGame() {
  return (
    <>
      <Represent>
        <Back>
          {" "}
          <IconBack src={backHome} alt="" />
          <Link to="/">Back</Link>
        </Back>
        <Name>
          <NameText>PUBG: BATTLEGROUNDS</NameText>
          <IconAgeLimit src={warnning} alt="" />
        </Name>
        <Creator>
          <div className="create-avatar position-relative">
            <IconCreator src="https://file.mk.co.kr/meet/neds/2020/03/image_readtop_2020_237977_15834692904113775.jpg" />
            <Tick src={tick} />
          </div>
          <CreatorInfo>
            <TextInfo>Creator</TextInfo>
            <NameCreate>KRAFTON InC</NameCreate>
          </CreatorInfo>
          <div className="creator-info">
            <TextInfo>RELEASE DATE:</TextInfo>
            <NameCreate>21 Dec, 2017</NameCreate>
          </div>
        </Creator>
        <Action>
          <Button>
            <Link to="./CheckOut">buy for 15$</Link>
          </Button>
          <ButtonOffer>make offer</ButtonOffer>
        </Action>
        <Description>
          Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot
          weapons and supplies, and survive to become the last team standing
          across various, diverse Battlegrounds. Squad up and join the
          Battlegrounds for the original Battle Royale experience that only
          PUBG: BATTLEGROUNDS can offer
        </Description>
        <Tag>
          <LinkTag>Survival</LinkTag>
          <LinkTag>Action</LinkTag>
          <LinkTag>Battle Royal</LinkTag>
          <LinkTag>Multiplayer</LinkTag>
        </Tag>
      </Represent>
    </>
  );
}

export default InfoGame;
