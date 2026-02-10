import { useState } from 'react';
import './App.css';
import Cabecera from './componentes/Cabecera.jsx';
import Footer from './componentes/Footer.jsx';
import Bienvenida from './componentes/Bienvenida.jsx';
import PerrosList from './componentes/AjaxPeticion.jsx';
import PerrosAsync from './componentes/Async.jsx';
import Ejemplo4 from './componentes/Ejemplo4.jsx';
import Ejemplo5 from './componentes/Ejemplo5.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cabecera />
      <main className="flex-grow-1 container mt-5 pt-5 aling-items-center">
         <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/ajax" element={<PerrosList />} />
          <Route path="/async" element={<PerrosAsync />} />
          <Route path="/ejemplo4" element={<Ejemplo4 />} />
          <Route path="/ejemplo5" element={<Ejemplo5 />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;