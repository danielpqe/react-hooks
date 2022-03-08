import React, { useState, useEffect } from "react";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    setCharacters([]);
    setTimeout(() => {
      fetch("https://rickandmortyapi.com/api/character/")
        .then((response) => response.json())
        .then((data) => setCharacters(data.results));
    }, 1000);
  }, []);

  const handleClick = () => {
    setChange(!change);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        {change ? "True" : "False"}
      </button>
      {characters.map((character) => (
        <h2>{character.name}</h2>
      ))}
    </div>
  );
};
