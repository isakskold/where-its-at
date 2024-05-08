import React, { useEffect, useState } from "react";
import { StyledHeader } from "../Events";
import { StyledH1 } from "../Events";
import Counter from "../../../components/counter/Counter";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useEventStore from "../../../store";

const StyledParagraph = styled.p`
  font-size: 19px;
  font-family: "FiraSansIta";
  line-height: 22.8px;
  text-align: center;
  color: var(--text-white);
  opacity: 80%;
  font-weight: lighter;
  margin-bottom: 2.5rem;
`;

const StyledH2 = styled.h2`
  font-family: "SansitaOne";
  font-size: 35px;
  font-weight: lighter;
  color: var(--pink);
  margin-bottom: 0.4rem;
`;

const StyledH3 = styled.h3`
  color: var(--light-blue);
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 0.4rem;
`;

const StyledH4 = styled.h4`
  font-family: "FiraSansIta";
  color: var(--text-white);
  opacity: 70%;
  font-weight: lighter;
  margin: 0%;
  margin-bottom: 5rem;
`;

const SingleEvent = () => {
  const { eventId } = useParams();
  const [loading, setLoading] = useState(true); // Add loading state
  const events = useEventStore((state) => state.events);
  const event = events.find((event) => event.id === eventId);

  useEffect(() => {
    // Check if events data is already available
    if (events.length === 0) {
      // Fetch events if not available
      useEventStore
        .getState()
        .fetchEvents()
        .then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [eventId]); // Fetch events when eventId changes

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while fetching data
  }

  if (!event) {
    return <div>Event not found</div>; // Render message if event not found
  }

  return (
    <>
      <StyledHeader>
        <StyledH1 className="StyledH1">Event info</StyledH1>
        <StyledParagraph>
          You are about to score some tickets to
        </StyledParagraph>
        <StyledH2>{event.name}</StyledH2>
        <StyledH3>
          {event.when.date} kl {event.when.to} - {event.when.from}
        </StyledH3>
        <StyledH4>@ {event.where}</StyledH4>
      </StyledHeader>
      <Counter initialData={"Money"} />
    </>
  );
};

export default SingleEvent;
