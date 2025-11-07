import React from "react";
import { Comida } from "../data/comidas";
import { Link } from "react-router-dom";

interface FoodCardProps {
  comida: Comida;
}

const FoodCard: React.FC<FoodCardProps> = ({ comida }) => {
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img src={comida.imagen} className="card-img-top" alt={comida.nombre} />
      <div className="card-body">
        <h5 className="card-title">{comida.nombre}</h5>
        <p className="card-text">{comida.descripcion}</p>
        <Link
          to={`/vermas/${encodeURIComponent(comida.nombre)}`}
          className="btn btn-primary"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;








