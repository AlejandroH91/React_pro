
import './App.css';
import Cabecera from './componentes/Cabecera.jsx';
import Footer from './componentes/Footer.jsx';
import Bienvenida from './componentes/Bienvenida.jsx';
import PerrosList from './componentes/AjaxPeticion.jsx';
import PerrosAsync from './componentes/Async.jsx';
import LocalStorage from './componentes/LocalStorage.jsx';
import Ejemplo5 from './componentes/Ejemplo5.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Cabecera />
      <main className="flex-grow-1 container w-100 h-100 aling-items-center">
         <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/ajax" element={<PerrosList />} />
          <Route path="/async" element={<PerrosAsync />} />
          <Route path="/local" element={<LocalStorage />} />
          <Route path="/ejemplo5" element={<Ejemplo5 />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;