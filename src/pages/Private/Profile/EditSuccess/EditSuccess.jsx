import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import user from "../../../../asset/image/userLogin.svg";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const TitleAccount = styled.h3`
  font-size: 24px;
  padding-top: 40px;
  font-weight: 700;
  text-transform: uppercase;
`;
const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
const InfoDiv = styled.div`
  justify-content: space-between;
  display: flex;
`;
const Info = styled.input`
  border-radius: 10px;
  background-color: -internal-light-dark(
    rgba(239, 239, 239, 0.3),
    rgba(59, 59, 59, 0.3)
  );
  padding: 20px 40px;
  color: black;
  font-weight: bold;
  border: 1px solid rgba(118, 118, 118, 0.3);
`;
const TextInfo = styled.div`
  display: flex;
  gap: 40px;
  margin: 15px 0;
`;

const Avatar = styled.img`
  margin-top: 50px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
const BackButton = styled.button`
  outline-color: #141414;
  background: #e6e6e6;
  color: #141414;
  border: none;
  padding: 20px;
  border-radius: 10px;
  font-weight: 700;
  margin-right: 20px;
`;
const ButtonSubmit = styled.button`
  background: #0074e4;
  outline-color: white;
  border: none;
  font-weight: 700;
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out;
`;
const ButtonAction = styled.div`
  text-align: center;
`;
const LinkCustom = styled(Link)`
  color: white;
`;
function EditSuccess() {
  const { account } = useSelector((state) => state.auth);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 3000);
  }, []);

  if (isFetching) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <section id="profile">
      <div className="container ">
        <Container>
          <div className="row">
            <div className="col-lg-8">
              <TitleAccount>ACCOUNT INFORMATION</TitleAccount>
              <InfoDiv>
                <TextInfo>
                  <Info placeholder={account.FirstName} disabled />
                  <Info placeholder={account.Email} disabled />
                </TextInfo>
              </InfoDiv>
              <TitleAccount>PERSONAL DETAILS</TitleAccount>
              <TextInfo>
                <Info placeholder={account.LastName} disabled />
                <Info placeholder="*********" disabled />
              </TextInfo>
              <TitleAccount>ADDRESS DETAILS</TitleAccount>
              <Info placeholder={account.address} disabled />

              <TextInfo></TextInfo>
              <ButtonAction>
                <BackButton>
                  <Link>BACK TO STORE</Link>
                </BackButton>
                <ButtonSubmit>
                  <LinkCustom to={"/editprofile"}>EDIT PROFILE</LinkCustom>
                </ButtonSubmit>
              </ButtonAction>
            </div>
            <div className="col-lg-4">
              <div>
                <Avatar src={!account.avatar ? user : account.avatar} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default EditSuccess;
