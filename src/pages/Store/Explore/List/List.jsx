import React from "react";
import styled from "styled-components";
import warnnig from "../../../../asset/image/16.svg";

const Card = styled.div`
  background-color: white;
  display: flex;
  margin: 20px 0;
  border-radius: 21px;
  flex-direction: column;
`;
const ImageCard = styled.img`
  border-radius: 20px 20px 0 0;
  aspect-ratio: 10 / 9;
`;
const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Creator = styled.p`
  color: #556772;
  margin: 0;
`;
const IconCreator = styled.img`
  width: 20px;
  height: 20px;
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: black;
  margin: 0;
`;
const Button = styled.button`
  border: none;
  outline: 0px;
  cursor: pointer;
  padding: 10px;
  width: 100%;
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
  border-radius: 11px;
  text-transform: uppercase;
`;
const Offer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconWarnning = styled.img`
  margin: 10px;
  width: 25px;
  height: 25px;
`;
const InfoItem = styled.div`
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function List() {
  return (
    <div className="list">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card>
              <ImageCard src="https://cdn.cloudflare.steamstatic.com/steam/apps/108600/hero_capsule.jpg?t=1664904563" />
              <InfoItem>
                <Info>
                  <IconCreator
                    src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                    alt=""
                  />
                  <Creator>KRAFTON InC</Creator>
                </Info>
                <Offer>
                  <Name>Days Gone</Name>
                  <IconWarnning src={warnnig} alt="" />
                </Offer>
                <Offer>
                  <Button>Make Offer : 50$ </Button>
                </Offer>
              </InfoItem>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
