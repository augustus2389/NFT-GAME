import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { authApi } from "../../../api/authApi";
import productApi from "../../../api/productApi";
import wishlist from "../../../asset/image/wishlist.svg";
import { addToWish, fetchWish } from "../../../redux/wishlistSlice";

const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
const TopSeller = styled.div`
  border-right: 1px solid gray;
`;
const Seller = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;
const IconWishList = styled.img`
  display: none;
  width: 15px;
  position: absolute;
  z-index: 10;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;
const TagSeller = styled.div`
  width: 60px;
  position: relative;
  border-radius: 4px;
`;
const Image = styled.img`
  aspect-ratio: 5/6;
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 4px;
`;
const HeaderCatory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Heading = styled.h3`
  color: white;
  font-size: 18px;
`;
const ButtonMore = styled.button`
  margin: 0 10px;
  background-color: transparent;
  outline: none;
  transition: all 0.5s linear;
  color: white;
  border-radius: 4px;
  padding: 5px 20px;
  border: 1px solid gray;
  &:hover {
    background-color: gray;
  }
`;
const CatgoryItem = styled.div`
  position: relative;
  &:hover {
    ${Seller} > ${TagSeller} > ${IconWishList} {
      display: block;
    }
  }
`;
const LinkPerfect = styled(Link)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const TagInfo = styled.div``;
function Catory({ data }) {
  const { wishs } = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    authApi.getAuth().then((data) => setWishList[data]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [gameTop, setTop] = useState([]);
  const [gameMost, setMost] = useState([]);
  const [gameNew, setNew] = useState([]);
  useEffect(() => {
    productApi.getProductBySeller().then((data) => setTop(data));
  }, []);
  useEffect(() => {
    productApi.getProductByMost().then((data) => setMost(data));
  }, []);
  useEffect(() => {
    productApi.getProductByNew().then((data) => setNew(data));
  }, []);

  const handleAddToWishList = (id) => {
    console.log(data, id);
    const wishListItem = data.find((wish) => wish.id === id);
    console.log(wishListItem);
    const IsExist = wishs.some((wish) => wish.id === id);
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
    const newItem = {
      id: wishListItem.id,
      title: wishListItem.title,
      price: wishListItem.price,
      avatar: wishListItem.avatar,
      date: wishListItem.date,
    };
    dispatch(addToWish(newItem));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <section id="catory">
      <div className="container">
        <Container>
          <div className="row">
            <div className="col-lg-4">
              <TopSeller>
                <HeaderCatory>
                  <Heading>Top Seller</Heading>
                  <ButtonMore>View more</ButtonMore>
                </HeaderCatory>
                {gameTop.map((top) => (
                  <CatgoryItem key={top.id}>
                    <Seller>
                      <TagSeller>
                        <Image src={top.avatar} alt="" />
                        <IconWishList
                          src={wishlist}
                          alt=""
                          onClick={() => handleAddToWishList(top.id)}
                        />
                      </TagSeller>
                      <TagInfo>
                        <p>{top.title}</p>
                        <p>{top.price}</p>
                      </TagInfo>
                    </Seller>
                    <LinkPerfect
                      to={`/detail/${decodeURI(top.title)}-${top.id}`}
                    />
                  </CatgoryItem>
                ))}
              </TopSeller>
            </div>
            <div className="col-lg-4">
              <TopSeller>
                <HeaderCatory>
                  <Heading>Most Played</Heading>
                  <ButtonMore>View more</ButtonMore>
                </HeaderCatory>
                {gameMost.map((most) => (
                  <CatgoryItem key={most.id}>
                    <Seller>
                      <TagSeller>
                        <Image src={most.avatar} alt="" />
                        <IconWishList
                          src={wishlist}
                          alt=""
                          onClick={() => handleAddToWishList(most.id)}
                        />
                      </TagSeller>
                      <TagInfo>
                        <p>{most.title}</p>
                        <p>{most.price}</p>
                      </TagInfo>
                    </Seller>
                    <LinkPerfect
                      to={`/detail/${decodeURI(most.title)}-${most.id}`}
                    />
                  </CatgoryItem>
                ))}
              </TopSeller>
            </div>
            <div className="col-lg-4">
              <TopSeller>
                <HeaderCatory>
                  <Heading>New Gaming</Heading>
                  <ButtonMore>View more</ButtonMore>
                </HeaderCatory>
                {gameNew.map((game) => (
                  <CatgoryItem key={game.id}>
                    <Seller>
                      <TagSeller>
                        <Image src={game.avatar} alt="" />
                        <IconWishList
                          src={wishlist}
                          alt=""
                          onClick={() => handleAddToWishList(game.id)}
                        />
                      </TagSeller>
                      <TagInfo>
                        <p>{game.title}</p>
                        <p>{game.price}</p>
                      </TagInfo>
                    </Seller>
                    <LinkPerfect
                      to={`/detail/${decodeURI(game.title)}-${game.id}`}
                    />
                  </CatgoryItem>
                ))}
              </TopSeller>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Catory;
