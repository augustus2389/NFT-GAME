import React from "react";
import styled from "styled-components";
import serverStatus from "../../../asset/image/serverstatus.svg";
import iconSearch from "../../../asset/image/IconSearch.svg";
import { Link } from "react-router-dom";
const Header = styled.div`
  padding-bottom: 30px;
  background-color: #484848;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  padding-top: 30px;
  background-image: linear-gradient(
      180deg,
      rgba(20, 20, 20, 0) 0%,
      #141414 100%
    ),
    url(https://cdn2.unrealengine.com/header-background-3840x1300-e78b140f68a2.jpg);
`;
const HeaderCenter = styled.div`
  margin: auto;
  max-width: 1040px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Server = styled.div`
  display: flex;
  &:hover p {
    text-decoration: underline;
  }
`;
const StatusIcon = styled.img`
  width: 15px;
  height: auto;
`;
const HelpCenter = styled.div``;
const HelpInput = styled.input`
  border-radius: 10px;
  width: 100%;
  height: 40px;
  &::placeholder {
    padding-left: 30px;
  }
`;
const IconSearch = styled.img`
  width: 25px;
  top: 7px;
  left: 5px;
`;
const Catogory = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
`;
const CatogryTag = styled.div`
  display: flex;
  background-color: #2f2f2f;
  align-items: center;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;
const TagGame = styled.div`
  max-width: 100px;
  position: relative;
`;
const IconTag = styled.img`
  width: 50%;
`;
const Image = styled.img`
  clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
`;
const TagName = styled.div`
  height: 100%;
  width: 100%;
  font-weight: 800;
`;
export const TextTitle = styled.p`
  color: white !important;
`;
function HeaderSupport() {
  return (
    <div>
      <Header>
        <HeaderCenter>
          <Title>
            <h2 className="text-white">
              Welcome to Augustus Game Player Support
            </h2>
            <Server>
              <p className="fw-bold">SERVER STATUS: ALL SYSTEMS OPERATIONAL</p>
              <StatusIcon src={serverStatus} alt="" />
            </Server>
          </Title>
          <HelpCenter>
            <form className="position-relative">
              <HelpInput placeholder="SEARCH HELP CENTER..." />
              <IconSearch
                src={iconSearch}
                alt=""
                className="position-absolute"
              />
            </form>
          </HelpCenter>
          <Catogory>
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-12">
                  <Link to="/">
                    <CatogryTag>
                      <TagGame>
                        <Image
                          src="https://cdn2.unrealengine.com/games-section-bg-224x200-a5c320aa4d09.jpg"
                          alt=""
                        />
                        <IconTag
                          src="https://cdn2.unrealengine.com/games-icon-e0db3c848dfd.svg"
                          alt=""
                          className="position-absolute top-50 start-50 translate-middle"
                        />
                      </TagGame>
                      <TagName>
                        <TextTitle>Game</TextTitle>
                      </TagName>
                    </CatogryTag>
                  </Link>
                </div>
                <div className="col-lg-4 col-12">
                  <Link>
                    <CatogryTag>
                      <TagGame>
                        <Image
                          src="https://cdn2.unrealengine.com/accounts-section-bg-224x200-3c40110225cd.jpg"
                          alt=""
                        />
                        <IconTag
                          src="https://cdn2.unrealengine.com/accounts-icon-d346f9e011ca.svg"
                          alt=""
                          className="position-absolute top-50 start-50 translate-middle"
                        />
                      </TagGame>
                      <TagName>
                        <TextTitle>Account</TextTitle>
                      </TagName>
                    </CatogryTag>
                  </Link>
                </div>
                <div className="col-lg-4 col-12">
                  <Link to="/">
                    <CatogryTag>
                      <TagGame>
                        <Image
                          src="https://cdn2.unrealengine.com/enterprise-section-bg-224x200-33fac47a1755.jpg"
                          alt=""
                        />
                        <IconTag
                          src="https://cdn2.unrealengine.com/enterprise-icon-ba12af4611a7.svg"
                          alt=""
                          className="position-absolute top-50 start-50 translate-middle"
                        />
                      </TagGame>
                      <TagName>
                        <TextTitle>Enterprise</TextTitle>
                      </TagName>
                    </CatogryTag>
                  </Link>
                </div>
              </div>
            </div>
          </Catogory>
        </HeaderCenter>
      </Header>
    </div>
  );
}

export default HeaderSupport;
