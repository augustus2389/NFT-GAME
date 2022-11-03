import React, { useState } from "react";
import styled from "styled-components";
import filter from "../../../../asset/image/filter.svg";
import Arrow from "../../../../asset/image/ArrowUnder.svg";
import ArrowUp from "../../../../asset/image/ArrowUp.svg";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const FilterIcon = styled.img`
  width: 20px;
  height: 20px;
  color: white;
`;
const FilterPanel = styled.div`
  margin: 20px 0;
  display: flex;
  font-weight: 700;
  font-size: 18px;
  justify-content: space-between;
  border-bottom: 1px solid white;
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
const TopTrendTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  font-weight: 700;
`;
const ListItem = styled.li`
  list-style: none;
  font-size: 16px;
  margin-bottom: 0.8em;
`;

const PriceFilter = styled.div`
  margin: auto;
  display: block;
  width: fit-content;
`;

function Filter() {
  const [arrow, setArrows] = useState(Arrow);
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => {
    setIsOpen(!isOpen);
  };
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  // const inputRef = useRef();
  // const [price, setPrice] = useState(40);
  // const handleInput = (e) => {
  //   setPrice(e.target.value);
  // };
  // useEffect(() => {
  //   if (inputRef.current.value) {
  //     return;
  //   }
  //   setPrice(inputRef.current.value);
  // }, [inputRef.current]);
  // const hotels = [
  //   { name: "A", price: 40 },
  //   { name: "B", price: 50 },
  //   { name: "C", price: 60 },
  // ];
  const [value, setValue] = React.useState([2, 10]);

  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };
  return (
    <section id="filter">
      <TopTrendTitle>Explore</TopTrendTitle>
      <FilterPanel>
        <p>Filters</p>

        <FilterIcon src={filter} alt="" />
      </FilterPanel>
      <DropDownFilter>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedOption || "Listing type"}
            {isOpen ? <FilterIcon src={arrow} /> : <FilterIcon src={ArrowUp} />}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem>
                  <label htmlFor="">
                    {" "}
                    <input type="checkbox" /> Action
                  </label>
                </ListItem>
                <ListItem>
                  <label htmlFor="">
                    {" "}
                    <input type="checkbox" /> Adventure
                  </label>
                </ListItem>
                <ListItem>
                  <label htmlFor="">
                    {" "}
                    <input type="checkbox" /> RPG
                  </label>
                </ListItem>
                <ListItem>
                  <label htmlFor="">
                    {" "}
                    <input type="checkbox" /> Casual
                  </label>
                </ListItem>
                <ListItem>
                  <label htmlFor="">
                    {" "}
                    <input type="checkbox" /> Simulation
                  </label>
                </ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </DropDownFilter>
      {/* <div className="App">
        <input
          type="range"
          ref={inputRef}
          value={price}
          onInput={handleInput}
        />
        <FluctuatePrice>Price: {price}</FluctuatePrice>
        <div>
          {hotels
            .filter((hotel) => {
              return hotel.price > parseInt(price, 10);
            })
            .map((hotel) => {
              return (
                <p key={hotel.name}>
                  {hotel.name} | {hotel.price} &euro;{" "}
                </p>
              );
            })}
        </div>
      </div> */}
      <PriceFilter>
        <Typography id="range-slider" gutterBottom>
          Select Price Range:
        </Typography>
        <Slider
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="auto"
        />
        <TopTrendTitle>
          Your range of Price is between {value[0]} /- and {value[1]} /-
        </TopTrendTitle>
      </PriceFilter>
    </section>
  );
}

export default Filter;
