import Btn from "./btn/Btn";
import Data from "./data/Data";
import Value from "./value/Value";
import styled from "styled-components";
import React from "react";

// Styled components with conditional rendering based on initialData prop
const StyledCounterBase = styled.div`
  border: 2px solid var(--pink);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCounterMoney = styled(StyledCounterBase)`
  width: 230px;
  height: 130px;

  & > .counter-row:first-child {
    flex-grow: 3;
    border-bottom: 1px solid var(--pink);
    justify-content: space-around;

    & > p {
      font-size: 32px;
      text-shadow: 1px 1px 0px #f56b9a;
    }
  }

  & > .counter-row:last-child {
    flex-grow: 1;
    justify-content: space-between;
  }
`;

const StyledCounterInfo = styled(StyledCounterBase)`
  width: 310px;
  height: 96px;

  & > .counter-row:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 8;
    border-bottom: 1px solid var(--pink);
  }

  & > .counter-row:last-child {
    flex-grow: 1;
    justify-content: space-between;
  }
`;

const CounterRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  & > .value-container {
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
      <CounterRow className="counter-row">
        <Data data={initialData} />
      </CounterRow>
      <CounterRow className="counter-row">
        <Btn type={decrement} />
        <Value value={0} />
        <Btn type={increment} />
      </CounterRow>
    </StyledCounter>
  );
};

export default Counter;
