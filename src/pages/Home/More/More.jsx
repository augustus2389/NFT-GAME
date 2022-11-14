import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  margin: 40px auto;
`;
const Image = styled.img`
  border-radius: 10px;
`;
const InfoMore = styled.div`
  padding: 10px 20px;
`;
const Description = styled.p`
  color: gray;
`;
const TiteGame = styled.p`
  font-size: 18px;
`;
const LearnMore = styled.span`
  font-size: 22px;
  color: white;
  margin: 10px 0;
`;
function More() {
  return (
    <section id="more">
      <div className="container">
        <Container>
          <div className="row">
            <div className="col-lg-4">
              <div>
                <div>
                  <Image
                    src="https://cdn2.unrealengine.com/egs-fortnite-fncs-nov-2022-breaker-1920x1080-91486bad82cc.jpg?h=720&resize=1&w=1280"
                    alt=""
                  />
                </div>
                <div>
                  <InfoMore>
                    <TiteGame>Fornite</TiteGame>
                    <Description>
                      Celebrate Fortnite's FNCS Invitational 2022 by purchasing
                      the FNCS Set in the Item Shop right now!
                    </Description>
                    <LearnMore>Learn More</LearnMore>
                  </InfoMore>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div>
                  <Image
                    src="https://cdn2.unrealengine.com/packlandscape-1920x1080-1920x1080-5c56e089fea4.jpg?h=720&resize=1&w=1280"
                    alt=""
                  />
                </div>
                <div>
                  <InfoMore>
                    <TiteGame>Fornite</TiteGame>
                    <Description>
                      Celebrate Fortnite's FNCS Invitational 2022 by purchasing
                      the FNCS Set in the Item Shop right now!
                    </Description>
                    <LearnMore>Learn More</LearnMore>
                  </InfoMore>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div>
                  <Image
                    src="https://cdn2.unrealengine.com/egs-fall-guys-sonic-breaker-v2-1920x1080-f71dd4389e84.jpg?h=720&resize=1&w=1280"
                    alt=""
                  />
                </div>
                <div>
                  <InfoMore>
                    <TiteGame>Fornite</TiteGame>
                    <Description>
                      Celebrate Fortnite's FNCS Invitational 2022 by purchasing
                      the FNCS Set in the Item Shop right now!
                    </Description>
                    <LearnMore>Learn More</LearnMore>
                  </InfoMore>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default More;
