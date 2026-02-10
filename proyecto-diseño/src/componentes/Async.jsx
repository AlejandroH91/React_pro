import React, { useState, useEffect } from "react";

const PerrosAsync = () => {
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    const obtenerPerros = async () => {
      try {
        const response = await fetch(
          "https://dogapi.dog/api/v2/breeds?page[number]=2&page[size]=50"
        );

        if (!response.ok) {
          throw new Error("Error en la red");
        }

        const data = await response.json();

        console.log("Perros recibidos:", data.data);

        setPerros(data.data); // aquí guardamos el array
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    obtenerPerros();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Lista de Razas</h1>
      <p>
        Hay <b>{perros.length}</b> razas cargadas
      </p>

      <div className="row">
        {perros.map((perro) => (
          <div key={perro.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card p-3 h-100">
              <h5>{perro.attributes.name}</h5>
              <p style={{ fontSize: "0.9rem" }}>
                {perro.attributes.description}
              </p>
              <p>
                Vida media:{" "}
                {perro.attributes.life?.min} -{" "}
                {perro.attributes.life?.max} años
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerrosAsync;
