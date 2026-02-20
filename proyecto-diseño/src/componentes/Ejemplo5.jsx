import { NavLink, Outlet } from "react-router-dom";
import { Montar } from "./Montar";
import incrementar from "./Incrementar";

function Ejemplo5() {
  const mensaje = "Menú subrouting";
  return (
    <div className="container">
      <div className="row">
        <aside className="col-12 col-md-3">
          <h2 className="text-center mb-4">{mensaje}</h2>
          <nav className="nav flex-column">
            <NavLink end className="nav-link text-dark" to="incrementar">
              Incrementar
            </NavLink>
            <NavLink className="nav-link text-dark" to="montar">
              Montar Componente
            </NavLink>
            <NavLink className="nav-link text-dark" to="async">
              Muchos Perros con Async
            </NavLink>
          </nav>
        </aside>

        <section className="col-12 col-md-9">
          <div className="p-3">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ejemplo5;
