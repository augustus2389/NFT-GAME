import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const TypeItem = styled.div`
  padding: 8px;
  background: rgb(32, 32, 32);
  border-radius: 4px;
  transition: background 125ms ease-in-out 0s;
`;
const SwiperSlideCustom = styled(SwiperSlide)`
  width: 252.25px !important;
`;
const TypeImage = styled.div`
  display: flex;
`;
const TypeGameInfo = styled.div``;
const ImageItemType = styled.img`
  border-radius: 4px;
`;
const ImageItemCenter = styled.img`
  width: 100px !important;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const ItemImage = styled.div`
  max-width: 100px;
  display: flex;
  gap: 20px;
  position: relative;
`;
const ImageCenter = styled.div`
  position: absolute;
  left: 28%;
  background: rgb(32, 32, 32);
`;
const Text = styled.p`
  text-align: center;
  font-weight: 700;
  padding: 10px 0;
  font-size: 18px;
`;

export default function TypeGame() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={90}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlideCustom>
          <TypeItem>
            <Link>
              <TypeItem>
                <TypeImage>
                  <ItemImage>
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/6e0edb69052f4f8a853fb8a60bde8eb8/timewell_trail_of_celestes-1gg9e.jpg?h=480&resize=1&w=360"
                      alt=""
                    />
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/e72c116d0bfa48348d08dc9fc78b1a4a/download-fire-commander-offer-1w7lt.jpg?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ItemImage>
                  <ImageCenter>
                    <ImageItemCenter
                      src="https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ImageCenter>
                </TypeImage>
                <TypeGameInfo>
                  <Text>Action Game</Text>
                </TypeGameInfo>
              </TypeItem>
            </Link>
          </TypeItem>
        </SwiperSlideCustom>
        <SwiperSlideCustom>
          <TypeItem>
            <Link>
              <TypeItem>
                <TypeImage>
                  <ItemImage>
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/c816cec291404812a9eacc03387dcbca/download-alba--a-wildlife-adventure-offer-zbvu8.jpg?h=480&resize=1&w=360"
                      alt=""
                    />
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/64261a8ee06244638608e47302223b11/who-pressed-mute-on-uncle-marcus-1il6v.png?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ItemImage>
                  <ImageCenter>
                    <ImageItemCenter
                      src="https://cdn2.unrealengine.com/atla-productart-1200x1600-1200x1600-59caced19b71.jpg?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ImageCenter>
                </TypeImage>
                <TypeGameInfo>
                  <Text>Casual Games</Text>
                </TypeGameInfo>
              </TypeItem>
            </Link>
          </TypeItem>
        </SwiperSlideCustom>
        <SwiperSlideCustom>
          <TypeItem>
            <Link>
              <TypeItem>
                <TypeImage>
                  <ItemImage>
                    <ImageItemType
                      src="https://cdn1.epicgames.com/offer/155b39e2ce7b4ed2855125fb2ef1d1a1/CREW_Store_Portrait_1200x1600_1200x1600-182f20fdb49fb698ed54f603bed3966f?h=480&resize=1&w=360"
                      alt=""
                    />
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/17e437838637437597bfcf8a87ffd2e6/nira-1h946.png?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ItemImage>
                  <ImageCenter>
                    <ImageItemCenter
                      src="https://cdn1.epicgames.com/offer/50bbaf85f4454b1c88786efeede5b302/EGS_GoatSimulator3_CoffeeStainNorthAB_S2_1200x1600-99737fa8a749438ca909c776a4cd9b89?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ImageCenter>
                </TypeImage>
                <TypeGameInfo>
                  <Text>Co-Op Games</Text>
                </TypeGameInfo>
              </TypeItem>
            </Link>
          </TypeItem>
        </SwiperSlideCustom>
        <SwiperSlideCustom>
          <TypeItem>
            <Link>
              <TypeItem>
                <TypeImage>
                  <ItemImage>
                    <ImageItemType
                      src="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?h=480&resize=1&w=360"
                      alt=""
                    />
                    <ImageItemType
                      src="https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ItemImage>
                  <ImageCenter>
                    <ImageItemCenter
                      src="https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/FR_Bungie_Destiny2_S2_1200x1600_1200x1600-c04030c570b63cdced320be0f88a9f89?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ImageCenter>
                </TypeImage>
                <TypeGameInfo>
                  <Text>Cross Platform Games</Text>
                </TypeGameInfo>
              </TypeItem>
            </Link>
          </TypeItem>
        </SwiperSlideCustom>
        <SwiperSlideCustom>
          <TypeItem>
            <Link>
              <TypeItem>
                <TypeImage>
                  <ItemImage>
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/4e413bd62567408fbfe7b9b71ba3ce85/asterix-and-obelix-xxxl--the-ram-of-hibernia-1425f.jpg?h=480&resize=1&w=360"
                      alt=""
                    />
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/3d32732efa1840208f6488d243407eff/download-jitsu-squad-offer-17btg.jpg?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ItemImage>
                  <ImageCenter>
                    <ImageItemCenter
                      src="https://cdn2.unrealengine.com/atla-productart-1200x1600-1200x1600-59caced19b71.jpg?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ImageCenter>
                </TypeImage>
                <TypeGameInfo>
                  <Text>Fighting Games</Text>
                </TypeGameInfo>
              </TypeItem>
            </Link>
          </TypeItem>
        </SwiperSlideCustom>
        <SwiperSlideCustom>
          <TypeItem>
            <Link>
              <TypeItem>
                <TypeImage>
                  <ItemImage>
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/9cbb00a07cdc4ebb8ab347fbadeafdc6/download-bloodrayne-terminal-cut-offer-6hx0l.png?h=480&resize=1&w=360"
                      alt=""
                    />
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/c29061ea66b2456b90966c36ed121326/download-bloodrayne-2-terminal-cut-offer-12ha3.png?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ItemImage>
                  <ImageCenter>
                    <ImageItemCenter
                      src="https://cdn1.epicgames.com/spt-assets/8a9ed55b9194493a840486b58ac6c404/i-saw-black-clouds-3tu74.png?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ImageCenter>
                </TypeImage>
                <TypeGameInfo>
                  <Text>Horror Game</Text>
                </TypeGameInfo>
              </TypeItem>
            </Link>
          </TypeItem>
        </SwiperSlideCustom>
        <SwiperSlideCustom>
          <TypeItem>
            <Link>
              <TypeItem>
                <TypeImage>
                  <ItemImage>
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/05a8e51fa4f74c39bb35a54f30d3e99e/download-necroworm-offer-12q08.png?h=480&resize=1&w=360"
                      alt=""
                    />
                    <ImageItemType
                      src="https://cdn1.epicgames.com/spt-assets/6aac3071aeae452990a71aac0a1fbc30/shapez-l0klk.png?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ItemImage>
                  <ImageCenter>
                    <ImageItemCenter
                      src="https://cdn1.epicgames.com/spt-assets/be936e5374e941b3bac749e1dc544f94/blossom-tales-ii-the-minotaur-prince-uime1.jpg?h=480&resize=1&w=360"
                      alt=""
                    />
                  </ImageCenter>
                </TypeImage>
                <TypeGameInfo>
                  <Text>Multiplayer Games</Text>
                </TypeGameInfo>
              </TypeItem>
            </Link>
          </TypeItem>
        </SwiperSlideCustom>
      </Swiper>
    </>
  );
}
