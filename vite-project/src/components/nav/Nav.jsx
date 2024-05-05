import React from "react";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  z-index: 9999;
  display: flex;
  text-align: center;
  align-items: center;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 0;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  flex-grow: 1;
  height: 100%;
  line-height: 4rem;
  margin: 0 4px;
  background-color: var(--pink);
  font-size: 1.5rem;
  color: var(--dark-blue);
  text-shadow: 0.3px 0.3px 0 var(--text-white);
`;

const Nav = () => {
  return (
    <StyledNav>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/events">Events</NavLink>
      <NavLink href="/orders">Orders</NavLink>
    </StyledNav>
  );
};

export default Nav;
