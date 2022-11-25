import React from "react";
import { Link } from "react-router-dom";
import { HeaderCatory, Heading, ButtonMore, TopSeller } from "../Category";
import TopSellerItem from "./TopSellerItem/TopSellerItem";

function NewGaming({ gameNew }) {
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
      <TopSellerItem gameNew={gameNew} />
    </TopSeller>
  );
}

export default NewGaming;
