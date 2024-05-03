import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  display: block;
  width: 100%;
  border-bottom: 1px dotted #00000066;
`;

const StyledSectionBarcode = styled(StyledSection)`
  height: 26.67%; /* 120px / 450px * 100% */
  background-color: rgba(0, 0, 0, 0.12);
  border-bottom: none;
`;

const SectionBarcode = () => {
  return <StyledSectionBarcode />;
};

export default SectionBarcode;
