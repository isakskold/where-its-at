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

const StyledSectionBox = styled.section`
  width: 100%;
`;

const StyledSectionBoxWithBorders = styled(StyledSectionBox)`
  border-left: 1px dotted #00000066;
  border-right: 1px dotted #00000066;
`;

const StyledBoxData = styled.time`
  margin-left: 20px;
  color: #000000;
  opacity: 60%;
  font-size: 18px;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowed text */
  text-overflow: ellipsis; /* Show ellipsis for overflowed text */
`;

const StyledDateBoxData = styled(StyledBoxData)`
  margin-right: 5px; /* Add margin-right using styles from StyledBoxData */
`;

const SectionWhenFromTo = ({ eventDate, eventFrom, eventTo }) => {
  return (
    <StyledSectionWhenFromTo>
      <StyledSectionBox>
        <StyledSectionDescription>WHEN</StyledSectionDescription>
        <StyledDateBoxData>{eventDate}</StyledDateBoxData>
      </StyledSectionBox>
      <StyledSectionBoxWithBorders>
        <StyledSectionDescription>FROM</StyledSectionDescription>
        <StyledBoxData>{eventFrom}</StyledBoxData>
      </StyledSectionBoxWithBorders>
      <StyledSectionBox>
        <StyledSectionDescription>TO</StyledSectionDescription>
        <StyledBoxData>{eventTo}</StyledBoxData>
      </StyledSectionBox>
    </StyledSectionWhenFromTo>
  );
};

export default SectionWhenFromTo;
