import wishlist from "../../../../asset/image/wishlist.svg";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  fetchProduct,
  fetchProductBySearch,
  setFilter,
} from "../../../../redux/productSlice";

export const ImageCard = styled.img`
  border-radius: 20px 20px 0 0;
  aspect-ratio: 7 / 9;
`;
export const Info = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: white;
`;
export const Creator = styled.p`
  color: #556772;
  margin: 0;
`;
const Image = styled.div``;
export const IconCreator = styled.img`
  width: 20px;
  height: 20px;
`;
export const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: white;
  margin: 0;
`;

export const Offer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
`;

export const IconWarnning = styled.img`
  margin: 10px;
  width: 25px;
  height: 25px;
`;
export const InfoItem = styled.div`
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const BaseGame = styled.p`
  background-color: gray;
  color: white;
  font-size: 12px;
  padding: 0 10px;
  width: 45%;
  border-radius: 4px;
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
export const Card = styled.div`
  display: flex;
  margin: 20px 0;
  border-radius: 21px;
  flex-direction: column;
  &:hover {
    ${Image} > ${IconWishList} {
      display: block;
    }
  }
`;
export const ListSearch = styled.div`
  position: absolute;
  width: 600px;
  height: 200px;
  /* display: none; */
  overflow-y: auto;
  top: 50px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 30%) 0px 5px 10px;
  background: rgb(32, 32, 32);
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: gray;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: black;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #555;
  }
`;

function ListProduct({ input }) {
  const dispatch = useDispatch();
  const { products, filterList } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductBySearch(input));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, filterList]);
  return (
    <div className="list">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3">
              <Link to={`/detail/${decodeURI(product.title)}-${product.id}`}>
                <Card>
                  <Image className="position-relative">
                    <ImageCard src={product.avatar} />
                    <IconWishList src={wishlist} alt="" />
                  </Image>
                  <InfoItem>
                    <Info>
                      <IconCreator src={product.iconPublisher} alt="" />
                      <Creator>{product.publisher}</Creator>
                    </Info>
                    <BaseGame>Base Game</BaseGame>
                    <Offer>
                      <Name>{product.title}</Name>
                    </Offer>
                    <Offer>
                      <p>{product.price}$ </p>
                    </Offer>
                  </InfoItem>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
