import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchProduct } from "../../../../redux/productSlice";
import { updateState } from "../../../../redux/statusSlice";

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
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: gray;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: black;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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
  &:hover {
    box-shadow: 1px 0px 9px gray;
  }
`;
function SearchProduct(props) {
  const { setInputText, setShowProductList } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { products } = useSelector((state) => state.product);
  const data = useSelector((state) => state.status.new);
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
  const handleClick = (value) => {
    setInputText("");
    setShowProductList(false);
    dispatch(updateState(value));
  };
  return (
    <ListSearch>
      {filteredData.length === 0 ? (
        <h1 style={{ color: "#fff" }}>Khong tim thay</h1>
      ) : (
        filteredData.map((item) => (
          <LinkCustom
            key={item.id}
            onClick={() => handleClick(item.id)}
            to={`/detail/${decodeURI(item.title)}-${item.id}`}
          >
            <ListItem style={{ color: "white" }}>
              <ImageList src={item.avatar} alt="" />
              <InfoList>
                <p>{item.title}</p>
                <p>{item.price} $</p>
              </InfoList>
            </ListItem>
          </LinkCustom>
        ))
      )}
    </ListSearch>
  );
}

export default SearchProduct;
