import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { setAccountSuccess, setLogout } from "../../../redux/authSlice";
import user from "../../../asset/image/user.svg";
import online from "../../../asset/image/online.svg";
import { fetchUser } from "../../../redux/userSlice";

const User = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
`;
const LogoUser = styled.img`
  width: 25px;
  margin: 0 10px;
`;

const DropDownContainer = styled.div`
  margin: 0 auto;
`;

const DropDownHeader = styled.div``;

const DropDownList = styled.form`
  cursor: pointer;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 12px;
  width: 50px;
  cursor: pointer;
  text-align: center;
  color: gray;
  margin-bottom: 0.8em;
  &:hover {
    color: white;
  }
`;

const Text = styled.p`
  font-size: 14px;
  color: gray;
`;
const SuccesLogin = styled.div`
  display: flex;
  gap: 10px;
`;
const AvatarUser = styled.img`
  position: relative;
  width: 40px;
  border-radius: 50%;
  height: 40px;
`;
const OnlineImage = styled.img`
  position: absolute;
  width: 20px;
  top: 50%;
  left: 25%;
`;
const DropDownListContainer = styled.ul`
  padding: 0;
  position: absolute;
  top: 50px;
  left: -35px;
  background-color: #2a2a2a;
  z-index: 12;
  padding: 0 30px;
  border-radius: 4px;
`;
const DropDownAccount = styled.div`
  position: relative;
`;
function HeaderAccount() {
  const { account, isLogin } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("auth"));
    if (items) {
      dispatch(setAccountSuccess(items));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    dispatch(setLogout());
  };

  return (
    <User>
      {!isLogin && (
        <Link to="/signin" className="d-flex">
          <LogoUser src={user} alt="" />
          <p>Sign In</p>
        </Link>
      )}
      {isLogin && (
        <DropDownAccount>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              <SuccesLogin>
                <div>
                  <AvatarUser
                    src={!account?.avatar ? user : account.avatar}
                    alt=""
                  />
                  <OnlineImage src={online} alt="" />
                </div>
                <Text>{account.DisplayName}</Text>
              </SuccesLogin>
            </DropDownHeader>
            {isOpen && (
              <DropDownListContainer>
                <DropDownList>
                  <ListItem>
                    <Link className="text-white" to={"/profile"}>
                      Account
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link className="text-white" to={"/wishlist"}>
                      Wishlist
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link className="text-white" to={"/history"}>
                      History
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link className="text-white" to={"/admin"}>
                      Admin
                    </Link>
                  </ListItem>
                  <ListItem className="text-white" onClick={handleLogOut}>
                    Sign Out
                  </ListItem>
                </DropDownList>
              </DropDownListContainer>
            )}
          </DropDownContainer>
        </DropDownAccount>
      )}
    </User>
  );
}

export default HeaderAccount;
