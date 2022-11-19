import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import productApi from "../../../../api/productApi";
import { removeCart } from "../../../../redux/cartSlice";
import { addToWish, removeWish } from "../../../../redux/wishlistSlice";
import wishlist from "../../../../asset/image/wishlist.svg";
import wishlistTick from "../../../../asset/image/wishlistTick.svg";
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
import { Link } from "react-router-dom";

function CategoryItem({ top }) {
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
    <CategoryItem key={top.id}>
      <Seller>
        <TagSeller>
          <Image src={top.avatar} alt="" />
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
        </TagSeller>
        <TagInfo>
          <p>{top.title}</p>
          <p>{top.price} $</p>
        </TagInfo>
      </Seller>
      <LinkPerfect to={`/detail/${decodeURI(top.title)}-${top.id}`} />
    </CategoryItem>
  );
}

export default CategoryItem;
