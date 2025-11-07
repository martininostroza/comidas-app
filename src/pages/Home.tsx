import React, { useState } from "react"; 
//Importamos React y useState para manejar estados dentro del componente

import { comidas, Comida } from "../data/comidas"; 
//Importamos la lista de comidas y el tipo Comida desde el archivo de datos

import FoodList from "../components/FoodList"; 
//Importamos el componente FoodList que renderiza varias tarjetas de comida

export const Home: React.FC = () => { 
  //Definimos un componente funcional llamado Home
  const [selected, setSelected] = useState<Comida | null>(null); 
  //Estado para almacenar la comida seleccionada al hacer clic, inicialmente null

  const [search, setSearch] = useState(""); 
  // el usestate lo que hace es actualizar un componente
  //Estado para manejar el texto que escribe el usuario en el input de búsqueda

  //Filtramos las comidas según el texto de búsqueda
  const filteredComidas = comidas.filter((comida) =>
    comida.nombre.toLowerCase().includes(search.toLowerCase())
  );
  //Convierte todo a minúsculas para que la búsqueda no sea sensible a mayúsculas

  return (
    <div className="container mt-5">
      {/* Contenedor principal con margen superior */}

      <h1 className="text-center text-warning mb-4">🍽️ Comidas Típicas Chilenas</h1>
      {/* Título centrado y con estilo */}

      <div className="mb-4 text-center">
        {/* Contenedor para el input de búsqueda */}
        <input
          type="text"
          placeholder="Busca una comida..." //Texto dentro del input
          value={search} //El valor del input está ligado al estado search
          onChange={(e) => setSearch(e.target.value)} 
          //Cuando el usuario escribe, actualizamos el estado search
          className="form-control w-50 mx-auto" 
          //Clases de Bootstrap para estilizar el input
        />
      </div>

      <div className="row">
        {/* Contenedor para la lista de comidas */}
        <FoodList comidas={filteredComidas} />
        {/* Renderizamos el componente FoodList pasando las comidas filtradas */}
      </div>

      {selected && (
        //Si hay una comida seleccionada, mostramos un recuadro con info
        <div className="alert alert-info mt-4 text-center">
          <h4>{selected.nombre}</h4> {/* Nombre de la comida */}
          <p>{selected.descripcion}</p> {/* Descripción de la comida */}
        </div>
      )}
    </div>
  );
};

