import { useState } from "react";
function LocalStorage() {
  const [nombre, setNombre] = useState(() => localStorage.getItem("nombre") || "",);
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "");

  const guardarDatos = (e) => {
    e.preventDefault();
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("email", email);
    alert("Datos guardados en localStorage");
    console.log(nombre, email);
  };

  const limpiarDatos = () => {
    localStorage.removeItem("nombre");
    localStorage.removeItem("email");
    setNombre("");
    setEmail("");
    alert("Datos eliminados de localStorage");
  };

  const borrarPorNombre = () => {
    const nombreGuardado = localStorage.getItem("nombre");

    if (!nombreGuardado) {
      return window.alert("No hay usuarios guardados");
    }

    if (nombreGuardado !== nombre) {
      return window.alert("Ese nombre no coincide con el usuario guardado");
    }

    localStorage.removeItem("nombre");
    localStorage.removeItem("email");
    setNombre("");
    setEmail("");

    alert("Los datos de " + nombre + " han sido eliminados de localStorage");
  };

  return (
    <div className="mt-5">
      <h2>Formulario con localStorage</h2>
      <form onSubmit={guardarDatos}>
        <div>
          <label className="">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="ms-3">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Guardar Datos</button>
        <button type="button" onClick={limpiarDatos}>
          Limpiar Datos
        </button>
        <button type="button" onClick={borrarPorNombre}>
          Borrar usuario
        </button>
      </form>
    </div>
  );
}

export default LocalStorage;
