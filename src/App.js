import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const [searchQuery, setSearchQuery] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Hello");
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
