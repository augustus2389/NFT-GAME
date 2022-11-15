import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchProduct } from "../../../../redux/productSlice";

export const ListSearch = styled.div`
  position: absolute;
  width: 600px;
  height: 200px;
  /* display: none; */
  overflow-y: auto;
  top: 50px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 30%) 0px 5px 10px;
  background: rgb(32, 32, 32);
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: gray;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: black;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }
`;
const ImageList = styled.img`
  width: 50px;
  aspect-ratio: 6 /6;
`;
const ListItem = styled.div`
  cursor: pointer;
  margin: 10px 0;
  padding: 0px 20px;
  display: flex;
  &:hover {
    box-shadow: 1px 0px 9px gray;
  }
`;
const InfoList = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 0 10px;
  justify-content: center;
`;
const LinkCustom = styled(Link)`
  display: flex;
`;
function SearchProduct(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { products } = useSelector((state) => state.product);
  const filteredData = products.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.title.toLowerCase().includes(props.input);
    }
  });

  return (
    <ListSearch>
      {filteredData.map((item) => (
        <ListItem key={item.id} style={{ color: "white" }}>
          <LinkCustom to={`/detail/${decodeURI(item.title)}-${item.id}`}>
            <ImageList src={item.avatar} alt="" />
            <InfoList>
              <p>{item.title}</p>
              <p>{item.price} $</p>
            </InfoList>
          </LinkCustom>
        </ListItem>
      ))}
    </ListSearch>
  );
}

export default SearchProduct;
