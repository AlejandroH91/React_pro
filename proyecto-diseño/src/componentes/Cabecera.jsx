import { Link } from "react-router-dom";

function Cabecera() {
  return (
    <header className="bg-success text-white fixed-top">
      <div className="container">

        <div className="row py-3">
          <div className="col-12 text-center">
            <h1>Practica React</h1>
          </div>
        </div>

        {/* Bloque de Enlaces */}
        <div className="row py-2 justify-content-center">
          <div className="col-6 col-md-2 text-center">
            <Link className="text-white text-decoration-none" to="/">
              Bienvenida
            </Link>
          </div>

          <div className="col-6 col-md-2 text-center">
            <Link className="text-white text-decoration-none" to="/ajax">
              10 Perros con Ajax
            </Link>
          </div>

          <div className="col-6 col-md-2 text-center">
            <Link className="text-white text-decoration-none" to="/async">
              Muchos Perros con Async
            </Link>
          </div>

          <div className="col-6 col-md-2 text-center">
            <Link className="text-white text-decoration-none" to="/ejemplo4">
              Ejemplo 4
            </Link>
          </div>

          <div className="col-6 col-md-2 text-center">
            <Link className="text-white text-decoration-none" to="/ejemplo5">
              Ejemplo 5
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Cabecera;