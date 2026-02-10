import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Cabecera from './componentes/Cabecera.jsx';
import Footer from './componentes/Footer.jsx';
import PerrosList from './componentes/AjaxPeticion.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cabecera />
      <main className="flex-grow-1 container mt-5 pt-5 aling-items-center">
        <div className='App'>
      <PerrosList />
      </div>
      </main>

      <Footer />
    </>
  );
}

export default App;