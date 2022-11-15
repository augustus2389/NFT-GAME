import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import productApi from "../../../api/productApi";

const Info = styled.div`
  padding: 10px;
  display: flex;
  position: absolute;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
`;
const divStyle = {
  width: "100%",
  borderRadius: "10px",
  height: "100%",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  padding: "50px 10px 0 0",
};

const SuggestImage = styled.img`
  position: relative;
  border-radius: 20px 20px 0 0;
`;

const TitleGame = styled.span`
  color: #f5f5f5;
  font-size: 14px;
`;

export default function Trend() {
  const [topGame, setTopGame] = useState([]);
  useEffect(() => {
    productApi.getProductBySeller().then((data) => setTopGame(data));
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={true}
        pagination={{
          el: ".swiper-pagination",
          type: "totalClass",
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
        {topGame.map((most) => (
          <SwiperSlide
            key={most.id}
            style={{
              display: "flex",
              flexDirection: "column",
              aspectRatio: "15 / 11",
              borderRadius: "20px",
              backgroundColor: "transparent",
            }}
          >
            <SuggestImage src={most.images[0]} alt="" />
            <Info>
              <TitleGame>{most.title}</TitleGame>
              <p>{most.price} $</p>
            </Info>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
