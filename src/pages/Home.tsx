import React, { useState } from "react";
import { comidas } from "../data/comidas";
import FoodList from "../components/FoodList";

export const Home: React.FC = () => {
  const [search, setSearch] = useState("");

  const filteredComidas = comidas.filter((comida) =>
    comida.nombre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center text-warning mb-4">
        🍽️ Comidas Típicas Chilenas
      </h1>

      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Busca una comida..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control w-50 mx-auto"
        />
      </div>

      <FoodList comidas={filteredComidas} />
    </div>
  );
};


