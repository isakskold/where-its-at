import Btn from "./btn/Btn";
import Data from "./data/Data";
import Value from "./value/Value";
import styled from "styled-components";
import React from "react";

// Styled components with conditional rendering based on initialData prop
const StyledCounterMoney = styled.div`
  border: 2px solid var(--pink);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  height: 130px;

  /* Target CounterRow as the first child */
  & > :first-child {
    flex-grow: 3;
    border-bottom: 1px solid var(--pink);
    justify-content: space-around;

    & > p {
      font-size: 32px;
    }
  }

  /* Target CounterRow as the second child */
  & > :nth-child(2) {
    flex-grow: 1;
    justify-content: space-between;
  }
`;

const StyledCounterInfo = styled.div`
  border: 2px solid var(--pink);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 310px;
  height: 96px;

  /* Target CounterRow as the first child */
  & > :first-child {
    flex-grow: 8;
    border-bottom: 1px solid var(--pink);
  }

  /* Target CounterRow as the second child */
  & > :nth-child(2) {
    flex-grow: 1;
    justify-content: space-between;
  }
`;

const CounterRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > :nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150%;
    border-left: 1px solid var(--pink);
    border-right: 1px solid var(--pink);
    height: 100%;
    font-size: 28px;
  }
`;

const Counter = ({ initialData }) => {
  const decrement = "decrement";
  const increment = "increment";

  // Choose which StyledCounter to render based on initialData prop
  const StyledCounter =
    initialData === "Money" ? StyledCounterMoney : StyledCounterInfo;

  return (
    <StyledCounter>
      <CounterRow>
        <Data data={initialData} />
      </CounterRow>
      <CounterRow>
        <Btn type={decrement} />
        <Value value={0} />
        <Btn type={increment} />
      </CounterRow>
    </StyledCounter>
  );
};

export default Counter;
