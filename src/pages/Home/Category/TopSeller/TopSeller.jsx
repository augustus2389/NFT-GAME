import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderCatory,
  Heading,
  ButtonMore,
  TopSeller,
  CatgoryItem,
  Seller,
  TagSeller,
  Image,
  TagInfo,
  LinkPerfect,
} from "../Category";
import HandleAction from "./TopSellerItem/HandleAction/HandleAction";
import TopSellerItem from "./TopSellerItem/TopSellerItem";

function TopSellerList({ eventgame }) {
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
    </TopSeller>
  );
}

export default TopSellerList;
