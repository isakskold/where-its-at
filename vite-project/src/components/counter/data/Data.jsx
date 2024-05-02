import React from "react";
import styled from "styled-components";

const StyledBandParagraph = styled.p`
  font-family: "SansitaOne";
  font-size: 24px;
  color: var(--pink);
  padding-left: 10px;
`;

const StyledDateTimeParagraph = styled.p`
  font-size: 14px;
  padding-left: 10px;
  color: var(--light-blue);
`;

const Data = ({ data }) => {
  if (data === "Money") {
    return <p>420 sek</p>;
  } else if (data === "Info") {
    return (
      <>
        <StyledBandParagraph>Band</StyledBandParagraph>
        <StyledDateTimeParagraph>
          10 month 00.00 - 00.00
        </StyledDateTimeParagraph>
      </>
    );
  } else {
    return null; // or return some default content
  }
};

export default Data;
