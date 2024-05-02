import React from "react";
import styled from "styled-components";

const StyledValue = styled.p`
  width: 150%;
  height: 100%;
  border-left: 1px solid var(--pink);
  border-right: 1px solid var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const Value = ({ value }) => {
  return <StyledValue>{value}</StyledValue>;
};

export default Value;
