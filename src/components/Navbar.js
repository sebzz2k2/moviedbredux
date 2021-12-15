import React from "react";
import styled from "styled-components";
import SignIn from "./SignIn";

function Navbar() {
  return (
    <NavMenu>
      <h1>MovieDB</h1>
      <SignIn />
    </NavMenu>
  );
}

export default Navbar;

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #bfe6ff;
  background-color: rgb(14, 29, 50);
  height: 4.175rem;
  padding: 0 1.25rem;
  position: sticky;
  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    height: 4.375rem;
    padding: 0 2.75rem;
    h1 {
      font-size: 1.75rem;
    }
  }
`;
