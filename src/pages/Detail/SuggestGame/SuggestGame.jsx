import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import agelimit from "../../../asset/image/13.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import styled from "styled-components";

const Info = styled.div`
  width: 100%;
  text-align: left;
`;
const divStyle = {
  width: "100%",
  borderRadius: "10px",
  height: "100%",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  padding: "30px 10px",
};
const Button = styled.button`
  margin-bottom: 10px;
  border: none;
  outline: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
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
  min-width: 100px;
  text-transform: uppercase;
`;
const AgeLimit = styled.img`
  margin: 10px 0;
  width: 20px !important;
  height: 20px !important;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TitleText = styled.h3`
  font-size: 14px;
  padding: 10px;
  text-align: center;
  color: #8f98a0;
  font-weight: 700;
`;
const Price = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SuggestImage = styled.img`
  border-radius: 20px 20px 0 0;
`;

export default function SuggestGame() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={true}
        pagination={{
          type: "progressbar",
        }}
        style={divStyle}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/632470/hero_capsule.jpg?t=1666619712"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/261550/hero_capsule.jpg?t=1666681403"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/594650/hero_capsule.jpg?t=1666109756"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/294100/library_600x900.jpg?t=1666542432"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/322330/hero_capsule_alt_assets_33.jpg?t=1666284006"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1919590/hero_capsule.jpg?t=1666364639"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1167630/hero_capsule_alt_assets_0.jpg?t=1666292775"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/hero_capsule.jpg?t=1650554420"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1904540/hero_capsule.jpg?t=1666694694"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1248130/hero_capsule.jpg?t=1659447814"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            flexDirection: "column",
            aspectRatio: "16/20",
          }}
        >
          <SuggestImage
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/hero_capsule.jpg?t=1665784964"
            alt=""
          />
          <Info>
            <Title>
              <TitleText>Disco Elysium - The Final Cut</TitleText>
              <AgeLimit src={agelimit} alt="" />
            </Title>
            <Price>
              <p style={{ color: "black" }}>50$</p>
              <Button>Make Offer</Button>
            </Price>
          </Info>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
