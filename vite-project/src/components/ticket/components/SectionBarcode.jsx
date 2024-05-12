import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-bottom: 1px dotted #00000066;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledSectionBarcode = styled(StyledSection)`
  height: 26.67%; /* 120px / 450px * 100% */
  background-color: rgba(0, 0, 0, 0.12);
  border-bottom: none;
  display: flex; /* Add display: flex */
  flex-direction: column; /* Set flex-direction to column */

  align-items: center;
`;

const StyledBarcode = styled.p`
  font-size: 101px;
  line-height: 1;
  color: #000000;
  opacity: 80%;
  font-family: "Barcode";
  height: 60px;
`;

const StyledTicketId = styled.p`
  color: #000000;
  opacity: 40%;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.3em;
  position: absolute;
  bottom: 5px;
`;

const SectionBarcode = ({ ticketId }) => {
  return (
    <StyledSectionBarcode>
      <StyledBarcode>{ticketId}</StyledBarcode>
      <StyledTicketId>#{ticketId}</StyledTicketId>
    </StyledSectionBarcode>
  );
};

export default SectionBarcode;
