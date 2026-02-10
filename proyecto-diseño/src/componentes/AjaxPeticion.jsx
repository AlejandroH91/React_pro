import React, { useState, useEffect } from "react";

const PerrosList = () => {
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/10")
      .then((response) => {
        if (!response.ok) throw new Error("Error en la red");
        return response.json();
      })
      .then((data) => {
        console.log("Perros recibidos:", data.message);
        setPerros(data.message);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Lista de Perros</h1>
      <p>Probando: Hay <b>{perros.length}</b> perros cargados</p>
      <div className="row">
        {perros.map((url, index) => (
          <div key={index} className="col-12 col-md-4 mb-3">
            <div className="card">
              <img
                src={url}
                alt={`Perro ${index + 1}`}
                className="card-img-top"
                style={{ maxHeight: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerrosList;
