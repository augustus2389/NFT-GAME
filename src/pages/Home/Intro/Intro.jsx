import React from "react";
import "./intro.css";

import pubg from "../../../asset/PUBG-Banner.png";

import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Navigation } from "swiper";

function Intro() {
  const divStyle = {
    boxShadow: " 0px -5px 25px 7px #27a4f2",
    marginBottom: "100px",
    marginTop: "50px",
  };
  return (
    <section id="intro">
      <div className="container">
        <h2>
          Buy, sell, and showcase <span>WORKSHOP</span>
        </h2>
        <p>From leading creator and brands</p>
        <Swiper
          navigation={true}
          loop={true}
          style={divStyle}
          modules={[Navigation, Autoplay]}
          // autoplay={true}
          className="mySwiper slide"
        >
          <SwiperSlide className="position-relative">
            <div className="ads">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e7505299939305.5efdbe11bcf0c.png"
                alt=""
              />
            </div>
            <div className="action-ads position-absolute d-flex flex-column ">
              <button className="button-29 top-0">Up comming</button>
              <p> 23'th Aug 2022</p>
              <span>The Planet Crafter</span>
              <button className="button-29 ">View drop</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pubg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pubg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pubg} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Intro;
