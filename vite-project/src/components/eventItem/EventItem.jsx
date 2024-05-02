import React from "react";
import DateBox from "./dateBox/DateBox";
import EventInfo from "./eventInfo/EventInfo";
import styled from "styled-components";

const StyledEventItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const EventItem = () => {
  return (
    <StyledEventItem className="styledEventItem">
      <DateBox />
      <EventInfo />
    </StyledEventItem>
  );
};

export default EventItem;
