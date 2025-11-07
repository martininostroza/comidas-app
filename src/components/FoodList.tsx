//Importamos el componente FoodCard para poder usarlo dentro de este componente
//una cajita que renderiza esas comidas
import FoodCard from './FoodCard';

//Importamos el tipo Comida desde nuestro archivo de datos
import type { Comida } from '../data/comidas';

//Definimos las propiedades (props) que recibirá el componente FoodList
interface FoodListProps {
  comidas: Comida[]; //Lista de comidas que queremos mostrar
  onSelect?: (comida: Comida) => void; //Función opcional que se llama cuando se selecciona una comida
}

//Componente funcional de React que recibe las props comidas y onSelect
const FoodList = ({ comidas, onSelect }: FoodListProps) => {
  return (
    //Contenedor que usa clases de Bootstrap para que las tarjetas se distribuyan de manera flexible y centrada
    <div className="d-flex flex-wrap justify-content-center">
      {/* Recorremos la lista de comidas y por cada comida creamos un FoodCard */}
      {comidas.map((comida) => (
        // Cada FoodCard recibe:
        // - key: identificador único para que React maneje mejor la lista
        // - comida: el objeto comida que contiene nombre, descripción e imagen
        // - onSelect: la función que se ejecuta al hacer clic en la tarjeta (si existe)
        <FoodCard key={comida.nombre} comida={comida} onSelect={onSelect} />
      ))}
    </div>
  );
};

//Exportamos el componente para poder usarlo en otros archivos
export default FoodList;

