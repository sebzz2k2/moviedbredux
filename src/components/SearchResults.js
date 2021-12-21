import React from "react";
import styled from "styled-components";

function SearchResults({ value }) {
  return (
    <>
      <SearchComponent>
        <img src={value.poster_path} alt={value.title} />

        {/* <p>{value.overview}</p> */}
        <CardContent className="cardContent">
          <h3>{value.original_title}</h3>
          <p className="rating">Rating : {value.vote_average}</p>
          <p>Release Date : {value.release_date}</p>
        </CardContent>
      </SearchComponent>
    </>
  );
}

//  <div class="card">
//    <div class="cardContent">
//      <h2 class="cardTitle">Random Title</h2>
//      <p class="cardBody">
//        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa ipsum
//        veritatis.
//      </p>
//      <a href="#" class="button">
//        Learn More
//      </a>
//    </div>
//  </div>;

export default SearchResults;

const SearchComponent = styled.div`
  position: relative;
  color: #bfe6ff;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  width: 200px;
  margin: 4rem 1rem;
  border-radius: 4px;
  box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;

  &:hover {
    transform: scale(1.1);
  }
  

  img {
    width: 200px;
    border-radius: 4px;
  border:solid 3px #bfe6ff;

    box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
      border: 5px solid #bfe6ff;
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
  }
`;

const CardContent = styled.div`
  z-index: 5;
  background: linear-gradient(
    hsl(0 0% 0% /0),
    hsl(20 0% 0% /0.5) 20%,
    hsl(0 0% 0% /1)
  );
  padding: 1rem;
  position: absolute;
  bottom: 0;
  border-radius: 4px;

  h3 {
    margin-bottom: 0.75rem;
    border-bottom: 3px solid #bfe6ff;
  }
`;
