import React, { useEffect } from "react";
import styled from "styled-components";
import window from "../../asset/image/window.svg";
import wishlist from "../../asset/image/wishlist.svg";
import empty from "../../asset/image/empty.svg";
import { Link } from "react-router-dom";
import FilterType from "./Filter/FilterGenre";
import { useDispatch, useSelector } from "react-redux";
import { fetchWish, removeWish } from "../../redux/wishlistSlice";

const Container = styled.div`
  max-width: 1040px;
  margin: auto;
`;
const Wish = styled.div`
  background-color: rgb(32, 32, 32);
  border-radius: 6px;
  margin: 20px 0;
`;
const WishItem = styled.div`
  padding: 20px;
  display: flex;
  border-bottom: 1px solid;
  &:hover {
    background: rgba(0, 0, 0, 0);
  }
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
  max-width: 375px;
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
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ActionType = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
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
const AddToCart = styled.button`
  color: rgba(245, 245, 245, 0.6);
  outline: none;
  padding: 10px 40px;
  border: 1px solid rgba(245, 245, 245, 0.6);
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const IconPlus = styled.img`
  max-width: 15px;
  margin: 0 2px;
`;
const Date = styled.p`
  padding: 15px 0;
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
  width: 300px;
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
const HeadingH3 = styled.h3`
  color: white;
  font-size: 14px;
  margin: 20px 0;
`;
function Wishlist() {
  const dispatch = useDispatch();
  // const { carts } = useSelector((state) => state.cart);
  const { wishs } = useSelector((state) => state.wish);
  useEffect(() => {
    dispatch(fetchWish());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleRemoveWishlist = (id) => {
    dispatch(removeWish(id));
  };
  return (
    <section id="checkout">
      <Container>
        <div className="row">
          <div className="col-lg-9">
            <h2 className="text-white">My Wishlist</h2>
            <Wish>
              {/* <Empty>
                  <EmptyIcon src={empty} alt="" />\
                  <Nothing>Your cart is empty.</Nothing>
                  <CustomLink to="/">Shop for Games & Apps</CustomLink>
                </Empty> */}

              {wishs.map((wish) => (
                <WishItem key={wish.id}>
                  <ItemImage>
                    <Image src={wish.avatar} alt="" />
                  </ItemImage>
                  <InfoCheckOut>
                    <BaseGame>
                      <Base>Base game</Base>
                      <p>{wish.title}</p>
                    </BaseGame>
                    <Window>
                      <img src={window} alt="" />
                    </Window>
                  </InfoCheckOut>
                  <Total>
                    <div>
                      <p>{wish.price} </p>
                      <Date>RELEASE DATE: {wish.date}</Date>
                    </div>
                    <ActionType>
                      <Type onClick={() => handleRemoveWishlist(wish.id)}>
                        Remove
                      </Type>
                      <AddToCart>Add To Cart</AddToCart>
                    </ActionType>
                  </Total>
                </WishItem>
              ))}
            </Wish>
          </div>
          <div className="col-lg-3">
            <div>
              <HeadingH3>Filter</HeadingH3>
              <hr />
              <FilterType />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Wishlist;
