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

  & > p {
    font-size: 14px;
    padding-bottom: 0.2rem;
  }
`;

const DateBox = ({ event }) => {
  const words = event.when.date.split(" ");

  return (
    <StyledDateBox>
      {words.map((word, index) => (
        <p key={index}>{word.slice(0, 3)}</p>
      ))}
    </StyledDateBox>
  );
};

export default DateBox;
