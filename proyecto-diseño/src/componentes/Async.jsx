import React, { useState, useEffect } from "react";

const PerrosList = () => {
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    // Definimos la función async dentro de useEffect
    const fetchPerros = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
        if (!response.ok) throw new Error("Error en la red");
        const data = await response.json();
        setPerros(data.message); // data.message es un array de URLs
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchPerros();
  }, []); // [] para que solo se ejecute una vez

  return (
    <div className="container mt-5">
      <h1>Lista de Perros</h1>
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