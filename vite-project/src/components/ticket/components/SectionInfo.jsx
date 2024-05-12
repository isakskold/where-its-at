import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: block;
  width: 100%;
  border-bottom: 1px dotted #00000066;
`;

const StyledSectionInfo = styled(StyledSection)`
  height: 13.33%; /* 60px / 450px * 100% */
  background-color: rgba(0, 0, 0, 0.09);
  border-bottom: none;
`;

const StyledSectionDescription = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4); /* 40% opacity */
  height: 30px;
  line-height: 30px; /* Vertically center text */
  margin: 0; /* Remove default margin */
  margin-left: 20px;
  font-weight: bold;
`;

const StyledSeatSection = styled.p`
  margin-left: 20px;
  color: #000000;
  opacity: 60%;
  font-size: 12px;
`;

const SectionInfo = ({ seat, section }) => {
  return (
    <StyledSectionInfo>
      <StyledSectionDescription>INFO</StyledSectionDescription>
      <StyledSeatSection>
        Section {section} - seat {seat}
      </StyledSeatSection>
    </StyledSectionInfo>
  );
};

export default SectionInfo;
