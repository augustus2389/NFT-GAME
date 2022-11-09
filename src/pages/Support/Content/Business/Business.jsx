import React from "react";
import styled from "styled-components";
import Arrow from "../../../../asset/image/arrow.svg";
const Container = styled.div`
  max-width: 1040px;
  margin: auto;
`;
const Company = styled.div`
  margin: 20px 0;
`;
const NameCompany = styled.div`
  top: 40%;
  left: 50%;
  position: absolute;
  max-width: 498px;
  max-height: 169px;
  transform: translate(-50%, -50%) !important;
`;
const IconArrow = styled.img`
  position: absolute;
  top: 0%;
  border-radius: 10px;
  right: 0;
  max-width: 60px;
`;
const Banner = styled.div`
  position: relative;
  overflow: hidden;
`;
const NameImage = styled.img`
  border-radius: 10px;
  aspect-ratio: 14/6;
  transition: all 1s ease;
  &:hover {
    overflow: hidden;
    transform: scale(1.1);
  }
`;
const Secondary = styled.div`
  transform: translate(-50%, -50%) !important;
  top: 50% !important;
  left: 50% !important;
  position: absolute;
  max-width: 498px;
  max-height: 169px;
`;
const SecondaryImage = styled.img`
  aspect-ratio: 17 / 10;
  border-radius: 10px;
  transition: all 1s ease;
  &:hover {
    overflow: hidden;
    transform: scale(1.1);
  }
`;
function Business() {
  return (
    <section id="business">
      <Container className="container">
        <h2>Business</h2>
        <div className="row">
          <div className="col-lg-12">
            <Company>
              <Banner>
                <NameImage
                  src="https://cdn2.unrealengine.com/unreal-engine-5064x933-31a3347cb9c5.jpg"
                  alt=""
                />
                <NameCompany>
                  <img
                    src="https://cdn2.unrealengine.com/unreal-engine-logo-90db7999f5c9.svg"
                    alt=""
                  />
                </NameCompany>
                <IconArrow src={Arrow} alt="" />
              </Banner>
            </Company>
          </div>
          <div className="col-lg-4">
            <Company>
              <Banner>
                <SecondaryImage
                  src="https://cdn2.unrealengine.com/marketplace-2466x933-9cc14bafeef9.jpg"
                  alt=""
                />
                <Secondary>
                  <img
                    src="https://cdn2.unrealengine.com/marketplace-logo-1211x513-d6ce81aef324.png"
                    alt=""
                  />
                </Secondary>
                <IconArrow src={Arrow} alt="" />
              </Banner>
            </Company>
          </div>
          <div className="col-lg-4">
            <Company>
              <Banner>
                <SecondaryImage
                  src="https://cdn2.unrealengine.com/twinmotion-2466x933-f6847b84208f.jpg"
                  alt=""
                />
                <Secondary>
                  <img
                    src="https://cdn2.unrealengine.com/twinmotion-logo-1c94fc0b1b0a.svg"
                    alt=""
                  />
                </Secondary>
                <IconArrow src={Arrow} alt="" />
              </Banner>
            </Company>
          </div>
          <div className="col-lg-4">
            <Company>
              <Banner>
                <SecondaryImage
                  src="https://cdn2.unrealengine.com/epic-online-services-2466x933-7189521d526c.jpg"
                  alt=""
                />
                <Secondary>
                  <img
                    src="https://cdn2.unrealengine.com/epic-online-services-logo-e81431bccf91.svg"
                    alt=""
                  />
                </Secondary>
                <IconArrow src={Arrow} alt="" />
              </Banner>
            </Company>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Business;
