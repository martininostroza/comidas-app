import { StrictMode } from 'react';
//Importamos StrictMode de React. Es una herramienta que ayuda a detectar problemas potenciales en el código durante el desarrollo.

import { createRoot } from 'react-dom/client';
//Importamos createRoot, necesario para renderizar nuestra aplicación React en el DOM (Document Object Model) moderno.

import App from './App';
//Importamos el componente raíz App, que contiene toda nuestra aplicación.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// 1. `document.getElementById('root')!` obtiene el elemento HTML con id 'root' donde React renderizará la app.
// 2. `createRoot(...).render(...)` inicializa el root de React y renderiza el componente App dentro de él.
// 3. `<StrictMode>` envuelve nuestra app para habilitar advertencias y chequeos adicionales durante el desarrollo.




//la funcion de los hooks
// useState → Permite crear y manejar un estado local en un componente funcional.
// Ejemplo: const [count, setCount] = useState(0);

// useEffect → Ejecuta código cuando el componente se monta, actualiza o desmonta.
// Ideal para llamadas a APIs, timers o suscripciones.

// useContext → Permite acceder a datos de un contexto global sin pasar props por muchos niveles.

// useReducer → Similar a useState, pero para manejar estados complejos usando una función reductora.

// useRef → Crea una referencia a un elemento del DOM o guarda un valor que no provoca re-render.

// useMemo → Memoriza el resultado de una función para evitar recalcularlo en cada render.

// useCallback → Memoriza una función para que no se vuelva a crear en cada render. Útil al pasar funciones a hijos.

// useLayoutEffect → Similar a useEffect, pero se ejecuta **antes** de que el navegador dibuje la pantalla.

// useImperativeHandle → Permite exponer métodos específicos de un componente hijo hacia el padre usando ref.
