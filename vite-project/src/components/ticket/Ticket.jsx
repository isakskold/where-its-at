import React from "react";
import styled from "styled-components";
import SectionWhat from "./components/SectionWhat";
import SectionWhere from "./components/SectionWhere";
import SectionWhenFromTo from "./components/SectionWhenFromTo";
import SectionInfo from "./components/SectionInfo";
import SectionBarcode from "./components/SectionBarcode";

const StyledTicket = styled.article`
  width: 310px;
  height: 450px;
  background-color: var(--text-white);
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
  border-radius: 3px;
`;

const Ticket = ({ ticket }) => {
  const {
    event: { name, where, when, price },
    id,
    seat,
    section,
  } = ticket;

  return (
    <StyledTicket>
      <SectionWhat eventName={name} />
      <SectionWhere eventLocation={where} />
      <SectionWhenFromTo
        eventDate={when.date}
        eventFrom={when.from}
        eventTo={when.to}
      />
      <SectionInfo seat={seat} section={section} />
      <SectionBarcode ticketId={id} />
    </StyledTicket>
  );
};

export default Ticket;
