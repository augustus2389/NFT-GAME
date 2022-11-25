import React from "react";
import {
  CatgoryItem,
  Seller,
  TagSeller,
  Image,
  TagInfo,
  LinkPerfect,
} from "../../Category";
import HandleAction from "./HandleAction/HandleAction";

function TopSellerItem({ eventgame }) {
  return (
    <>
      {eventgame.map((top) => (
        <CatgoryItem key={top.id}>
          <Seller>
            <TagSeller>
              <Image src={top.avatar} alt="" />
              <HandleAction top={top} />
            </TagSeller>
            <TagInfo>
              <p>{top.title}</p>
              <p>{top.price} $</p>
            </TagInfo>
          </Seller>
          <LinkPerfect to={`/detail/${decodeURI(top.title)}-${top.id}`} />
        </CatgoryItem>
      ))}
    </>
  );
}

export default TopSellerItem;
