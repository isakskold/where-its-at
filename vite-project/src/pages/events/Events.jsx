import React from "react";
import EventItem from "../../components/eventItem/EventItem";
import styled from "styled-components";
import GreenBtn from "../../components/greenBtn/GreenBtn";
import useEventStore from "../../store";
import { useEffect } from "react";

export const StyledHeader = styled.header`
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

export const StyledH1 = styled.h1`
  margin-top: 2rem;
  margin-bottom: 45px;
`;

const Events = () => {
  const { events, fetchEvents } = useEventStore(); // Get events and fetchEvents function from the store

  useEffect(() => {
    fetchEvents(); // Fetch events when component mounts
  }, []);

  return (
    <>
      <StyledHeader>
        <StyledH1 className="StyledH1">Events</StyledH1>
        <SearchForm className="SearchForm">
          <SearchInput type="text" placeholder="Search events..." />
        </SearchForm>
      </StyledHeader>
      {/* Map through events and render EventItem for each event */}
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
      <GreenBtn initialData={"goToCart"} />
    </>
  );
};

export default Events;
