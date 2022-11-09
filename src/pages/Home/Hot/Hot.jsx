import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./hot.css";
import ad3 from "../../../asset/image/Product-Image/game1.jpeg";
import ad4 from "../../../asset/image/Product-Image/game2.jpeg";
import ad5 from "../../../asset/image/Product-Image/game3.jpeg";
import ad6 from "../../../asset/image/Product-Image/game4.jpeg";
import ad7 from "../../../asset/image/Product-Image/game5.jpeg";
import ad8 from "../../../asset/image/Product-Image/game6.jpeg";

// import required modules
import { EffectCards } from "swiper";
import styled from "styled-components";

const CustomSwiper = styled(Swiper)`
  width: 240px;
  height: 320px;
`;
export default function Hot() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <CustomSwiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper mt-5"
            >
              <SwiperSlide>
                <img src={ad3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ad4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ad5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ad6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ad7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={ad8} alt="" />
              </SwiperSlide>
            </CustomSwiper>
          </div>
          <div className="col-lg-8">
            <p style={{ color: "white", fontWeight: "700", fontSize: "35px" }}>
              TOP SELLER AND TRENDING
            </p>
            <div className="row">
              <div className="col-lg-3">
                <div className="top-game">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/1647550/hero_capsule.jpg?t=1666196920"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="top-game">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/1874490/hero_capsule.jpg?t=1666225081"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="top-game">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/236850/hero_capsule.jpg?t=1663055916"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="top-game">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/1551360/hero_capsule.jpg?t=1665784964"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="top-game">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/698670/hero_capsule.jpg?t=1665763396"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="top-game">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/1426210/hero_capsule.jpg?t=1666121755"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="top-game">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_600x900.jpg?t=1656615305"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="top-game">
                  <img
                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/1332010/hero_capsule.jpg?t=1660855681"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
