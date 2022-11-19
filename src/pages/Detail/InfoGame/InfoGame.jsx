import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import backHome from "../../../asset/image/back.svg";
import tick from "../../../asset/image/tick.svg";
import warnning from "../../../asset/image/16.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCart } from "../../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import { addToWish, fetchWish } from "../../../redux/wishlistSlice";

const Description = styled.p`
  color: #000;
  font-size: 16px;
  line-height: 22px;
`;
const TextBack = styled.p`
  color: rgb(17, 153, 250);
`;
const Back = styled.a`
  text-align: left;
  display: flex;
  align-items: center;
`;
const IconBack = styled.img`
  width: 5px;
  height: 10px;
  margin-right: 10px;
`;
const Tick = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  bottom: 0;
  left: 40px;
`;
const IconCreator = styled.img`
  width: 60px;
  margin-right: 10px;
  height: 60px;
  border-radius: 50%;
`;
const TextInfo = styled.p`
  color: #626973;
  line-height: 21px;
  font-size: 14px;
`;
const NameCreate = styled.p`
  color: black;
  line-height: 40px;
  font-size: 14px;
  margin-right: 40px;
`;
const Creator = styled.div`
  display: flex;
  margin-top: 20px;
`;
const CreatorInfo = styled.div`
  margin-right: 25px;
`;
const Button = styled.button`
  margin: 0px;
  border: none;
  padding: 0px 24px;
  outline: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3em;
  text-decoration: none;
  background: linear-gradient(
    90deg,
    rgb(17, 153, 250) 0%,
    rgb(17, 208, 250) 100%
  );
  color: white;
  border-radius: 4px;
  height: 48px;
  min-width: 128px;
  text-transform: uppercase;
`;
const ButtonOffer = styled.button`
  margin: 0px;
  border: none;
  padding: 0px 24px;
  outline: 0px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.3em;
  text-decoration: none;
  border-radius: 4px;
  height: 48px;
  min-width: 128px;
  text-transform: uppercase;
  background: white;
  border: 1px solid rgb(17, 153, 250);
  color: rgb(17, 153, 250);
`;
const Action = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 40px;
`;
const Represent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Tag = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  max-width: 300px;
  white-space: nowrap;
`;
const LinkTag = styled.p`
  border: 1px solid #1199fa;
  border-radius: 4px;
  color: #1199fa;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  cursor: pointer;
  text-align: center;
  text-transform: capitalize; ;
`;
const Name = styled.div`
  margin: 10px 0 0;
  display: flex;
`;
const IconAgeLimit = styled.img`
  width: 20px;
  height: 20px;
  margin: 2px 20px;
  line-height: 10px;
`;
const NameText = styled.p`
  margin: 0;
  color: black;
  font-weight: bold;
  font-size: 16px;
`;

function InfoGame({ detail, checkId }) {
  const { wishs } = useSelector((state) => state.wish);
  const { carts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchWish());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddToCart = () => {
    const IsExist = carts.some((cart) => cart.id === +checkId);
    if (IsExist) {
      toast.warn("This game has already been added to cart!", {
        // position: toast.POSITION.TOP_CENTER,
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
    dispatch(addToCart(detail));
    toast.success("This game has been added cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const handleActionWishList = (id) => {
    const IsExist = wishs.some((wish) => wish.id === id);
    console.log(IsExist);
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
      id: detail.id,
      title: detail.title,
      price: detail.price,
      avatar: detail.avatar,
      date: detail.date,
    };
    dispatch(addToWish(newItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <Represent>
        <Back to="/">
          <IconBack src={backHome} alt="" />
          <TextBack>Back</TextBack>
        </Back>
        <Name>
          <NameText>{detail?.title}</NameText>
          <IconAgeLimit src={warnning} alt="" />
        </Name>
        <Creator>
          <div className="create-avatar position-relative">
            <IconCreator src={detail?.iconPublisher} />
            <Tick src={tick} />
          </div>
          <CreatorInfo>
            <TextInfo>Creator</TextInfo>
            <NameCreate>{detail?.publisher}</NameCreate>
          </CreatorInfo>
          <div className="creator-info">
            <TextInfo>RELEASE DATE:</TextInfo>
            <NameCreate>{detail?.date}</NameCreate>
          </div>
        </Creator>
        <Action>
          <Button>
            {isLogin ? (
              <Link onClick={handleAddToCart} className="text-white">
                buy for {detail?.price}$
              </Link>
            ) : (
              <Link to={"/signin"} className="text-white">
                buy for {detail?.price}$
              </Link>
            )}
          </Button>
          <ButtonOffer onClick={() => handleActionWishList(detail?.id)}>
            {isLogin ? (
              <Link className="text-black">Add to wishlist</Link>
            ) : (
              <Link to={"/signin"} className="text-black">
                Add to wishlist
              </Link>
            )}
          </ButtonOffer>
        </Action>
        <Description>{detail?.description}</Description>
        <Tag>
          {detail?.type.map((type, index) => (
            <LinkTag key={index}>{type}</LinkTag>
          ))}
        </Tag>
      </Represent>
    </>
  );
}

export default InfoGame;
