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
import HandleActionMost from "./HandleActionMost";

function MostPopular() {
  const [gameMost, setMost] = useState([]);
  useEffect(() => {
    productApi.getProductByMost().then((data) => setMost(data));
  }, []);
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
      {gameMost.map((top) => (
        <CatgoryItem key={top.id}>
          <Seller>
            <TagSeller>
              <Image src={top.avatar} alt="" />
              <HandleActionMost top={top} />
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

export default MostPopular;
