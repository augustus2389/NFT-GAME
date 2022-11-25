import React from "react";
import styled from "styled-components";
import wish from "../../../asset/image/wishlist.svg";
const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;

const TypicalImage = styled.div`
  position: relative;
`;
const TypicalInfo = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Image = styled.img`
  border-radius: 10px;
`;
const SpanText = styled.span`
  color: white;
`;
const Text = styled.p`
  color: gray;
`;
const IconWish = styled.img`
  position: absolute;
  top: 5%;
  transition: all 3s linear;
  right: 5%;
  width: 25px;
  z-index: 2;
  display: none;
`;
const TypicalItem = styled.div`
  &:hover {
    ${TypicalImage} > ${IconWish} {
      display: block;
    }
  }
`;
function Typiccal() {
  return (
    <section id="typiccal">
      <div className="container">
        <Container>
          <div className="row">
            <div className="col-6">
              <TypicalItem>
                <TypicalImage>
                  <Image
                    src="https://cdn2.unrealengine.com/egs-pc-building-sim-2-breaker-2560x1440-fb77955aa013.jpg?h=720&resize=1&w=1280"
                    alt=""
                  />
                  <IconWish src={wish} alt="Wishlist Icon" />
                </TypicalImage>
                <TypicalInfo>
                  <SpanText>PC Building Simulator 2 - Out Now</SpanText>
                  <Text>
                    Run your own PC business. Build, repair, customize and share
                    PCs, using parts from 40+ leading brands.
                  </Text>
                  <p>50 $</p>
                </TypicalInfo>
              </TypicalItem>
            </div>
            <div className="col-6">
              <TypicalItem>
                <TypicalImage>
                  <Image
                    src="https://cdn2.unrealengine.com/en-egs-rumbleverse-accolade-breaker-1920x1080-6389ac6321e1.jpg?h=720&resize=1&w=1280"
                    alt=""
                  />
                  <IconWish src={wish} alt="Wishlist Icon" />
                </TypicalImage>
                <TypicalInfo>
                  <SpanText>Rumbleverse - New Update</SpanText>
                  <Text>
                    The Mid-Season Update is here! Master new moves, wield new
                    weapons, and swag out your Rumbler in new cosmetics!
                  </Text>
                  <p>Free</p>
                </TypicalInfo>
              </TypicalItem>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Typiccal;
