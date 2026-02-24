import { Link } from "react-router-dom";
import Reloj from "./Reloj";

function Cabecera() {
  return (
    <header className="bg-success text-white fixed-top">
      <div className="container navbar navbar-dark navbar-expand-md d-block">

        <div className="row py-3 align-items-center">
          <div className="col-12 d-md-none text-center mb-3">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavegacion" aria-controls="menuNavegacion" aria-expanded="false" aria-label="Navegación">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="d-none d-md-block col-12 col-md-4 text-start">
            <h1>AHR</h1>
          </div>
          <div className="col-12 col-md-4 text-center">
            <h1>Practica React</h1>
          </div>
          <div className="col-12 col-md-4 text-end">
            <h1>
              <Reloj />
            </h1>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="menuNavegacion">
          <div className="row py-2 justify-content-center w-100">
            <div className="col-6 col-md-2 text-center">
              <Link className="text-white text-decoration-none" to="/">
               <h3>Bienvenida</h3> 
              </Link>
            </div>

            <div className="col-6 col-md-2 text-center">
              <Link className="text-white text-decoration-none" to="/ajax">
                 <h3>Perros API</h3>
              </Link>
            </div>

            <div className="col-6 col-md-2 text-center">
              <Link className="text-white text-decoration-none" to="/local">
                 <h3>LocalStorage</h3>
              </Link>
            </div>

            <div className="col-6 col-md-2 text-center">
              <Link className="text-white text-decoration-none" to="/ejemplo5">
                <h3>Subrouting</h3>
              </Link>
            </div>
          </div>
          
        </div>

      </div>
</header>
  );
}

export default Cabecera;