import "./../App.css";
import React, { useState, useEffect } from "react";

function Character({ match }) {
  useEffect(() => {
    fetchCharacter();
    console.log("match: ", match);
  }, []);

  const [character, setCharacter] = useState({});

  const fetchCharacter = async () => {
    const data = await fetch(`https://best-overwatch-api.herokuapp.com/heroes`);
    const character = await data.json();
    setCharacter(character[match.params.id]);
    console.log(setCharacter);
  };

  return <div></div>;
}

export default Character;
