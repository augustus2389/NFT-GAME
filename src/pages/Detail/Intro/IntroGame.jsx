import React, { useState } from "react";
import "./intro.css";

import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Player } from "video-react";

function IntroGame() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section id="introGame">
      <div className="container">
        <Swiper
          navigation={true}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          modules={[Navigation, Autoplay, FreeMode, Thumbs]}
          className="mySwiper slide"
        >
          <SwiperSlide>
            <Player src="https://cdn.cloudflare.steamstatic.com/steam/apps/256827872/movie480_vp9.webm?t=1617123094" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_606cee13e97530720c678513cb1138ef9854d7d5.600x338.jpg?t=1666319191"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_01d84950ddfb28ea611f1fa1a28c3cb08ccd7eee.600x338.jpg?t=1666319191"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_e2cbfefdff39b9cb8e080da8f30cc07223b041b9.600x338.jpg?t=1666319191"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        {/* <Swiper
          onSwiper={thumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_4454f310776c626a76baeca2d05fd82bd17c6ee0.600x338.jpg?t=1666319191"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_606cee13e97530720c678513cb1138ef9854d7d5.600x338.jpg?t=1666319191"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_01d84950ddfb28ea611f1fa1a28c3cb08ccd7eee.600x338.jpg?t=1666319191"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_e2cbfefdff39b9cb8e080da8f30cc07223b041b9.600x338.jpg?t=1666319191"
              alt=""
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
}

export default IntroGame;
