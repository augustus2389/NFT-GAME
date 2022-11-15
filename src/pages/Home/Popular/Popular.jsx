import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import { Autoplay, Navigation, Pagination } from "swiper";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import productApi from "../../../api/productApi";

const Info = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const divStyle = {
  width: "100%",
  borderRadius: "10px",
  height: "100%",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  padding: "90px 10px",
};

const SuggestImage = styled.img`
  border-radius: 20px 20px 0 0;
`;
const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
const MostTitle = styled.p`
  font-size: 24px;
  position: absolute;
  top: 10px;
`;
const BaseGame = styled.p`
  color: gray;
  font-size: 12px;
`;
const TitleGame = styled.span`
  color: #f5f5f5;
  font-size: 14px;
`;
const Now = styled.p`
  text-transform: uppercase;
  font-size: 9px;
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(245, 245, 245);
  padding: 5px 10px;
  width: 50%;
`;
export default function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    productApi.getProductByNew().then((data) => setPopular(data));
  }, []);
  return (
    <>
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          loop={true}
          // autoplay={true}
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <MostTitle>Most Popular </MostTitle>
          {popular.map((most) => (
            <SwiperSlide
              key={most.id}
              style={{
                display: "flex",
                flexDirection: "column",
                aspectRatio: "16/20",
                borderRadius: "20px",
                backgroundColor: "transparent",
              }}
            >
              <SuggestImage src={most.avatar} alt="" />
              <Info>
                <BaseGame>BASE GAME</BaseGame>
                <TitleGame>{most.title}</TitleGame>
                <Now>now on august</Now>
                <p>{most.price} $</p>
              </Info>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
