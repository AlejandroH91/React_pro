import { Link } from "react-router-dom";

function Ejemplo5() {
  return (
    <div>
      <div className="text-dark p-3 w-100">
        <h2 className="text-center mb-3">SubRouting</h2>
        <nav className="d-flex justify-content-center gap-3">
          <Link className="nav-link px-2" to="/">
            Bienvenida
          </Link>
          <Link className="nav-link px-2" to="/ajax">
            10 Perros con Ajax
          </Link>
          <Link className="nav-link px-2" to="/async">
            Muchos Perros con Async
          </Link>
        </nav>
      </div>

      {/* Contenido principal debajo (ahora en una sola columna) */}
      <div className="flex-grow-1 w-100 p-4">
        <h2>Aquí va el contenido principal</h2>
        <p>La llamada a la API sin imágenes y otros elementos van aquí.</p>
      </div>
    </div>
  );
}

export default Ejemplo5;
