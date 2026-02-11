import { useState} from 'react';
function LocalStorage() {
  const [nombre, setNombre] = useState(() => localStorage.getItem('nombre') || '');
  const [email, setEmail] = useState(() => localStorage.getItem('email') || '');

  const guardarDatos = (e) => {
      e.preventDefault();
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('email', email);
      alert('Datos guardados en localStorage');
      console.log(nombre, email);
  };

  const limpiarDatos = () => {
      localStorage.removeItem('nombre');
      localStorage.removeItem('email');
      setNombre('');
      setEmail('');
      alert('Datos eliminados de localStorage');
  };

  return (
      <div>
          <h2>Formulario con localStorage</h2>
          <form onSubmit={guardarDatos}>
              <div>
                  <label>Nombre:</label>
                  <input type="text" value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                  />
              </div>
              <br />
              <div>
                  <label>Email: </label>
                  <input type="email" value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <br />
              <button type="submit">Guardar Datos</button> 
              <button type="button" onClick={limpiarDatos}>Limpiar Datos</button>
          </form>
          
      </div>
  );
};

export default LocalStorage;
