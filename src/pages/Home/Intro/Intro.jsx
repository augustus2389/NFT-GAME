/* eslint-disable array-callback-return */
import React from "react";
import "./intro.scss";
import wish from "../../../asset/image/wishlist.svg";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
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
`;
const TextFont = styled.p`
  color: rgb(245, 245, 245);
  text-shadow: 0.5px 0.5px 0.5px rgb(0 0 0 / 25%);
  font-weight: 600;
  cursor: pointer;
  font-size: 18px;
  width: 50%;
`;
const IconGame = styled.div`
  max-width: 200px;
`;
const ButtonDiv = styled.div`
  margin: 10px 0;
  display: flex;
`;
const ButtonWish = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: white;
  font-size: 12px;
  line-height: 40px;
  border-radius: 4px;
  margin: 0 5px;
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
`;
const Wish = styled.div`
  display: flex;
  align-items: center;
`;
const IconWish = styled.img`
  width: 25px !important;
  height: auto !important;
`;
const IntroImage = styled.img`
  border-radius: 20px;
`;

function Intro({ data }) {
  const divStyle = {
    marginBottom: "100px",
    marginTop: "35px",
    aspectRatio: "12/6",
  };

  return (
    <section id="intro">
      <div className="container">
        <Container>
          <Swiper
            navigation={false}
            loop={true}
            autoplay={true}
            style={divStyle}
            modules={[Navigation, Autoplay]}
            // autoplay={true}
            className="mySwiper slide"
          >
            {data.map((dat) => {
              if (!!dat?.intro) {
                return (
                  <SwiperSlide key={dat.id}>
                    <Link to={`/detail/${decodeURI(dat.title)}-${dat.id}`}>
                      <Media>
                        <Ads className="ads position-relative">
                          <IntroImage src={dat?.intro} alt="" />
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
                                <ButtonBuy>BUY NOW</ButtonBuy>
                                <Wish>
                                  <IconWish src={wish} alt="" />
                                  <ButtonWish>Add to wishlist</ButtonWish>
                                </Wish>
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
          </Swiper>
        </Container>
      </div>
    </section>
  );
}

export default Intro;
