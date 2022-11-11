import React, { useState } from "react";
import styled from "styled-components";
import filter from "../../../asset/image/filter.svg";
import Arrow from "../../../asset/image/ArrowUnder.svg";
import ArrowUp from "../../../asset/image/ArrowUp.svg";
import "./FilterType.scss";

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
function FilterFuture() {
  const [arrow, setArrows] = useState(Arrow);
  const [isOpen, setIsOpen] = useState(true);
  const toggling = () => {
    setIsOpen(!isOpen);
  };

  // Changing State when volume increases/decreases

  return (
    <>
      <DropDownFilter>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            <Text>Feature</Text>
            {isOpen ? <FilterIcon src={arrow} /> : <FilterIcon src={ArrowUp} />}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                <ListItem>
                  <Label htmlFor="single">
                    Single Player
                    <input type="checkbox" className="inputCheck" id="single" />
                  </Label>
                </ListItem>
                <ListItem>
                  <Label htmlFor="op">
                    Co-op
                    <input type="checkbox" className="inputCheck" id="op" />
                  </Label>
                </ListItem>
                <ListItem>
                  <Label htmlFor="multiplayer">
                    Multiplayer
                    <input
                      type="checkbox"
                      className="inputCheck"
                      id="multiplayer"
                    />
                  </Label>
                </ListItem>
                <ListItem>
                  <Label htmlFor="competitive">
                    Competitive
                    <input
                      type="checkbox"
                      className="inputCheck"
                      id="competitive"
                    />
                  </Label>
                </ListItem>
                <ListItem>
                  <Label htmlFor="Support">
                    Controller Support
                    <input
                      type="checkbox"
                      className="inputCheck"
                      id="Support"
                    />
                  </Label>
                </ListItem>
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>
      </DropDownFilter>
    </>
  );
}

export default FilterFuture;
