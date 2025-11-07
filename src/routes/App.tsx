import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { VerMas } from "../pages/VerMas";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vermas/:nombre" element={<VerMas />} />
    </Routes>
  );
};

export default App;


