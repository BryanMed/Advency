import { useState } from "react";

export default function App() {
  const [list, setList] = useState([
    { id: Date.now(), regalo: "Calcetas" },
    { id: Date.now() + 1, regalo: "Hamburguesa" },
    { id: Date.now() + 2, regalo: "Reloj" },
  ]);
  const [input, setInput] = useState("");

  const addRegalo = (regalo) => {
    const newRegalo = {
      id: Date.now(),
      regalo: regalo,
    };

    setList([...list, newRegalo]);
    setInput("");
  };

  const deleteRegalo = (id) => {
    const newList = list.filter((regalo) => regalo.id !== id);
    setList(newList);
  };

  return (
    <div>
      <h1>Regalos:</h1>
      <div className="inputRegalo">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addRegalo(input)}>+</button>
      </div>
      <ul>
        {list.map((regalo) => (
          <li key={regalo.id}>
            <div>
              <span>{regalo.regalo}</span>
              <button onClick={() => deleteRegalo(regalo.id)}>&times;</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
