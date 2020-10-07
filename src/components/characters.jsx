import "./../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Characters() {
  useEffect(() => {
    fetchCharacters();
  }, []);

  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const data = await fetch("https://best-overwatch-api.herokuapp.com/heroes");
    const characters = await data.json();
    setCharacters(characters);
  };
  return (
    <div>
      {characters.map((character) => (
        <h1 key={character.id}>
          <Link to={`/characters/${character.id}`}>{character.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Characters;
