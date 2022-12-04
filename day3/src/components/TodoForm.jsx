import { useState } from "react";

export default function TodoForm({ addRegalo }) {
  const [regalo, setRegalo] = useState({ id: "", name: "" });

  function handleChange(e) {
    setRegalo({ ...regalo, name: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (regalo.name.trim()) {
      addRegalo({ ...regalo, id: Date.now() });
      setRegalo({ ...regalo, name: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="regalo"
        type="text"
        value={regalo.name}
        onChange={handleChange}
      />
      <button>+</button>
    </form>
  );
}
