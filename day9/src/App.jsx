import { useEffect, useState } from "react";

export default function App() {
  const [regalos, setRegalos] = useState([]);

  const [regalo, setRegalo] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const regalos = localStorage.getItem("regalos");
    if (regalos) {
      setRegalos(JSON.parse(regalos));
    }
  }, []);

  const addRegalo = (name, quantity) => {
    const newRegalo = {
      name: name,
      quantity: quantity,
      id: Date.now(),
    };

    localStorage.setItem("regalos", JSON.stringify([...regalos, newRegalo]));
    setRegalos([...regalos, newRegalo]);
    setRegalo("");
    setQuantity(1);
  };

  const removeRegalo = (id) => {
    const regalosFiltered = regalos.filter((regalo) => regalo.id !== id);
    localStorage.setItem("regalos", JSON.stringify(regalosFiltered));
    setRegalos(regalosFiltered);
  };

  const removeAllRegalos = () => {
    setRegalos([]);
  };

  const EmptyRegalos = () => {
    return (
      <div className="empty">
        <p>No hay regalos</p>
      </div>
    );
  };

  const ShowRegalos = () => {
    return regalos.map((regalo) => (
      <li key={regalo.id}>
        <span>
          {regalo.quantity} {regalo.name}
          <button onClick={() => removeRegalo(regalo.id)}>&times;</button>
        </span>
      </li>
    ));
  };

  return (
    <div className="todo">
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

        <button onClick={() => addRegalo(regalo, quantity)}>+</button>
      </div>
      <ul>
        <ShowRegalos />
        {regalos.length < 1 && <EmptyRegalos />}
      </ul>
      <button className="remove-regalos" onClick={() => removeAllRegalos()}>
        Remove all Regalos
      </button>
    </div>
  );
}
