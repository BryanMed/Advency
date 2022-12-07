import { useState } from "react";

const EmptyList = () => {
  return (
    <div className="empty">
      <p>No tienes regalos :C, agrega!</p>
    </div>
  );
};

export default function App() {
  const [regalos, setRegalos] = useState([
    { id: Date.now(), regalo: "Calcetas" },
    { id: Date.now() + 1, regalo: "Comida" },
    { id: Date.now() + 2, regalo: "Reloj" },
  ]);

  const [input, setInput] = useState("");

  const addRegalo = (regalo) => {
    if (regalo === "") {
      alert("no puedes agregar un regalo vacío ");
      return;
    }

    if (regalos.some((e) => e.regalo === regalo)) {
      alert(`${regalo} ya se encuentra en la lista`);
      return;
    }

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
    <>
      <h1>regalos</h1>

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
        Delete all regalos
      </button>
    </>
  );
}
