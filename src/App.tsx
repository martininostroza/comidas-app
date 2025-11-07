import React from 'react'; 
//Importamos React, necesario para crear componentes

import { Home } from './pages/Home'; 
//Importamos el componente Home que será la página principal de nuestra app

import 'bootstrap/dist/css/bootstrap.min.css'; 
//Importamos el CSS de Bootstrap para usar sus clases y estilos en los componentes

function App() { 
  //Definimos el componente principal de la aplicación llamado App
  return (
    <div>
      <Home /> 
      {/* Renderizamos el componente Home dentro del contenedor principal */}
    </div>
  );
}

export default App; 
//Exportamos App para que pueda ser utilizado en otros archivos, como index.tsx

