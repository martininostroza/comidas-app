import React from "react";
import { useParams, Link } from "react-router-dom";
import { comidas } from "../data/comidas";

export const VerMas: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const comida = comidas.find((c) => c.nombre === decodeURIComponent(nombre || ""));

  if (!comida) {
    return (
      <div className="container mt-5 text-center">
        <h2>No se encontró la comida</h2>
        <Link to="/" className="btn btn-primary mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-center">
      <h1>{comida.nombre}</h1>
      <img
        src={comida.imagen}
        alt={comida.nombre}
        className="img-fluid my-3"
        style={{ maxHeight: "400px" }}
      />
      <p>{comida.descripcion}</p>
      <Link to="/" className="btn btn-primary mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};




