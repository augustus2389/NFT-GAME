import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToWish, removeWish } from "../../../../redux/wishlistSlice";
import { ActionWish, IconWishList } from "../Category";
import wishlist from "../../../../asset/image/wishlist.svg";
import wishlistTick from "../../../../asset/image/wishlistTick.svg";

function HandleActionNew({ top }) {
  const { wishs } = useSelector((state) => state.wish);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const handleActionWishList = (id) => {
    setIsOpen(!isOpen);
    console.log(wishs);
    const IsExist = wishs.some((wish) => wish.id === id);
    console.log(IsExist);
    if (IsExist) {
      toast.warn("This game removed the game from to Wishlist!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      dispatch(removeWish(id));
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
      title: top.title,
      price: top.price,
      avatar: top.avatar,
      date: top.date,
    };
    dispatch(addToWish(newItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <>
      {isLogin && (
        <ActionWish onClick={() => handleActionWishList(top.id)}>
          {isOpen ? (
            <IconWishList src={wishlist} alt="" />
          ) : (
            <IconWishList src={wishlistTick} alt="" />
          )}
        </ActionWish>
      )}
      {!isLogin && (
        <ActionWish onClick={() => handleActionWishList(top.id)}>
          <Link to={"/signin"}>
            <IconWishList src={wishlist} alt="" />
          </Link>
        </ActionWish>
      )}
    </>
  );
}

export default HandleActionNew;
