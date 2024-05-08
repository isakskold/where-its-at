import React from "react";
import DateBox from "./dateBox/DateBox";
import EventInfo from "./eventInfo/EventInfo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledEventItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;

const EventItem = ({ event }) => {
  return (
    <StyledEventItem to={`/events/single/${event.id}`}>
      <DateBox event={event} />
      <EventInfo event={event} />
    </StyledEventItem>
  );
};

export default EventItem;
