import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import MainBody from "./components/MainBody";
import SearchResults from "./components/SearchResults";
import styled from "styled-components";
import Slider from "./components/Slider/Slider";

const App = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [searching, setSearching] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchQuery);
  };
  const fetchMovies = (searchQuery) => {
    var options = {
      method: "GET",
      url: "https://advanced-movie-search.p.rapidapi.com/search/movie",
      params: { query: searchQuery, page: "1" },
      headers: {
        "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
        "x-rapidapi-key": "d5458649cdmsh65b267d69c9ff0bp1ce8ddjsn2cfd5fbb2ff1",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setMovieList(response.data.results);
        setSearching(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <Container className="App">
      <Navbar
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {searching ? <Slider /> : <h2>Search Results</h2>}

      <Card className="scrollbar">
        {movieList.map((movie) => (
          <SearchResults value={movie} key={movie.id} />
        ))}
      </Card>
    </Container>
  );
};

export default App;
const Container = styled.div`
  h2 {
    padding-top: 2rem;
    margin: 0 3rem;
    color: #bfe6ff;
    font-size: 2rem;
  }
`;
const Card = styled.div`
  display: flex;
  overflow-x: scroll;
  align-items: center;
  margin: 0 2rem;
`;
