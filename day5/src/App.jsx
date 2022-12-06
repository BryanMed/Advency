import { useState } from "react";

export default function App() {
  const [regalos, setRegalos] = useState([
    { id: Date.now(), regalo: "Calcetas" },
    { id: Date.now() + 1, regalo: "Burgir" },
    { id: Date.now() + 2, regalo: "Reloj" },
  ]);
  const [input, setInput] = useState("");

  const addRegalo = (regalo) => {
    const newRegalo = {
      id: Date.now(),
      regalo: regalo,
    };

    setRegalos([...regalos, newRegalo]);
    setInput("");
  };

  const removeRegalo = (id) => {
    const newList = regalos.filter((regalo) => regalo.id !== id);
    setRegalos(newList);
  };

  const removeAllRegalos = () => {
    setRegalos([]);
  };

  return (
    <div>
      <h1>Regalos: </h1>
      <div className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addRegalo(input)}>+</button>
      </div>
      <ul>
        {regalos.map((regalo) => (
          <li key={regalo.id}>
            <div>
              {regalo.regalo}
              <button onClick={() => removeRegalo(regalo.id)}>&times;</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="removeAll-btn" onClick={() => removeAllRegalos()}>
        Remove all
      </button>
    </div>
  );
}
