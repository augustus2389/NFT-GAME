import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import agelimit from "../../../asset/image/13.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import productApi from "../../../api/productApi";

const Info = styled.div`
  padding: 10px;
`;
const divStyle = {
  width: "100%",
  borderRadius: "10px",
  height: "100%",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  padding: "90px 10px",
};
const Button = styled.button`
  margin-bottom: 10px;
  border: none;
  outline: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
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
  width: 100%;
  text-transform: uppercase;
`;
const AgeLimit = styled.img`
  margin: 10px 0;
  width: 20px !important;
  height: 20px !important;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  justify-content: space-around;
`;
const TitleText = styled.p`
  font-size: 14px;
  color: #8f98a0;
  font-weight: 700;
  width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const Price = styled.div`
  display: flex;
  justify-content: space-around;
`;
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
              }}
            >
              <SuggestImage src={most.avatar} alt="" />
              <Info>
                <Title>
                  <TitleText>{most.title}</TitleText>
                  <p style={{ color: "black", fontSize: "14px" }}>
                    {most.price}
                  </p>
                </Title>
                <Price>
                  <Button>Make Offer</Button>
                </Price>
              </Info>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
}
