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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../../redux/productSlice";
import { Link } from "react-router-dom";

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
  height: 40px;
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
  aspect-ratio: 10/10;
`;

export default function SuggestGame() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {products.map((product) => (
          <SwiperSlide
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            key={product.id}
          >
            <Link to={`/detail/${decodeURI(product.title)}-${product.id}`}>
              <SuggestImage src={product.avatar} alt="" />
              <Info>
                <Title>
                  <TitleText>{product.title}</TitleText>
                  <AgeLimit src={agelimit} alt="" />
                </Title>
                <Price>
                  <p style={{ color: "black" }}>{product.price}$</p>
                  <Button>Make Offer</Button>
                </Price>
              </Info>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
