import React from "react";
import styled from "styled-components";
import Logo from "./logo.svg";

const StyledHomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledLogo = styled.img``;

const StyledH1 = styled.h1`
  font-size: 32px;
  text-shadow: 1px 1px 0px #000000;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const StyledH2 = styled.h2`
  font-family: "FiraSansIta";
  font-size: 22px;
  font-weight: lighter;
  color: var(--text-white);
  padding-bottom: 4rem;
`;

const Home = () => {
  return (
    <StyledHomeWrapper>
      <StyledLogo src={Logo} alt="Logo"></StyledLogo>
      <StyledH1>Where It's @</StyledH1>
      <StyledH2>Ticketing made easy</StyledH2>
    </StyledHomeWrapper>
  );
};

export default Home;
