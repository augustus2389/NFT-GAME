/* eslint-disable array-callback-return */
import React from "react";
import "./intro.scss";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import styled from "styled-components";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
const Ads = styled.div`
  width: 100%;
  height: 100%;
`;
const Media = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const Text = styled.div`
  padding: 40px 20px;
  position: absolute;
  top: -10%;
  text-align: left;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: block;
    top: 50%;
  }
`;
const TextFont = styled.p`
  color: rgb(245, 245, 245);
  text-shadow: 0.5px 0.5px 0.5px rgb(0 0 0 / 25%);
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
  width: 50%;
  @media (max-width: 990px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    width: 100%;
    font-weight: 700;
  }
`;
const IconGame = styled.div`
  max-width: 200px;
  @media (max-width: 768px) {
    width: 100px;
  }
`;
const ButtonDiv = styled.div`
  margin: 10px 0;
  display: flex;
  @media (max-width: 768px) {
    display: none;
    top: 40%;
  }
`;
const ButtonBuy = styled.button`
  outline: none;
  border: none;
  background-color: white;
  color: black;
  width: auto;
  font-size: 12px;
  padding: 0px 30px;
  line-height: 40px;
  border-radius: 4px;
  margin-right: 10px;
  @media (max-width: 768px) {
    padding: 0px 15px;
    font-size: 8px;
  }
`;
const IntroImage = styled.img`
  display: none;
  border-radius: 20px;
  @media (max-width: 768px) {
    display: none !important;
  }
`;
const IntroGameMini = styled.img``;
const SwiperCustom = styled(Swiper)`
  margin-bottom: 100px;
  margin-top: 35px;
  height: 500px;
  aspect-ratio: 12/6;
`;
const Test = styled.div`
  aspect-ratio: 10 / 10;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
function Intro({ data }) {
  return (
    <section id="intro">
      <div className="container">
        <Container>
          <SwiperCustom
            navigation={false}
            loop={true}
            // autoplay={true}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            className="mySwiper slide"
          >
            {data.map((dat) => {
              if (!!dat?.intro) {
                return (
                  <SwiperSlide key={dat.id}>
                    <Link to={`/detail/${decodeURI(dat.title)}-${dat.id}`}>
                      <Media>
                        <Ads className="ads position-relative">
                          <div>
                            <IntroImage src={dat?.intro} alt="" />
                          </div>
                          <Test>
                            <IntroGameMini src={dat?.avatar} alt="" />
                          </Test>
                          <Text>
                            <IconGame>
                              <motion.img
                                initial={{ opacity: 0, x: "100%" }}
                                animate={{ opacity: 1, x: "0" }}
                                exit={{ opacity: 0, x: "-100%" }}
                                src={dat?.iconGame}
                                alt=""
                              />
                            </IconGame>
                            <TextFont>{dat.description}</TextFont>
                            <div>
                              <p>Starting at 20 $</p>
                              <ButtonDiv>
                                <ButtonBuy
                                  to={`/detail/${decodeURI(dat.title)}-${
                                    dat.id
                                  }`}
                                >
                                  BUY NOW
                                </ButtonBuy>
                              </ButtonDiv>
                            </div>
                          </Text>
                        </Ads>
                      </Media>
                    </Link>
                  </SwiperSlide>
                );
              }
            })}
          </SwiperCustom>
        </Container>
      </div>
    </section>
  );
}

export default Intro;
