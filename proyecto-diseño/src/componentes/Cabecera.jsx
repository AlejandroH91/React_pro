import { Link } from "react-router-dom";
import Reloj from "./Reloj";

function Cabecera() {
  return (
    <header className="bg-success text-white fixed-top">
      <div className="container">

        <div className="row py-3">
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

      
        <div className="row py-2 justify-content-center">
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
    </header>
  );
}

export default Cabecera;