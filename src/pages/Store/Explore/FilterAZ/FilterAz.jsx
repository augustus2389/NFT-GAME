import React from "react";
import "./index.scss";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import productApi from "../../../../api/productApi";
import { setProductListNew } from "../../../../redux/productSlice";

function FilterAz() {
  const dispatch = useDispatch();
  const handleChange = (value) => {
    productApi
      // .getProductByPrice(value)
      .getProductBySort(value)
      .then((data) => dispatch(setProductListNew(data)));
  };
  return (
    <>
      <Select
        defaultValue="Please choose your choice"
        onChange={handleChange}
        style={{
          maxWidth: 300,
        }}
        allowClear
        options={[
          {
            id: 1,
            value: "all",
            label: "All",
          },
          {
            id: 2,
            value: "_sort=title&_order=asc",
            label: "Alphebetical",
          },
          {
            id: 3,
            value: "_sort=price&_order=desc",
            label: "Price: Hight to Low",
          },
          {
            id: 4,
            value: "_sort=price&_order=asc",
            label: "Price: Low to Hight",
          },
        ]}
      />
    </>
  );
}
export default FilterAz;
