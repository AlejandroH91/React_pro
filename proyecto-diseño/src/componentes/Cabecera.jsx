import { Link } from "react-router-dom";

function Cabecera() {
  return (
    <header className="bg-success text-white fixed-top">
      <div className="container">
        {/*H1 centrado */}
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1>Mi Aplicación</h1>
          </div>
        </div>

        {/*Enlaces centrados en columnas */}
        <div className="row py-2 justify-content-center">
          <div className="col-6 col-md-2 text-center mb-2 mb-md-0">
            <Link className="text-white text-decoration-none" to="/">Home</Link>
          </div>
          <div className="col-6 col-md-2 text-center mb-2 mb-md-0">
            <Link className="text-white text-decoration-none" to="/about">About</Link>
          </div>
          <div className="col-6 col-md-2 text-center mb-2 mb-md-0">
            <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
          </div>
          <div className="col-6 col-md-2 text-center mb-2 mb-md-0">
            <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
          </div>
          <div className="col-6 col-md-2 text-center mb-2 mb-md-0">
            <Link className="text-white text-decoration-none" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Cabecera;

