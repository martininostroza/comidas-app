//importamos el tipo "Comida" desde nuestro archivo 
// una cajita donde estan las comida
import type { Comida } from '../data/comidas';

//definimos los datos que se esperan
interface FoodCardProps {
  comida: Comida; // la comida que se mostrará en la tarjeta
  onSelect?: (comida: Comida) => void; // Función opcional que se llama al hacer clic en la tarjeta
}

//Componente funcional de React que recibe "comida" y "onSelect" como props
const FoodCard = ({ comida, onSelect }: FoodCardProps) => {
  return (
    //Contenedor de la tarjeta
    //"onClick" llama a la función onSelect (si existe) pasando la comida seleccionada
    <div className="card m-2" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => onSelect && onSelect(comida)}>
      
      {/* Imagen de la comida */}
      <img src={comida.imagen} className="card-img-top" alt={comida.nombre} />

      {/* Cuerpo de la tarjeta con nombre y descripción */}
      <div className="card-body">
        <h5 className="card-title">{comida.nombre}</h5> {/* Nombre de la comida */}
        <p className="card-text">{comida.descripcion}</p> {/* Descripción de la comida */}
      </div>
    </div>
  );
};

//Exportamos el componente para poder usarlo en otros archivos
export default FoodCard;
