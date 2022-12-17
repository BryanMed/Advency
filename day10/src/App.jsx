import { useEffect, useState } from "react";
import regaloDefault from "./assets/regalo.jpeg";

export default function App() {
  const [regalos, setRegalos] = useState([]);
  const [regalo, setRegalo] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    const regalos = localStorage.getItem("regalos");
    if (regalos) {
      setRegalos(JSON.parse(regalos));
    }
  }, []);

  const addRegalo = (regalo, cantidad, imagen) => {
    if (regalo === "") {
      alert("agrega un regalo porfis");
      return;
    }
    let newRegalo = {
      regalo: regalo,
      cantidad: cantidad,
      imagen: imagen,
      id: Date.now(),
    };

    localStorage.setItem("regalos", JSON.stringify([...regalos, newRegalo]));
    setRegalos([...regalos, newRegalo]);
    setRegalo("");
    setCantidad(1);
    setImagen("");
  };

  const removeRegalo = (id) => {
    const regalosFiltered = regalos.filter((regalo) => regalo.id !== id);

    setRegalos(regalosFiltered);
  };

  const ShowRegalos = () => {
    let regalosList = regalos.map((regalo) => (
      <li key={regalo.id}>
        <span>
          <img
            src={regalo.imagen}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = regaloDefault;
            }}
          />
          <strong>{regalo.cantidad} </strong>

          <p>{regalo.regalo}</p>
          <button onClick={() => removeRegalo(regalo.id)}>&times;</button>
        </span>
      </li>
    ));
    return regalosList;
  };

  const removeAllRegalos = () => {
    setRegalos([]);
  };

  const Empty = () => {
    return (
      <div>
        <p>Tu lista de regalos está vacía, agrega regalos</p>
      </div>
    );
  };

  return (
    <div className="regalosForm">
      <h1>Regalos</h1>
      <div className="inputs">
        <input
          type="text"
          placeholder="Regalo"
          value={regalo}
          onChange={(e) => setRegalo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagen"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
        />

        <button onClick={() => addRegalo(regalo, cantidad, imagen)}>Add</button>
      </div>
      <ul>
        {regalos.length <= 0 && <Empty />}
        <ShowRegalos />
      </ul>
      <button onClick={() => removeAllRegalos()}>Remove all regalos</button>
    </div>
  );
}
