import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../../../../api/productApi";
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

function TopSellerList() {
  const [gameTop, setTop] = useState([]);
  useEffect(() => {
    productApi.getProductBySeller().then((data) => setTop(data));
  }, []);
  console.log(gameTop);
  const eventgame = gameTop.filter((a) => a.id < 14);
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
