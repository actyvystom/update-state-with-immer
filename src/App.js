import "./App.css";
import { useState } from "react";
import { useImmer } from "use-immer";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [items, setItems] = useState([1, 2]);
  const [player, setPlayer] = useImmer({
    name: "Horst",
    position: { x: 3, y: 4 }
  });

  const updatePlayer = () => {
    setPlayer((draft) => {
      draft.position.x = 7;
      draft.position.y = 9;
      draft.name = "Wursthorst";
    });
  };

  const handleItemUpdate = () => {
    setItems([...items, 3, 4]);
  };

  //   const changePosition = () => {
  //     setPosition({ ...position, x: (position.x += 5), y: 6 });
  //   };

  return (
    <div className="App">
      <h1>React useState and Events - Advanced</h1>
      <h2>Updating nested state structures</h2>
      {/* <button onClick={changePosition}>update </button> */}
      <button onClick={updatePlayer}>update </button>
      <p>{`X: ${position.x} Y: ${position.y}`}</p>
      <p>{`${items}`}</p>
      <p>{`${JSON.parse(JSON.stringify(player))}`}</p>
    </div>
  );
}
