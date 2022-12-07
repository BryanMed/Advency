import { useState } from "react";

function EmptyList() {
  return (
    <div className="empty">
      <p>No tienes regalos :C</p>
    </div>
  );
}

export default function App() {
  const [regalos, setRegalos] = useState([
    {
      id: Date.now(),
      regalo: "Calcetas",
    },
    {
      id: Date.now() + 1,
      regalo: "Camara",
    },
    {
      id: Date.now() + 2,
      regalo: "Camarones",
    },
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

  const deleteRegalo = (id) => {
    const newRegalosList = regalos.filter((regalo) => regalo.id !== id);
    setRegalos(newRegalosList);
  };

  const deleteAllRegalos = () => {
    setRegalos([]);
  };

  return (
    <div>
      <h1>Regalos:</h1>
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
            <span>
              {regalo.regalo}
              <button onClick={() => deleteRegalo(regalo.id)}>&times;</button>
            </span>
          </li>
        ))}
      </ul>
      {regalos.length <= 0 && <EmptyList />}
      <button className="deleteAll" onClick={() => deleteAllRegalos()}>
        Remove all regalos
      </button>
    </div>
  );
}
