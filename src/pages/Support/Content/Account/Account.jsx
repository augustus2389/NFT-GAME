import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1040px;
  margin: auto;
`;

const CatogryTag = styled.div`
  display: flex;
  background-color: #2f2f2f;
  align-items: center;
  @media (max-width: 990px) {
    margin: 20px 0;
  }
`;
const TagGame = styled.div`
  max-width: 500px;
  overflow: hidden;
`;

const Image = styled.img`
  clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
  transition: all 1s ease;
  &:hover {
    overflow: hidden;
    transform: scale(1.1);
  }
`;
const TagName = styled.div`
  height: auto;
  width: 100%;
  font-weight: 800;
`;
function Account() {
  return (
    <section id="account">
      <Container className="container">
        <div className="row">
          <h2 className="text-white">Account</h2>
          <div className="col-lg-6">
            <Link to="/">
              <CatogryTag>
                <TagGame>
                  <Image
                    src="https://cdn2.unrealengine.com/epic-games-store-bg-1665x933-4e29c08e33b5.jpg"
                    alt=""
                  />
                </TagGame>
                <TagName>
                  <p>Game</p>
                </TagName>
              </CatogryTag>
            </Link>
          </div>
          <div className="col-lg-6">
            <Link to="/">
              <CatogryTag>
                <TagGame>
                  <Image
                    src="https://cdn2.unrealengine.com/accounts-bg-1665x933-5f82f73b48d7.jpg"
                    alt=""
                  />
                </TagGame>
                <TagName>
                  <p>Enterprise</p>
                </TagName>
              </CatogryTag>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Account;
