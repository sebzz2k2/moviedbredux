import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";

const App = () => {
  const [searchQuery, setSearchQuery] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log("Hello");
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
        setSearchQuery(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="App">
      <Navbar
        handleSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
};

export default App;
