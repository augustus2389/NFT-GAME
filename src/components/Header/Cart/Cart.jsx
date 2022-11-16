import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import cartApi from "../../../api/cartApi";

const ActionCart = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  a.active {
    color: #fff;
    text-decoration: underline;
  }
  a.inactive {
    font-style: italic;
  }
`;
const TextCart = styled(NavLink)`
  cursor: pointer;
  color: gray;
  padding: 0 5px;
  &:hover {
    color: white;
  }
`;
const CountCart = styled.p`
  background-color: white;
  border-radius: 30%;
  color: black;
  width: 20px;
  text-align: center;
`;
function Cart() {
  const [cart, setCart] = useState([]);
  const { account, isLogin } = useSelector((state) => state.auth);
  console.log(account);
  useEffect(() => {
    cartApi.getCart().then((data) => setCart(data));
  }, []);
  return (
    <>
      {isLogin && (
        <ActionCart>
          <TextCart
            to="/wishlist"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Wishlist
          </TextCart>
          <div className="d-flex">
            <TextCart
              to="/checkout"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Cart
            </TextCart>
            <CountCart>{cart.length}</CountCart>
          </div>
        </ActionCart>
      )}
    </>
  );
}

export default Cart;
