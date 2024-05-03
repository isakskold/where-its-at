import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: block;
  width: 100%;
  border-bottom: 1px dotted #00000066;
`;

const StyledSectionWhenFromTo = styled(StyledSection)`
  height: 13.33%; /* 60px / 450px * 100% */
  background-color: rgba(0, 0, 0, 0.06);
  display: flex;

  :nth-child(2) {
    border-left: 1px dotted #00000066; /* Dotted border on the left */
    border-right: 1px dotted #00000066; /* Dotted border on the right */
  }
`;

const StyledSectionDescription = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4); /* 40% opacity */
  height: 30px;
  line-height: 30px; /* Vertically center text */
  margin: 0; /* Remove default margin */
  margin-left: 20px;
`;

const StyledSectionBox = styled.section`
  width: 100%;
`;

const SectionWhenFromTo = () => {
  return (
    <StyledSectionWhenFromTo>
      <StyledSectionBox>
        <StyledSectionDescription>WHEN</StyledSectionDescription>
      </StyledSectionBox>
      <StyledSectionBox>
        <StyledSectionDescription>FROM</StyledSectionDescription>
      </StyledSectionBox>
      <StyledSectionBox>
        <StyledSectionDescription>TO</StyledSectionDescription>
      </StyledSectionBox>
    </StyledSectionWhenFromTo>
  );
};

export default SectionWhenFromTo;
