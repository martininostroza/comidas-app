//esto importa el tipo de comidas y la lista de comidas
import type { Comida } from '../data/comidas';
import { comidas } from '../data/comidas';

//una funcion que lo que hace es devolver todas las comidas
export const getAllComidas = async (): Promise<Comida[]> => {
  //Simula un pequeño delay 
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  //devuelve una lista de las comidas
  return comidas;
};

// esta funcion busca las comidas por su nombre ignorando las mayusculas y minusculas
export const getComidaByName = async (nombre: string): Promise<Comida | undefined> => {
  // lo que hace esta funcion es buscar aunque este escrito de forma rara
  const nombreBuscado = nombre.toLowerCase();

  // busca que las comidas coincidan con el nombre
  const comidaEncontrada = comidas.find(
    (comida) => comida.nombre.toLowerCase() === nombreBuscado
  );

  //simula un pequeño delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  //devuelve las comida encontrada o undefined si no existe
  return comidaEncontrada;
};
