import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import productApi from "../../../../api/productApi";

import { addToWish, removeWish } from "../../../../redux/wishlistSlice";
import {
  ButtonMore,
  HeaderCatory,
  Heading,
  CatgoryItem,
  Seller,
  TagSeller,
  Image,
  ActionWish,
  IconWishList,
  TagInfo,
  LinkPerfect,
  TopSeller,
} from "../Catory";
import CategoryItem from "./CategoryItem";

function TopSellerGame() {
  const { wishs } = useSelector((state) => state.wish);
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://json-server-augustus-game.herokuapp.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const [gameTop, setTop] = useState([]);
  useEffect(() => {
    productApi.getProductBySeller().then((data) => setTop(data));
  }, []);
  const handleActionWishList = (id) => {
    setIsOpen(!isOpen);
    const wishListItem = data.find((wish) => wish.id === id);
    const IsExist = wishs.some((wish) => wish.id === id);
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
      id: wishListItem.id,
      title: wishListItem.title,
      price: wishListItem.price,
      avatar: wishListItem.avatar,
      date: wishListItem.date,
    };
    dispatch(addToWish(newItem));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <TopSeller>
      <HeaderCatory>
        <Heading>Top Seller</Heading>
        <ButtonMore>
          <Link className="text-white" to={"/store?tag=Top"}>
            View more
          </Link>
        </ButtonMore>
      </HeaderCatory>
      {gameTop.map((top) => (
        <CategoryItem key={top.id} top={top} />
      ))}
    </TopSeller>
  );
}

export default TopSellerGame;
