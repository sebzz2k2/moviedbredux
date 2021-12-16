import React from "react";
import styled from "styled-components";

function SearchResults({ value }) {
  return (
    <>
      <SearchComponent>
        <img src={value.poster_path} alt={value.title} />
      </SearchComponent>
    </>
  );
}

export default SearchResults;

const SearchComponent = styled.div`
  color: #bfe6ff;
  img {
    width: 200px;
    margin: 3rem 1rem;
    border-radius: 4px;
    box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
      transform: scale(1.15);
    }
  }
`;
