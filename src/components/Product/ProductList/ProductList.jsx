import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";

function ProductList() {
  const [productList, setProductList] = useState([]);
  console.log(productList);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []);
  return (
    <>
      <div className="product-list">
        <div className="container">
          <div className="row">
            {productList.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
