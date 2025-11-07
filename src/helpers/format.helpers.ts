//comidas-app>src>helpers>format.helpers.ts
//Función llamada capitalize que recibe un texto (string) y devuelve un string
export const capitalize = (text: string): string => {
  //Reemplaza ciertos caracteres del texto usando una expresión regular
  return text.replace(
    /\b\w/g,          // \b\w busca la primera letra de cada palabra (\b = límite de palabra, \w = cualquier letra)
    char => char.toUpperCase() // Convierte esa letra a mayúscula
  );
};

