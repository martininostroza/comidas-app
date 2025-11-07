// src/components/FoodList.tsx
import React from "react";
import { Comida } from "../data/comidas";
import FoodCard from "./FoodCard";

interface FoodListProps {
  comidas: Comida[];
}

const FoodList: React.FC<FoodListProps> = ({ comidas }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {comidas.map((comida) => (
        <FoodCard key={comida.nombre} comida={comida} />
      ))}
    </div>
  );
};

export default FoodList;




