import React from "react";
import styled from "styled-components";

const StyledEventInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: 22px;
    text-shadow: 1px 1px 0px #f56b9a;
  }

  :nth-child(2) {
    font-size: 12px;
    font-style: italic;
    opacity: 0.8;
    margin-top: auto;
    margin-bottom: auto;
  }

  div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 0.2rem;

    :first-child {
      font-size: 14px;
      color: var(--text-white-secondary);
      align-self: center;
    }

    :nth-child(2) {
      font-size: 17px;
      font-style: normal;
      color: var(--light-blue);
      align-self: center;
    }
  }
`;

const EventInfo = () => {
  return (
    <StyledEventInfo>
      <h2>Band</h2>
      <p>Location</p>
      <div>
        <p>time-time</p>
        <p>price</p>
      </div>
    </StyledEventInfo>
  );
};

export default EventInfo;
