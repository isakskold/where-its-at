import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: block;
  width: 100%;
  border-bottom: 1px dotted #00000066;
`;

const StyledSectionWhat = styled(StyledSection)`
  flex-grow: 1;
  background-color: var(--text-white);
`;

const StyledSectionDescription = styled.p`
  font-size: 10px;
  color: rgba(0, 0, 0, 0.4); /* 40% opacity */
  height: 30px;
  line-height: 30px; /* Vertically center text */
  margin: 0; /* Remove default margin */
  margin-left: 20px;
`;

const SectionWhat = () => {
  return (
    <StyledSectionWhat>
      <StyledSectionDescription>WHAT</StyledSectionDescription>
    </StyledSectionWhat>
  );
};

export default SectionWhat;
