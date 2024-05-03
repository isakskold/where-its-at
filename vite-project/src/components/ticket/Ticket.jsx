import React from "react";
import styled from "styled-components";

const StyledTicket = styled.article`
  width: 310px;
  height: 450px;
  background-color: var(--text-white);
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 100px;
`;

const StyledSection = styled.section`
  display: block;
  width: 100%;
  border-bottom: 1px dotted #00000066;
`;

const StyledSectionWhat = styled(StyledSection)`
  flex-grow: 1;
  background-color: var(--text-white);
`;

const StyledSectionWhere = styled(StyledSection)`
  height: 26.67%; /* 120px / 450px * 100% */
  background-color: rgba(0, 0, 0, 0.03);
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

const StyledSectionInfo = styled(StyledSection)`
  height: 13.33%; /* 60px / 450px * 100% */
  background-color: rgba(0, 0, 0, 0.09);
  border-bottom: none;
`;

const StyledSectionBarcode = styled(StyledSection)`
  height: 26.67%; /* 120px / 450px * 100% */
  background-color: rgba(0, 0, 0, 0.12);
  border-bottom: none;
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

const Ticket = () => {
  return (
    <StyledTicket>
      <StyledSectionWhat>
        <StyledSectionDescription>WHAT</StyledSectionDescription>
      </StyledSectionWhat>

      <StyledSectionWhere>
        <StyledSectionDescription>WHERE</StyledSectionDescription>
      </StyledSectionWhere>

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

      <StyledSectionInfo>
        <StyledSectionDescription>INFO</StyledSectionDescription>
      </StyledSectionInfo>
      <StyledSectionBarcode></StyledSectionBarcode>
    </StyledTicket>
  );
};

export default Ticket;
