import React from "react";
import {
  Button,
  Card,
  Creator,
  IconCreator,
  IconWarnning,
  ImageCard,
  Info,
  InfoItem,
  Name,
  Offer,
} from "../../../pages/Store/Explore/List/List";
import warnnig from "../../../asset/image/16.svg";

function ProductItem({ product }) {
  return (
    <div className="col-lg-3 col-6">
      <Card>
        {!!product?.pictures && <ImageCard src={product?.pictures[0].src} />}

        <InfoItem>
          <Info>
            <IconCreator
              src="https://avatars.cloudflare.steamstatic.com/40a85b52747a78b26e393e3f9e58f319194b1b33_full.jpg"
              alt=""
            />
            <Creator>{product.publisher}</Creator>
          </Info>
          <Offer>
            <Name>{product.title}</Name>
            <IconWarnning src={warnnig} alt="" />
          </Offer>
          <Offer>
            <Button>Make Offer : {product.price}$ </Button>
          </Offer>
        </InfoItem>
      </Card>
    </div>
  );
}

export default ProductItem;
