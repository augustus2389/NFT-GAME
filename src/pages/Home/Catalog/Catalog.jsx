import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  margin: 50px auto;
`;
const BannerGame = styled.div``;
const InfoClick = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 40px;
  flex-direction: column;
  height: 100%;
`;
const Text = styled.p`
  color: grey;
`;
const ButtonLearn = styled.button`
  width: 40%;
  padding: 10px;
  border-radius: 7px;
  border: 1px solid gray;
`;
function Catalog() {
  return (
    <section id="catalog">
      <div className="container">
        <Container>
          <div className="row">
            <div className="col-lg-7">
              <BannerGame>
                <img
                  src="https://cdn2.unrealengine.com/egs-featured-titles-blade-16x9-1920x1080-aaf6937d52da.jpg?h=1080&resize=1&w=1920"
                  alt=""
                />
              </BannerGame>
            </div>
            <div className="col-lg-5">
              <InfoClick>
                <Link className="text-white" to="/store">
                  Explore Our Catalog
                </Link>
                <Text>
                  Browse by genre, features, price, and more to find your next
                  favorite game.
                </Text>
                <ButtonLearn>LEARN MORE</ButtonLearn>
              </InfoClick>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Catalog;
