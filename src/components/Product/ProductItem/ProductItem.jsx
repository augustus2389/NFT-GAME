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
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div className="col-lg-3 col-6">
      <Link to={`/${product.id}`}>
        <Card>
          {product?.images && <ImageCard src={product.images[0]} />}
          <InfoItem>
            <Info>
              <IconCreator src={product.iconPublisher} alt="" />
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
      </Link>
    </div>
  );
}

export default ProductItem;
