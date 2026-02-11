import { Link } from "react-router-dom";

function Ejemplo5() {
  return (
    <div className="d-flex">

      {/* Sidebar fijo a la izquierda */}
      <div 
        className="bg-primary text-white p-3 vh-100 position-fixed"
        style={{ width: '220px' }}
      >
        <h2 className="text-center mb-4">SubRouting</h2>

        {/* Enlaces uno debajo de otro */}
        <nav className="nav flex-column">
          <Link className="nav-link text-white" to="/">
            Bienvenida
          </Link>
          <Link className="nav-link text-white" to="/ajax">
            10 Perros con Ajax
          </Link>
          <Link className="nav-link text-white" to="/async">
            Muchos Perros con Async
          </Link>
          <Link className="nav-link text-white" to="/local">
            LocalStorage
          </Link>
          <Link className="nav-link text-white" to="/ejemplo5">
            Ejemplo 5
          </Link>
        </nav>
      </div>

      {/* Contenido principal a la derecha del sidebar */}
      <div className="flex-grow-1 ms-auto p-4">
        <h2>Aquí va el contenido principal</h2>
        <p>La llamada a la API sin imágenes y otros elementos van aquí.</p>
      </div>
    </div>
  );
}

export default Ejemplo5;
