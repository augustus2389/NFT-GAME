import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Arrow from "../../../asset/image/ArrowUnder.svg";
import ArrowUp from "../../../asset/image/ArrowUp.svg";
import "./FilterType.scss";
import FilterFuture from "./FilterFeature";
import FilterForm from "./FilterPlatForm";
import productApi from "../../../api/productApi";
import { useDispatch } from "react-redux";
import { fetchProductBySearch } from "../../../redux/productSlice";

const FilterIcon = styled.img`
  width: 15px;
  height: 15px;
`;
const DropDownFilter = styled.div`
  /* height: 100vh; */
`;

const DropDownContainer = styled.div`
  margin: 0 auto;
`;

const DropDownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 18px;
  color: white;
`;

const DropDownListContainer = styled.ul`
  padding: 0;
  transition: all 3s linear;
`;

const DropDownList = styled.form`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
  }
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 16px;
  margin-bottom: 0.8em;
`;
const Label = styled.label`
  font-size: 14px;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
const Text = styled.p`
  font-size: 14px;
  color: gray;
`;
const TypeList = [
  { value: "action", label: "Action" },
  { value: "adventure", label: "Adventure" },
  { value: "rpg", label: "RPG" },
  { value: "casual", label: "Casual" },
  { value: "simulation", label: "Simulation" },
  { value: "rpg", label: "RPG" },
];

function FilterType() {
  const [arrow, setArrows] = useState(Arrow);
  const [isOpen, setIsOpen] = useState(true);
  const toggling = () => {
    setIsOpen(!isOpen);
  };
  const [filter, setFilter] = useState("");
  useEffect(() => {
    productApi.getProducts().then((data) => setFilter(data));
  }, []);
  // Changing State when volume increases/decreases
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { value, checked } = e.target;
    dispatch(fetchProductBySearch(value));
    // const product = await axios.get(
    //   `https://json-server-augustus-game.herokuapp.com/products?q=${value}`
    // );
  };

  return (
    <>
      <DropDownFilter>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            <Text>GENRE</Text>
            {isOpen ? <FilterIcon src={arrow} /> : <FilterIcon src={ArrowUp} />}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {TypeList.map((type, index) => (
                  <ListItem key={index}>
                    <Label>
                      {type.label}
                      <input
                        type="checkbox"
                        className="inputCheck"
                        onChange={handleChange}
                        value={type.value}
                      />
                    </Label>
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
        <hr />
        <FilterFuture />
        <hr />
        <FilterForm />
      </DropDownFilter>
    </>
  );
}

export default FilterType;
