import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import cartApi from "../../api/cartApi";
import window from "../../asset/image/window.svg";
import wishlist from "../../asset/image/wishlist.svg";
import { fetchCart, removeCart } from "../../redux/cartSlice";
import empty from "../../asset/image/empty.svg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import Paypal from "../Paypal/Paypal";
import ModalComponent from "../Paypal/Modal/Modal";

const Container = styled.div`
  max-width: 1040px;
  margin: auto;
`;
const Cart = styled.div`
  background-color: rgb(32, 32, 32);
  border-radius: 6px;
  margin: 20px 0;
`;
const CartItem = styled.div`
  padding: 20px;
  display: flex;
  border-bottom: 1px solid;
`;
const ItemImage = styled.div`
  max-width: 130px;
  overflow: hidden;
`;
const Image = styled.img`
  border-radius: 10px;
  width: 100%;
  aspect-ratio: 10/13;
  height: auto;
`;
const InfoCheckOut = styled.div`
  margin: 0 20px;
  font-size: 18px;
  display: flex;
  max-width: 250px;
  flex-direction: column;
  justify-content: space-between;
`;
const Base = styled.p`
  border-radius: 5px;
  padding: 10px;
  font-size: 9px;
  text-transform: uppercase;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.1); ;
`;
const Window = styled.div`
  max-width: 25px;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ActionType = styled.div`
  display: flex;
  gap: 40px;
`;
const Type = styled.p`
  border-bottom: 1px solid rgba(245, 245, 245, 0.6);
  cursor: pointer;

  color: rgba(245, 245, 245, 0.6);
  &:hover {
    border-bottom: 1px solid white;
    color: white;
  }
`;
const IconPlus = styled.img`
  max-width: 15px;
  margin: 0 2px;
`;
const Date = styled.p`
  padding: 10px 0;
`;
const CheckoutForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const TextCheckout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;
const ButtonCheckout = styled.button`
  width: 100%;
  text-transform: uppercase;
  outline: none;
  border: none;
  background-color: rgb(0, 116, 228);
  box-shadow: rgba(245, 244, 247, 0.25) 0 1px 1px inset;
  transition: all 0.3s cubic-bezier(0.05, 0.03, 0.35, 1);
  color: rgb(245, 245, 245);
  line-height: 15px;
  padding: 0px 20px;
  font-weight: 500;
  height: 50px;
  border-radius: 5px;
  &:hover {
    opacity: 0.7;
  }
`;
const BaseGame = styled.div`
  width: 250px;
`;
const Nothing = styled.p`
  color: gray;
  font-size: 24px;
`;
const Empty = styled.div`
  text-align: center;
`;
const EmptyIcon = styled.img`
  max-width: 50px;
`;
const CustomLink = styled(Link)`
  color: gray;
`;
function CheckOut() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveCart = (id) => {
    dispatch(removeCart(id));
  };
  const subTotal = useMemo(() => {
    return carts.reduce((total, product) => {
      console.log(product.price);
      if (isNaN(product.price)) {
        return total;
      }
      return total + product.price;
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(subTotal);
  return (
    <section id="checkout">
      <Container>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="text-white">My Cart</h2>
            <Cart>
              {carts.length === 0 && (
                <Empty>
                  <EmptyIcon src={empty} alt="" />\
                  <Nothing>Your cart is empty.</Nothing>
                  <CustomLink to="/">Shop for Games & Apps</CustomLink>
                </Empty>
              )}
              {carts.map((cart) => (
                <CartItem key={cart.id}>
                  <ItemImage>
                    <Image src={cart.avatar} alt={cart.title} />
                  </ItemImage>
                  <InfoCheckOut>
                    <BaseGame>
                      <Base>Base game</Base>
                      <p>{cart.title}</p>
                    </BaseGame>
                    <Window>
                      <img src={window} alt="" />
                    </Window>
                  </InfoCheckOut>
                  <Total>
                    <div>
                      <p>{cart.price} $</p>
                      <Date>RELEASE DATE: {cart.date}</Date>
                    </div>
                    <ActionType>
                      <Type>
                        <IconPlus src={wishlist} alt="" />
                        Move to wishlist
                      </Type>
                      <Type onClick={() => handleRemoveCart(cart.id)}>
                        {" "}
                        Remove
                      </Type>
                    </ActionType>
                  </Total>
                </CartItem>
              ))}
            </Cart>
          </div>
          <div className="col-lg-4">
            <div>
              <h2 className="text-white">Games Summary</h2>
              <CheckoutForm>
                <TextCheckout>
                  <p>Price</p>
                  <p>{subTotal}</p>
                </TextCheckout>
                <TextCheckout className="border-bottom">
                  <p>Taxes</p>
                  <p>Calculated at Checkout</p>
                </TextCheckout>
                <TextCheckout>
                  <p>Subtotal</p>
                  <p>{subTotal} $</p>
                </TextCheckout>
                {/* <ButtonCheckout onClick={() => setModalIsOpen(true)}>
                  Check out
                </ButtonCheckout> */}
                <ModalComponent />
              </CheckoutForm>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CheckOut;
