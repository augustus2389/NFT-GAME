import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import productApi from "../../../api/productApi";

const Container = styled.div`
  max-width: 1024px;
  margin: 40px auto;
`;
const Image = styled.img`
  border-radius: 10px;
  aspect-ratio: 10/ 5;
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
  const [gameTop, setTop] = useState([]);
  useEffect(() => {
    productApi.getProductBySeller().then((data) => setTop(data));
  }, []);
  const eventgame = gameTop.filter((a) => a.id < 12);
  return (
    <section id="more">
      <div className="container">
        <Container>
          <div className="row">
            {eventgame.map((product) => (
              <div className="col-lg-4" key={product.id}>
                <Link to={`/detail/${decodeURI(product.title)}-${product.id}`}>
                  <div>
                    <div>
                      <Image src={product.images[0]} alt={product.title} />
                    </div>
                    <div>
                      <InfoMore>
                        <TiteGame>{product.title}</TiteGame>
                        <Description>
                          Celebrate Fortnite's FNCS Invitational 2022 by
                          purchasing the FNCS Set in the Item Shop right now!
                        </Description>
                        <LearnMore>Learn More</LearnMore>
                      </InfoMore>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}

export default More;
