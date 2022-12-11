import { useState } from "react";

export default function App() {
  const [regalos, setRegalos] = useState([
    { name: "Hamburguesa", quantity: 1, id: Date.now() },
    { name: "Reloj", quantity: 2, id: Date.now() + 1 },
    { name: "Compu", quantity: 3, id: Date.now() + 2 },
  ]);
  const [regalo, setRegalo] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addRegalo = () => {
    const newRegalo = {
      name: regalo,
      quantity: quantity,
      id: Date.now(),
    };

    setRegalos([...regalos, newRegalo]);
    setRegalo("");
    setQuantity(1);
  };

  const deleteRegalo = (id) => {
    const regalosFiltered = regalos.filter((regalo) => regalo.id !== id);
    setRegalos(regalosFiltered);
  };

  const showRegalos = () => {
    const list = regalos.map((regalo) => (
      <li key={regalo.id}>
        <span>
          {regalo.quantity} {regalo.name}
          <button onClick={() => deleteRegalo(regalo.id)}>&times;</button>
        </span>
      </li>
    ));
    return list;
  };

  const deleteAllRegalos = () => {
    setRegalos([]);
  };

  return (
    <div>
      <h1>Regalos</h1>
      <div className="inputs">
        <input
          type="text"
          value={regalo}
          onChange={(e) => setRegalo(e.target.value)}
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button disabled={!regalo || !quantity} onClick={addRegalo}>
          +
        </button>
      </div>
      <ul>{showRegalos()}</ul>
      <button className="deleteAll" onClick={() => deleteAllRegalos()}>
        Delete all Regalos
      </button>
    </div>
  );
}
