import React, { useEffect } from "react";
import styled from "styled-components";
import window from "../../asset/image/window.svg";
import wishlist from "../../asset/image/wishlist.svg";
import empty from "../../asset/image/empty.svg";
import { Link } from "react-router-dom";
import FilterType from "./Filter/FilterGenre";
import { useDispatch, useSelector } from "react-redux";
import { fetchWish, removeWish } from "../../redux/wishlistSlice";
import { addToCart, fetchCart } from "../../redux/cartSlice";
import { toast } from "react-toastify";

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

const BaseGame = styled.div`
  width: 300px;
`;

const HeadingH3 = styled.h3`
  color: white;
  font-size: 14px;
  margin: 20px 0;
`;
function Wishlist() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const { wishs } = useSelector((state) => state.wish);
  useEffect(() => {
    dispatch(fetchWish());
    dispatch(fetchCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleRemoveWishlist = (id) => {
    dispatch(removeWish(id));
  };
  const handleAddToCart = (id) => {
    const IsExist = carts.some((wish) => wish.id === id);
    if (IsExist) {
      toast.warn("This game has already been added to Wishlist!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    toast.success("This game has been added Wishlist", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const newItem = {
      id: wishs.id,
      title: wishs.title,
      price: wishs.price,
      avatar: wishs.avatar,
      date: wishs.date,
    };
    dispatch(addToCart(newItem));
    console.log(newItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                      <AddToCart onClick={() => handleAddToCart(wish.id)}>
                        Add To Cart
                      </AddToCart>
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
