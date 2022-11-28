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
import HandleActionNew from "./HandleActionNew";

function NewGaming() {
  const [gameNew, setNew] = useState([]);
  useEffect(() => {
    productApi.getProductByNew().then((data) => setNew(data));
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
      {gameNew.map((top) => (
        <CatgoryItem key={top.id}>
          <Seller>
            <TagSeller>
              <Image src={top.avatar} alt="" />
              <HandleActionNew top={top} />
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

export default NewGaming;
