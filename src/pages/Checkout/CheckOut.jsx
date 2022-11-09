import React from "react";
import styled from "styled-components";
import window from "../../asset/image/window.svg";
import wishlist from "../../asset/image/wishlist.svg";
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

function CheckOut() {
  return (
    <section id="checkout">
      <Container>
        <div className="row">
          <div className="col-lg-8">
            <h2>My Cart</h2>
            <Cart>
              <CartItem>
                <ItemImage>
                  <Image
                    src="https://cdn1.epicgames.com/047ee5c9350245588f043061fb0279ab/offer/GRFS_STD_Store_Portrait_1200x1600-1200x1600-b57c40d872ad994413f2d34492988c1f.jpg?h=480&resize=1&w=360"
                    alt=""
                  />
                </ItemImage>
                <InfoCheckOut>
                  <div>
                    <Base>Base game</Base>
                    <p>Ghost Recon Future Soldier: Ultimate Edition</p>
                  </div>
                  <Window>
                    <img src={window} alt="" />
                  </Window>
                </InfoCheckOut>
                <Total>
                  <div>
                    <p>50 $</p>
                    <Date>RELEASE DATE: 8 Mar, 2018</Date>
                  </div>
                  <ActionType>
                    <Type>
                      <IconPlus src={wishlist} alt="" />
                      Move to wishlist
                    </Type>
                    <Type> Remove</Type>
                  </ActionType>
                </Total>
              </CartItem>
              <CartItem>
                <ItemImage>
                  <Image
                    src="https://cdn1.epicgames.com/047ee5c9350245588f043061fb0279ab/offer/GRFS_STD_Store_Portrait_1200x1600-1200x1600-b57c40d872ad994413f2d34492988c1f.jpg?h=480&resize=1&w=360"
                    alt=""
                  />
                </ItemImage>
                <InfoCheckOut>
                  <div>
                    <Base>Base game</Base>
                    <p>Ghost Recon Future Soldier: Ultimate Edition</p>
                  </div>
                  <Window>
                    <img src={window} alt="" />
                  </Window>
                </InfoCheckOut>
                <Total>
                  <div>
                    <p>50 $</p>
                    <Date>RELEASE DATE: 8 Mar, 2018</Date>
                  </div>
                  <ActionType>
                    <Type>
                      <IconPlus src={wishlist} alt="" />
                      Move to wishlist
                    </Type>
                    <Type> Remove</Type>
                  </ActionType>
                </Total>
              </CartItem>
              <CartItem>
                <ItemImage>
                  <Image
                    src="https://cdn1.epicgames.com/047ee5c9350245588f043061fb0279ab/offer/GRFS_STD_Store_Portrait_1200x1600-1200x1600-b57c40d872ad994413f2d34492988c1f.jpg?h=480&resize=1&w=360"
                    alt=""
                  />
                </ItemImage>
                <InfoCheckOut>
                  <div>
                    <Base>Base game</Base>
                    <p>Ghost Recon Future Soldier: Ultimate Edition</p>
                  </div>
                  <Window>
                    <img src={window} alt="" />
                  </Window>
                </InfoCheckOut>
                <Total>
                  <div>
                    <p>50 $</p>
                    <Date>RELEASE DATE: 8 Mar, 2018</Date>
                  </div>
                  <ActionType>
                    <Type>
                      <IconPlus src={wishlist} alt="" />
                      Move to wishlist
                    </Type>
                    <Type> Remove</Type>
                  </ActionType>
                </Total>
              </CartItem>
            </Cart>
          </div>
          <div className="col-lg-4">
            <div>
              <h2>Games Summary</h2>
              <CheckoutForm>
                <TextCheckout>
                  <p>Price</p>
                  <p>50 $</p>
                </TextCheckout>
                <TextCheckout className="border-bottom">
                  <p>Taxes</p>
                  <p>Calculated at Checkout</p>
                </TextCheckout>
                <TextCheckout>
                  <p>Subtotal</p>
                  <p>50 $</p>
                </TextCheckout>
                <ButtonCheckout>Check out</ButtonCheckout>
              </CheckoutForm>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CheckOut;
