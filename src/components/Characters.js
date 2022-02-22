import React, { useState, useEffect } from "react";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <h2>{character.name}</h2>
      ))}
    </div>
  );
};
