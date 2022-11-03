import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GameTrend = styled.div`
  position: relative;
  margin: 0 10px;
`;
const TrendImage = styled.img`
  aspect-ratio: 12/10;
  border-radius: 15px;
`;
const Name = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-around;
  bottom: 0;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 55.92%) 0% 0% /
    cover no-repeat;
  border-radius: 15px;
`;
const Publisher = styled.div`
  align-items: center;
  display: flex;
`;
const IconCompany = styled.img`
  width: 31px;
  height: 31px;
  border-radius: 50%;
  margin: 0px 5px;
`;
const Title = styled.p`
  font-size: 16px;
  color: white;
  font-weight: 700;
  margin: 5px 0;
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const PriceTrend = styled.p`
  font-weight: 700;
  margin: 8px 0px;
`;

function Trend() {
  return (
    <div className="row">
      <div className="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6">
        <Link to="/">
          <GameTrend>
            <TrendImage
              src="https://cdn.cloudflare.steamstatic.com/steam/spotlights/5f5a57b9472afa311d73188c/spotlight_image_english.jpg?t=1666373173"
              alt="top-trend"
            />
            <Name>
              <Publisher>
                <IconCompany
                  src="https://avatars.cloudflare.steamstatic.com/94307444005acb73afbadda08f17eb5692376efb_full.jpg"
                  alt=""
                />
                <Title>The Elder Scrolls V: Skyrim Special Edition</Title>
              </Publisher>
              <PriceTrend>42 $</PriceTrend>
            </Name>
          </GameTrend>
        </Link>
      </div>
      <div className="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6">
        <Link to="/">
          <GameTrend>
            <TrendImage
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/1259420/hero_capsule.jpg?t=1635476187"
              alt="top-trend"
            />
            <Name>
              <Publisher>
                <IconCompany
                  src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
                  alt=""
                />
                <Title>Days Gone</Title>
              </Publisher>
              <PriceTrend>42 $</PriceTrend>
            </Name>
          </GameTrend>
        </Link>
      </div>
      <div className="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6">
        <Link to="/">
          <GameTrend>
            <TrendImage
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/251570/hero_capsule.jpg?t=1650477344"
              alt="top-trend"
            />
            <Name>
              <Publisher>
                <IconCompany
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAqCAMAAAC+9zSRAAAAw1BMVEX///8AAADu7u5fX18RERE9PT2NjY2mpqb7+/vh4eE1NTWtra1PT0+IiIi0tLTFxcX09PTNzc29vb16enptbW1ISEidnZ0tLS1CQkKTk5MKCgrW1tZkZGRWVlbn5+eBgYEfHx8mJibR3OuZr85DaKVhfq/o8PfW7/uEuN8AXq0AV6cAZq8IeLttxO4+nNMYisgIbrRyl8OX2PYmwvdey/aEqM+56f2/9P8glrSG2/Yrj6EFFRs41v+kyNcdXmomZ3AOKjSkrKjdAAAEl0lEQVRYhbWY54KbRhCAd2iLRFk6SCBASWzHsZJcenHa+z9VdrYAkhAcd/b8ONrsfOxUdIRSWsR1FO74gWySL7786s3bbUsmQrMTdWhbUZNu4b77+v03Hy7vX84l3oEUtM0p3bLI/fa7y/dPTz+8HEso53ahT1O228D98afL5enDK7YruHZz8uws3LLs7c+Xp19egUXuwTP8bX5G+fVpx17JxfgejGjTOqMjQfAKbkKJFxpZYpfFtoV5CfnLsbGWOm5bxhKxaTwhO6YzLWZM1ZibMJQYH1AA4IeaTRMywpWxUGL1xIE1i1tx1F6FUZyQ/xE2Cn7iBgC+1KkASnlmaN2ekpYfakJSgGq07+HLnLRWZsi71MIrOyYR7UCmrzVyD4nm4lZch/8R70h8vuaGC3AiNgAPTcfPx42ZyDVHrRpvNvrKI3u78nfRNde55zqPuXDgXjElN9FYF264lkvIYbzckQCCRO03q2WE2/COCzNcJ46ZMMXEc+SmQ7ZobslthntAj4h3PcQM3yb77Xf4Q/t5qIYZbnLP9fAEXeOVqI7cXltwNHevk6cSyeKpNLGsPz/+9fczuP4DLprsOrzoQK/isr/mdirLrCHn4OM//wJd54rMmuNygskdnUluMQ3/yEU7UQ/QjEGA/+TDNW7wgMud5vMsOkuuKjjvhovXuyH+O5VcR4Ssca3H+z2hC41AqMlKamb2a2DmytVtKp5n2BnXuJhZD+Kb4X5YoLWIbkIjF02QnO9QAUSZQdOZz+CeZrmxCCpvWY5US8cATrg9NrpiLDTJPWPLQq4bCbnnlpnIrGsujQwjOUpVPho8BVPb01zXMHbYLx0S4T2znTgkIyv9yorFyvl+xZ2FrYjJK1xnj9xBWulG7t2YqDoTNbLcn8kRgzPLtTCVas6VForx4ZQrhkAhz32DpMPN5f4slrDTDLeRGXyE4sS7EOAoDkXsptxejc+4V5uXk6qTXP8gxGEzXASZ2RW34bqJGnB8A2Yh0yDCKuo7xe25Eq3JIEkl3kPyc8l1HuezHGz7K+7V5x+DYwI9LkwwJk0A03wWUrhyz+fRs9FaHQ21cVe/ZKgMBhZ+AqTYjrzunstjL2ISic0eUYOtc8l5kcudy8cSZnKJqWDMclX5UpmOPLDtM7jFMteDrAOsp+MZ52G6wK2loU50r1Vuu8xtMbrSJCbqM7gFGDdczGeRg/g5QRRXNvuHXN5+E9CNiM1xz6LXEsxB/gbAv2rqG26trZo4hzSXLXML8PhHVCa47hw3Ew+I+PKEFrpaWJhyXV4JZ0OSmoGL3X2BW0PXuLIXnsgc11OODkXlZhDfcWUbq2zpsoFbLHJJX/I6EY2MznLFEDpWZ2mVgSOG5hU3Giq7ISM3WuZ2fELJjr+b5aq5gIKDqMqxfDEhJr+u2qNUwFkTaC7aWeAy8ORH8pmM3HKqoUalTGsexJrGpLL3h6lOmOV+Ktp5UeXqd1ds541yyD63E3Ijos/XdoV2nCq3SZrn5pVGRJv85MiPzsws2/D23V8k5n5d53NICNt+OX8qiWDjf6A+ldjOus7nEJptXvI/w8pEzjrhbrgAAAAASUVORK5CYII="
                  alt=""
                />
                <Title>7 Days to Die</Title>
              </Publisher>
              <PriceTrend>42 $</PriceTrend>
            </Name>
          </GameTrend>
        </Link>
      </div>
      <div className="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6">
        <Link to="/">
          <GameTrend>
            <TrendImage
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/1904540/hero_capsule.jpg?t=1666694694"
              alt="top-trend"
            />
            <Name>
              <Publisher>
                <IconCompany
                  src="data:image/png;base64,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"
                  alt=""
                />
                <Title>Football Manager 2023</Title>
              </Publisher>
              <PriceTrend>42 $</PriceTrend>
            </Name>
          </GameTrend>
        </Link>
      </div>
      <div className="col-xl-2_4 col-lg-2_4 .col-xxl-2_4 col-md-4 col-sm-6 col-6">
        <Link to="/">
          <GameTrend>
            <TrendImage
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/221100/hero_capsule.jpg?t=1664545942"
              alt="top-trend"
            />
            <Name>
              <Publisher>
                <IconCompany
                  src="https://avatars.cloudflare.steamstatic.com/0dd52a2fd907248b26c803c5ffc71a96c06f397c_full.jpg"
                  alt=""
                />
                <Title>DayZ</Title>
              </Publisher>
              <PriceTrend>42 $</PriceTrend>
            </Name>
          </GameTrend>
        </Link>
      </div>
    </div>
  );
}

export default Trend;
