import { Header } from "./Components/Header";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import "./scss/main.scss";
import Contato from "./Pages/Contato/Contato";
import { Aside } from "./Components/Aside";
import { useState } from "react";
import { Ddd } from "./Pages/Ddd/Ddd";
import { Feriados } from "./Pages/Feriados/Feriados";
import { Cep } from "./Pages/Cep/Cep";

const App = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Header active={active} setActive={setActive} />
      {active && <Aside />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="discagem" element={<Ddd />} />
        <Route path="feriados" element={<Feriados />} />
        <Route path="cep" element={<Cep />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </>
  );
};

export default App;
