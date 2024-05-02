import React from "react";
import EventItem from "../../components/eventItem/EventItem";
import styled from "styled-components";

const StyledEvents = styled.div`
  padding-right: 30px;
  padding-left: 30px;
`;

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchForm = styled.form`
  margin-top: 45px;
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

const StyledH1 = styled.h1``;

const Events = () => {
  return (
    <StyledEvents className="styledEvents">
      <StyledHeader>
        <StyledH1 className="StyledH1">Events</StyledH1>
        <SearchForm className="SearchForm">
          <SearchInput type="text" placeholder="Search events..." />
        </SearchForm>
      </StyledHeader>

      <EventItem />
    </StyledEvents>
  );
};

export default Events;
