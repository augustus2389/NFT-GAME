import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import productApi from "../../../api/productApi";
import wishlist from "../../../asset/image/wishlist.svg";
import { addToWish, removeWish } from "../../../redux/wishlistSlice";
import wishlistTick from "../../../asset/image/wishlistTick.svg";

export const Container = styled.div`
  max-width: 1024px;
  margin: auto;
`;
export const TopSeller = styled.div`
  border-right: 1px solid gray;
`;
export const Seller = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;
export const IconWishList = styled.img`
  width: 15px !important;
`;
export const TagSeller = styled.div`
  width: 60px;
  position: relative;
  border-radius: 4px;
`;
export const Image = styled.img`
  aspect-ratio: 5/6;
  width: 100%;
  height: auto;
  position: relative;
  border-radius: 4px;
`;
export const HeaderCatory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Heading = styled.h3`
  color: white;
  font-size: 18px;
`;
export const ButtonMore = styled.button`
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
export const ActionWish = styled.div`
  /* display: none; */
  position: absolute;
  z-index: 10;
  top: 5%;
  right: 5%;
  cursor: pointer;
`;
export const CatgoryItem = styled.div`
  position: relative;
  &:hover {
    ${Seller} > ${TagSeller} > ${ActionWish} {
      display: block;
    }
  }
`;
export const LinkPerfect = styled(Link)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const TagInfo = styled.div``;
function Catory({ data }) {
  const { wishs } = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);
  const [gameTop, setTop] = useState([]);
  const [gameMost, setMost] = useState([]);
  const [gameNew, setNew] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    productApi.getProductBySeller().then((data) => setTop(data));
  }, []);
  useEffect(() => {
    productApi.getProductByMost().then((data) => setMost(data));
  }, []);
  useEffect(() => {
    productApi.getProductByNew().then((data) => setNew(data));
  }, []);

  const eventgame = gameTop.filter((a) => a.id < 14);

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
    <>
      <ToastContainer></ToastContainer>
      <section id="catory">
        <div className="container">
          <Container>
            <div className="row">
              <div className="col-lg-4">
                <TopSeller>
                  <HeaderCatory>
                    <Heading>Top Seller</Heading>
                    <ButtonMore>
                      <Link className="text-white" to={"/store?tag=Top"}>
                        View more
                      </Link>
                    </ButtonMore>
                  </HeaderCatory>
                  {eventgame.map((top) => (
                    <CatgoryItem key={top.id}>
                      <Seller>
                        <TagSeller>
                          <Image src={top.avatar} alt="" />
                          {isLogin && (
                            <ActionWish
                              onClick={() => handleActionWishList(top.id)}
                            >
                              {isOpen ? (
                                <IconWishList src={wishlist} alt="" />
                              ) : (
                                <IconWishList src={wishlistTick} alt="" />
                              )}
                            </ActionWish>
                          )}
                          {!isLogin && (
                            <ActionWish
                              onClick={() => handleActionWishList(top.id)}
                            >
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
                    <ButtonMore>
                      <Link className="text-white" to={"/store?tag=Most"}>
                        View more
                      </Link>
                    </ButtonMore>
                  </HeaderCatory>
                  {gameMost.map((most) => (
                    <CatgoryItem key={most.id}>
                      <Seller>
                        <TagSeller>
                          <Image src={most.avatar} alt="" />
                          {isLogin && (
                            <ActionWish
                              onClick={() => handleActionWishList(most.id)}
                            >
                              {isOpen ? (
                                <IconWishList src={wishlist} alt="" />
                              ) : (
                                <IconWishList src={wishlistTick} alt="" />
                              )}
                            </ActionWish>
                          )}
                          {!isLogin && (
                            <ActionWish
                              onClick={() => handleActionWishList(most.id)}
                            >
                              <Link to={"/signin"}>
                                <IconWishList src={wishlist} alt="" />
                              </Link>
                            </ActionWish>
                          )}
                        </TagSeller>
                        <TagInfo>
                          <p>{most.title}</p>
                          <p>{most.price} $</p>
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
                    <ButtonMore>
                      <Link className="text-white" to={"/store?tag=Seller"}>
                        View more
                      </Link>
                    </ButtonMore>
                  </HeaderCatory>
                  {gameNew.map((game) => (
                    <CatgoryItem key={game.id}>
                      <Seller>
                        <TagSeller>
                          <Image src={game.avatar} alt="" />
                          {isLogin && (
                            <ActionWish
                              onClick={() => handleActionWishList(game.id)}
                            >
                              {isOpen ? (
                                <IconWishList src={wishlist} alt="Icon" />
                              ) : (
                                <IconWishList src={wishlistTick} alt="Icon" />
                              )}
                            </ActionWish>
                          )}
                          {!isLogin && (
                            <ActionWish
                              onClick={() => handleActionWishList(game.id)}
                            >
                              <Link to={"/signin"}>
                                <IconWishList src={wishlist} alt="" />
                              </Link>
                            </ActionWish>
                          )}
                        </TagSeller>
                        <TagInfo>
                          <p>{game.title}</p>
                          <p>{game.price} $</p>
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
    </>
  );
}

export default Catory;
