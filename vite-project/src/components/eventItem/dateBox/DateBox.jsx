import React from "react";
import styled from "styled-components";

const StyledDateBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 66px;
  min-width: 66px;
  border: 1px solid var(--text-white);
  border-radius: 3px;
  margin-right: 25px;

  & > :first-child {
    font-size: 14px;
    padding-bottom: 0.2rem;
  }

  & > :nth-child(2) {
    font-size: 10px;
  }
`;

const DateBox = () => {
  return (
    <StyledDateBox className="styledDateBox">
      <p>Day</p>
      <p>Month</p>
    </StyledDateBox>
  );
};

export default DateBox;
