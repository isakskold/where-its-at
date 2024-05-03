import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px dotted #00000066;
  align-items: center;
  justify-content: center;
`;

const StyledSectionBarcode = styled(StyledSection)`
  height: 26.67%; /* 120px / 450px * 100% */
  background-color: rgba(0, 0, 0, 0.12);
  border-bottom: none;
`;

const StyledBarcode = styled.p`
  /*font-size: 101px; correct size once barcode font has been imported  */
  font-size: 50px; //Temporary font size
  color: #000000;
  opacity: 80%;
  font-family: "Libre Barcode 128";
`;

const StyledTicketId = styled.p`
  color: #000000;
  opacity: 40%;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.3em;
`;

const SectionBarcode = () => {
  return (
    <StyledSectionBarcode>
      <StyledBarcode>BARCODE</StyledBarcode>
      <StyledTicketId>#A2ED7</StyledTicketId>
    </StyledSectionBarcode>
  );
};

export default SectionBarcode;
