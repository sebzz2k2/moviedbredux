import React from "react";
import styled from "styled-components";
import SignIn from "./SignIn";

const Navbar = (props) => {
  return (
    <NavMenu>
      <h1>MovieDB</h1>
      <NavRight>
        <Search>
          <form onSubmit={props.handleSearch}>
            <input
              type="text"
              placeholder="Search...."
              value={props.searchQuery}
              onChange={(e) => {
                props.setSearchQuery(e.target.value);
                console.log(e.target.value);
              }}
            />
          </form>
        </Search>
        <SignIn />
      </NavRight>
    </NavMenu>
  );
};

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

const NavRight = styled.div`
  display: flex;
`;
const Search = styled.div`
  display: none;
  padding-right: 2rem;
  input {
    padding: 0.5rem;
    border: none;
    color: #111;
    box-shadow: 0 0 2.5rem 2.5rem #bfe6ff inset, 0 0 0 0 #bfe6ff;
    transition: all 150ms ease-in-out;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 0.25rem;
    text-transform: capitalize;
    &:focus {
      outline: none;
      box-shadow: 0 0 0.625rem 0 #bfe6ff inset, 0 0 0.625rem 0.25rem #bfe6ff;
      background-color: #bfe6ff;
      position: absolute;
      right: 1.25rem;
    }
    &:hover {
      box-shadow: 0 0 0.625rem 0 #bfe6ff inset, 0 0 0.625rem 0.25rem #bfe6ff;
      background-color: #bfe6ff;
    }
  }
  @media (min-width: 768px) {
    display: block;
  }
`;
