/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./intro.scss";
import wish from "../../../asset/image/wishlist.svg";
import wishlistTick from "../../../asset/image/wishlistTick.svg";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import required modules
import { Autoplay, Navigation } from "swiper";
import styled from "styled-components";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToWish, removeWish } from "../../../redux/wishlistSlice";

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
  z-index: 10;
`;
const IconWish = styled.img`
  width: 25px !important;
  height: auto !important;
`;
const IntroImage = styled.img`
  border-radius: 20px;
`;

function Intro({ data }) {
  const [isOpen, setIsOpen] = useState(true);
  const { wishs } = useSelector((state) => state.wish);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const divStyle = {
    marginBottom: "100px",
    marginTop: "35px",
    aspectRatio: "12/6",
  };
  const handleActionWishList = (id) => {
    setIsOpen(!isOpen);
    const wishListItem = data.find((wish) => wish.id === id);
    const IsExist = wishs.some((wish) => wish.id === id);
    console.log(IsExist);
    if (IsExist) {
      toast.warn("This game removed the game from to Wishlist!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch(removeWish(id));
      return;
    }
    toast.success("This game has been added Wishlist", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const newItem = {
      id: wishListItem.id,
      title: wishListItem.title,
      price: wishListItem.price,
      avatar: wishListItem.avatar,
      date: wishListItem.date,
    };
    dispatch(addToWish(newItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                <ButtonBuy
                                  to={`/detail/${decodeURI(dat.title)}-${
                                    dat.id
                                  }`}
                                >
                                  BUY NOW
                                </ButtonBuy>
                                {isLogin && (
                                  <Wish
                                    onClick={() => handleActionWishList(dat.id)}
                                  >
                                    {isOpen ? (
                                      <>
                                        <IconWish src={wish} alt="" />
                                        <ButtonWish>Add to wishlist</ButtonWish>
                                      </>
                                    ) : (
                                      <>
                                        <IconWish src={wishlistTick} alt="" />
                                        <ButtonWish>Add to wishlist</ButtonWish>
                                      </>
                                    )}
                                  </Wish>
                                )}
                                {!isLogin && (
                                  <Wish
                                    onClick={() => handleActionWishList(dat.id)}
                                  >
                                    <Link to={"/signin"}>
                                      <IconWish src={wish} alt="" />
                                    </Link>
                                  </Wish>
                                )}
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
