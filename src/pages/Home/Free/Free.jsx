import React from "react";
import styled from "styled-components";
import present from "../../../asset/image/present.svg";
const Container = styled.div`
  max-width: 1024px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
`;
const Present = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PresentIcon = styled.img`
  width: 30px;
`;
const FreeItem = styled.div`
  padding: 20px;
`;
const FreeImage = styled.div``;
const FreeInfo = styled.div`
  padding: 25px 0;
`;
const FreeNowText = styled.p`
  text-align: center;
  background-color: rgb(0, 120, 242);
  border-radius: 0px 0px 10px 10px;
  font-weight: 700;
`;
const Image = styled.img`
  border-radius: 10px 10px 0 0;
`;
const TimeFree = styled.p`
  font-size: 13px;
`;
function Free() {
  return (
    <section id="free">
      <div className="container">
        <Container>
          <Present>
            <Div>
              <PresentIcon src={present} alt="" />
              <p>Coming Soon</p>
            </Div>
          </Present>
          <div className="row">
            <div className="col-lg-3 col-6">
              <FreeItem>
                <FreeImage>
                  <Image
                    src="https://cdn1.epicgames.com/spt-assets/5a72e62648d747189d2f5e7abb47444c/download-filament-offer-mk58q.jpg?h=854&resize=1&w=640"
                    alt=""
                  />
                  <FreeNowText>Release Soon</FreeNowText>
                </FreeImage>
                <FreeInfo>
                  <p>Filament</p>
                  <TimeFree>Release Soon - Dec 10 at 11:00pm</TimeFree>
                </FreeInfo>
              </FreeItem>
            </div>
            <div className="col-lg-3 col-6">
              <FreeItem>
                <FreeImage>
                  <Image
                    src="https://cdn1.epicgames.com/3542a1df211e492bb2abecb7c734f7f9/offer/EGS_RisingStorm2Vietnam_AntimatterGamesTripwireInteractive_S4-1200x1600-5e3b2f8107e17cc008237e52761d67e5.jpg?h=854&resize=1&w=640"
                    alt=""
                  />
                  <FreeNowText>Release Soon</FreeNowText>
                </FreeImage>
                <FreeInfo>
                  <p>Rising Storm 2: Vietnam</p>
                  <TimeFree>Release Soon - Dec 10 at 11:00pm</TimeFree>
                </FreeInfo>
              </FreeItem>
            </div>
            <div className="col-lg-3 col-6">
              <FreeItem>
                <FreeImage>
                  <Image
                    src="https://cdn1.epicgames.com/spt-assets/c816cec291404812a9eacc03387dcbca/download-alba--a-wildlife-adventure-offer-zbvu8.jpg?h=854&resize=1&w=640"
                    alt="Alba - A Wildlife Adventure"
                  />
                  <FreeNowText>Release Soon</FreeNowText>
                </FreeImage>
                <FreeInfo>
                  <p>Alba - A Wildlife Adventure</p>
                  <TimeFree>Release Soon - Dec 10 at 11:00pm</TimeFree>
                </FreeInfo>
              </FreeItem>
            </div>
            <div className="col-lg-3 col-6">
              <FreeItem>
                <FreeImage>
                  <Image
                    src="https://cdn1.epicgames.com/undefined/offer/EGS_MimimiGames_ShadowTacticsBladesoftheShogun_S4-510x680-f62935abb1b2bd42b2f19f9385da7fe7.jpg?h=854&resize=1&w=640"
                    alt="Shadow Tactics: Blades of the Shogun"
                  />
                  <FreeNowText>Release Soon</FreeNowText>
                </FreeImage>
                <FreeInfo>
                  <p>Blades of the Shogun</p>
                  <TimeFree>Release Soon - Dec 10 at 11:00pm</TimeFree>
                </FreeInfo>
              </FreeItem>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Free;
