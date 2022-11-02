import "./App.css";

import { useState } from "react";
import { nanoid } from "nanoid";
import { useImmer } from "use-immer";

const initialMovieData = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    like: false
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    like: false
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    like: false
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>React useState and Events - Advanced</h1>
      <h2>Updating complex state structures</h2>
      {/* <button onClick={handlePlayerUpdate}>update position</button>
      <p>{`${player.position.x} ${player.name}`}</p> */}
    </div>
  );
}
