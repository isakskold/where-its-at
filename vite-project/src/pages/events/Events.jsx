import React from "react";
import EventItem from "../../components/eventItem/EventItem";
import styled from "styled-components";
import Counter from "../../components/counter/Counter";
import GreenBtn from "../../components/greenBtn/GreenBtn";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = styled.form`
  margin-bottom: 45px;
  min-width: 100%;
`;

const SearchInput = styled.input`
  /* Remove default input styles */
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.1);
  min-height: 40px;
  min-width: 100%;
  border-radius: 3px;
`;

const StyledH1 = styled.h1`
  margin-top: 45px;
  margin-bottom: 45px;
`;

const Events = ({ initialData }) => {
  return (
    <>
      {initialData === "singleEvent" && (
        <>
          <StyledHeader>
            <StyledH1 className="StyledH1">Events</StyledH1>
          </StyledHeader>

          <Counter initialData={"Money"} />
        </>
      )}
      {initialData === "allSelectedEvents" && (
        <>
          <StyledHeader>
            <StyledH1 className="StyledH1">Events</StyledH1>
          </StyledHeader>
          <Counter initialData={"Info"} />
          <GreenBtn initialData={"sendOrder"} />
        </>
      )}
      {!initialData && (
        <>
          <StyledHeader>
            <StyledH1 className="StyledH1">Events</StyledH1>
            <SearchForm className="SearchForm">
              <SearchInput type="text" placeholder="Search events..." />
            </SearchForm>
          </StyledHeader>

          <EventItem />
          <GreenBtn initialData={"addToCart"} />
        </>
      )}
    </>
  );
};

export default Events;
