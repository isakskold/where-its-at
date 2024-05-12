import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px dotted #00000066;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const StyledSectionWhat = styled(StyledSection)`
  flex-grow: 1;
  background-color: var(--text-white);
`;

const StyledSectionDescription = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4); /* 40% opacity */
  line-height: 30px; /* Vertically center text */
  margin: 0; /* Remove default margin */
  margin-left: 20px;
  font-weight: bold;
`;

const StyledH2 = styled.h2`
  font-family: "SansitaOne";
  color: var(--pink);
  margin-left: 20px;
  font-size: 26px;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: lighter;
`;

const SectionWhat = ({ eventName }) => {
  return (
    <StyledSectionWhat>
      <StyledSectionDescription>WHAT</StyledSectionDescription>
      <StyledH2>{eventName}</StyledH2>
    </StyledSectionWhat>
  );
};

export default SectionWhat;
