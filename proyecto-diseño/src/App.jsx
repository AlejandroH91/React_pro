
import './App.css';
import Cabecera from './componentes/Cabecera.jsx';
import Footer from './componentes/Footer.jsx';
import Bienvenida from './componentes/Bienvenida.jsx';
import PerrosList from './componentes/AjaxPeticion.jsx';
import PerrosAsync from './componentes/Async.jsx';
import LocalStorage from './componentes/LocalStorage.jsx';
import Reloj from './componentes/Reloj.jsx';
import { Montar } from './componentes/Montar.jsx';
import Ejemplo5 from './componentes/Ejemplo5.jsx';
import { Routes, Route, Navigate } from 'react-router-dom';
import Incrementar from './componentes/Incrementar.jsx';

function App() {


  return (
    <>
      <Cabecera />

      <main className="d-flex justify-content-center align-items-center min-vh-100">
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/ajax" element={<PerrosList />} />
          <Route path="/Montar" element={<Navigate to="/ejemplo5/montar" replace />} />
          <Route path="/async" element={<PerrosAsync />} />
          <Route path="/local" element={<LocalStorage />} />
          <Route path="/ejemplo5" element={<Ejemplo5 />}>
            <Route path="montar" element={<Montar />} />
            <Route path="async" element={<PerrosAsync />} />
            <Route path="incrementar" element={<Incrementar />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;