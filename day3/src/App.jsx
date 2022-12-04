import { useState } from "react";
import TodoForm from "./components/TodoForm";
import RegalosList from "./components/RegalosList";

export default function App() {
  const [regalos, setRegalos] = useState([
    { id: Date.now(), name: "Calcetas" },
    { id: Date.now() + 1, name: "Hamburguesas" },
    { id: Date.now() + 2, name: "Planta" },
  ]);
  function addRegalo(regalo) {
    setRegalos([regalo, ...regalos]);
  }
  return (
    <>
      <h1>Regalos:</h1>
      <TodoForm addRegalo={addRegalo} />
      <RegalosList regalos={regalos} />
    </>
  );
}
