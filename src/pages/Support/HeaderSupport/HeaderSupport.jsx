import React from "react";
import styled from "styled-components";
import serverStatus from "../../../asset/image/serverstatus.svg";
import iconSearch from "../../../asset/image/IconSearch.svg";
const Header = styled.div`
  margin-top: 100px;
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
function HeaderSupport() {
  return (
    <div>
      <Header>
        <HeaderCenter>
          <Title>
            <h2>Welcome to Augustus Game Player Support</h2>
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
        </HeaderCenter>
      </Header>
    </div>
  );
}

export default HeaderSupport;
