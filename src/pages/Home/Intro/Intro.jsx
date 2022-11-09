import React from "react";
import "./intro.css";
import wish from "../../../asset/image/wishlist.svg";

import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay, Navigation } from "swiper";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
const Media = styled.div``;
const Text = styled.div`
  padding: 50px;
  position: absolute;
  top: 0%;
  text-align: left;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const TextFont = styled.p`
  font-size: 18px;
  width: 50%;
`;
const IconGame = styled.div`
  max-width: 200px;
`;
const ButtonDiv = styled.div`
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

function Intro() {
  const divStyle = {
    marginBottom: "100px",
    marginTop: "50px",
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
            <SwiperSlide>
              <Media>
                <div className="ads position-relative">
                  <img
                    src="https://cdn2.unrealengine.com/egs-genshin-impact-3-2-carousel-desktop-1248x702-a1f382c2ccf2.jpg?h=1080&resize=1&w=1920"
                    alt=""
                  />
                  <Text>
                    <IconGame>
                      <img
                        src="https://cdn2.unrealengine.com/egs-genshinimpact-mihoyolimited-ic1-400x400-0a1ff1b6cf40.png?h=270&resize=1&w=480"
                        alt=""
                      />
                    </IconGame>
                    <TextFont>
                      {" "}
                      A strategy/action RPG. Create a character, engage in
                      diplomacy, craft, trade and conquer new lands in a vast
                      medieval sandbox. Raise armies to lead into battle and
                      fight alongside your troops in massive real-time battles
                    </TextFont>
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
                </div>
              </Media>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </section>
  );
}

export default Intro;
